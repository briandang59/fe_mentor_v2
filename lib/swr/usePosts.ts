import { useApi } from '@/lib/useApi';
import { fetchData } from '@/lib/fetcher';
import { BaseResponse } from '@/types/responses/base';
import qs from 'qs';
import { urls } from '@/utils/constants/urls';
import { PostResponseType } from '@/types/responses/post';

interface params {
    search?: string;
    page?: number;
    limit?: number;
    'populate[tags]'?: boolean;
}
export function usePosts(params: params) {
    const query = qs.stringify(params, { skipNulls: true });
    const key = `/${urls.posts}${query ? `?${query}` : ''}`;

    return useApi<BaseResponse<PostResponseType[]>>(key, {
        requireAuth: true,
        fetcher: () => fetchData(key, { requireAuth: true }),
    });
}
