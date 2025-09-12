'use client';
import { pages } from '@/utils/constants/page';
import ThemeSwitcher from './ThemeSwitcher';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';
import { images } from '@/assets/images';
import { Button } from 'antd';

function Header() {
    const pathname = usePathname();

    return (
        <header className="h-[80px] p-[20px] fixed top-0 left-0 right-0 flex items-center justify-between bg-foreground">
            <div className="flex items-center gap-4">
                <Image
                    src={images.logo}
                    alt="logo"
                    width={1000}
                    height={1000}
                    className="h-[60px] w-[60px] rounded-md object-cover"
                />
                <aside>
                    <ul className="flex items-center gap-[20px]">
                        {pages.map((page, index) => {
                            const isActived = pathname === page.link;
                            return (
                                <li
                                    key={index}
                                    className={clsx(
                                        'px-2 py-1 rounded transition-colors',
                                        isActived ? 'text-primary font-bold' : 'text-primary',
                                    )}
                                >
                                    <Link href={page.link}>{page.label}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </aside>
            </div>
            <div className="flex items-center gap-4">
                <ThemeSwitcher />
                <Button>Bắt đầu</Button>
            </div>
        </header>
    );
}

export default Header;
