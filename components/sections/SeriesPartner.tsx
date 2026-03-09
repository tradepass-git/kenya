"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SectionTitle from '../ui/SectionTitle';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SeriesPartner = () => {
    const swiperRef = useRef<any>(null);
    const logos = Array.from({ length: 155 }, (_, i) => `/images/series-patners/${i + 1}.jpg`);
    const groupedLogos = [];
    for (let i = 0; i < logos.length; i += 2) {
        groupedLogos.push(logos.slice(i, i + 2));
    }
    return (
        <section className='sponsors-partner relative py-[80px]'>
            <div className="max-w-7xl mx-auto w-full flex flex-col gap-[80px] px-20">
                <SectionTitle subtitle="SERIES" title="SPONSORS" />
                <div className='border border-[#d0d0d07d]'>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={0}
                        loop={true}
                        navigation={false}
                        autoplay={{ delay: 3000 }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                            },
                            640: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 5,
                            },
                            1280: {
                                slidesPerView: 7,
                            },
                            
                        }}
                    >
                        {groupedLogos.map((group, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col flex-wrap border-r-[1px] border-[#d0d0d07d]">
                                    {group.map((logo, i) => (
                                        <div
                                            className={`img-wrap h-[160px] flex items-center justify-center overflow-hidden ${i === 0 ? "border-b border-[#d0d0d07d]" : ""
                                                }`}
                                            key={i}
                                        >
                                            <img src={logo} alt="Sponsor" className="h-auto" />
                                        </div>
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section>
    )
}

export default SeriesPartner