import { APIS } from '@/lib/apis';
import { paths } from '@/utils/constants/paths';
import Link from 'next/link';

interface VerifyEmailPageProps {
    searchParams: Promise<{ token?: string }>; // ✅ đổi sang Promise
}

export default async function VerifyEmailPage({ searchParams }: VerifyEmailPageProps) {
    const params = await searchParams; // ✅ phải await
    const token = params.token;
    let status: 'success' | 'error' = 'error';

    if (token) {
        try {
            await APIS.auth.verify_email(token);
            status = 'success';
        } catch (err) {
            console.error('Verify email error:', err);
            status = 'error';
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-[1.6rem] text-center">
            <div className="max-w-[50rem] w-full bg-background shadow-md rounded-2xl p-[3rem] sm:p-[2.4rem]">
                {status === 'success' ? (
                    <div>
                        <h1 className="text-[2.4rem] sm:text-[2rem] font-bold text-primary mb-[1rem]">
                            ✅ Xác minh thành công
                        </h1>
                        <p className="text-[1.6rem] sm:text-[1.4rem] text-foreground mb-[2rem]">
                            Tài khoản của bạn đã được xác minh thành công. Bạn có thể đăng nhập ngay
                            bây giờ.
                        </p>
                        <Link
                            href={`${paths.login}`}
                            className="inline-block px-[2rem] py-[1rem] bg-primary hover:opacity-90 text-background text-[1.6rem] font-medium rounded-lg transition"
                        >
                            Đăng nhập
                        </Link>
                    </div>
                ) : (
                    <div>
                        <h1 className="text-[2.4rem] sm:text-[2rem] font-bold text-red-600 mb-[1rem]">
                            ❌ Xác minh thất bại
                        </h1>
                        <p className="text-[1.6rem] sm:text-[1.4rem] text-gray-600 mb-[2rem]">
                            Liên kết không hợp lệ hoặc đã hết hạn. Vui lòng yêu cầu gửi lại email
                            xác minh hoặc đăng ký tài khoản mới.
                        </p>
                        <Link
                            href={`${paths.signup}`}
                            className="inline-block px-[2rem] py-[1rem] bg-primary hover:opacity-90 text-background text-[1.6rem] font-medium rounded-lg transition"
                        >
                            Đăng ký lại
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
