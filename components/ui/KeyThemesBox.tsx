import React from 'react'
type KeyThemesBoxProps = {
    title: string;
    icon: string;
}
const KeyThemesBox = ({ title, icon }: KeyThemesBoxProps) => {
    return (
        <div className='border border-[#525252] px-[30px] h-[230px] flex flex-col gap-[10px] justify-center items-center text-center text-white text-[0.9rem] leading-[1.4] transition-transform
duration-300 ease-out hover:-translate-y-[8px]'>
            <img src={icon} alt={title} className='w-[50px]' />
            <h6>{title}</h6>
        </div>
    )
}

export default KeyThemesBox