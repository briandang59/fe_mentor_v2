import * as yup from 'yup';

export const signupSchema = yup.object({
    email: yup.string().required('Email là bắt buộc').email('Email không hợp lệ'),
    username: yup.string().required('Tên đăng nhập là bắt buộc'),
    password: yup.string().required('Mật khẩu là bắt buộc').min(6, 'Mật khẩu tối thiểu 6 ký tự'),
    re_password: yup.string().required('Mật khẩu là bắt buộc').min(6, 'Mật khẩu tối thiểu 6 ký tự'),
});

export type SignupFormValue = yup.InferType<typeof signupSchema>;
