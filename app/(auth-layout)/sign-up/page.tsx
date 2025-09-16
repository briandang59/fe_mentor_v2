import { images } from '@/assets/images';
import BaseWrapper from '@/components/common/BaseWrapper';
import SignUpForm from '@/components/forms/SignupForm';
import Image from 'next/image';
import Link from 'next/link';

function SignUp() {
    return (
        <BaseWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2rem] h-screen items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-[2rem] p-[2rem] rounded-[1rem] h-[50rem] shadow-sm">
                    <h1 className="text-center text-[2.4rem] md:text-[3.2rem] font-bold text-primary">
                        Đăng ký hệ thống mentors
                    </h1>
                    <div className="flex flex-col gap-[2rem] md:min-w-[400px]">
                        <SignUpForm />
                        <p className="text-center text-[1.4rem] mt-[1rem]">
                            Đã có tài khoản?{' '}
                            <Link href={`/`} className="text-primary">
                                Đăng nhập ngay
                            </Link>
                        </p>
                    </div>
                </div>
                <div>
                    <Image
                        src={images.thumbnailLogin}
                        width={1000}
                        height={1000}
                        alt="logo-thumb"
                        className="w-full h-[50rem] object-cover rounded-[1rem] lg:block hidden"
                    />
                </div>
            </div>
        </BaseWrapper>
    );
}

export default SignUp;
