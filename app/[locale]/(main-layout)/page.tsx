'use client';
import { images } from '@/assets/images';
import BaseWrapper from '@/components/common/BaseWrapper';
import { Button, Divider } from 'antd';
import Image from 'next/image';
import BannerSwiper from '@/components/common/BannerSwiper';
import { animate, motion, useInView, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
    const stats = [
        { value: '500+', label: 'Mentor' },
        { value: '10k+', label: 'Mentee' },
        { value: '1M+', label: 'Giờ Tư Vấn' },
        { value: '95%', label: 'Hài Lòng' },
    ];

    const thumbnails = [
        { src: images.banner1, alt: 'Mentor Session', label: 'Học hỏi từ chuyên gia' },
        { src: images.banner2, alt: 'Community Event', label: 'Sự kiện cộng đồng' },
        { src: images.banner6, alt: 'Online Meeting', label: 'Cuộc họp trực tuyến' },
        { src: images.banner4, alt: 'Success Story', label: 'Câu chuyện thành công' },
    ];

    function CountUp({ value, delay = 0 }: { value: string; delay?: number }) {
        const ref = useRef<HTMLHeadingElement>(null);
        const inView = useInView(ref, { once: true, amount: 0.5 });
        const motionValue = useMotionValue(0);
        const [displayValue, setDisplayValue] = useState('0');

        const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
        const suffix = value.replace(/[0-9.]/g, '');

        useEffect(() => {
            if (inView) {
                const controls = animate(motionValue, numericValue, {
                    duration: 1.5,
                    ease: 'easeOut',
                    delay,
                    onUpdate: (latest) => {
                        setDisplayValue(Math.round(latest).toString());
                    },
                });
                return () => controls.stop();
            }
        }, [inView, motionValue, numericValue, delay]);

        return (
            <h3 ref={ref} className="text-[3rem] font-bold text-primary">
                {displayValue}
                {suffix}
            </h3>
        );
    }
    return (
        <div>
            <div className="lg:min-h-[80rem]">
                <BannerSwiper />
            </div>
            <BaseWrapper className="flex flex-col gap-[4rem]">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[6rem] min-h-[60rem] md:min-h-[60rem] md:py-[10rem]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                    }}
                >
                    <motion.div
                        className="flex items-center justify-center"
                        variants={{ hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                    >
                        <div className="grid grid-cols-2 gap-[2rem] h-fit">
                            {thumbnails.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    className="relative overflow-hidden rounded-[1rem] cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={1000}
                                        height={1000}
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-all flex items-center justify-center">
                                        <p className="text-white text-lg font-bold opacity-0 hover:opacity-100">
                                            {item.label}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center justify-center gap-[2rem]"
                        variants={{ hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                    >
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
                            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                                <Button
                                    size="large"
                                    type="primary"
                                    className="!text-wrap !text-[1.4rem] w-full"
                                >
                                    Tham gia với tư cách cố vấn
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                                <Button
                                    size="large"
                                    variant="outlined"
                                    className="!text-wrap !text-[1.4rem] w-full"
                                >
                                    Về chúng tôi
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </BaseWrapper>
            <Divider />
            <BaseWrapper>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[6rem] min-h-[60rem] md:min-h-[60rem] md:py-[10rem]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                    }}
                >
                    <motion.div
                        variants={{ hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                    >
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
                    </motion.div>
                    <motion.div
                        className="flex items-center justify-center"
                        variants={{ hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                    >
                        <Image
                            src={images.thumbnailLogin}
                            alt="thumb"
                            width={1000}
                            height={1000}
                            className="rounded-[1rem]"
                        />
                    </motion.div>
                </motion.div>
            </BaseWrapper>

            <BaseWrapper className="py-[6rem]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-[2rem]">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <CountUp value={stat.value} delay={idx * 0.1} />
                            <p className="text-lg">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </BaseWrapper>
            <div className="py-[6rem] bg-primary text-white text-center">
                <motion.h2
                    className="text-[2.4rem] md:text-[4.4rem] font-bold mb-[2rem]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Sẵn sàng tham gia Mentor Hub?
                </motion.h2>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                    <Button size="large" type="default" className="text-primary bg-white">
                        Đăng ký ngay
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}
