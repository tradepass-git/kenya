"use client";

import { useEffect } from "react";
import customFonts from "@/public/css/CustomFonts.module.css";
import ProgressBar from "@/components/ui/ProgressBar";
const KeyStatistics = () => {
  useEffect(() => {
    const speed = 20;
    const items = document.querySelectorAll(".bar-group");

    items.forEach((group) => {
      const progress = group.querySelector<HTMLElement>(".progress");
      if (!progress) return;

      const target = Number(progress.dataset.progress);
      let i = 0;

      const interval = setInterval(() => {
        if (i <= target) {
          progress.style.width = i + "%";
          i++;
        } else {
          clearInterval(interval);
        }
      }, speed);
    });
  }, []);

  return (
    <section className='relative flex flex-col gap-[40px]'>
      <h2 className={`${customFonts["font-aeonik-black"]} text-center font-semibold uppercase leading-[1.4] min-[992px]:text-[2.3rem] text-[1.8rem]`}>Key Statistics from 2025</h2>
      <div className="overflow-hidden w-full mx-auto px-20" >
        <div className="flex flex-col gap-[30px]">
          <div className='grid grid-cols-12 items-stretch gap-[30px] w-full mx-auto'>
            <div className="lg:col-span-4 col-span-12">
              <div className='border h-full border-[#1919191f] rounded-[10px] flex flex-col px-[40px] py-[40px] gap-[40px]'>
                <div className='text-center'>
                  <h3 className={`${customFonts["font-aeonik-black"]} text-[1.8rem] font-semibold leading-[1.4] uppercase`}>Attendees' Domains</h3>
                </div>
                <div className='flex flex-col gap-0'>
                  <ProgressBar value={45} text="IT/ Technology" />
                  <ProgressBar value={35} text="Fraud, Risk & Compliance" />
                  <ProgressBar value={20} text="Retail / Corporate/ Transaction Banking" />
                  <ProgressBar value={30} text="Cards & Payments" />
                  <ProgressBar value={25} text="Digital Transformation, CX & Loyalty" />
                  <ProgressBar value={40} text="Cloud & Datacentres" />
                  <ProgressBar value={35} text="AI & Data Analytics" />
                  <ProgressBar value={45} text="Biometrics & Digital Identity" />
                  <ProgressBar value={35} text="Wealth/ Wholesale/ Treasury" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12">
              <div className='border h-full border-[#1919191f] rounded-[10px] flex flex-col px-[40px] py-[40px] gap-[40px] justify-center'>
                <img src="/images/chart4.svg" alt="WFIS Kenya" className="w-full h-auto" />
                <ul className='text-[1rem] space-y-20'>
                  <li className="flex items-center gap-10"><span className="w-[12] h-[12] bg-[#d54045] rounded-full"></span>Final Decision Makers</li>
                  <li className="flex items-center gap-10"><span className="w-[12] h-[12] bg-[#483f6d] rounded-full"></span>Evaluators</li>
                  <li className="flex items-center gap-10"><span className="w-[12] h-[12] bg-[#5d9ad3] rounded-full"></span>Influencers</li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12">
              <div className='border h-full border-[#1919191f] rounded-[10px] flex flex-col px-[40px] py-[40px] gap-[40px] justify-center'>
                <p className="text-[1rem]">WFIS is a highly focused initiative that carefully cherry-picks key decision-making profiles from Kenya's leading financial institutions that’re actively seeking cutting-edge solutions.</p>
                <div className="flex flex-col gap-0">
                  <p className="text-black leading-[1.2] font-semibold text-[3rem] tracking-wide">Over</p>
                  <h3 className="max-[1600px]:text-[5.6rem] max-[1400px]:text-[7.5rem] text-[11.87rem] text-[var(--tp-primary-color)] font-normal p-0 m-0 leading-[1]">87%</h3>
                  <p className="text-black leading-[1.2] font-semibold text-[3rem] tracking-wide">of attendees</p>
                  <p className="text-[1rem]">had influence or sole responsibility in purchase decisions</p>
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-12 items-stretch gap-[30px] w-full mx-auto'>
            <div className="lg:col-span-5 col-span-12">
              <div className='border border-[#1919191f] rounded-[10px] flex flex-col px-[40px] py-[40px] gap-[40px]'>
                <div className='flex flex-col gap-[10px]'>
                  <h3 className={`${customFonts["font-aeonik-black"]} text-[1.8rem] font-semibold leading-[1.4] uppercase`}>Budget-based Bifurcation Of Delegates</h3>
                  <p className="text-[1rem]">All delegates at WFIS 2025 - Kenya were pre-qualified based on their allocated budgets for the procurement of new solutions.</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 col-span-12">
              <div className='border border-[#1919191f] rounded-[10px] flex flex-col px-[40px] py-[40px] gap-[40px]'>
                <div className='flex flex-col gap-[10px]'>
                  <h3 className={`${customFonts["font-aeonik-black"]} text-[1.8rem] font-semibold leading-[1.4] uppercase`}>Timeline-based Bifurcation Of Delegates</h3>
                  <p className="text-[1rem]">All delegates at WFIS 2025 - Kenya came with a pre-determined timeline for the procurement and implementation of new solutions. Here’s a quick representation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default KeyStatistics