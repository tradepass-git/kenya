"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300); // show after 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {show && (
        <button
          onClick={scrollTop}
          className="fixed bottom-[20px] left-[20px] z-50 bg-[var(--tp-primary-color)] text-[1.3] text-white w-[42px] h-[42px] rounded-full flex items-center justify-center shadow-lg hover:-translate-y-1 transition"
        >
          ↑
        </button>
      )}
    </>
  );
}