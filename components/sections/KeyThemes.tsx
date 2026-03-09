import React from 'react'
import SectionTitle from '../ui/SectionTitle'
import customFonts from "@/public/css/CustomFonts.module.css";
import KeyThemesBox from '../ui/KeyThemesBox';
const KeyThemes = () => {
    return (
        <section className="key-themes relative py-[80px] bg-[#100201]">
            <div className="max-w-7xl mx-auto w-full flex flex-col gap-[80px] px-20">
                <SectionTitle subtitle="key" title="THEMES" textcolor="white" />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]'>
                    <KeyThemesBox title="AI-Powered Hyper-Personalized Customer Experience" icon="/images/icons/AI+ML.svg" />
                    <KeyThemesBox title="Kenya’s Strategic Vision for Financial Innovation" icon="/images/icons/Banking4.0.svg" />
                    <KeyThemesBox title="Generative AI & Data Analytics in FSI" icon="/images/icons/DecisionMaking.svg" />
                    <KeyThemesBox title="Identity & Security with Biometric Innovations" icon="/images/icons/FortifyingCyberspace.svg" />
                    <KeyThemesBox title="Cutting Costs & Fighting FinCrime with AI" icon="/images/icons/GoCashless.svg" />
                    <KeyThemesBox title="Inclusive Growth via Smart Regulatory Frameworks" icon="/images/icons/MobileBanking.svg" />
                    <KeyThemesBox title="Future-Ready Finance with Cloud & Scalability" icon="/images/icons/OpenBanking.svg" />
                    <KeyThemesBox title="Digital Transformation Ecosystem in FSI" icon="/images/icons/RevolutionizingFSI.svg" />
                </div>
            </div>
        </section>
    )
}

export default KeyThemes