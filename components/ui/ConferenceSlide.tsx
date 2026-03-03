"use client";

import { ReactNode } from "react";
import style from "@/public/css/CustomFonts.module.css";
import ConferenceBtn from "./ConferenceBtn";

type ConferenceProps = {
    videoUrl?: string;
    videoImg?: string;
    name?: string;
    content?: ReactNode;
    ctaId?: string;
    buttonName?: string;
    hubspotId?: string;
    bgColor?: string;
    textColor?: string;
    btnBgColor?: string;
    btnTextColor?: string;

};

const ConferenceSlide = ({ videoUrl, videoImg, name, content, ctaId, buttonName, hubspotId, bgColor, textColor, btnBgColor, btnTextColor }: ConferenceProps) => {

    return (
        <div className="project-panel-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className='h-full'>
                    <video src={videoUrl} poster={videoImg} autoPlay loop muted className='w-full h-full object-cover' />
                </div>
                <div style={{ backgroundColor: bgColor }} className={`min-[992px]:h-[100vh] min-[992px]:p-[80px] h-[100%] w-full py-[30px] px-[10px]`}>
                    <div className='flex flex-col justify-center h-full gap-[30px]'>
                        <h4 style={{ color: textColor }} className={`text-[1.9rem] font-bold leading-[1] ${style["font-aeonik-black"]} min-[1200]:text-[3rem] min-[441]:text-[2rem] uppercase`}>{name}</h4>
                        <div style={{ color: textColor }} className="w-full flex flex-col gap-[20px]">{content}</div>
                        <div className="flex">
                            <ConferenceBtn Text={buttonName} Link="#" TextColor={btnTextColor} BgColor={btnBgColor} ctaId={ctaId} hubspotId={hubspotId} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConferenceSlide