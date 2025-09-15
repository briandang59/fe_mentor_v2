'use client';
import { Form, Button } from 'antd';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormValues, loginSchema } from '@/utils/schemas/login';
import { FormInput } from '../formsComponent';
import Link from 'next/link';

function LoginForm() {
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
        console.log('✅ Dữ liệu hợp lệ:', data);
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
                <Link href={`/`} className="!text-primary">
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
