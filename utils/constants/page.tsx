'use client';

import { useTranslations } from 'next-intl';

export function usePages() {
    const t = useTranslations('header');

    return [
        { label: t('home'), link: '/', children: [] },
        { label: t('posts'), link: '/posts', children: [] },
        { label: t('contracts'), link: '/contracts', children: [] },
        { label: t('messages'), link: '/messages', children: [] },
        { label: t('rooms'), link: '/rooms', children: [] },
    ];
}
