'use client';
import { Form, Button } from 'antd';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInput } from '../formsComponent';
import { SignupFormValue, signupSchema } from '@/utils/schemas/signup';
import toast from 'react-hot-toast';
import { APIS } from '@/lib/apis';
import { RegisterRequestType } from '@/types/requests/auth';

function SignUpForm() {
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignupFormValue>({
        resolver: yupResolver(signupSchema),
        defaultValues: {
            email: '',
            username: '',
            password: '',
            re_password: '',
        },
    });

    const onSubmit = async (data: SignupFormValue) => {
        const payload: RegisterRequestType = {
            email: data.email,
            username: data.username,
            password: data.password,
        };

        await toast.promise(APIS.auth.register(payload), {
            loading: 'Đang đăng ký...',
            success: 'Đăng ký thành công 🎉',
            error: (err) => {
                if (err instanceof Error && err.message) {
                    return `Lỗi: ${err.message}`;
                }
                return 'Đăng ký thất bại!';
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
                name="username"
                label="Tên đăng nhập"
                placeholder="Nhập tên đăng nhập"
                size="large"
                error={errors.username?.message}
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
            <FormInput
                control={control}
                name="re_password"
                label="Nhập lại mật khẩu"
                type="password"
                placeholder="Nhập lại mật khẩu"
                size="large"
                error={errors.re_password?.message}
            />{' '}
            <Button
                htmlType="submit"
                loading={isSubmitting}
                variant="outlined"
                className="w-full mt-4 !text-primary"
                size="large"
            >
                Đăng ký
            </Button>
        </Form>
    );
}

export default SignUpForm;
