import { urls } from '@/utils/constants/urls';
import { fetchClient } from './fetcher.client';
import { fetchServer } from './fetcher.server';
import { LoginRequestType, RegisterRequestType } from '@/types/requests/auth';
import { BaseResponse } from '@/types/responses/base';
import { LoginResponse } from '@/types/responses/auth';
import { Profile } from '@/types/responses/profile';

export const APIS = {
    health: {
        client: () => fetchClient(`/${urls.health}`, { requireAuth: false }),
        server: () => fetchServer(`/${urls.health}`, { requireAuth: false }),
    },

    auth: {
        register: (data: RegisterRequestType) =>
            fetchClient(`/${urls.register}`, {
                method: 'POST',
                body: JSON.stringify(data),
                requireAuth: false,
            }),

        login: (data: LoginRequestType) =>
            fetchClient<BaseResponse<LoginResponse>>(`/${urls.login}`, {
                method: 'POST',
                body: JSON.stringify(data),
                requireAuth: false,
            }),

        verify_email: (token: string) =>
            fetchClient(`/${urls.verify_email}?token=${token}`, { requireAuth: false }),
    },

    tag: {
        client: {
            getAlls: () => fetchClient(`/${urls.tags}`, { requireAuth: true }),
        },
        server: { getAlls: () => fetchServer(`/${urls.tags}`, { requireAuth: true }) },
    },

    profile: {
        client: { getMe: () => fetchClient(`/${urls.profiles}/${urls.me}`, { requireAuth: true }) },
        server: {
            getMe: () =>
                fetchServer<BaseResponse<Profile>>(`/${urls.profiles}/${urls.me}`, {
                    requireAuth: true,
                }),
            getByUserName: (usn:string) =>      fetchServer<BaseResponse<Profile>>(`/${urls.profiles}/${urls.username}/${usn}`, {
                    requireAuth: false,
                }),
        },
    },
};
