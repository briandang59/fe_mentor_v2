import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { paths } from './utils/constants/paths';

const i18nMiddleware = createMiddleware(routing);

const AUTH_PAGES = ['/log-in', '/sign-up', '/verify-email'];
const REDIRECT_AFTER_LOGIN = paths.home || '/';

export function middleware(req: NextRequest) {
    const i18nResponse = i18nMiddleware(req);
    if (i18nResponse) {
        return i18nResponse;
    }

    const token = req.cookies.get('token')?.value;
    const pathname = req.nextUrl.pathname;

    if (token && AUTH_PAGES.includes(pathname)) {
        const redirectUrl = new URL(REDIRECT_AFTER_LOGIN, req.url);
        return NextResponse.redirect(redirectUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)', '/log-in', '/sign-up', '/verify-email'],
};
