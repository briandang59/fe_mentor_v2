import { urls } from '@/utils/constants/urls';
import { fetchData } from './fetcher';
import { LoginRequestType, RegisterRequestType } from '@/types/requests/auth';
import { BaseResponse } from '@/types/responses/base';
import { LoginResponse } from '@/types/responses/auth';

export const APIS = {
    health: () => fetchData(`/${urls.health}`, { requireAuth: false }),

    auth: {
        register: (data: RegisterRequestType) =>
            fetchData(`/${urls.register}`, {
                method: 'POST',
                body: JSON.stringify(data),
                requireAuth: false,
            }),

        login: (data: LoginRequestType) =>
            fetchData<BaseResponse<LoginResponse>>(`/${urls.login}`, {
                method: 'POST',
                body: JSON.stringify(data),
                requireAuth: false,
            }),
        verify_email: (token: string) =>
            fetchData(`/${urls.verify_email}?token=${token}`, { requireAuth: false }),
    },

    tag: {
        getAll: () => fetchData(`/${urls.tags}`, { requireAuth: true }),
    },
};
