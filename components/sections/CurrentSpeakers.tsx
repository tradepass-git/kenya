"use client";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { gsap } from "gsap";
import SectionTitle from "../ui/SectionTitle";
import SingleSpeaker from "../ui/SingleSpeaker";
import ViewMoreBtn from "../ui/ViewMoreBtn";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CurrentSpeakers = () => {

    useEffect(() => {
        const hoverBtns = gsap.utils.toArray<HTMLElement>(".single-speaker");
        const hoverBtnItems = gsap.utils.toArray<HTMLElement>(".hover-item");

        hoverBtns.forEach((btn, i) => {
            const target = hoverBtnItems[i];

            const moveHandler = (e: MouseEvent) => {
                const rect = btn.getBoundingClientRect();
                const relX = e.clientX - rect.left;
                const relY = e.clientY - rect.top;

                gsap.to(target, {
                    duration: 0.4,
                    x: ((relX - rect.width / 2) / rect.width) * 60,
                    y: ((relY - rect.height / 2) / rect.height) * 60,
                    ease: "power2.out",
                });
            };

            const leaveHandler = () => {
                gsap.to(target, {
                    duration: 0.4,
                    x: 0,
                    y: 0,
                    ease: "power2.out",
                });
            };

            btn.addEventListener("mousemove", moveHandler);
            btn.addEventListener("mouseleave", leaveHandler);

            return () => {
                btn.removeEventListener("mousemove", moveHandler);
                btn.removeEventListener("mouseleave", leaveHandler);
            };
        });
    }, []);

    return (
        <section className="current-speakers-section flex flex-col gap-[40px] pt-[400px]">
            <div className="max-w-7xl mx-auto w-full px-4">
                {/* Section Title */}
                <SectionTitle subtitle="2026" title="Speakers" />
            </div>
            <div className="overflow-hidden w-full mx-auto px-20" >
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    loop={true}
                    navigation={false}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 5, // 👈 5 slides on desktop
                        },
                    }}
                >
                    {[...Array(7)].map((_, index) => (
                        <SwiperSlide key={index}>
                            <SingleSpeaker
                                bgcolor="#cbe6c7"
                                fname="Duncan"
                                lname="Omani"
                                designation="Chief Information Officer"
                                company="Access Bank Plc"
                                imageSrc="/images/speakers/Duncan.webp"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="flex justify-center">
                <ViewMoreBtn Text="View More" Link="/speakers" />
            </div>
        </section>
    );
};

export default CurrentSpeakers;