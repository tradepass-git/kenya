import Hero from "@/components/sections/Hero";
import CurrentSpeakers from "@/components/sections/CurrentSpeakers";
import PastSpeakers from "@/components/sections/PastSpeakers";
import KeyStatistics from "@/components/sections/KeyStatistics";
import PowerHouse from "@/components/sections/PowerHouse";
import Overview from "@/components/sections/Overview";
import Fsimarket from "@/components/sections/Fsimarket";
import Conference from "@/components/sections/Conference";
import KeyThemes from "@/components/sections/KeyThemes";
import Sponsors from "@/components/sections/Sponsors";
import Testimonials from "@/components/sections/Testimonials";
export default function Home() {
  return (
    <>
      <Hero />
      <CurrentSpeakers />
      <PastSpeakers />
      <KeyStatistics />
      <PowerHouse />
      <Overview />
      <Fsimarket />
      <Conference />
      <KeyThemes />
      <Sponsors />
      <Testimonials />
    </>
  );
}
