import { urls } from '@/utils/constants/urls';
import { fetchData } from './fetcher';

export const APIS = {
    health: () => fetchData(`/${urls.health}`, { requireAuth: false }),
};
