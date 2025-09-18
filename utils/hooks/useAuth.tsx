'use client';
import { useAuthStore } from '@/stores/authStore';
import { useEffect, useState, useMemo } from 'react';

export function useAuth() {
    const { token, user, setAuth, clearAuth } = useAuthStore();
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    const isAuthenticated = useMemo(() => !!token && !!user, [token, user]);

    return {
        token,
        user,
        isAuthenticated,
        isLoading: !hydrated,
        login: setAuth,
        logout: clearAuth,
    };
}
