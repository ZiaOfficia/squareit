"use server";

import { createHash, timingSafeEqual } from "node:crypto";
import { headers } from "next/headers";
import { isBlackedOut, isKillSwitchConfigured, redis, setBlackout } from "@/lib/killSwitch";

export type DeletionState = {
  status: "idle" | "success" | "error";
  message: string;
  /** Current blackout state once the admin has authenticated. */
  blackedOut?: boolean;
};

const MAX_FAILURES = 5;
const LOCKOUT_SECONDS = 15 * 60;

function safeEqual(a: string, b: string) {
  const digest = (value: string) => createHash("sha256").update(value).digest();
  return timingSafeEqual(digest(a), digest(b));
}

async function clientIp() {
  const list = await headers();
  return list.get("x-forwarded-for")?.split(",")[0]?.trim() || list.get("x-real-ip") || "unknown";
}

/**
 * Admin kill switch. Credentials come from ADMIN_USERNAME / ADMIN_PASSWORD;
 * repeated failures from one IP are locked out for 15 minutes.
 */
export async function controlSite(_prev: DeletionState, formData: FormData): Promise<DeletionState> {
  const expectedUser = process.env.ADMIN_USERNAME;
  const expectedPassword = process.env.ADMIN_PASSWORD;

  if (!expectedUser || !expectedPassword || !isKillSwitchConfigured()) {
    return {
      status: "error",
      message: "Control panel is not configured. Set ADMIN_USERNAME, ADMIN_PASSWORD and the Redis env vars.",
    };
  }

  const failKey = `squareit:deletion-fails:${await clientIp()}`;
  const failures = Number((await redis(["GET", failKey])) ?? 0);
  if (failures >= MAX_FAILURES) {
    return { status: "error", message: "Too many failed attempts. Try again in 15 minutes." };
  }

  const username = String(formData.get("username") ?? "");
  const password = String(formData.get("password") ?? "");

  if (!(safeEqual(username, expectedUser) && safeEqual(password, expectedPassword))) {
    await redis(["INCR", failKey]);
    await redis(["EXPIRE", failKey, LOCKOUT_SECONDS]);
    return { status: "error", message: "Invalid username or password." };
  }

  await redis(["DEL", failKey]);

  const intent = String(formData.get("intent") ?? "status");
  if (intent === "off") await setBlackout(true);
  if (intent === "on") await setBlackout(false);

  const blackedOut = await isBlackedOut();
  return {
    status: "success",
    blackedOut,
    message:
      intent === "status"
        ? `Website is currently ${blackedOut ? "OFF (black screen)" : "ONLINE"}.`
        : `Done — website is now ${blackedOut ? "OFF (black screen)" : "ONLINE"}. It may take up to a few seconds everywhere.`,
  };
}
