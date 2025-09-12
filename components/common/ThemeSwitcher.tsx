'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDark(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (dark) {
            setDark(false);
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        } else {
            setDark(true);
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="px-3 py-2 bg-foreground text-background hover:opacity-80 transition-all cursor-pointer"
        >
            {dark ? <Sun /> : <Moon />}
        </button>
    );
}
