"use client";
import { useState } from "react";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("day1");
    return (
        <>
            <div className="flex items-center justify-center">
                <div className="inline-block">
                    <div className="flex items-center justify-center bg-black p-[5px] rounded-[10px]">
                        <button
                            onClick={() => setActiveTab("day1")}
                            className={`uppercase px-20 py-7 text-white font-medium cursor-pointer ${activeTab === "day1"
                                ? "bg-[#e22013] rounded-[10px]" : ""
                                }`}
                        >
                            Day 1
                        </button>
                        <button
                            onClick={() => setActiveTab("day2")}
                            className={`uppercase px-20 py-7 text-white font-medium cursor-pointer ${activeTab === "day2"
                                ? "bg-[#e22013] rounded-[10px]" : ""
                                }`}
                        >
                            AWARDS & GALA
                        </button>

                    </div>
                </div>
            </div>

            <div className="relative py-[80px]">
                {activeTab === "day1" && <div className="relative flex flex-col gap-[40px] before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-[1px] before:h-full before:bg-[#d2d2d245]">
                    <div className={`flex overflow-hidden bg-[url('/images/strips/registration-strip-2.jpg')] bg-cover bg-center min-h-[110px] rounded-[10px] justify-center items-center px-[40px]`}>
                        <div className="grid grid-cols-12 gap-[30] w-full mx-auto">
                            <div className="sm:col-span-3 col-span-12 text-white text-[1rem] font-bold leading-[1]">07:45AM - 08:45AM</div>
                            <div className="sm:col-span-9 col-span-12 text-white text-[1.2rem] font-bold leading-[1.2]">REGISTRATION & COFFEE</div>
                        </div>
                    </div>

                    <div className={`relative flex justify-center items-center px-[40px] before:content-[''] before:absolute before:w-[20px] before:h-[20px] before:rounded-full before:bg-[#e22013] before:top-0 before:left-[-10px] before:border-2 before:border-[#e22013]`}>
                        <div className="grid grid-cols-12 gap-[30] w-full mx-auto">
                            <div className="sm:col-span-3 col-span-12 text-black text-[1rem] font-bold leading-[1]">08:45AM - 09:10AM</div>
                            <div className="sm:col-span-9 col-span-12 flex flex-col gap-[20px]">
                                <h3 className="text-black text-[1.2rem] font-bold leading-[1.2]">INAUGURATION</h3>
                            </div>
                        </div>
                    </div>

                    <div className={`relative flex justify-center items-center px-[40px] before:content-[''] before:absolute before:w-[20px] before:h-[20px] before:rounded-full before:bg-[#e22013] before:top-0 before:left-[-10px] before:border-2 before:border-[#e22013]`}>
                        <div className="grid grid-cols-12 gap-[30] w-full mx-auto">
                            <div className="sm:col-span-3 col-span-12 text-black text-[1rem] font-bold leading-[1]">09:10AM - 09:25AM</div>
                            <div className="sm:col-span-9 col-span-12 flex flex-col gap-[20px]">
                                <h3 className="text-black text-[1.2rem] font-bold leading-[1.2]">Driving Inclusive Growth in FSI Through Forward-Thinking Regulatory Frameworks</h3>
                                <ul className="list-disc text-[11pt] text-[#0e0e0e] space-y-20 pl-[20px]">
                                    <li>Exploring how balanced regulatory frameworks foster fintech innovation while ensuring consumer protection and market stability, supported by government policies</li>
                                    <li>The impact of Kenya’s National Payments Strategy and adoption of global standards like ISO 20022 in enabling seamless, secure, and innovative payment systems</li>
                                    <li>Collaboration between public and private sectors driving scalable financial services that widen financial inclusion and support sustainable economic growth</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                }
                {activeTab === "day2" && <div>Agenda for Day 2</div>}
            </div>
        </>

    )
}

export default Tabs