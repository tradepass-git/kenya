import React from 'react'
import SectionTitle from '../ui/SectionTitle'
import SponsorsImg from '../ui/SponsorsImg'
const Sponsors = () => {
    return (
        <section className="sponsors-section relative pb-[40px] py-[80px]">
            <div className="max-w-7xl mx-auto w-full flex flex-col gap-[80px]">
                <SectionTitle subtitle="SPONSORS" title="& PARTNERS" />
                <div className="flex flex-col gap-[40px]">
                    <div className='flex flex-col gap-[40px] justify-center items-center w-full mx-auto'>
                        <h3 className='text-[1.4rem] font-bold uppercase leading-[1]'>Supporting Partners</h3>
                        <div className='flex flex-wrap justify-center items-center w-full mx-auto'>
                            <SponsorsImg
                                imgUrl="/images/sponsors/supporting-partners/nifc.jpg"
                                companyname="NIFC"
                                hubspotId=""
                                weblink="https://nifca.go.ke/"
                                modaltitle="Supporting Partner"
                                widthclass="md:w-1/3"
                            />
                            <SponsorsImg
                                imgUrl="/images/sponsors/supporting-partners/kenya_bankers_supporting_partner.jpg"
                                companyname="Kenya Bankers"
                                hubspotId=""
                                weblink="https://www.kba.co.ke/"
                                modaltitle="Supporting Partner"
                                widthclass="md:w-1/3"
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-[40px] justify-center items-center w-full mx-auto'>
                        <h3 className='text-[1.4rem] font-bold uppercase leading-[1]'>GOLD SPONSORS</h3>
                        <div className='flex flex-wrap justify-center items-center md:w-[90%] w-full mx-auto'>
                            <SponsorsImg
                                imgUrl="/images/sponsors/gold-sponsors/datamellon.jpg"
                                companyname="DataMellon"
                                hubspotId="2e88712e-4159-4324-8165-0da3c4b34b4f"
                                weblink=""
                                modaltitle="Gold Sponsor"
                                widthclass="md:w-1/3"
                            />
                            <SponsorsImg
                                imgUrl="/images/sponsors/gold-sponsors/NICE-Actimize-Gold-1.jpg"
                                companyname="NICE"
                                hubspotId="a3fb5b9d-1f4e-4e78-996b-fd8df9c48275"
                                weblink=""
                                modaltitle="Gold Sponsor"
                                widthclass="md:w-1/3"
                            />
                            <SponsorsImg
                                imgUrl="/images/sponsors/gold-sponsors/asseco.jpg"
                                companyname="Asseco"
                                hubspotId="c302df88-49aa-4ecc-acc3-1e5d34352d23"
                                weblink=""
                                modaltitle="Gold Sponsor"
                                widthclass="md:w-1/3"
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-[40px] justify-center items-center w-full mx-auto'>
                        <h3 className='text-[1.4rem] font-bold uppercase leading-[1]'>SILVER SPONSORS</h3>
                        <div className='flex flex-wrap justify-center items-center w-full mx-auto'>
                            <SponsorsImg
                                imgUrl="/images/sponsors/silver-sponsors/wso2.jpg"
                                companyname="wso2"
                                hubspotId="9601d075-4498-4edd-8902-d8b01066f8c4"
                                weblink=""
                                modaltitle="Silver Sponsor"
                                widthclass="md:w-1/4"
                            />
                            <SponsorsImg
                                imgUrl="/images/sponsors/silver-sponsors/sybyl.jpg"
                                companyname="sybyl"
                                hubspotId=""
                                weblink=""
                                modaltitle="Silver Sponsor"
                                widthclass="md:w-1/4"
                            />
                            <SponsorsImg
                                imgUrl="/images/sponsors/silver-sponsors/questionpro.png"
                                companyname="Questionpro"
                                hubspotId="156a2045-4c75-414b-adfe-3b0c79805e0d"
                                weblink=""
                                modaltitle="Silver Sponsor"
                                widthclass="md:w-1/4"
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-[40px] justify-center items-center w-full mx-auto'>
                        <h3 className='text-[1.4rem] font-bold uppercase leading-[1]'>ASSOCIATE SPONSORS</h3>
                        <div className='flex flex-wrap justify-center items-center w-full mx-auto'>
                            <SponsorsImg
                                imgUrl="/images/sponsors/associate-sponsors/marlocks.png"
                                companyname="Marlocks"
                                hubspotId="a54ba0cd-9a72-4937-ae68-4546f47b3c99"
                                weblink=""
                                modaltitle="Associate Sponsor"
                                widthclass="md:w-1/4"
                            />
                            <SponsorsImg
                                imgUrl="/images/sponsors/associate-sponsors/winjit.jpg"
                                companyname="Winjit"
                                hubspotId="0facb068-6099-4dce-af55-5a3041789567"
                                weblink=""
                                modaltitle="Associate Sponsor"
                                widthclass="md:w-1/4"
                            />
                            <SponsorsImg
                                imgUrl="/images/sponsors/associate-sponsors/hyland-wfis-kenya.jpg"
                                companyname="Hyland"
                                hubspotId="7e1e0b73-c74c-47e6-b342-4ee2cacb7bcb"
                                weblink=""
                                modaltitle="Associate Sponsor"
                                widthclass="md:w-1/4"
                            />
                            <SponsorsImg
                                imgUrl="/images/sponsors/associate-sponsors/oradian.png"
                                companyname="Oradian"
                                hubspotId="19d44619-dc1b-4dcb-982a-d0a02efab648"
                                weblink=""
                                modaltitle="Associate Sponsor"
                                widthclass="md:w-1/4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sponsors