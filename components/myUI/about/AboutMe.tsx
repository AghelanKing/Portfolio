import { AuroraText } from "@/components/ui/aurora-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { HiOutlineCode } from "react-icons/hi";

function AboutMe() {
  return (
    <div className="bg-[#171717]/30 backdrop-blur-md border border-white/20 rounded-2xl p-13">
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-0 bottom-0 -z-10 h-72 w-72 rounded-full bg-cyan-600/10 blur-[120px]" />
      <div className="flex w-full">
        <BlurFade delay={0.1} className="shrink-0 relative left-2 bottom-1">
          <span className="relative inline-flex text-sm -rotate-12 items-center justify-center rounded-xl border border-violet-400/20 bg-linear-to-br from-violet-500/15 to-cyan-400/5 p-2.5 text-violet-300 shadow-[0_0_30px_rgba(139,92,246,0.12)] backdrop-blur-xl transition-transform duration-300 hover:rotate-0">
            <HiOutlineCode />
          </span>
        </BlurFade>

        <TextAnimate
          startOnView
          once
          as="h1"
          animation="blurInUp"
          by="character"
          className="font-extrabold leading-none tracking-tight text-xl"
        >
          About Me
        </TextAnimate>
      </div>
      <AuroraText className="text-7xl font-extrabold mt-3">
        Who am I?
      </AuroraText>
      <TextAnimate
        as="p"
        once
        animation="scaleUp"
        by="word"
        delay={0.4}
        className="text-lg text-justify text-gray-400 mt-6"
      >
        Hi, I&apos;m Mohammad Mehdi Aghelan, a Front-End Developer focused on
        building modern, responsive, and user-friendly web applications.
      </TextAnimate>
      <TextAnimate
        as="p"
        once
        animation="slideUp"
        by="character"
        delay={0.8}
        className="text-lg text-justify text-gray-400 mt-6"
      >
        My journey has been driven by hands-on learning and building real
        projects. Working with React and Next.js has helped me develop my skills
        in component-based architecture, data fetching, state management, and
        creating interactive user interfaces.
      </TextAnimate>
      <TextAnimate
        as="p"
        once
        animation="blurInUp"
        by="character"
        delay={1.2}
        className="text-lg text-justify text-gray-400 mt-6"
      >
        Through projects like ARVAN, a furniture e-commerce platform, I&apos;ve
        gained practical experience turning ideas into functional web
        applications.
      </TextAnimate>

      <TextAnimate
        as="p"
        once
        animation="blurInDown"
        by="character"
        delay={1.6}
        className="text-lg text-justify text-gray-400 mt-6"
      >
        I&apos;m continuously learning, improving my code, and looking for
        opportunities to grow as a developer while contributing to meaningful
        projects.
      </TextAnimate>
    </div>
  );
}

export default AboutMe;
