import { NextRequest, NextResponse } from 'next/server';
import { paths } from './utils/constants/paths';

const AUTH_PAGES = ['/log-in', '/sign-up', '/verify-email'];
const REDIRECT_AFTER_LOGIN = paths.home || '/dashboard';

export function middleware(req: NextRequest) {
    const token = req.cookies.get('token')?.value;
    const pathname = req.nextUrl.pathname;

    if (token && AUTH_PAGES.includes(pathname)) {
        const redirectUrl = new URL(REDIRECT_AFTER_LOGIN, req.url);
        return NextResponse.redirect(redirectUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/log-in', '/sign-up', '/verify-email'],
};
