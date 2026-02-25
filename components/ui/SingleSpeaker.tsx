
import styles from "@/public/css/SingleSpeaker.module.css";
import customFonts from "@/public/css/CustomFonts.module.css";
type SingleSpeakerProps = {
    bgcolor: string;
    fname: string;
    lname: string;
    designation: string;
    company: string;
    imageSrc: string;
};

const SingleSpeaker = ({ bgcolor, fname, lname, designation, company, imageSrc }: SingleSpeakerProps) => {
    return (
        <div style={{ backgroundColor: bgcolor }} className={`${styles["single-speaker"]} relative overflow-hidden bg-no-repeat bg-top bg-cover`}>
            <div className="hover-item group overflow-hidden aspect-[380/470] w-full">
                <img
                    src={imageSrc}
                    alt={fname + " " + lname}
                    className="w-full h-full object-cover origin-center transition-transform duration-700 scale-[1.1]"
                />
            </div>
            <div className="absolute flex flex-col gap-[10px] z-1 bottom-0 left-0 right-0 pt-[15px] px-[15px] pb-[20px] text-white">
                <div className="flex flex-col gap-[15px] font-semibold text-[clamp(1rem,6vw,1.2rem)] uppercase">
                    {fname} <span className={`text-[clamp(4rem,6vw,4.9rem)] tracking-[0.2rem] leading-[0.7] ${customFonts["font-mango"]}`}>{lname}</span>
                </div>
                <div className="flex flex-col gap-[5px]">
                    <div className="font-light text-[0.9rem] leading-[1.4]">{designation}</div>
                    <div className="font-semibold text-[0.9rem] leading-[1.4]">{company}</div>
                </div>
            </div>
        </div>
    )

};

export default SingleSpeaker;