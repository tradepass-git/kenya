
import customFonts from "@/public/css/CustomFonts.module.css";
type SectionTitleProps = {
  subtitle?: string;
  title: string;
  textcolor?: string;
};

const SectionTitle = ({ subtitle, title, textcolor }: SectionTitleProps) => {
  return (
    <h2 className={`${customFonts["font-aeonik-black"]} flex flex-col uppercase font-black leading-none text-[clamp(3rem,6vw,4rem)] text-left ${textcolor ? `text-${textcolor}` : 'text-black'} max-[1600]:px-[20px]`}>
      {subtitle && (
        <span className={`text-[1.8rem] font-normal ${customFonts["font-aeonik-trial"]}`}>
          {subtitle}
        </span>
      )}
      {title}
    </h2>
  );
};

export default SectionTitle;