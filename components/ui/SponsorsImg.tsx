"use client";

import { useState, useRef } from "react";
type SponsorsImgProps = {
    imgUrl?: string;
    companyname?: string;
    hubspotId?: string;
    weblink?: string;
    modaltitle?: string;
    widthclass?: string;
    onOpen?: (title: string, id: string) => void
};

const SponsorsImg = ({
    imgUrl,
    companyname,
    hubspotId,
    weblink,
    modaltitle,
    widthclass = 'md:w-1/3',
    onOpen
}: SponsorsImgProps) => {
    const hasLink = weblink && weblink !== "#";
    return hasLink ? (
        <div className={`w-full ${widthclass} px-[20px] mb-[40px] transition-all duration-[350ms] ease-in-out`}>
            <a
                href={weblink}
                rel="nofollow noopener noreferrer"
                target="_blank"
                className="relative group block"
            >
                <picture>
                    <img
                        src={imgUrl}
                        alt={`${modaltitle} - ${companyname}`}
                        className="w-full h-auto border border-[#cccccc85]"
                    />
                </picture>

                <div className="absolute inset-0 bg-[#00000021] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <i
                    className="fa-solid fa-link absolute
        top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        scale-0 group-hover:scale-100
        rounded-full
        text-[20px] text-black
        !w-[50px] !h-[50px] !leading-[50px]
        bg-white
        shadow-[0_0_5px_rgba(0,0,0,0.15)]
        flex items-center justify-center
        transition-all duration-300
        ease-[cubic-bezier(.6,-.28,.735,.045)]"
                ></i>
            </a>
        </div>
    ) : hubspotId ? (
        <div className={`w-full ${widthclass} px-[20px] mb-[40px] transition-all duration-[350ms] ease-in-out`}>
            <a
                href="#"
                onClick={(e) => {
                    e.preventDefault()
                    if (onOpen && hubspotId && modaltitle) {
                        onOpen(modaltitle, hubspotId)
                    }
                }}
                rel="nofollow"
                className="relative group block"
            >
                <picture>
                    <img
                        src={imgUrl}
                        alt={`${modaltitle} - ${companyname}`}
                        className="w-full h-auto border border-[#cccccc85]"
                    />
                </picture>

                <div className="absolute inset-0 bg-[#00000021] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <i
                    className="fa-solid fa-link absolute
        top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        scale-0 group-hover:scale-100
        rounded-full
        text-[20px] text-black
        !w-[50px] !h-[50px] !leading-[50px]
        bg-white
        shadow-[0_0_5px_rgba(0,0,0,0.15)]
        flex items-center justify-center
        transition-all duration-300"
                ></i>
            </a>
        </div>
    ) : (
        <div className={`w-full ${widthclass} px-[20px] mb-[40px] transition-all duration-[350ms] ease-in-out`}>
            <div className="relative block">
                <picture>
                    <img
                        src={imgUrl}
                        alt={`${modaltitle} - ${companyname}`}
                        className="w-full h-auto border border-[#cccccc85]"
                    />
                </picture>
            </div>
        </div>
    );
};

export default SponsorsImg;