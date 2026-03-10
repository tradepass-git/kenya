"use client";
import { useState } from "react";
import Image from "next/image";

const Tabs = ({ agenda }: any) => {

    // Get unique days from API
    const tabs = [...new Set(agenda.map((item: any) => item.day))];

    const [activeTab, setActiveTab] = useState(tabs[0]);

    // Filter agenda by active tab
    const filteredAgenda = agenda.filter(
        (item: any) => item.day === activeTab
    );
    return (
        <>
            { /* <pre>{JSON.stringify(agenda, null, 2)}</pre> */}
            <div className="flex items-center justify-center">
                <div className="w-fit flex items-center justify-center bg-black p-[5px] rounded-[10px]">
                    {tabs.map((tab: any) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`uppercase px-20 py-7 text-white font-medium cursor-pointer ${activeTab === tab ? "bg-[#e22013] rounded-[10px]" : ""
                                }`}
                        >
                            {tab}
                        </button>
                    ))}

                </div>
            </div>

            <div className="relative py-[80px]">
                {activeTab === "AWARDS & GALA" ? (
                    <>
                        {filteredAgenda.map((item: any, index: number) => (
                            <div key={index}>
                                {item.sessions.map((session: any, i: number) => (
                                    <div className="grid grid-cols-2 gap-[0]">
                                        <div className="">
                                            <div className="sm:col-span-2 col-span-12 text-black text-[1rem] font-bold leading-[1]">{session.start_time}</div>
                                            <div className="sm:col-span-10 col-span-12 text-black text-[1.2rem] font-bold leading-[1.2]">{session.title}</div>
                                        </div>
                                        <div className="">
                                            {session.cards_background_video_bg && (
                                                            <div className="text-center">
                                                                <Image src={session.cards_background_video_bg} alt={session.start_time} width={192} height={114} className="w-full h-full object-cover" />
                                                            </div>
                                                        )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}

                    </>

                ) : (
                    <>
                        {filteredAgenda.map((item: any, index: number) => (
                            <div key={index} className="relative flex flex-col gap-[60px] before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-[1px] before:h-full before:bg-[#d2d2d245]">
                                {item.sessions.map((session: any, i: number) => (
                                    <>
                                        {session.background_image ? (
                                            <div key={i} className={`flex overflow-hidden bg-cover bg-center min-h-[110px] rounded-[10px] justify-center items-center px-[30px]`} style={{
                                                backgroundImage: session.background_image
                                                    ? `url(${session.background_image})`
                                                    : "none"
                                            }}>
                                                <div className="grid grid-cols-12 gap-[40] w-full mx-auto">
                                                    <div className="sm:col-span-2 col-span-12 text-white text-[1rem] font-bold leading-[1]">{session.start_time}</div>
                                                    <div className="sm:col-span-10 col-span-12 text-white text-[1.2rem] font-bold leading-[1.2]">{session.title}</div>
                                                </div>
                                            </div>
                                        ) : (

                                            <div className={`relative flex justify-center items-center px-[30px] before:content-[''] before:absolute before:w-[20px] before:h-[20px] before:rounded-full before:bg-[#e22013] before:top-0 before:left-[-10px] before:border-2 before:border-[#e22013]`}>
                                                <div className="grid grid-cols-12 gap-[40] w-full mx-auto">
                                                    <div className="sm:col-span-2 col-span-12 text-black text-[1rem] font-bold leading-[1]"> {session.start_time}
                                                        {session.company_logo && (
                                                            <div className="text-center">
                                                                <Image src={session.company_logo} alt={session.start_time} width={192} height={114} className="w-full h-full object-cover" />
                                                            </div>
                                                        )}

                                                    </div>
                                                    <div className="sm:col-span-10 col-span-12 flex flex-col gap-[20px]">
                                                        {session.panel_discussion_text && (<div className="w-fit bg-[#e22013] text-[0.9rem] font-semibold text-white px-[10px] rounded-[4px] uppercase">{session.panel_discussion_text}</div>)}
                                                        <h3 className="text-black text-[1.2rem] font-bold leading-[1.4]">{session.title}</h3>
                                                        {session.topics && (
                                                            <div
                                                                className="text-[0.9rem] text-[#0e0e0e] [&_ul]:list-disc [&_ul]:pl-[20px] [&_li]:mb-[10px]"
                                                                dangerouslySetInnerHTML={{ __html: session.topics }}
                                                            />
                                                        )}
                                                        {session.speakers && (
                                                            <div className="flex flex-wrap gap-[30px] items-end">
                                                                {session.speakers.map((speaker: any, i: number) => (
                                                                    <div key={i} className="relative flex flex-col gap-[10px] w-[31%] min-h-[160px] before:content-[''] before:absolute before:border before:border-[#0e0e0e29] before:rounded-[10px] before:w-full before:h-[80%] before:top-[20%] before:z-1">
                                                                        {speaker.id == session.moderator_id && (<div className="text-[0.9rem] text-[#e22013] font-bold uppercase absolute top-[5px] left-[90px]">Moderator</div>)}
                                                                        <div className="relative flex flex-col gap-[5px]  px-[20px] pb-[10px] z-2">
                                                                            <div className="w-[60px] h-[60px] border border-[#0e0e0e29] rounded-[50%] bg-[#9d9b9b] flex items-center justify-center overflow-hidden [&>img]:w-full [&>img]:h-full [&>img]:object-cover">
                                                                                <Image src={speaker.profile_image} alt={speaker.name} width={60} height={60} className="w-full h-full object-cover" />
                                                                            </div>
                                                                            <h3 className="text-[1rem] text-[#e22013] leading-[1.2] uppercase font-semibold">{speaker.name}</h3>
                                                                            <p className="text-[0.9rem] leading-[1.2]">{speaker.designation}</p>
                                                                            <p className="text-[0.9rem] leading-[1.2] font-semibold">{speaker.company}</p>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                ))}
                            </div>
                        ))}
                    </>
                )}
            </div>
        </>

    );
};

export default Tabs;