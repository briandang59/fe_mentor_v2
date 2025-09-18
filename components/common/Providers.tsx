'use client';

import { ThemeProvider } from 'next-themes';
import { AntdThemeProvider } from './AntdThemeProvider';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <AntdThemeProvider>{children}</AntdThemeProvider>
        </ThemeProvider>
    );
}
