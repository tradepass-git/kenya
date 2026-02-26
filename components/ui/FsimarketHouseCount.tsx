"use client";
import { useEffect, useRef, useState } from "react";
import style from "@/public/css/CustomFonts.module.css";
type FsimarketProps = {
    icon?: string;
    suffix?: string;
    value?: number;
    text?: string;
    duration?: number; // optional animation duration in ms
};

const FsimarketHouseCount = ({
    icon = "",
    suffix = "",
    value = 0,
    text,
    duration = 2000,
}: FsimarketProps) => {
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

        <div
            ref={ref}
            className="
    flex flex-col items-center justify-center
    p-[40px] min-h-[220px]
    border border-[var(--tp-border)]
    transition-transform transition-colors
    duration-300 ease-in-out
    hover:-translate-y-2 hover:bg-[var(--tp-bg-1)]
    will-change-transform
  "
        >
            <div
                className={`flex items-center text-[5rem] leading-[1] text-[var(--tp-black-1)] ${style["font-mango"]}`}
            >
                {icon && <div className="mr-2">{icon}</div>}
                <div>
                    {count}
                    {suffix}
                </div>
            </div>

            <div className="text-[var(--tp-black-1)] text-[1rem] font-medium text-center">
                {text}
            </div>
        </div>
    );
};

export default FsimarketHouseCount;