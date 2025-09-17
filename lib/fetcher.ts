// Update in fetcher.ts
import { redirect } from 'next/navigation';
import { getTokenClient } from './getToken.client';

type FetchOptions = RequestInit & { requireAuth?: boolean };

export async function fetchData<TResponse = unknown>(
    url: string,
    options: FetchOptions = {},
): Promise<TResponse> {
    const token = getTokenClient();

    const baseURL = process.env.NEXT_PUBLIC_API_URL || '';
    const fullUrl = url.startsWith('http') ? url : `${baseURL}${url}`;

    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        ...(options.headers as Record<string, string>),
    };

    if (options.requireAuth && token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const res = await fetch(fullUrl, {
        ...options,
        headers,
        credentials: 'include',
        cache: options.cache ?? 'no-store',
    });

    if (!res.ok) {
        let errorMsg = `Request failed with status ${res.status}`;
        try {
            const errorBody = await res.json();
            errorMsg = errorBody.message || errorMsg;
        } catch {}

        if (res.status === 401) {
            const isAuthEndpoint = url.includes('/login') || url.includes('/register');
            if (!isAuthEndpoint) {
                if (typeof window !== 'undefined') {
                    window.location.href = '/log-in';
                } else {
                    redirect('/log-in');
                }
            }
        }

        throw new Error(errorMsg);
    }

    return (await res.json()) as TResponse;
}
