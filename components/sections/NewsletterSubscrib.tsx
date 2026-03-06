"use client";

import { useEffect } from "react";
import calss from "@/public/css/CustomClass.module.css";

const NewsletterSubscrib = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://js.hsforms.net/forms/embed/v2.js";
        document.body.appendChild(script);

        script.onload = () => {
            if ((window as any).hbspt) {
                (window as any).hbspt.forms.create({
                    region: "na1",
                    portalId: "4931918",
                    formId: "155a11ff-9666-41be-aca0-202d6289fec1",
                    target: "#subscribe-box"
                });
            }
        };
    }, []);
    return (
        <section className='newsletter-subscrib relative p-[80px] bg-[#f7f7f8]'>
            <div className='max-w-7xl mx-auto w-full relative'>
                <div id="subscribe-box" className={`${calss["subscribe-box"]} flex flex-col relative items-center w-[70%] mx-auto`}></div>
            </div>
        </section>
    )
}

export default NewsletterSubscrib