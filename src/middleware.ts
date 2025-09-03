import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {getHostName } from '@/lib/utils';
import { getUser } from "@/services/user-service";

const basePathUrl = process.env.NEXT_PUBLIC_BASE_PATH_URL;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const allowedDomain = getHostName(basePathUrl);

export async function middleware(request: NextRequest) {
  const normalizedRequestHost =
    getHostName(request.headers.get('x-wf-original-host')) ||
    getHostName(request.headers.get('host'));

  // GATEKEEP
  if (normalizedRequestHost !== allowedDomain) {
    return NextResponse.rewrite(new URL('/404', request.url));
  }

  // UPDATE HEADERS TO SENT FULL PATHNAME
  // * needed in single [name]
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-current-pathname', request.nextUrl.pathname);

  // PROFILE REWRITE
  const { pathname } = request.nextUrl;

  if (pathname.startsWith(`/profile/`)) {
    try {
      const userSlug = request.nextUrl.pathname.split('/').pop();

      if (!userSlug) {
        return NextResponse.next({
          request: {
            headers: requestHeaders,
          },
        });
      }

      const user = await getUser(userSlug);

      if (!user) {
        return NextResponse.rewrite(new URL('/404', request.url));
      }

      let locationSlug = null;
      const referer = request.headers.get('referer');

      // get location from referer if exists
      if (referer && user.locations) {
        const refererUrl = new URL(referer);
        const refererSlug = refererUrl.pathname.split('/')
          .find(part => user.locations.some(loc => loc.slug === part));
        if (refererSlug) {
          locationSlug = refererSlug;
        }
      }

      // get the first location if referer does not have it
      if (!locationSlug && user?.locations?.length > 0) {
        locationSlug = user.locations[0].slug;
      }
      if (!locationSlug) {
        return NextResponse.rewrite(new URL('/404', request.url));
      }

      const newPathname = `/${basePath}/${locationSlug}/profile/${userSlug}`;
      requestHeaders.set('x-rewritten-location-slug', locationSlug);
      return NextResponse.rewrite(new URL(newPathname, request.url), {
        request: {
          headers: requestHeaders,
        },
      });
    } catch (error) {
      console.error('Middleware rewrite error:', error);
      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    }
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    '/',
    '/:path*'
  ],
};