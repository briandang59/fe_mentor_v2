'use client';

import { fetchData } from '@/lib/fetcher';
import { SWRConfig } from 'swr';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <SWRConfig
            value={{
                fetcher: (url) => fetchData(url, { requireAuth: true }),
                dedupingInterval: 2000,
                revalidateOnFocus: true,
                shouldRetryOnError: false,
            }}
        >
            {children}
        </SWRConfig>
    );
}
