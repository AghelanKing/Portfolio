import AboutMeSection from "@/components/myUI/AboutMeSection";
import ContactMe from "@/components/myUI/ContactMe";
import Hero from "@/components/myUI/Hero";
import Projects from "@/components/myUI/Projects";
import TechStack from "@/components/myUI/TechStack";
import { TimelineSection } from "@/components/myUI/TimelineSection";

export default async function Home() {
  return (
    <div>
      <Hero />
      <AboutMeSection />
      <TechStack />
      <Projects />
      <TimelineSection />
      <ContactMe />
    </div>
  );
}
