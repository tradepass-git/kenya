"use client";

import { useState, useRef } from "react";
import Slider, { Settings } from "react-slick";
import Style from "@/public/css/CustomClass.module.css";
import customFonts from "@/public/css/CustomFonts.module.css";
import Modal from '../ui/TestimonialModal';

type SlideType = {
  id: number;
  image: string;
  fname: string;
  lname: string;
  company: string;
  designation: string;
  youtubeurl: string;
};

const Testimonials = () => {
  const sliderRef = useRef<Slider | null>(null);

  const slides: SlideType[] = [
    {
      id: 1,
      image: "/images/testimonials/Ahmed-ElSonbaty.jpg",
      fname: "Ahmed",
      lname: "ElSonbaty",
      company: "Data Gear",
      designation: "CEO & Founder",
      youtubeurl: "https://www.youtube.com/embed/egYcvKkHc1M?si=iAnXomSSViyzv1qV?autoplay=1"
    },
    {
      id: 2,
      image: "/images/testimonials/devan.jpg",
      fname: "DEVAN",
      lname: "MANMOANDAS",
      company: "Chief Financial Officer",
      designation: "Moza Banco, S.A.",
      youtubeurl: "https://www.youtube.com/embed/Rg_ZtfwYCqE?si=UJiE0CcfzGNjmhFQ?autoplay=1"
    },
    {
      id: 3,
      image: "/images/testimonials/SHEHRYAR.jpg",
      fname: "SHEHRYAR",
      lname: "ALI",
      company: "MASTERCARD",
      designation: "Country Manager for East Africa",
      youtubeurl: "https://www.youtube.com/embed/nTYl41c1dS4?si=q_5vFRJjSQBk036G?autoplay=1"
    },
  ];

  const [otherImage, setOtherImage] = useState<string>(slides[0].image);

  const settings: Settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
        },
      },
    ],

    beforeChange: (current: number) => {
      setOtherImage(slides[current].image);
    }
  };

  const [open, setOpen] = useState(false);

  const [videoUrl, setVideoUrl] = useState<string>("");

  return (
    <>
      <section className='testimonilas bg-[var(--tp-bg-1)] py-[80px] max-[991]:pt-0 relative'>
        <div className='max-w-7xl mx-auto w-full relative px-20'>
          <Slider ref={sliderRef} {...settings}>
            {slides.map((slide) => (
              <div key={slide.id}>
                <div className="grid grid-cols-12 items-stretch gap-[40px] w-full mx-auto overflow-hidden">
                  <div className="lg:col-span-5 col-span-12">
                    <div className="relative">
                      <div className={`${Style["shine-img-hover"]} relative`}>
                        <div className={`${Style["shine-img"]} overflow-hidden relative`}>
                          <img src={slide.image} alt={`${slide.fname} ${slide.lname}`} className='w-full  h-[300px] object-cover lg:rounded-[10px] transition-all duration-700 ease-in opacity-100 scale-100' />
                        </div>
                      </div>
                      <div className="absolute flex justify-start bottom-[30px] left-[30px]">
                        <button onClick={() => {
                          setVideoUrl(slide.youtubeurl);
                          setOpen(true);
                        }} className="cursor-pointer">
                          <div className="text-[1rem] text-white font-semibold m-0 p-0 relative">
                            <div className={`${Style["circle-ripple"]} w-[72px] h-[72px] leading-[60px] m-0 bg-[var(--tp-primary-color)] flex items-center justify-center rounded-[50%]`}><i className="fas fa-play text-[1.5rem] m-0"></i></div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-2 col-span-12 relative min-[992px]:flex min-[992px]:justify-center hidden"><svg xmlns="http://www.w3.org/2000/svg" width="44" height="322" viewBox="0 0 44 322"
                    fill="none" className="absolute top-1/2 -translate-y-1/2">
                    <path d="M43 -0.000976562V151.999L2 192.999H43V321.999" stroke="#414141"></path>
                  </svg></div>
                  <div className="lg:col-span-5 col-span-12">
                    <div className="lg:flex lg:flex-col lg:h-[300px] lg:gap-[30px] lg:px-0 px-[20px]">
                      <div className="w-[56px]"><img src="images/quote.png" /></div>
                      <div className="flex flex-col gap-[10px]">
                        <div className="flex flex-col gap-[15px] font-semibold text-[clamp(1rem,6vw,1.2rem)] uppercase">
                          {slide.fname} <span className={`text-[clamp(4rem,6vw,4.9rem)] tracking-[0.2rem] leading-[0.7] ${customFonts["font-mango"]}`}>{slide.lname}</span>
                        </div>
                        <div className="flex flex-col gap-[0px]">
                          <div className="font-light text-[1rem] leading-[1.4]">{slide.designation}</div>
                          <div className="font-semibold text-[1rem] leading-[1.4]">{slide.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            ))}
          </Slider>

          <div className="flex flex-col gap-[10px] absolute top-1/2 -translate-y-1/2 right-[0px]">
            <button
              className="w-[56px] min-w-[56px] h-[56px] 
       rounded-full 
       flex items-center justify-center 
       border border-[#414141] 
       transition-all 
       bg-transparent 
       text-[24px] 
       z-[2] cursor-pointer"
              onClick={() => sliderRef.current?.slickPrev()}
            >
              <i className="fa-solid fa-angle-left"></i>
            </button>

            <button
              className="w-[56px] min-w-[56px] h-[56px] 
       rounded-full 
       flex items-center justify-center 
       border border-[#414141] 
       transition-all 
       bg-transparent 
       text-[24px] 
       z-[2] cursor-pointer"
              onClick={() => sliderRef.current?.slickNext()}
            >
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>

        </div>
        <div className="hidden min-[1600px]:flex absolute w-[330px] top-[80px] -translate-x-[40%] opacity-[0.25]">
          <img
            src={otherImage}
            alt="Other Section"
            className="w-[432px] h-[300px] object-cover rounded-[10px]"
          />
        </div>
        <Modal
          isOpen={open}
          onClose={() => {
            setOpen(false);
            setVideoUrl(""); // stop video when closing
          }}>
          <iframe
            width="100%"
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video rounded-lg"
          />
        </Modal>
      </section>
    </>
  )
}

export default Testimonials