import Hero from "@/components/sections/Hero";
import CurrentSpeakers from "@/components/sections/CurrentSpeakers";
import PastSpeakers from "@/components/sections/PastSpeakers";
import KeyStatistics from "@/components/sections/KeyStatistics";
export default function Home() {
  return (
    <>
      <Hero />
      <CurrentSpeakers />
      <PastSpeakers />
      <KeyStatistics />
    </>
  );
}
