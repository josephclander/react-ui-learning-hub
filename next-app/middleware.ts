import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const ua = (req.headers.get("user-agent") || "").toLowerCase();

  if (
    ua.includes("gptbot") ||
    ua.includes("oai-searchbot") ||
    ua.includes("claudebot")
  ) {
    return new NextResponse("Gone", { status: 410 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
