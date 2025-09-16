import { images } from '@/assets/images';
import BaseWrapper from '@/components/common/BaseWrapper';
import { Button, Divider } from 'antd';
import Image from 'next/image';
import BannerSwiper from '@/components/common/BannerSwiper';

export default function Home() {
    return (
        <div>
            <div className="lg:min-h-[80rem]">
                <BannerSwiper />
            </div>
            <BaseWrapper className="flex flex-col gap-[4rem]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[6rem] min-h-[60rem] md:min-h-[60rem] md:py-[10rem]">
                    <div className="flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-[2rem] h-fit">
                            <Image
                                src={images.thumbnailLogin}
                                alt="thumb"
                                width={1000}
                                height={1000}
                                className="rounded-[1rem]"
                            />
                            <Image
                                src={images.thumbnailLogin}
                                alt="thumb"
                                width={1000}
                                height={1000}
                                className=" rounded-[1rem]"
                            />
                            <Image
                                src={images.thumbnailLogin}
                                alt="thumb"
                                width={1000}
                                height={1000}
                                className=" rounded-[1rem]"
                            />
                            <Image
                                src={images.thumbnailLogin}
                                alt="thumb"
                                width={1000}
                                height={1000}
                                className=" rounded-[1rem]"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-[2rem]">
                        <div>
                            <h2 className="text-[2.4rem] md:text-[4.4rem] font-bold">
                                Trở thành cố vấn tại
                            </h2>
                            <h2 className="text-[2.4rem] md:text-[4.4rem] text-primary font-bold">
                                Mentor hub
                            </h2>
                            <p className="text-[1.4rem] md:text-[1.6rem] leading-[2.4rem] md:leading-[2.8rem] text-justify">
                                Tham gia Hệ thống Mentor với tư cách là người cố vấn. Đây là cơ hội
                                để bạn cố vấn cho những người học trẻ tuổi và truyền đạt những kinh
                                nghiệm sâu sắc của mình. Chúng tôi khuyến khích bạn tạo ra một mạng
                                lưới cố vấn sôi động và giúp đỡ lẫn nhau thăng tiến về mặt chuyên
                                môn. Cùng nhau, chúng ta hãy phát triển sự nghiệp và đảm bảo sự
                                thịnh vượng cho các thế hệ mai sau!
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-[2rem] w-full">
                            <Button
                                size="large"
                                type="primary"
                                className="!text-wrap !text-[1.4rem]"
                            >
                                Tham gia với tư cách cố vấn
                            </Button>
                            <Button
                                size="large"
                                variant="outlined"
                                className="!text-wrap !text-[1.4rem]"
                            >
                                Về chúng tôi
                            </Button>
                        </div>
                    </div>
                </div>
            </BaseWrapper>
            <Divider />
            <BaseWrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[6rem] min-h-[60rem] md:min-h-[60rem] md:py-[10rem]">
                    <div>
                        <h2 className="text-[2.4rem] md:text-[4.4rem] font-bold">Giới thiệu về</h2>
                        <h2 className="text-[2.4rem] md:text-[4.4rem] text-primary font-bold">
                            Mentor hub
                        </h2>
                        <p className="text-[1.4rem] md:text-[1.6rem] leading-[2.4rem] md:leading-[2.8rem] text-justify">
                            Lời chào từ Hệ thống cố vấn! Chúng tôi cung cấp một nền tảng liên kết
                            những người được cố vấn với các chuyên gia trong ngành CNTT đóng vai trò
                            là người cố vấn. Mục tiêu của chúng tôi là thúc đẩy sự phát triển nghề
                            nghiệp và cá nhân của những người được cố vấn bằng cách cung cấp cho họ
                            cơ hội học hỏi và phát triển cùng với những cá nhân có kinh nghiệm trong
                            ngành đầy hứa hẹn này.
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image
                            src={images.thumbnailLogin}
                            alt="thumb"
                            width={1000}
                            height={1000}
                            className="rounded-[1rem]"
                        />
                    </div>
                </div>
            </BaseWrapper>
            <Divider />
        </div>
    );
}
