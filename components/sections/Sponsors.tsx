import React from 'react'
import SectionTitle from '../ui/SectionTitle'

const Sponsors = () => {
    return (
        <section className="sponsors-section relative py-[80px]">
            <div className="max-w-7xl mx-auto w-full flex flex-col gap-[80px]">
                <SectionTitle subtitle="SPONSORS" title="& PARTNERS" />
                <div className='flex flex-col gap-[40px] justify-center items-center mx-auto'>
                    <h3 className='text-[1.4rem] font-bold uppercase'>Supporting Partners</h3>
                    <div className='flex flex-wrap gap-[40px] justify-center items-center mx-auto'>
                        <div className="w-full md:w-1/2 lg:w-1/3 transition-all duration-[350ms] ease-in-out">
                            <a href="#" rel="nofollow" target="_blank">
                                <img
                                    src="/images/sponsors/supporting-partners/nifc.jpg"
                                    alt="Supporting Partners - NIFC"
                                    className="w-full h-auto border border-[#cccccc85]"
                                />
                            </a>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 transition-all duration-[350ms] ease-in-out">
                            <a href="#" rel="nofollow" target="_blank">
                                <img
                                    src="/images/sponsors/supporting-partners/kenya_bankers_supporting_partner.jpg"
                                    alt="Supporting Partners - Kenya Bankers"
                                    className="w-full h-auto border border-[#cccccc85]"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sponsors