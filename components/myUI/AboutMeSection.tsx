import { HiOutlineCode } from "react-icons/hi";
import Link from "next/link";
import { TextAnimate } from "../ui/text-animate";
import { BlurFade } from "../ui/blur-fade";
import { CloudeIcon } from "./CloudeIcon";
import { RainbowButton } from "../ui/rainbow-button";

function AboutMeSection() {
  return (
    <section className="mx-auto mt-5 flex w-full max-w-7xl flex-col items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 md:flex-row md:gap-8 lg:gap-12 lg:px-10">
      {/* Text Content */}
      <div className="flex w-full min-w-0 flex-col items-start gap-5 md:w-1/2">
        {/* Heading */}
        <div className="flex w-full min-w-0 items-center gap-3 sm:gap-4">
          <BlurFade delay={0.1} className="shrink-0">
            <span className="relative inline-flex -rotate-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-linear-to-br from-violet-500/15 to-cyan-400/5 p-2.5 text-2xl text-violet-300 shadow-[0_0_30px_rgba(139,92,246,0.12)] backdrop-blur-xl transition-transform duration-300 hover:rotate-0 sm:p-3.5 sm:text-3xl">
              <HiOutlineCode />
            </span>
          </BlurFade>

          <TextAnimate
            startOnView
            once
            as="h2"
            animation="blurInUp"
            by="character"
            className="min-w-0 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl"
          >
            About Me
          </TextAnimate>
        </div>

        {/* Description */}
        <TextAnimate
          startOnView
          once
          as="p"
          animation="blurIn"
          by="word"
          className="w-full max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8"
        >
          I am a Front-End Developer passionate about building modern and
          user-friendly web experiences. I work with React, Next.js, TypeScript,
          and Tailwind CSS. I enjoy turning ideas into functional and responsive
          interfaces. I am always exploring new technologies and improving my
          skills. Through real-world projects, I focus on clean code and
          thoughtful design. My goal is to build meaningful web experiences and
          grow as a developer.
        </TextAnimate>

        {/* Button */}
        <BlurFade delay={0.2}>
          <Link href="/about" className="inline-flex">
            <RainbowButton
              variant="outline"
              className="h-11 rounded-full px-6! sm:h-12 sm:px-7!"
            >
              About Me
            </RainbowButton>
          </Link>
        </BlurFade>
      </div>

      {/* Visual */}
      <div className="mt-2 flex w-full min-w-0 items-center justify-center md:mt-0 md:w-1/2">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-full">
          <CloudeIcon />
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;
