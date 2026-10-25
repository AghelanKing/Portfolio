import AboutMe from "@/components/myUI/about/AboutMe";
import SkillsSection from "@/components/myUI/about/skillsSection";

export default async function Page() {
  return (
    <section
      id="home"
      className="mx-auto mt-6 flex w-full max-w-7xl flex-col gap-6 px-4 pb-12 sm:px-6 lg:px-8"
    >
      <AboutMe />
      <SkillsSection />
    </section>
  );
}
