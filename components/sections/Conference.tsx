"use client";

import { useEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import ConferenceSlide from '../ui/ConferenceSlide';
const Conference = () => {
    useEffect(() => {
        const mm = gsap.matchMedia();
        mm.add("(min-width: 991px)", () => {
            const panels = document.querySelectorAll(".project-panel-2");
            panels.forEach((section) => {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        pin: section,
                        scrub: 1,
                        start: "top top",
                        end: "bottom 100%",
                        endTrigger: ".project-panel-area-2",
                        pinSpacing: false,
                        markers: false,
                    },
                });
            });
        });
        return () => mm.revert(); // cleanup
    }, []);
    return (
        <section id="happenings" className='conference project-panel-area-2 relative overflow-hidden'>
            <div className='w-full'>
                {/* slide 1 */}
                <ConferenceSlide
                    videoUrl="/videos/conference.mp4"
                    name="Conference"
                    content={
                        <>
                            <p className="text-[14px] min-[1600px]:text-[1rem] font-normal">Presenting the top inspiring names from the industry at the main stage to share crucial intelligence on the most pressing topics, which gets further enriched by a Q&A session.
                            </p>
                            <p className="text-[14px] min-[1600px]:text-[1rem] font-normal">It showcases thought leadership and cutting-edge knowledge for the growth of the entire business community. A perfect platform that projects the pulse of the industry.
                            </p>
                        </>
                    }
                    ctaId="conference-speak"
                    buttonName="SPEAK"
                    hubspotId="7a5854eb-abb1-41b6-bc2d-2ce521be27df"
                    bgColor="#333c33"
                    textColor="#ffffff"
                    btnBgColor="#e22013"
                    btnTextColor="#ffffff" />

                {/* slide 2 */}
                <ConferenceSlide
                    videoUrl="/videos/exhibition.mp4"
                    name="EXHIBITION"
                    content={
                        <>
                            <p className="text-[14px] min-[1600px]:text-[1rem] font-normal">Enabling the organizations to showcase their best to the many pre-qualified delegates at the event in real-time. The provision of using technology just adds on to the whole demonstration and helps in driving more leads from the top companies across the industry.
                            </p>
                            <p className="text-[14px] min-[1600px]:text-[1rem] font-normal">It’s specifically tailored for the organizations to get in the eyes of the region’s biggest stakeholders and uplift their overall brand image.
                            </p>
                        </>
                    }
                    ctaId="conference-exhibit"
                    buttonName="EXHIBIT"
                    hubspotId="68d82393-bb63-4eec-82d4-a7eb5ae32cdc"
                    bgColor="#142412"
                    textColor="#ffffff"
                    btnBgColor="#e22013"
                    btnTextColor="#ffffff" />

                {/* slide 3 */}
                <ConferenceSlide
                    videoUrl="/videos/awards-gala.mp4"
                    name="AWARDS & GALA"
                    content={
                        <>
                            <p className="text-[14px] min-[1600px]:text-[1rem] font-bold text-[#e22013]">Top Talents | Competitive Categories | Exquisite Dishes | Cocktails
                            </p>
                            <p className="text-[14px] min-[1600px]:text-[1rem] font-normal">This session aims to acknowledge and reward the best of talents, products and organizations that are spearheading innovation and thought leadership in the industry.
                            </p>
                            <p className="text-[14px] min-[1600px]:text-[1rem] font-normal">But that’s not it, the session also features a scrumptious spread of hand-picked dishes coupled with a fine range of cocktails to further lift the spirits of the attendees.
                            </p>
                        </>
                    }
                    ctaId="conference-awards"
                    buttonName="SPONSOR AWARDS"
                    hubspotId="68d82393-bb63-4eec-82d4-a7eb5ae32cdc"
                    bgColor="#1c292a"
                    textColor="#ffffff"
                    btnBgColor="#e22013"
                    btnTextColor="#ffffff" />

                {/* slide 4 */}
                <ConferenceSlide
                    videoUrl="/videos/after-hours.mp4"
                    name="AFTER-HOURS"
                    content={
                        <>
                            <p className="text-[14px] min-[1600px]:text-[1rem] font-normal">An exclusive session for more networking exposure, allowing attendees to break the ice with some spirit-lifting humour, while enabling them to unwind and rub shoulders against industry peers, thought leaders, and potential customers.
                            </p>
                            <p className="text-[14px] min-[1600px]:text-[1rem] font-normal">Allowing networking interactions to happen in a more relaxed and honest way, where receiving direct feedbacks is a given phenomenon.
                            </p>
                        </>
                    }
                    ctaId="conference-after-hours"
                    buttonName="BECOME A SPONSOR"
                    hubspotId="64e6e764-f0f9-4acb-bef3-ffdf1ce0f84b"
                    bgColor="#201e11"
                    textColor="#ffffff"
                    btnBgColor="#e22013"
                    btnTextColor="#ffffff" />
            </div>
        </section>
    )
}

export default Conference