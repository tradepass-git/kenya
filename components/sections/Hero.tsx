import React from 'react'
import Link from "next/link";
import HeroVideoAnimation from "@/components/HeroVideoAnimation";
const Hero = () => {
  return (
    <section className='main-banner relative bg-[var(--tp-bg-2)] flex flex-col gap-[50] lg:pt-180 sm:pt-170'>
      <div className='max-w-7xl mx-auto w-full'>
        <div className='flex flex-wrap flex-col items-center gap-[50px]'>
          <div className='flex'><img src="/images/wfis-kenya-logo.svg" alt="WFIS Kenya" className="w-full h-[211px]" /></div>
          <div className='flex flex-col items-center gap-[10px]'>
            <div className='text-center text-[1rem] font-bold text-white'>Supporting Partners</div>
            <div className='flex gap-[10px] items-center justify-center'>
              <img src="/images/supporting-partners/nifc.jpg" alt="WFIS Kenya" className="w-full h-[145px]" />
              <img src="/images/supporting-partners/kenya_bankers_supporting_partner.jpg" alt="WFIS Kenya" className="w-full h-[145px]" />
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='text-white text-[2.2rem] font-bold leading-none'>3 MAR 2026</div>
            <div className='text-white text-[1.2rem] font-bold'><a href="https://maps.app.goo.gl/cRXWi3wH96fHnf4z6" target="_blank" rel="nofollow noopener">Edge Convention Centre, Nairobi, Kenya</a></div>
          </div>
          <div className='flex items-center flex-col flex-wrap text-center'>
            <div className='text-white text-[1.5rem] font-light'>SHAPING KENYA’S FINANCIAL INCLUSION</div>
            <div className='text-[2.9rem] font-black text-[var(--tp-primary-color)]'>THROUGH NEXT-GEN DIGITAL INNOVATION </div>
          </div>
        </div>
      </div>
      <HeroVideoAnimation />
    </section>
  )
}

export default Hero