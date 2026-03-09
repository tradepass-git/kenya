import React from 'react'
import customFonts from "@/public/css/CustomFonts.module.css";
import Tabs from "./tabs";
export const metadata = {
    title: "WFIS Kenya Agenda | Smart Banking, Fintech, Insurtech & more",
    description: "The WFIS Kenya 2026 agenda will delve into mobile banking innovations, next-gen fintech strategies, latest trends shaping the financial sector & more.",
};

const AgendaPage = () => {

    return (
        <>
            <section className="relative">
                <img
                    src="/images/inner-banner-bg.jpg"
                    alt="Agenda Background"
                    className="absolute top-0 left-0 object-cover w-full h-full"
                />

                <div className="relative z-10 max-w-7xl mx-auto w-full px-20">
                    <div className="min-h-[400px] flex flex-col justify-center items-center gap-[30px]">
                        <h1 className={`${customFonts["font-aeonik-black"]} text-[clamp(2.4rem,8vw,4rem)] text-white uppercase`}>Agenda</h1>
                    </div>
                </div>
            </section>
            <section className="py-[80px] relative">
                <div className="relative z-10 max-w-7xl mx-auto w-full px-20">
                    <Tabs />
                </div>
            </section>
        </>
    );
};

export default AgendaPage;