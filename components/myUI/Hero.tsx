"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";
import { DiaTextReveal } from "../ui/dia-text-reveal";
import { GlyphMatrix } from "../ui/glyph-matrix";
import { RainbowButton } from "../ui/rainbow-button";
import { TextAnimate } from "../ui/text-animate";

function Hero() {
  return (
    <section className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#09090b] px-5 py-28 text-white sm:px-8">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <GlyphMatrix className="h-full w-full" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,#09090b_80%)]" />

      <div className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

      {/* Content */}
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs text-neutral-300 backdrop-blur-xl sm:text-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
          Front-End Developer
          <span className="text-neutral-600">/</span>
          Creative Developer
        </div>

        <p className="mb-4 text-sm font-medium tracking-[0.3em] text-neutral-400 uppercase">
          Hello world
        </p>

        <h1 className="w-full min-w-0 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          <DiaTextReveal
            repeat
            repeatDelay={1.7}
            className="max-w-full tracking-tight"
            text={[
              "I'm Mohammad Mehdi Aghelan",
              "I'm a Front End Developer",
              "I'm a Creative Developer",
            ]}
          />
        </h1>

        <div className="mt-7 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8">
          <TextAnimate animation="blurInUp" by="word" once>
            I&apos;m a Front-End Developer passionate about building modern,
            interactive, and user-friendly web experiences with clean code and
            creative design.
          </TextAnimate>
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link href="/projects">
            <RainbowButton className="h-12 rounded-full px-7!">
              Explore My Work
              <HiArrowRight className="ml-1 h-4 w-4" />
            </RainbowButton>
          </Link>

          <Link href="/about">
            <RainbowButton
              variant="outline"
              className="h-12 rounded-full px-7!"
            >
              About Me
            </RainbowButton>
          </Link>
        </div>

        <Link
          href="https://github.com/AghelanKing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
        >
          <FaGithub className="h-4 w-4" />
          Check out my GitHub
          <HiArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </section>
  );
}

export default Hero;
