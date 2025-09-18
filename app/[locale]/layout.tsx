// 📂 app/[locale]/layout.tsx
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale, getMessages, getTranslations } from 'next-intl/server';
import { clsx } from 'clsx';
import { Inter } from 'next/font/google';
import { routing } from '@/i18n/routing';
import '@/app/globals.css';
import { Providers } from '@/components/common/Providers';
import ToastProvider from '@/components/common/ToastProvider';
import type { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

interface RootLocaleLayoutProps {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Omit<RootLocaleLayoutProps, 'children'>) {
    const { locale } = await params;
    const t = await getTranslations({ locale });

    return {
        title: t('title'),
        description: t('description', { default: 'Mentors hub with i18n' }),
    };
}

export default async function RootLocaleLayout({ children, params }: RootLocaleLayoutProps) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) notFound();

    setRequestLocale(locale);
    const messages = await getMessages({ locale });

    return (
        <html className="h-full" lang={locale} suppressHydrationWarning>
            <body className={clsx(inter.className, 'flex h-full flex-col')}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Providers>
                        {children}
                        <ToastProvider />
                    </Providers>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
