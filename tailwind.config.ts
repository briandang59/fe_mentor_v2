import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eff6ff',
                    500: '#3b82f6',
                    900: '#1e3a8a',
                },
                // Thêm custom colors khác
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            // Custom spacing, breakpoints, etc.
        },
    },
    plugins: [],
    darkMode: 'class',
};
export default config;
