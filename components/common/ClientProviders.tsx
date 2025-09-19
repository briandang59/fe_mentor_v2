'use client';

import { fetchClient } from '@/lib/fetcher.client';
import { SWRConfig } from 'swr';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <SWRConfig
            value={{
                fetcher: (url) => fetchClient(url, { requireAuth: true }),
                dedupingInterval: 2000,
                revalidateOnFocus: true,
                shouldRetryOnError: false,
            }}
        >
            {children}
        </SWRConfig>
    );
}
