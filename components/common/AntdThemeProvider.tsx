'use client';

import { ConfigProvider, theme as antdTheme } from 'antd';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function AntdThemeProvider({ children }: { children: React.ReactNode }) {
    const { theme, systemTheme } = useTheme();
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const currentTheme = theme === 'system' ? systemTheme : theme;
        setIsDark(currentTheme === 'dark');
    }, [theme, systemTheme]);

    return (
        <ConfigProvider
            theme={{
                algorithm: isDark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
                token: {
                    colorPrimary: isDark ? '#dcca87' : '#006d3b',
                    borderRadius: 8,
                },
            }}
        >
            {children}
        </ConfigProvider>
    );
}
