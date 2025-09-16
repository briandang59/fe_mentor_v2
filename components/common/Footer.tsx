import Link from 'next/link';
import { Github, Facebook, Twitter, Linkedin } from 'lucide-react';

function Footer() {
    return (
        <footer className="text-[var(--color-foreground)] border-t border-t-border">
            <div className="max-w-[144rem] mx-auto px-4 py-8 grid md:grid-cols-3 gap-8">
                <div className="flex flex-col gap-4">
                    <h2 className="text-[1.8rem] font-bold text-primary">Mentor Hub</h2>
                    <p className="text-[1.4rem] opacity-80">
                        Một trang web nơi các chuyên gia Công nghệ thông tin có thể tìm thấy người
                        cố vấn
                    </p>
                    <p className="text-[1.4rem] opacity-80">
                        Mục tiêu của chúng tôi là cung cấp cho những người được cố vấn cơ hội phát
                        triển và học hỏi từ những cá nhân dày dạn kinh nghiệm, thúc đẩy sự phát
                        triển cả về chuyên môn và cá nhân của họ. trong lĩnh vực thực hiện tiềm
                        năng.
                    </p>
                </div>

                <div>
                    <h3 className="text-[1.6rem] font-semibold mb-3">Liên kết</h3>
                    <ul className="flex flex-col gap-2 text-[1.4rem]">
                        <li>
                            <Link href="/">Trang chủ</Link>
                        </li>
                        <li>
                            <Link href="/about">Giới thiệu</Link>
                        </li>
                        <li>
                            <Link href="/posts">Bài viết</Link>
                        </li>
                        <li>
                            <Link href="/contact">Liên hệ</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-[1.6rem] font-semibold mb-3">Kết nối</h3>
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
