'use client';

import useSWR, { SWRConfiguration, SWRResponse } from 'swr';
import { fetchData } from '../fetcher';

export function useApi<TResponse = unknown>(
    key: string | null,
    options?: SWRConfiguration<TResponse> & { requireAuth?: boolean },
): SWRResponse<TResponse> {
    return useSWR<TResponse>(
        key,
        key ? (url) => fetchData<TResponse>(url, { requireAuth: options?.requireAuth }) : null,
        options,
    );
}
