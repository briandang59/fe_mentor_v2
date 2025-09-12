import { images } from '@/assets/images';
import Image from 'next/image';

function Login() {
    return (
        <div className="grid grid-cols-[60%_40%] gap-2 h-[100%]">
            <div></div>
            <div>
                <Image
                    src={images.thumbnailLogin}
                    width={1000}
                    height={1000}
                    alt="logo-thumb"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}

export default Login;
