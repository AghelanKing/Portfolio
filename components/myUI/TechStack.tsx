"use client";

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

import { HiOutlineCode } from "react-icons/hi";
import { BlurFade } from "../ui/blur-fade";
import { TextAnimate } from "../ui/text-animate";
import { OrbitingCircles } from "../ballmac/orbiting-circles";
import Image from "next/image";

const categories = [
  {
    title: "Frontend",
    description: "Building modern interfaces",
    skills: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", Icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", Icon: FaCss3, color: "#1572B6" },
    ],
  },
  {
    title: "Styling & Design",
    description: "Crafting the visual experience",
    skills: [{ name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" }],
  },
  {
    title: "Tools & Workflow",
    description: "From code to deployment",
    skills: [
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub", Icon: SiGithub, color: "#ffffff" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Vercel", Icon: RiVercelFill, color: "#ffffff" },
      { name: "Supabase", Icon: RiSupabaseFill, color: "#3ECF8E" },
    ],
  },
];

function TechStack() {
  return (
    <section className="relative mx-auto mt-5 flex w-full max-w-7xl flex-col gap-6 px-4 py-10 sm:gap-8 sm:px-8 sm:py-12 lg:px-10">
      {/* Heading */}
      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
        <BlurFade delay={0.1} className="shrink-0">
          <span className="inline-flex -rotate-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-linear-to-br from-violet-500/15 to-cyan-400/5 p-2.5 text-2xl text-violet-300 shadow-[0_0_30px_rgba(139,92,246,0.12)] backdrop-blur-xl transition-transform duration-300 hover:rotate-0 sm:p-3.5 sm:text-3xl">
            <HiOutlineCode />
          </span>
        </BlurFade>

        <TextAnimate
          startOnView
          once
          as="h2"
          animation="blurInUp"
          by="character"
          className="min-w-0 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
        >
          Tech Stack
        </TextAnimate>
      </div>

      {/* Orbiting Technologies */}
      <div className="relative mx-auto mt-2 flex aspect-square w-full max-w-125 items-center justify-center">
        <div className="pointer-events-none absolute size-2/3 rounded-full bg-purple-500/10 blur-[70px] sm:blur-[90px]" />

        {/* Personal Logo */}
        <div className="relative z-10 flex size-16 items-center justify-center rounded-full border border-purple-400/30 bg-[#121016] shadow-[0_0_40px_rgba(139,92,246,0.2)] sm:size-20 lg:size-24">
          <Image
            src="/Logo.png"
            alt="My Logo"
            width={64}
            height={64}
            priority
            className="size-10 object-contain sm:size-12 lg:size-14"
          />
        </div>

        {/* Inner Orbit */}
        <OrbitingCircles radius={60} duration={20} iconSize={34} path>
          <TechIcon Icon={SiReact} color="#61DAFB" label="React" />
          <TechIcon Icon={SiNextdotjs} color="#FFFFFF" label="Next.js" />
          <TechIcon Icon={SiTailwindcss} color="#06B6D4" label="Tailwind CSS" />
        </OrbitingCircles>

        {/* Middle Orbit */}
        <OrbitingCircles
          radius={105}
          duration={32}
          iconSize={36}
          reverse
          startAngle={-60}
          path
        >
          <TechIcon Icon={SiTypescript} color="#3178C6" label="TypeScript" />
          <TechIcon Icon={RiSupabaseFill} color="#3ECF8E" label="Supabase" />
          <TechIcon Icon={SiGithub} color="#FFFFFF" label="GitHub" />
        </OrbitingCircles>

        {/* Outer Orbit */}
        <OrbitingCircles
          radius={145}
          duration={46}
          iconSize={36}
          startAngle={30}
          path
        >
          <TechIcon Icon={SiJavascript} color="#F7DF1E" label="JavaScript" />
          <TechIcon Icon={FaHtml5} color="#E34F26" label="HTML5" />
          <TechIcon Icon={FaCss3} color="#1572B6" label="CSS3" />
          <TechIcon Icon={SiNodedotjs} color="#5FA04E" label="Node.js" />
        </OrbitingCircles>
      </div>

      {/* Skill Categories */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <BlurFade
            inView
            key={category.title}
            className="min-w-0 rounded-2xl border border-white/8 bg-[#141414] p-4 transition-colors duration-300 hover:border-purple-400/30 sm:p-5 lg:p-6"
          >
            <h3 className="font-medium">{category.title}</h3>

            <p className="mt-1 text-xs text-neutral-500">
              {category.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {category.skills.map(({ name, Icon, color }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/5 px-2.5 py-2 transition-colors hover:bg-white/10 sm:px-3 sm:py-2.5"
                >
                  <Icon size={16} color={color} />
                  <span className="text-xs text-neutral-300">{name}</span>
                </div>
              ))}
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}

function TechIcon({
  Icon,
  color,
  label,
}: {
  Icon: React.ComponentType<{ size?: number; color?: string }>;
  color: string;
  label: string;
}) {
  return (
    <div
      title={label}
      className="flex size-full items-center justify-center rounded-full border border-white/10 bg-[#17171b] shadow-[0_0_20px_rgba(139,92,246,0.12)] transition-transform duration-300 hover:scale-110"
    >
      <Icon size={21} color={color} />
      <span className="sr-only">{label}</span>
    </div>
  );
}

export default TechStack;
