import { UserResponse } from '@/types/responses/auth';

interface UserUIProps {
    user: UserResponse;
    type: 'header' | 'profile';
}

export default function UserUI({ user, type }: UserUIProps) {
    if (type === 'header') {
        return (
            <button
                type="button"
                className="flex items-center gap-[1rem] cursor-pointer bg-transparent border-none"
            >
                <div className="size-[3rem] rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-black uppercase text-[1.4rem] font-bold">
                        {user.username.charAt(0)}
                    </span>
                </div>
                <span className="text-[1.4rem]">{user.username}</span>
            </button>
        );
    }

    return null;
}
