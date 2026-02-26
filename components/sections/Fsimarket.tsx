import React from 'react'
import font from "@/public/css/CustomFonts.module.css";
import FsimarketHouseCount from '../ui/FsimarketHouseCount';
const Fsimarket = () => {
  return (
    <section className='fsimarket pb-[80px] flex flex-col'>
        <div className='max-w-7xl mx-auto w-full relative'>
            <div className='grid grid-cols-12 gap-[30px]'>
             <div className='lg:col-span-4 col-span-12'>
                <div className={`${font["font-aeonik-black"]} font-black text-[3rem] min-[1200px]:text-[3.4rem] min-[441px]:text-[2.6rem] leading-[1] uppercase`}>Quick Insights On Kenya’s Fsi Market</div>
             </div>
             <div className='lg:col-span-4 col-span-12'>
                <FsimarketHouseCount icon="$" suffix=".7B" value={727} text="Projected mobile money market size by 2033" duration={2000} />
             </div>
             <div className='lg:col-span-4 col-span-12'>
                <FsimarketHouseCount icon="$" suffix=".08B" value={5} text="Remittance inflows in H1 2025" duration={2000} />
             </div>
             <div className='lg:col-span-4 col-span-12'>
                <FsimarketHouseCount icon="" suffix="%" value={83} text="Adults having access to formal financial services" duration={2000} />
             </div>
             <div className='lg:col-span-4 col-span-12'>
                <FsimarketHouseCount icon="$" suffix=".54B" value={14} text="Projected digital payments market by 2028" duration={2000} />
             </div>
             <div className='lg:col-span-4 col-span-12'>
                <FsimarketHouseCount icon="" suffix="+" value={700} text="FinTech startups in Kenya" duration={2000} />
             </div>
            </div>
        </div>
    </section>
  )
}

export default Fsimarket