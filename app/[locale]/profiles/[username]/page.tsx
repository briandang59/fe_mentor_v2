import ProfileComponent from '@/components/common/ProfileComponent';
import { APIS } from '@/lib/apis';

type PublicProfilePageProps = {
    params: {
        username: string;
    };
};

export default async function PublicProfilePage({ params }: PublicProfilePageProps) {
    const { username } = await params;
    const res = await APIS.profile.server.getByUserName(username);
    const profile = res?.data;

    if (!profile) {
        return (
            <div className="text-center text-red-500">
                Không tìm thấy hồ sơ công khai. Vui lòng kiểm tra lại.
            </div>
        );
    }

    return <ProfileComponent profile={profile}  type='public'/>;
}