'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import Image from 'next/image';

import 'swiper/css';

import { images } from '@/assets/images';
import type { Swiper as SwiperType } from 'swiper';

export default function BannerSwiper() {
    const swiperRef = useRef<SwiperType | null>(null);
    const [progress, setProgress] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        { image: images.banner1, text: 'Đến với Mentor Hub, trở thành Mentor' },
        { image: images.banner2, text: 'Học hỏi, chia sẻ kiến thức mỗi ngày' },
        { image: images.banner3, text: 'Xây dựng cộng đồng cùng nhau phát triển' },
        { image: images.banner4, text: 'Nơi hội tụ Mentor chất lượng' },
        { image: images.banner6, text: 'Khám phá tri thức, mở rộng tầm nhìn' },
    ];

    return (
        <div
            className="relative w-full"
            onMouseEnter={() => swiperRef.current?.autoplay.stop()}
            onMouseLeave={() => swiperRef.current?.autoplay.start()}
        >
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={0}
                centeredSlides
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                onAutoplayTimeLeft={(_, __, progressRatio) => {
                    setProgress(1 - progressRatio);
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide key={idx} className="relative">
                        <div className="relative w-full h-[35vh] sm:h-[50vh] md:h-[65vh] lg:h-[75vh]">
                            <Image
                                src={slide.image}
                                alt={`banner-${idx}`}
                                fill
                                priority={idx === 0}
                                quality={80}
                                placeholder="blur"
                                className="object-cover object-center brightness-90"
                            />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                key={activeIndex}
                                initial={{ y: -40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                className="bg-black/50 backdrop-blur-md rounded-xl px-6 py-4 max-w-[90%] text-center"
                            >
                                <p className="text-white text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
                                    {slide.text}
                                </p>
                            </motion.div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10">
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                        <circle
                            className="stroke-current text-white/30"
                            strokeWidth="8"
                            fill="transparent"
                            r="46"
                            cx="50"
                            cy="50"
                        />
                        <circle
                            className="stroke-current text-white transition-all duration-100 ease-linear"
                            strokeWidth="8"
                            strokeDasharray="290"
                            strokeDashoffset={290 * (1 - progress)}
                            strokeLinecap="round"
                            fill="transparent"
                            r="46"
                            cx="50"
                            cy="50"
                            transform="rotate(-90 50 50)"
                        />
                    </svg>

                    <span className="text-white text-sm sm:text-base md:text-lg font-bold drop-shadow-md">
                        {activeIndex + 1} / {slides.length}
                    </span>
                </div>
            </div>
        </div>
    );
}
