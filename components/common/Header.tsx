'use client';
import { pages } from '@/utils/constants/page';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';
import { images } from '@/assets/images';
import { ThemeToggle } from './ThemeToggle';

function Header() {
    const pathname = usePathname();

    return (
        <header className="h-[80px] p-[20px] fixed top-0 left-0 right-0 bg-foreground">
            <div className="container flex items-center justify-between mx-auto">
                <div className="flex items-center gap-4">
                    <Image
                        src={images.logo}
                        alt="logo"
                        width={500}
                        height={500}
                        className="h-[50px] w-[50px] rounded-full object-cover"
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
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}

export default Header;
