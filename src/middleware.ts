import { NextResponse } from "next/server";
import { isBlackedOut } from "@/lib/killSwitch";

// Each edge instance re-reads the flag at most this often.
const CACHE_MS = 5_000;
let cached: { value: boolean; at: number } | null = null;

async function blackoutActive() {
  if (cached && Date.now() - cached.at < CACHE_MS) return cached.value;
  try {
    const value = await isBlackedOut();
    cached = { value, at: Date.now() };
    return value;
  } catch {
    // Storage outage should never take the site down on its own.
    return cached?.value ?? false;
  }
}

const BLACK_PAGE =
  '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title></title><style>html,body{margin:0;height:100%;background:#000}</style></head><body></body></html>';

export async function middleware() {
  if (!(await blackoutActive())) return NextResponse.next();

  return new NextResponse(BLACK_PAGE, {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "Retry-After": "3600",
    },
  });
}

export const config = {
  // Everything except the control panel itself and Next's static internals.
  matcher: ["/((?!deletion|_next/static|_next/image).*)"],
};
