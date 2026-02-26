import React from 'react'
import SectionTitle from '../ui/SectionTitle'
import customFonts from "@/public/css/CustomFonts.module.css";
import style from "@/public/css/CustomClass.module.css"
import PowerHouseCount from '../ui/PowerHouseCount';

const PowerHouse = () => {
    return (
        <section className='power-house bg-[#100201] py-[80px] flex flex-col gap-[80px]'>
            <div className="max-w-7xl mx-auto w-full flex flex-col gap-[20px]">
                <SectionTitle subtitle="" title="The Powerhouse Behind" textcolor="white" />
                <div className={`${customFonts["font-aeonik-trial"]} text-white text-[1.8rem] font-normal leading-[1.2]`}>#WFISKenya</div>
            </div>
            <div className='w-full mx-auto'>
                <div className='grid grid-cols-12 items-stretch gap-0 w-full mx-auto'>
                    <div className={`${style["shine-img-hover"]} relative lg:col-span-3 col-span-12 flex flex-col transition-transform duration-500`}>
                        <div className={`${style["shine-img"]} relative h-[500px] w-full overflow-hidden`}>
                            <picture><img src="/images/powerhouse_img_1.webp" alt="WFIS Kenya" className="w-full h-full object-cover transition-all duration-700 ease-in opacity-100 scale-100" /></picture>
                        </div>
                        <div className='flex flex-col bg-[var(--tp-common-white)] min-[1200px]:w-[calc(100%-50px)] min-[768px]:w-[calc(100%-10px)] w-full p-[20px] mx-auto mt-[-50px] z-[1]'>
                            <PowerHouseCount suffix="+" value={500} text="Pre-Qualified Delegates" />
                        </div>
                    </div>
                    <div className={`${style["shine-img-hover"]} relative lg:col-span-3 col-span-12 flex flex-col transition-transform duration-500`}>
                        <div className={`${style["shine-img"]} relative h-[500px] w-full overflow-hidden`}>
                            <picture><img src="/images/powerhouse_img_2.webp" alt="WFIS Kenya" className="w-full h-full object-cover transition-all duration-700 ease-in opacity-100 scale-100" /></picture>
                        </div>
                        <div className='flex flex-col bg-[var(--tp-common-white)] min-[1200px]:w-[calc(100%-50px)] min-[768px]:w-[calc(100%-10px)] w-full p-[20px] mx-auto mt-[-50px] z-[1]'>
                            <PowerHouseCount suffix="+" value={100} text="Leading Organisations" />
                        </div>
                    </div>
                    <div className={`${style["shine-img-hover"]} relative lg:col-span-3 col-span-12 flex flex-col transition-transform duration-500`}>
                        <div className={`${style["shine-img"]} relative h-[500px] w-full overflow-hidden`}>
                            <picture><img src="/images/powerhouse_img_3.webp" alt="WFIS Kenya" className="w-full h-full object-cover transition-all duration-700 ease-in opacity-100 scale-100" /></picture>
                        </div>
                        <div className='flex flex-col bg-[var(--tp-common-white)] min-[1200px]:w-[calc(100%-50px)] min-[768px]:w-[calc(100%-10px)] w-full p-[20px] mx-auto mt-[-50px] z-[1]'>
                            <PowerHouseCount suffix="+" value={40} text="Industry Speakers" />
                        </div>
                    </div><div className={`${style["shine-img-hover"]} relative lg:col-span-3 col-span-12 flex flex-col transition-transform duration-500`}>
                        <div className={`${style["shine-img"]} relative h-[500px] w-full overflow-hidden`}>
                            <picture><img src="/images/powerhouse_img_4.webp" alt="WFIS Kenya" className="w-full h-full object-cover transition-all duration-700 ease-in opacity-100 scale-100" /></picture>
                        </div>
                        <div className='flex flex-col bg-[var(--tp-common-white)] min-[1200px]:w-[calc(100%-50px)] min-[768px]:w-[calc(100%-10px)] w-full p-[20px] mx-auto mt-[-50px] z-[1]'>
                            <PowerHouseCount suffix="+" value={25} text="Solution Providers" />
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default PowerHouse