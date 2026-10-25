import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { HiOutlineCode } from "react-icons/hi";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import Project from "./Project";
import { AuroraText } from "@/components/ui/aurora-text";

const projects = [
  {
    name: "Arvan",
    img: "/Arvan.PNG",
    href: "https://arvan-sofa.vercel.app/",
    description:
      "ARVAN is a modern furniture e-commerce platform featuring product browsing, filtering, favorites, shopping cart, and userauthentication.",
    skills: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Supabase", Icon: RiSupabaseFill, color: "#3ECF8E" },
    ],
  },
  {
    name: "TaskFlow",
    img: "/TaskFlow.PNG",
    href: "https://taskflow-tasks-projects.vercel.app/",
    description:
      "TaskFlow is a collaborative task management app where teams can create projects, assign prioritized tasks with deadlines, and track progress with live statistics.",
    skills: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Supabase", Icon: RiSupabaseFill, color: "#3ECF8E" },
    ],
  },
  {
    name: "World Rank",
    img: "/WorldRank.PNG",
    href: "https://aghelanking.github.io/World-Rank/",
    description:
      "A modern React application for exploring countries around the world, built as a hands-on project to practice data fetching, state management, routing, responsive UI, and reusable React architecture.",
    skills: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },

  {
    name: "Translate App",
    img: "/Translate.PNG",
    href: "https://aghelanking.github.io/Translate-app/",
    description:
      "A translation app built with React that allows users to translate text between different languages through a simple and intuitive interface.",
    skills: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },

  {
    name: "Country Quiz",
    img: "/Quiz.PNG",
    href: "https://aghelanking.github.io/Country-Quiz/",
    description:
      "An interactive country quiz built with React, challenging users to test their geography knowledge through fun and engaging questions.",
    skills: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },

  {
    name: "Music Player",
    img: "/MusicPlayer.PNG",
    href: "https://aghelanking.github.io/10-music-Random-play/",
    description:
      "A music player built with React that fetches 10 random songs from an API, lets users play music, and save their favorite tracks to a favorites list.",
    skills: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
];

function Projects() {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-[#171717]/30 p-4 backdrop-blur-md sm:p-6 md:p-8 lg:p-10">
      <div className="pointer-events-none absolute top-0 left-0 -z-10 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 -z-10 h-72 w-72 rounded-full bg-cyan-600/10 blur-[120px]" />
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
          My project
        </TextAnimate>
      </div>

      <AuroraText className="my-4 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
        Things I&apos;ve Built
      </AuroraText>

      <TextAnimate
        once
        className="ml-1 max-w-2xl text-sm leading-6 text-gray-300 sm:ml-2 sm:text-base sm:leading-7"
        by="character"
        animation="blurInUp"
        as="p"
      >
        A collection of projects, experiments, and ideas brought to life through
        code.
      </TextAnimate>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
        {projects.map((project, index) => (
          <Project key={project.name} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
