"use client";

import { useEffect, useState } from "react";

type ProgressProps = {
    percent: number;
    color: string;
    speed?: number;
    label: string;
};

const CircularProgress = ({
    percent,
    color,
    speed = 20,
    label,
}: ProgressProps) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let current = 0;

        const interval = setInterval(() => {
            current++;
            setProgress(current);

            if (current >= percent) {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [percent, speed]);

    return (
        <div className="relative flex flex-col items-center justify-center">

            {/* Progress Ring */}
            <div
                className="relative w-[190px] h-[190px] rounded-full 
        after:content-[''] 
        after:absolute 
        after:w-[140px] 
        after:h-[140px] 
        after:bg-[#ffffff] 
        after:rounded-full 
        after:top-[50%]
        after:left-[50%] 
        after:-translate-x-[50%] 
        after:-translate-y-[50%]"
                style={{
                    background: `conic-gradient(
            ${color} ${progress * 3.6}deg,
            #ededed 0deg
          )`,
                }}
            />

            {/* Percentage Text */}
            <div className="absolute top-[35%] font-bold text-[1.5rem]">
                {progress}%
            </div>

            {/* Label */}
            <div className="text-center mt-[10px] text-[1rem]">
                {label}
            </div>
        </div>
    );
};

export default CircularProgress;