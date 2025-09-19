import { useApi } from '@/lib/useApi';
import { BaseResponse } from '@/types/responses/base';
import { TagResponseType } from '@/types/responses/tag';
import qs from 'qs';
import { urls } from '@/utils/constants/urls';
import { fetchClient } from '../fetcher.client';

interface params {
    search?: string;
    page?: number;
    limit?: number;
}
export function useTags(params: params) {
    const query = qs.stringify(params, { skipNulls: true });
    const key = `/${urls.tags}${query ? `?${query}` : ''}`;

    return useApi<BaseResponse<TagResponseType[]>>(key, {
        requireAuth: true,
        fetcher: () => fetchClient(key, { requireAuth: true }),
    });
}
