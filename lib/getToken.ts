import { cookies } from 'next/headers';

export async function getTokenServer() {
    try {
        const cookieStore = await cookies();
        return cookieStore.get('token')?.value;
    } catch {
        return undefined;
    }
}

export function getTokenClient() {
    if (typeof document === 'undefined') return undefined;
    const match = document.cookie.match(/(?:^|; )token=([^;]*)/);
    return match ? decodeURIComponent(match[1]) : localStorage.getItem('token') || undefined;
}
