"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { gsap } from "gsap";
import SectionTitle from "../ui/SectionTitle";
import SingleSpeaker from "../ui/SingleSpeaker";
import ViewMoreBtn from "../ui/ViewMoreBtn";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PastSpeakers = () => {
    const swiperRef = useRef<any>(null);
    const [pastspeakers, setPastSpeakers] = useState([]);
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

    useEffect(() => {
        fetch("/api/past-speakers")
            .then((res) => res.json())
            .then((data) => setPastSpeakers(data))
    }, []);

    //console.log(pastspeakers);

    return (
        <section className="past-speakers-section flex flex-col gap-[40px] min-[992px]:pt-[400px] pt-[80px] pb-[80px]">
            <div className="max-w-7xl mx-auto w-full px-20">
                {/* Section Title */}
                <SectionTitle subtitle="Past" title="Speakers" />
            </div>
            <div className="overflow-hidden w-full mx-auto px-20" >
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    loop={true}
                    navigation={false}
                    autoplay={{ delay: 3000 }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
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

                    {pastspeakers.map((speaker: any, index: number) => (
                        <SwiperSlide key={index}>
                            <SingleSpeaker
                                bgcolor={speaker.speaker_bg_color}
                                fname={speaker.speaker_fname}
                                lname={speaker.speaker_lname}
                                designation={speaker.speaker_designation}
                                company={speaker.speaker_company}
                                imageSrc={speaker.speaker_image}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="flex justify-center">
                <ViewMoreBtn Text="View More" Link="/2026-speakers" />
            </div>
        </section>
    );
};

export default PastSpeakers;