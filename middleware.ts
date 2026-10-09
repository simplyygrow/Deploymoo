import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Next.js Middleware for Production Domain Standardization
 *
 * Enforces https://www.deploymo.com as the single canonical production domain.
 * Automatically 301 redirects deploymoo.vercel.app, deploymo.vercel.app, deploymo.com,
 * deploymoo.com, www.deploymoo.com, and any secondary hostname to https://www.deploymo.com.
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''

  // Execute domain redirection only in production builds
  if (process.env.NODE_ENV === 'production') {
    const primaryHost = 'www.deploymo.com'
    const hostname = host.split(':')[0] // Strip port if present

    // If request hostname is not www.deploymo.com, issue a 301 Permanent Redirect
    if (hostname !== primaryHost) {
      const redirectUrl = request.nextUrl.clone()
      redirectUrl.protocol = 'https'
      redirectUrl.host = primaryHost
      redirectUrl.port = ''

      return NextResponse.redirect(redirectUrl, 301)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except static files, images, favicon
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
