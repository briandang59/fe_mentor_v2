'use client';

import { pages } from '@/utils/constants/page';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';
import { images } from '@/assets/images';
import { ThemeToggle } from './ThemeToggle';
import { Bell, CirclePoundSterling, List } from 'lucide-react';
import { Badge, Button, Drawer } from 'antd';
import { useState, useCallback } from 'react';
import { paths } from '@/utils/constants/paths';

function Header() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const showDrawer = useCallback(() => setOpen(true), []);
    const onClose = useCallback(() => setOpen(false), []);

    const NavMenu = ({ isVertical = false }: { isVertical?: boolean }) => (
        <ul className={clsx('gap-4', isVertical ? 'flex flex-col' : 'flex items-center')}>
            {pages.map((page) => {
                const isActived = pathname === page.link;
                return (
                    <li
                        key={page.link}
                        className={clsx(
                            'px-2 py-1 rounded transition-colors text-[1.4rem] uppercase hover:text-primary duration-300',
                            isActived ? 'font-semibold text-primary' : 'opacity-50',
                        )}
                    >
                        <Link href={page.link} className="!text-primary">
                            {page.label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );

    return (
        <header
            className="
        min-h-[6rem] py-[1rem] fixed top-0 left-0 right-0 z-50
        bg-[var(--color-header-bg)] text-[var(--color-foreground)]
        shadow-md backdrop-blur-sm bg-opacity-70 dark:bg-opacity-50
        px-[1rem]
      "
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
                    <aside className="ml-[2rem] md:block hidden">
                        <NavMenu />
                    </aside>
                </div>

                <div className="items-center gap-[2rem] md:flex hidden">
                    <div className="flex items-center gap-[1rem]">
                        <CirclePoundSterling className="w-8 h-8" />
                        <span className="text-[1.4rem]">9,999</span>
                    </div>
                    <button className="cursor-pointer">
                        <Badge count={5} size="small">
                            <Bell className="w-8 h-8" />
                        </Badge>
                    </button>
                    <ThemeToggle />
                    <Link
                        href={`/${paths.login}`}
                        className="p-[1rem] rounded-[1rem] text-[1.4rem] cursor-pointer hover:opacity-90 duration-300 text-primary font-semibold border border-border"
                    >
                        Bắt đầu
                    </Link>
                </div>

                <div className="md:hidden block">
                    <Button aria-label="Open Menu" onClick={showDrawer}>
                        <List />
                    </Button>
                </div>
                <Drawer
                    title={<span className="text-[1.6rem] font-semibold">Menu</span>}
                    onClose={onClose}
                    open={open}
                >
                    <aside className="mb-[2rem]">
                        <NavMenu isVertical />
                    </aside>
                    <ThemeToggle />
                </Drawer>
            </div>
        </header>
    );
}

export default Header;
