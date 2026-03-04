"use client";

import { ReactNode, useEffect } from "react";

import { createPortal } from "react-dom";

type TestimonialModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function TestimonialModal({ isOpen, onClose, children }: TestimonialModalProps) {
  // Prevent body scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-auto">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative bg-white w-[90%] max-w-4xl p-0 rounded-2xl shadow-2xl 
                      transform transition-all duration-300 scale-100 opacity-100 z-10">

        {/* Close Button */}
        <button onClick={onClose}
          className="absolute right-[-15px] top-[-10px] 
             bg-[#e22013] text-white 
             w-[32px] h-[32px] 
             grid place-content-center 
             rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg"
            viewBox="0 0 16 16">
            <path
              d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </button>

        {children}
      </div>
    </div>,
    document.body
  );
}