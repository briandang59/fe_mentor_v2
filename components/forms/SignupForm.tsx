'use client';
import { Form, Button } from 'antd';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInput } from '../formsComponent';
import { SignupFormValue, signupSchema } from '@/utils/schemas/signup';

function SignUpForm() {
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignupFormValue>({
        resolver: yupResolver(signupSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = async (data: SignupFormValue) => {
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
                name="username"
                label="Tên đăng nhập"
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
            <FormInput
                control={control}
                name="re_password"
                label="Nhập lại mật khẩu"
                type="password"
                placeholder="Nhập mật khẩu"
                size="large"
                error={errors.password?.message}
            />

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

export default SignUpForm;
