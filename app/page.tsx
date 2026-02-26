import Hero from "@/components/sections/Hero";
import CurrentSpeakers from "@/components/sections/CurrentSpeakers";
import PastSpeakers from "@/components/sections/PastSpeakers";
import KeyStatistics from "@/components/sections/KeyStatistics";
import PowerHouse from "@/components/sections/PowerHouse";
import Overview from "@/components/sections/Overview";
import Fsimarket from "@/components/sections/Fsimarket";
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
    </>
  );
}
