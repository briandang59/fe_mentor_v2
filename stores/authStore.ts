// stores/authStore.ts
import { create } from 'zustand';
import Cookies from 'js-cookie';

export type User = {
    id: number;
    username: string;
    email: string;
    is_verified: boolean;
    created_at: string;
    updated_at: string;
};

type AuthState = {
    token: string | null;
    user: User | null;
    setAuth: (token: string, user: User) => void;
    clearAuth: () => void;
};

export const useAuthStore = create<AuthState>((set) => {
    const token = Cookies.get('token') ?? null;
    const userStr = Cookies.get('user');
    const user = userStr ? (JSON.parse(userStr) as User) : null;

    return {
        token,
        user,
        setAuth: (token, user) => {
            Cookies.set('token', token, { path: '/' });
            Cookies.set('user', JSON.stringify(user), { path: '/' });
            set({ token, user });
        },
        clearAuth: () => {
            Cookies.remove('token');
            Cookies.remove('user');
            set({ token: null, user: null });
        },
    };
});
