"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroVideoAnimation() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current || !videoRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {

      // Set starting width properly
      gsap.set(videoRef.current, { width: "40%" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 70",
          end: "bottom 50%",
          pin: true,
          scrub: 1,
          pinSpacing: false,
          invalidateOnRefresh: true,
        },
      });

      tl.to(videoRef.current, {
        width: "100%",
        ease: "none",
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="w-full mx-auto px-80">
      <div ref={wrapperRef} className="tp-hero-bottom-img-wrap">
        <div
          ref={videoRef}
          className="tp-hero-bottom-img md:h-[740px] min-[576px]:h-[540px] h-[440px] mx-auto"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/kenya-banner.webp"
            className="w-full h-full object-cover"
          >
            <source src="/images/wfis-kenya-banner.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}