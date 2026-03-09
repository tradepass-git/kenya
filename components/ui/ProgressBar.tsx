import React from 'react'
type ProgressBarProps = {
    value: number;
    text: string;
};

const ProgressBar = ({ value, text }: ProgressBarProps) => {
    return (
        <div className="bar-group w-full h-[70px] flex flex-col gap-[15px] justify-center">
            <div className="bar-text md:text-right">{text}</div>
            <div className="bar">
                <div className="item-bar relative cell w-full h-[1px] bg-[#363c431a] rounded-[4px]">
                    <div className={`progress absolute left-0 top-[-5px] bottom-0 m-0 h-[10px] bg-[var(--tp-primary-color)] rounded-[4px] transition-[width] duration-100 ease-in-out`}  data-progress={value}></div>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar