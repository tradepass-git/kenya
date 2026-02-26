"use client";
import style from "@/public/css/CustomFonts.module.css";
import { useEffect, useRef, useState } from "react";

type PowerHouseProps = {
    suffix?: string;
    value?: number;
    text?: string;
    duration?: number; // optional animation duration in ms
};

const PowerHouseCount = ({
    suffix = "",
    value = 0,
    text,
    duration = 2000,
}: PowerHouseProps) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement | null>(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;

                    let start = 0;
                    const increment = value / (duration / 16);

                    const counter = setInterval(() => {
                        start += increment;
                        if (start >= value) {
                            setCount(value);
                            clearInterval(counter);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [value, duration]);

    return (
        <div ref={ref} className="flex flex-col">
            <div className={`text-[7rem] leading-[1] text-[var(--tp-black-1)] font-medium} ${style["font-mango"]}`}>
                {count}
                {suffix}
            </div>

            <div className="font-medium text-[1.2rem] leading-[1.2] text-[var(--tp-black-1)]">
                {text}
            </div>
        </div>
    );
};

export default PowerHouseCount;