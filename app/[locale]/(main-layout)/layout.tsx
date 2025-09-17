// 📂 app/[locale]/(main-layout)/layout.tsx
import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
    title: 'Mentors System',
    description: 'Main layout pages',
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className="pt-[7rem] bg-content-bg min-h-screen">{children}</main>
            <Footer />
        </>
    );
}
