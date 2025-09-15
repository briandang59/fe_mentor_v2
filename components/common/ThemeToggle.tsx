'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Segmented } from 'antd';
import { Sun, Moon, Monitor } from 'lucide-react';

const options = [
    {
        label: (
            <div className="flex items-center justify-center">
                <Sun size={18} />
            </div>
        ),
        value: 'light',
    },
    {
        label: (
            <div className="flex items-center justify-center">
                <Moon size={18} />
            </div>
        ),
        value: 'dark',
    },
    {
        label: (
            <div className="flex items-center justify-center">
                <Monitor size={18} />
            </div>
        ),
        value: 'system',
    },
];

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <Segmented
            options={options}
            value={theme}
            onChange={(val) => setTheme(val as string)}
            className="bg-background/60 backdrop-blur-md"
        />
    );
}
