"use client";
import { useState } from 'react'
import Link from "next/link";
import Modal from './ui/Modal';
import BackToTop from "@/components/ui/BackToTop";
export default function Header() {
    const [open, setOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState<string>("");
    const [hubspotId, setHubspotId] = useState<string>("");
    return (
        <>
            <header className="bg-[#000000] border-b border-[#ff9600] fixed top-0 transition-all duration-200 ease-in-out w-full z-10 site-header">
                <div className="main-bar-wraper pl-[30px] max-[767px]:pt-[30px]">
                    <div className="flex items-center justify-between 2xl:gap-40 gap-20">
                        <div className="logo-header">
                            <Link href="/"><img src="/images/Tradepass-White-1.png" alt="Tradepass" className="w-auto" /></Link >
                        </div>
                        <div className="main-menu">
                            <nav id="mobile-menu" className="hidden xl:block">
                                <ul className="flex flex-col min-[1199px]:flex-row items-center space-x-30 min-[1200px]:max-[1400px]:space-x-10 text-white font-normal">
                                    <li><Link href="/" className="hover:text-[var(--tp-primary-color)] text-[14px] min-[1200px]:max-[1600px]:text-[11px] uppercase">Home</Link></li>
                                    <li><Link href="#speakers" className="hover:text-[var(--tp-primary-color)] text-[14px] min-[1200px]:max-[1600px]:text-[11px] uppercase">Speakers</Link></li>
                                    <li><Link href="#happenings" className="hover:text-[var(--tp-primary-color)] text-[14px] min-[1200px]:max-[1600px]:text-[11px] uppercase">Happenings</Link></li>
                                    <li><Link href="#sponsors" className="hover:text-[var(--tp-primary-color)] text-[14px] min-[1200px]:max-[1600px]:text-[11px] uppercase">Sponsors</Link></li>
                                    <li><Link href="/agenda" className="hover:text-[var(--tp-primary-color)] text-[14px] min-[1200px]:max-[1600px]:text-[11px] uppercase">Agenda</Link></li>
                                    <li><Link href="/awards" className="hover:text-[var(--tp-primary-color)] text-[14px] min-[1200px]:max-[1600px]:text-[11px] uppercase">Awards</Link></li>
                                    <li><Link href="/gallery" className="hover:text-[var(--tp-primary-color)] text-[14px] min-[1200px]:max-[1600px]:text-[11px] uppercase">Gallery</Link></li>
                                    <li><Link href="#" className="hover:text-[var(--tp-primary-color)] text-[14px] min-[1200px]:max-[1600px]:text-[11px] uppercase max-[1199px]:!pl-13">Past Edition <i className="fa-solid fa-chevron-down max-[1199px]:!hidden"></i></Link>
                                        <ul className="submenu px-15 py-15 rounded-[3px] bg-[var(--tp-common-white)] top-100 min-[1200px]:space-y-10">
                                            <li>
                                                <Link href="#" className="text-[var(--tp-bg-2)] flex justify-between text-[14px] min-[1200px]:max-[1400px]:text-[11px]">2025 <i className="fa-solid fa-solid fa-chevron-right max-[1199px]:!hidden"></i></Link>
                                                <ul className="submenu px-15 py-15 rounded-[3px] bg-[var(--tp-common-white)] top-0 left-full  min-[1200px]:space-y-10">
                                                    <li><Link href="/agenda-2025" className="text-[var(--tp-bg-2)] hover:text-[var(--tp-primary-color)] text-[14px] min-[1200px]:max-[1600px]:text-[11px] uppercase">Agenda</Link></li>
                                                    <li><Link href="/2025-sponsors" className="text-[var(--tp-bg-2)] hover:text-[var(--tp-primary-color)] text-[14px] min-[1200px]:max-[1600px]:text-[11px] uppercase">Sponsors</Link></li>
                                                    <li><Link href="/2025-speakers" className="text-[var(--tp-bg-2)] hover:text-[var(--tp-primary-color)] text-[14px] min-[1200px]:max-[1600px]:text-[11px] uppercase">Speakers</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="#" className="text-[var(--tp-bg-2)] flex justify-between text-[14px] min-[1200px]:max-[1400px]:text-[11px]">2023 <i className="fa-solid fa-solid fa-chevron-right max-[1199px]:!hidden"></i></Link>
                                                <ul className="submenu px-15 py-15 rounded-[3px] bg-[var(--tp-common-white)] top-0 left-full min-[1200px]:space-y-10">
                                                    <li><Link href="/agenda-2023" className="text-[var(--tp-bg-2)] hover:text-[var(--tp-primary-color)] text-[14px] min-[1200px]:max-[1600px]:text-[11px] uppercase">Agenda</Link></li>
                                                    <li><Link href="/2023-sponsors" className="text-[var(--tp-bg-2)] hover:text-[var(--tp-primary-color)] text-[14px] min-[1200px]:max-[1600px]:text-[11px] uppercase">Sponsors</Link></li>
                                                    <li><Link href="/2023-speakers" className="text-[var(--tp-bg-2)] hover:text-[var(--tp-primary-color)] text-[14px] min-[1200px]:max-[1600px]:text-[11px] uppercase">Speakers</Link></li>
                                                    <li><Link href="/2023-edition" className="text-[var(--tp-bg-2)] hover:text-[var(--tp-primary-color)] text-[14px] min-[1200px]:max-[1600px]:text-[11px] uppercase">Highlights</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="mobile-menu absolute right-0 w-full top-0"></div>
                        <div className="hidden md:!block">
                            <div className="flex items-center gap-5 md:max-[1199px]:mr-[90px]">
                                <Link href="#"
                                    onClick={() => {
                                        setHubspotId("68d82393-bb63-4eec-82d4-a7eb5ae32cdc");
                                        setModalTitle("Sponsor Enquiry");
                                        setOpen(true);
                                    }} className="inline-block text-[14px] min-[1200px]:max-[1600px]:text-[11px] font-semibold uppercase not-italic no-underline tracking-[2px] text-black fill-black bg-[var(--tp-bg-3)] rounded-none py-[30px] px-[15px] min-[1200px]:py-[37px] min-[1400px]:px-[20px] min-[1600px]:px-[40px] border border-0 transition-all duration-300 hover:bg-[var(--tp-bg-2)] 
  hover:text-white 
  hover:fill-white"

                                >
                                    Sponsor Enquiry
                                </Link>
                                <Link href="#"
                                    onClick={() => {
                                        setHubspotId("3f12b354-2e4f-4a4e-ae09-09d0d6e96926");
                                        setModalTitle("Delegate Enquiry");
                                        setOpen(true);
                                    }}

                                    className="inline-block text-[14px] min-[1200px]:max-[1600px]:text-[11px] font-semibold uppercase not-italic no-underline tracking-[2px] text-black fill-black bg-[var(--tp-bg-3)] rounded-none py-[30px] px-[15px] min-[1200px]:py-[37px] min-[1400px]:px-[20px] min-[1600px]:px-[40px] border border-0 transition-all duration-300 hover:bg-[var(--tp-bg-2)] 
  hover:text-white 
  hover:fill-white"
                                >
                                    Delegate Enquiry
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block md:!hidden text-center">
                    <div className="flex items-center justify-center gap-5 mt-10">
                        <Link href="#"
                            onClick={() => {
                                setHubspotId("68d82393-bb63-4eec-82d4-a7eb5ae32cdc");
                                setModalTitle("Sponsor Enquiry");
                                setOpen(true);
                            }}
                            className="inline-block text-[12px] font-semibold uppercase not-italic no-underline tracking-[2px] text-black fill-black bg-[var(--tp-bg-3)] rounded-none py-[15px] px-[10px] border border-0 transition-all duration-300 hover:bg-[var(--tp-bg-2)] 
  hover:text-white 
  hover:fill-white"
                        >
                            Sponsor Enquiry
                        </Link>
                        <Link href="#"
                            onClick={() => {
                                setHubspotId("3f12b354-2e4f-4a4e-ae09-09d0d6e96926");
                                setModalTitle("Delegate Enquiry");
                                setOpen(true);
                            }}
                            className="inline-block text-[12px] font-semibold uppercase not-italic no-underline tracking-[2px] text-black fill-black bg-[var(--tp-bg-3)] rounded-none py-[15px] px-[10px] border border-0 transition-all duration-300 hover:bg-[var(--tp-bg-2)] 
  hover:text-white 
  hover:fill-white"
                        >
                            Delegate Enquiry
                        </Link>
                    </div>
                </div>
            </header>
            <BackToTop />
            <Modal
                isOpen={open}
                title={modalTitle}
                formId={hubspotId}
                onClose={() => {
                    setOpen(false);
                }}>
            </Modal>
        </>
    )
}