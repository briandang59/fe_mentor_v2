'use client';

import { usePages } from '@/utils/constants/page';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';
import { images } from '@/assets/images';
import { ThemeToggle } from './ThemeToggle';
import { Bell, List } from 'lucide-react';
import { Badge, Button, Drawer, Popover } from 'antd';
import { useState, useCallback, useEffect, useRef } from 'react';
import { paths } from '@/utils/constants/paths';
import { useTranslations } from 'next-intl';
import { LanguageToggle } from './LanguageToggle';
import { useAuthStore } from '@/stores/authStore';
import UserUI from './UserUI';

function Header() {
    const router = useRouter();
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const lastScrollY = useRef(0);
    const pages = usePages();

    const showDrawer = useCallback(() => setOpen(true), []);
    const onClose = useCallback(() => setOpen(false), []);
    const t = useTranslations();
    const { token, user, clearAuth, loadFromCookies } = useAuthStore();

    useEffect(() => {
        loadFromCookies();
    }, [loadFromCookies]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
                setHidden(true);
            } else {
                setHidden(false);
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const NavMenu = ({ isVertical = false }: { isVertical?: boolean }) => (
        <ul className={clsx('gap-4', isVertical ? 'flex flex-col' : 'flex items-center')}>
            {pages.map((page) => {
                const isActived = pathname === page.link;
                return (
                    <li
                        key={page.link}
                        className={clsx(
                            'px-2 py-1 rounded transition-colors text-[1.4rem] uppercase hover:text-primary duration-300 text-nowrap',
                            isActived ? 'font-semibold text-primary' : 'opacity-50',
                        )}
                    >
                        <Link href={page.link} className="!text-inherit">
                            {page.label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );

    return (
        <header
            className={clsx(
                `min-h-[6rem] py-[1rem] fixed top-0 left-0 right-0 z-50
                bg-[var(--color-header-bg)] text-[var(--color-foreground)]
                shadow-md backdrop-blur-sm bg-opacity-70 dark:bg-opacity-50
                px-[1rem] transition-transform duration-300`,
                hidden ? '-translate-y-full' : 'translate-y-0',
            )}
        >
            <div className="max-w-[144rem] flex items-center justify-between mx-auto">
                <div className="flex items-center gap-4">
                    <Image
                        src={images.logo}
                        alt="logo"
                        width={50}
                        height={50}
                        className="h-[5rem] w-[5rem] rounded-full object-cover"
                    />
                    <aside className="ml-[2rem] lg:block hidden">
                        <NavMenu />
                    </aside>
                </div>

                <div className="items-center gap-[1rem] lg:flex hidden">
                    <button className="cursor-pointer flex items-center justify-center mr-[1rem]">
                        <Badge count={5} size="small">
                            <Bell className="w-8 h-8" />
                        </Badge>
                    </button>

                    {token && user ? (
                        <Popover
                            content={
                                <div className="flex flex-col gap-[1rem]">
                                    <ThemeToggle />
                                    <LanguageToggle />
                                    <Button
                                        onClick={() => {
                                            clearAuth();
                                            router.push(paths.login);
                                        }}
                                        danger
                                        className="text-left text-red-500 hover:opacity-80 !font-medium"
                                    >
                                        Đăng xuất
                                    </Button>
                                </div>
                            }
                            trigger="click"
                            placement="bottomRight"
                            overlayStyle={{ zIndex: 9999 }}
                        >
                            <span className="inline-flex cursor-pointer">
                                <UserUI type="header" user={user} />
                            </span>
                        </Popover>
                    ) : (
                        <>
                            <Link
                                href={paths.login}
                                className="p-[1rem] rounded-[1rem] text-[1.4rem] cursor-pointer hover:opacity-90 duration-300 text-primary font-semibold border border-border text-nowrap"
                            >
                                {t('header.login')}
                            </Link>
                            <Link
                                href={paths.signup}
                                className="p-[1rem] rounded-[1rem] text-[1.4rem] cursor-pointer hover:opacity-90 duration-300 text-white bg-primary font-semibold text-nowrap"
                            >
                                {t('header.signup')}
                            </Link>
                        </>
                    )}
                </div>

                <div className="lg:hidden block">
                    <button aria-label="Open Menu" className="cursor-pointer" onClick={showDrawer}>
                        <List />
                    </button>
                </div>

                <Drawer title={''} onClose={onClose} open={open}>
                    <aside className="mb-[2rem]">
                        <NavMenu isVertical />
                    </aside>

                    <div className="flex flex-col gap-[1rem] mt-[2rem]">
                        {token && user ? (
                            <>
                                <div className="flex items-center gap-3 mb-3">
                                    <UserUI type="header" user={user} />
                                </div>

                                <Button
                                    danger
                                    block
                                    className="text-left !font-medium"
                                    onClick={() => {
                                        clearAuth();
                                        onClose();
                                        router.push(paths.login);
                                    }}
                                >
                                    Đăng xuất
                                </Button>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={() => {
                                        onClose();
                                        router.push(paths.login);
                                    }}
                                    className="block text-center p-[1rem] rounded-[0.8rem] text-[1.4rem] border border-border font-semibold hover:opacity-90 transition text-primary"
                                >
                                    {t('header.login')}
                                </button>

                                <button
                                    onClick={() => {
                                        onClose();
                                        router.push(paths.signup);
                                    }}
                                    className="block text-center p-[1rem] rounded-[0.8rem] text-[1.4rem] bg-primary text-white font-semibold hover:opacity-90 transition"
                                >
                                    {t('header.signup')}
                                </button>
                            </>
                        )}
                    </div>

                    <div className="mt-[2rem] flex flex-col gap-[1rem]">
                        <ThemeToggle />
                        <LanguageToggle />
                    </div>
                </Drawer>
            </div>
        </header>
    );
}

export default Header;
