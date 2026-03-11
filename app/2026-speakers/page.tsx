"use client";

import { useEffect, useState } from "react";
import customFonts from "@/public/css/CustomFonts.module.css";
import SingleSpeaker from "@/components/ui/SingleSpeaker";
import Testimonials from "@/components/sections/Testimonials";
const page = () => {
    const [allspeakers, setAllSpeakers] = useState([]);
    useEffect(() => {
        fetch("/api/all-speakers?_year=2026")
            .then((res) => res.json())
            .then((data) => setAllSpeakers(data))
    }, []);

    //console.log(allspeakers);
    return (
        <>
            <section className="relative">
                <img
                    src="/images/inner-banner-bg.jpg"
                    alt="Agenda Background"
                    className="inner-banner-img absolute top-0 left-0 object-cover w-full h-full"
                />

                <div className="relative z-10 max-w-7xl mx-auto w-full px-20">
                    <div className="h-[300px] md:h-[400px] flex flex-col justify-end items-center gap-[30px] pb-[80px]">
                        <h1 className={`${customFonts["font-aeonik-black"]} text-[clamp(2.4rem,8vw,4rem)] text-white uppercase`}>Speakers 2026</h1>
                    </div>
                </div>
            </section>
            <section className="py-[80px] relative">
                <div className="grid grid-cols-5 gap-[20px]">
                    {allspeakers.map((speaker: any, index: number) => (
                        <div key={index} id={speaker.id}>
                            <SingleSpeaker
                                bgcolor={speaker.speaker_bg_color}
                                fname={speaker.speaker_fname}
                                lname={speaker.speaker_lname}
                                designation={speaker.speaker_designation}
                                company={speaker.speaker_company}
                                imageSrc={speaker.speaker_image}
                            />
                        </div>
                    ))}

                </div>
            </section>
             <section className="relative"><Testimonials /></section>
            
        </>
    )
}

export default page