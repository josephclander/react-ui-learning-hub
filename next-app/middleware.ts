import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const blockedAgents = [
  "gptbot",
  "oai-searchbot",
  "claudebot",
  "perplexity",
];

export function middleware(req: NextRequest) {
  const ua = (req.headers.get("user-agent") || "").toLowerCase();

  if (blockedAgents.some(a => ua.includes(a))) {
    return new NextResponse("Blocked", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};