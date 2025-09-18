export type LoginResponse = {
    token: string;
    user: UserResponse;
};

export type UserResponse = {
    id: number;
    username: string;
    email: string;
    is_verified: boolean;
    created_at: string;
    updated_at: string;
};
