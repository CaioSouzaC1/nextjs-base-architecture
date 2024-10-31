import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest) {
  const protectedRoutes = [/^\/dashboard(.*)$/];

  const token = await getToken({ req, secret });

  if (protectedRoutes.some((route) => route.test(req.nextUrl.pathname))) {
    if (!token) return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard(.*)"],
};
