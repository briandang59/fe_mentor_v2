'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Segmented } from 'antd';
import { useLocale } from 'next-intl';

const options = [
    { label: '🇺🇸 EN', value: 'en' },
    { label: '🇻🇳 VI', value: 'vi' },
    { label: '🇨🇳 中文', value: 'zh' },
];

export function LanguageToggle() {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();

    function changeLocale(newLocale: string) {
        const segments = pathname.split('/');
        segments[1] = newLocale;
        router.replace(segments.join('/'), { scroll: false });
    }

    return (
        <Segmented
            options={options}
            value={locale}
            onChange={(val) => changeLocale(val as string)}
            className="bg-background/60 backdrop-blur-md"
        />
    );
}
