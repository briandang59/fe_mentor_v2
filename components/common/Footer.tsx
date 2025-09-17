'use client';
import Link from 'next/link';
import { Github, Facebook, Twitter, Linkedin } from 'lucide-react';
import { usePages } from '@/utils/constants/page';
import { useTranslations } from 'next-intl';

function Footer() {
    const t = useTranslations();
    const pages = usePages();
    return (
        <footer className="text-[var(--color-foreground)] border-t border-t-border dark:border-transparent bg-footer-bg">
            <div className="max-w-[144rem] mx-auto px-4 py-8 grid md:grid-cols-3 gap-8">
                <div className="flex flex-col gap-4">
                    <h2 className="text-[1.8rem] font-bold text-primary">Mentor Hub</h2>
                    <p className="text-[1.4rem] opacity-80 text-justify md:max-w-[30rem]">
                        {t('footer.description1')}
                    </p>
                    <p className="text-[1.4rem] opacity-80 text-justify md:max-w-[30rem]">
                        {t('footer.description2')}
                    </p>
                </div>

                <div>
                    <h3 className="text-[1.6rem] font-semibold mb-3">{t('footer.links')}</h3>
                    <ul className="flex flex-col gap-2 text-[1.4rem]">
                        {pages.map((item, index) => (
                            <li key={index}>
                                <Link href={item.link}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-[1.6rem] font-semibold mb-3">{t('footer.contact')}</h3>
                    <div className="flex items-center gap-4">
                        <Link
                            href="https://github.com"
                            target="_blank"
                            className="hover:text-primary transition"
                        >
                            <Github />
                        </Link>
                        <Link
                            href="https://facebook.com"
                            target="_blank"
                            className="hover:text-primary transition"
                        >
                            <Facebook />
                        </Link>
                        <Link
                            href="https://twitter.com"
                            target="_blank"
                            className="hover:text-primary transition"
                        >
                            <Twitter />
                        </Link>
                        <Link
                            href="https://linkedin.com"
                            target="_blank"
                            className="hover:text-primary transition"
                        >
                            <Linkedin />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="border-t border-[var(--color-border)] py-4 text-center text-[1.2rem] opacity-70">
                © {new Date().getFullYear()} Mentors hub. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
