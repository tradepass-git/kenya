"use client";

import { useEffect, useRef } from "react";

export default function ParallaxSection({
    children,
}: {
    children: React.ReactNode;
}) {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const section = sectionRef.current;
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom > 0) {
                const scrollProgress = windowHeight - rect.top;

                const largeEffect = scrollProgress / 5 - 150;
                const miniEffect = scrollProgress / 10;

                section
                    .querySelectorAll(".cs-to-left")
                    .forEach((el) =>
                        (el as HTMLElement).style.transform = `translateX(-${miniEffect}px)`
                    );

                section
                    .querySelectorAll(".cs-to-right")
                    .forEach((el) =>
                        (el as HTMLElement).style.transform = `translateX(${miniEffect}px)`
                    );

                section
                    .querySelectorAll(".cs-to-up")
                    .forEach((el) =>
                        (el as HTMLElement).style.transform = `translateY(-${miniEffect}px)`
                    );

                section
                    .querySelectorAll(".cs-to-down")
                    .forEach((el) =>
                        (el as HTMLElement).style.transform = `translateY(${miniEffect}px)`
                    );

                section
                    .querySelectorAll(".cs-to-rotate")
                    .forEach((el) =>
                        (el as HTMLElement).style.transform = `rotate(${miniEffect}deg)`
                    );

                section.style.backgroundPosition = `center -${largeEffect}px`;
            }
        };

        const onScroll = () => requestAnimationFrame(handleScroll);

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div ref={sectionRef} className="cs-parallax relative">
            {children}
        </div>
    );
}