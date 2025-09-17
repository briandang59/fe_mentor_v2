'use client';

import useSWR, { SWRConfiguration } from 'swr';
import { fetchData } from '../fetcher';

export function useApi<T = any>(
    key: string | null,
    options?: SWRConfiguration & { requireAuth?: boolean },
) {
    return useSWR<T>(
        key,
        key ? (url) => fetchData<T>(url, { requireAuth: options?.requireAuth }) : null,
        {
            ...options,
        },
    );
}
