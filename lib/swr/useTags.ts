import { useApi } from '@/lib/useApi';
import { fetchData } from '@/lib/fetcher';
import { BaseResponse } from '@/types/responses/base';
import { TagResponseType } from '@/types/responses/tag';
import qs from 'qs';

export function useTags(params: { search?: string; page?: number; limit?: number }) {
    const query = qs.stringify(params, { skipNulls: true });
    const key = `/tags${query ? `?${query}` : ''}`;

    return useApi<BaseResponse<TagResponseType[]>>(key, {
        requireAuth: true,
        fetcher: () => fetchData(key, { requireAuth: true }),
    });
}
