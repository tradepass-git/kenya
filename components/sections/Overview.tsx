import React from 'react'
import Style from "@/public/css/CustomClass.module.css";
import Fonts from "@/public/css/CustomFonts.module.css";
import ParallaxSection from '../ui/ParallaxSection';
const Overview = () => {
    return (
        <section className='overview flex flex-col relative w-full pb-[80px] lg:pt-[80px]'>
            <ParallaxSection>
                <div className='hidden lg:block cs-to-up absolute bottom-[-50px] right-0 transition-all duration-600 ease-in-out flex justify-end'><img src="/images/style2.png" className='md:w-[70%] w-full' /></div>

                <div className='max-w-7xl mx-auto w-full relative'>
                    <div className='hidden lg:block cs-to-up absolute flex justify-end left-[-50px] bottom-[-110px] transition-all duration-600 ease-in-out'><img src="/images/style1.png" className='w-[70%]' /></div>
                    <div className="grid grid-cols-12 items-stretch gap-[20px] md:gap-[50px] lg:gap-[80px] w-full mx-auto bg-[url('/images/overview-bg.png')] bg-no-repeat bg-[position:top_left] bg-[length:300px] lg:py-[50px] py-0">
                        <div className='lg:col-span-5 col-span-12'>
                            <div className={`${Style["shine-img-hover"]} relative`}>
                                <div className={`${Style["shine-img"]} overflow-hidden relative`}>
                                    <div className='aspect-[4/3] lg:aspect-auto h-full'>
                                        <img src="/images/overview-pic1.webp" alt="WFIS Kenya" className='w-full h-full object-cover transition-all duration-700 ease-in opacity-100 scale-100' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:col-span-7 col-span-12'>
                            <div className='flex flex-col lg:gap-[30px] gap-[20px] justify-center h-full  lg:px-0 px-[20px]'>
                                <h1 className={`${Fonts["font-aeonik-black"]} min-[441px]:text-[4rem] text-[3rem] font-black leading-[1] uppercase`}>WFIS Kenya</h1>
                                <div className='flex flex-col gap-[20px]'>
                                    <p>Kenya has firmly established itself as the fintech epicenter of East Africa  and one of the fastest-growing hubs across the wider Middle East & Africa region. With regulators like the Capital Markets Authority (CMA) and Central Bank of Kenya (CBK) expanding and refining frameworks (including sandbox regimes, open banking policies and more agile digital finance licensing), the environment for innovation is accelerating.</p>
                                    <p>Just recently, Kenyan startups garnered $638 million in funding,  the highest in Africa. Fintech firms remain front-runners, especially in payments, transfers, digital financial inclusion and embedded finance</p>
                                    <p>Simultaneously, Kenya’s mobile money market continues its trajectory of explosive growth projected to reach $727.7 billion by 2033, growing at a CAGR of 17.6% between 2025-33. On the other hand, international remittances witnessed a 12.1% jump in annual inflows to $5.08 billion by H1 2025.</p>
                                    <p>To harness this momentum, Tradepass is hosting the <strong>7th</strong> Edition of <strong>World Financial Innovation Series (WFIS)</strong> at the <strong>Edge Convention Centre, Nairobi, Kenya on 3 March 2026.</strong> The event will host over 500 technology and business heads from the leading banks, insurance companies & micro-finance institutions across the country.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxSection>
        </section>
    )
}

export default Overview