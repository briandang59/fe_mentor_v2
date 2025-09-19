// lib/fetcher.server.ts
'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

type FetchOptions = RequestInit & { requireAuth?: boolean };

export async function fetchServer<T = unknown>(
    url: string,
    options: FetchOptions = {},
): Promise<T> {
    const cookieStore = await cookies();
    const token = options.requireAuth ? cookieStore.get('token')?.value : undefined;

    const baseURL = process.env.NEXT_PUBLIC_API_URL || '';
    const fullUrl = url.startsWith('http') ? url : `${baseURL}${url}`;

    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        ...(options.headers as Record<string, string>),
    };

    if (token) headers['Authorization'] = `Bearer ${token}`;

    const res = await fetch(fullUrl, {
        ...options,
        headers,
        cache: options.cache ?? 'no-store',
    });

    if (!res.ok) {
        if (res.status === 401 && options.requireAuth) {
            redirect('/login'); // Assuming '/login' is the correct path
        }
        throw new Error(`Request failed with status ${res.status}`);
    }

    return (await res.json()) as T;
}
