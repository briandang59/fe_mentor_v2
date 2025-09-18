'use client';

import { Form, Button } from 'antd';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormValues, loginSchema } from '@/utils/schemas/login';
import { FormInput } from '../formsComponent';
import Link from 'next/link';
import { paths } from '@/utils/constants/paths';
import { APIS } from '@/lib/apis';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/authStore';

function LoginForm() {
    const router = useRouter();
    const { setAuth } = useAuthStore.getState();
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormValues>({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = async (data: LoginFormValues) => {
        await toast.promise(APIS.auth.login(data), {
            loading: 'Đang đăng nhập...',
            success: (res) => {
                if (res.data?.token) {
                    setAuth(res.data.token, res.data.user);
                    router.push(paths.home);
                }

                return 'Đăng nhập thành công ';
            },
            error: (err) => {
                return err instanceof Error ? `Lỗi: ${err.message}` : 'Đăng nhập thất bại!';
            },
        });
    };

    return (
        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
            <FormInput
                control={control}
                name="email"
                label="Email"
                placeholder="Nhập email"
                size="large"
                error={errors.email?.message}
            />
            <FormInput
                control={control}
                name="password"
                label="Mật khẩu"
                type="password"
                placeholder="Nhập mật khẩu"
                size="large"
                error={errors.password?.message}
            />
            <div className="flex items-center justify-end mb-[2rem]">
                <Link href={paths.forgot_password} className="!text-primary">
                    Quên mật khẩu?
                </Link>
            </div>

            <Button
                htmlType="submit"
                loading={isSubmitting}
                variant="outlined"
                className="w-full mt-4 !text-primary"
                size="large"
            >
                Đăng nhập
            </Button>
        </Form>
    );
}

export default LoginForm;
