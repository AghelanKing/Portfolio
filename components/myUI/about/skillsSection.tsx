import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { HiOutlineCode } from "react-icons/hi";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiGithub,
  SiNodedotjs,
  SiGit,
} from "react-icons/si";

import { FaHtml5, FaCss3 } from "react-icons/fa";
import { RiSupabaseFill, RiVercelFill } from "react-icons/ri";

import Skills from "./Skills";

const skills = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", Icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: FaCss3, color: "#1572B6" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "#ffffff" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Vercel", Icon: RiVercelFill, color: "#ffffff" },
  { name: "Supabase", Icon: RiSupabaseFill, color: "#3ECF8E" },
];

function SkillsSection() {
  return (
    <section
      aria-labelledby="skills-title"
      className="rounded-2xl border border-white/10 bg-[#202329]/70 p-6 backdrop-blur-md sm:p-10 lg:p-12"
    >
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
          Skills
        </TextAnimate>
      </div>
      <div className="mt-7">
        <TextAnimate
          startOnView
          once
          as="h3"
          animation="blurInUp"
          by="word"
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Technologies I Work With
        </TextAnimate>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
          Technologies and tools I use to build modern web applications and
          improve my development workflow.
        </p>
      </div>

      <div className="mt-7 border-t border-white/10 pt-6">
        <Skills skills={skills} />
      </div>
    </section>
  );
}

export default SkillsSection;
