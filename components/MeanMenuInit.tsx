"use client"
import { useEffect } from "react"

export default function MeanMenuInit() {
    useEffect(() => {
        const checkMeanMenu = setInterval(() => {
            if (
                typeof window !== "undefined" &&
                window.jQuery &&
                window.jQuery.fn &&
                window.jQuery.fn.meanmenu
            ) {
                window.jQuery("#mobile-menu").meanmenu({
                    meanMenuContainer: ".mobile-menu",
                    meanScreenWidth: "1199",
                    meanMenuOpen: "<span></span><span></span><span></span>",
                })
                clearInterval(checkMeanMenu)
            }
        }, 200)

        return () => clearInterval(checkMeanMenu)
    }, [])

    return null
}