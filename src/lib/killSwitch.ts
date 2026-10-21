/**
 * Site-wide kill switch, stored in Upstash Redis over its REST API so it works
 * from both the edge middleware and server actions without extra packages.
 *
 * Env (either naming works — Vercel's Upstash integration sets the KV_* pair):
 *   KV_REST_API_URL / KV_REST_API_TOKEN
 *   UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN
 *
 * If Redis is not configured the site is treated as online.
 */

const FLAG_KEY = "squareit:site-blackout";

function redisConfig() {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url: url.replace(/\/$/, ""), token } : null;
}

export function isKillSwitchConfigured() {
  return redisConfig() !== null;
}

/** Runs one Redis command, e.g. redis(["SET", "key", "1"]). */
export async function redis(command: (string | number)[]): Promise<unknown> {
  const config = redisConfig();
  if (!config) throw new Error("Kill switch storage is not configured.");

  const response = await fetch(config.url, {
    method: "POST",
    headers: { Authorization: `Bearer ${config.token}`, "Content-Type": "application/json" },
    body: JSON.stringify(command),
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`Redis request failed (${response.status}).`);

  const data = (await response.json()) as { result?: unknown };
  return data.result ?? null;
}

export async function isBlackedOut(): Promise<boolean> {
  if (!isKillSwitchConfigured()) return false;
  return (await redis(["GET", FLAG_KEY])) === "1";
}

export async function setBlackout(on: boolean) {
  await (on ? redis(["SET", FLAG_KEY, "1"]) : redis(["DEL", FLAG_KEY]));
}
