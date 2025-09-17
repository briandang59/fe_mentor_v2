// 📂 app/[locale]/(auth-layout)/layout.tsx
import { LanguageToggle } from '@/components/common/LanguageToggle';
import { ThemeToggle } from '@/components/common/ThemeToggle';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="fixed top-0 flex items-center justify-end left-0 right-0 p-[2rem] gap-[2rem]">
                <LanguageToggle />
                <ThemeToggle />
            </div>

            <main className="bg-content-bg min-h-screen flex items-center justify-center">
                {children}
            </main>
        </>
    );
}
