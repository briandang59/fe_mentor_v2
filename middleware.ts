import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { paths } from './utils/constants/paths';

const i18nMiddleware = createMiddleware(routing);

const AUTH_PAGES = ['/log-in', '/sign-up', '/verify-email'];
const REDIRECT_AFTER_LOGIN = paths.home || '/';

export function middleware(req: NextRequest) {
    const token = req.cookies.get('token')?.value;
    const pathname = req.nextUrl.pathname;

    const localePattern = new RegExp(`^/(${routing.locales.join('|')})(?=/|$)`);
    const pathnameWithoutLocale = pathname.replace(localePattern, '') || '/';

    if (token && AUTH_PAGES.includes(pathnameWithoutLocale)) {
        const redirectUrl = new URL(REDIRECT_AFTER_LOGIN, req.url);
        return NextResponse.redirect(redirectUrl);
    }

    return i18nMiddleware(req);
}

export const config = {
    matcher: [
        '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
        '/:locale/log-in',
        '/:locale/sign-up',
        '/:locale/verify-email',
        '/log-in',
        '/sign-up',
        '/verify-email',
    ],
};
