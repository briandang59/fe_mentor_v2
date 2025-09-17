'use client';

import { Toaster } from 'react-hot-toast';

export default function ToastProvider() {
    return (
        <Toaster
            position="top-right"
            toastOptions={{
                duration: 3000,
                style: {
                    background: '#333',
                    color: '#fff',
                    borderRadius: '8px',
                    fontSize: '14px',
                },
                success: {
                    iconTheme: {
                        primary: '#4ade80',
                        secondary: '#fff',
                    },
                },
                error: {
                    style: {
                        background: '#f87171',
                    },
                },
            }}
        />
    );
}
