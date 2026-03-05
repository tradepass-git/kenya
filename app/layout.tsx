import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import '@fortawesome/fontawesome-free/css/all.min.css'
import "./globals.css";
import Script from "next/script";
import MeanMenuInit from "@/components/MeanMenuInit";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ThemeToggle from "@/components/ThemeToggle";
import localFont from "next/font/local";
const mango = localFont({
  src: [
    {
      path: "../public/fonts/MangoGrotesque-Regular.woff",
      weight: "400",
      style: "normal",
    }
  ],
  variable: "--font-mango",
});

const aeonikBlack = localFont({
  src: [
    {
      path: "../public/fonts/AeonikBlack.ttf",
      weight: "900",
      style: "normal",
    }
  ],
  variable: "--font-aeonik-black",
});

const aeonikBold = localFont({
  src: [
    {
      path: "../public/fonts/AeonikTRIAL-Bold.otf",
      weight: "700",
      style: "normal",
    }
  ],
  variable: "--font-aeonik-bold",
});

const aeonikTrial = localFont({
  src: [
    {
      path: "../public/fonts/AeonikTRIAL.otf",
      weight: "400",
      style: "normal",
    }
  ],
  variable: "--font-aeonik-trial",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "WFIS Kenya 2026 | Nation's leading financial sector event",
  description: "World Financial Innovation Series - Kenya on 3 Mar 2026 will explore the latest in fintech, mobile banking, digital transformation, and cutting-edge FSI trends",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${mango.variable} ${aeonikBlack.variable} ${aeonikTrial.variable} ${aeonikBold.variable} antialiased`}
      >
        <SmoothScroll />
        <Header />
        <div id="smooth-wrapper" className="overflow-hidden">
          <div id="smooth-content" className="will-change-transform">
            <div className="page-content dark:bg-bodybg bg-white flex flex-col gap-[0px]">
            {children}
          </div>
        </div>
      </div>
      <Footer />
      {/* jQuery FIRST */}
      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />

      {/* Make jQuery global */}
      <Script
        id="jquery-global"
        strategy="beforeInteractive"
      >
        {`
    window.$ = window.jQuery;
  `}
      </Script>

      {/* MeanMenu AFTER jQuery */}
      <Script
        src="/js/Navbar.js"
        strategy="afterInteractive"
      />
      <MeanMenuInit />
    </body>
    </html >
  );
}
