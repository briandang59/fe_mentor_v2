import ProfileComponent from '@/components/common/ProfileComponent';
import { APIS } from '@/lib/apis';

export default async function MyProfilePage() {
    const res = await APIS.profile.server.getMe();
    const profile = res?.data;

    if (!profile) {
        return (
            <div className="text-center text-red-500">
                Lỗi tải hồ sơ cá nhân. Vui lòng đăng nhập lại.
            </div>
        );
    }

    return <ProfileComponent profile={profile} />;
}