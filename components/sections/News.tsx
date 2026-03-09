"use client";

import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import fonts from "@/public/css/CustomFonts.module.css";
import calss from "@/public/css/CustomClass.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const News = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <section className="news relative py-[80px] bg-[#100201]">
            <div className="max-w-7xl mx-auto w-full flex flex-col gap-[80px] px-20">
                <SectionTitle subtitle="Latest" title="News" textcolor="white" />

                <div className="grid grid-cols-12 items-stretch gap-[20px]">

                    {/* MAIN NEWS */}
                    <div className="lg:col-span-8 col-span-12">
                        <div className="relative p-[30px] border border-[#6f7aa27d] rounded-[10px] h-full">

                            <Swiper
                                modules={[Navigation, Pagination, Autoplay, Thumbs]}
                                spaceBetween={20}
                                loop={true}
                                slidesPerView={1}
                                pagination={{ 
                                    el: ".blog__dot",
                                    clickable: true }}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                            >
                                {[...Array(7)].map((_, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-[30px]">

                                            <div className="flex flex-col justify-center gap-[20px]">
                                                <h3 className={`text-[1.2rem] text-white ${fonts["font-aeonik-bold"]}`}>
                                                    <a
                                                        href="https://bowmanslaw.com/insights/kenya-draft-regulations-for-non-deposit-taking-credit-providers/"
                                                        target="_blank"
                                                    >
                                                        Kenya: Draft regulations for non-deposit-taking credit providers
                                                    </a>
                                                </h3>

                                                <p className="text-[0.8rem] text-white font-normal">
                                                    The Central Bank of Kenya (the CBK) has published the draft Central Bank of Kenya Regulations 2025 for non-deposit taking credit providers.
                                                </p>

                                                <a
                                                    href="https://bowmanslaw.com/insights/kenya-draft-regulations-for-non-deposit-taking-credit-providers/"
                                                    target="_blank"
                                                    className="py-[10px] px-[20px] text-[var(--tp-black-1)] bg-white text-[0.8rem] rounded-[100px] duration-300 transition-transform ease-out w-fit font-semibold hover:-translate-y-[8px] hover:bg-[var(--tp-primary-color)] hover:text-[var(--tp-common-white)]"
                                                >
                                                    Read More
                                                </a>
                                            </div>

                                            <div className="h-[431px]">
                                                <img
                                                    src="/images/news/Finance-abstract-Resized_Bowmans-Insights-banners3-scaled-1.webp"
                                                    className="object-cover h-full w-full rounded-[10px]"
                                                />
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="absolute bottom-[30px] z-[1] w-full max-[767px]:text-right max-[767px]:right-[30px]"><div className={`${calss["dot"]} blog__dot`}></div></div>
                        </div>
                    </div>

                    {/* THUMBNAIL NEWS */}
                    <div className="hidden lg:block lg:col-span-4 col-span-12">
                        <div className="p-[30px] border border-[#6f7aa27d] rounded-[10px] h-full">

                            <Swiper
                                modules={[Autoplay, Thumbs]}
                                spaceBetween={0}
                                loop={true}
                                slidesPerView={1}
                                direction="vertical"
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                onSwiper={setThumbsSwiper}
                                className="h-[420px]"
                            >
                                {[...Array(7)].map((_, index) => (
                                    <SwiperSlide key={index}>

                                        <div className="flex flex-col gap-[30px] h-full">
                                            <div className="h-[260px]">
                                                <a href="https://bowmanslaw.com/insights/kenya-draft-regulations-for-non-deposit-taking-credit-providers/" target="_blank" >
                                                    <img src="/images/news/Finance-abstract-Resized_Bowmans-Insights-banners3-scaled-1.webp" className="object-cover h-full w-full rounded-[10px]" alt="News" />
                                                </a>
                                            </div>
                                            <h3 className={`text-[1.2rem] m-0 text-white ${fonts["font-aeonik-bold"]}`}>
                                                <a href="https://bowmanslaw.com/insights/kenya-draft-regulations-for-non-deposit-taking-credit-providers/" target="_blank" > Kenya: Draft regulations for non-deposit-taking credit providers </a> </h3> </div>

                                    </SwiperSlide>
                                ))}
                            </Swiper>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default News;