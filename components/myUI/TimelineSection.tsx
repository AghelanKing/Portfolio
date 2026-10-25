"use client";

import { Timeline } from "@/components/ui/timeline";
import { BlurFade } from "../ui/blur-fade";
import { TextAnimate } from "../ui/text-animate";
import { HiOutlineCode } from "react-icons/hi";

export function TimelineSection() {
  const data = [
    {
      title: "November 2025",
      content: (
        <div>
          <h3 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white">
            The Beginning
          </h3>

          <p className="mb-5 text-sm leading-7 text-neutral-600 dark:text-neutral-300 md:text-base">
            I started my programming journey with the fundamentals of web
            development, exploring how websites are structured and styled.
          </p>

          <div className="flex flex-wrap gap-2">
            {["HTML", "CSS"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-600 dark:text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Mid-January 2026",
      content: (
        <div>
          <h3 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white">
            Building the Foundations
          </h3>

          <p className="mb-5 text-sm leading-7 text-neutral-600 dark:text-neutral-300 md:text-base">
            By mid-January, I had learned HTML, CSS, and Bootstrap, building a
            solid foundation for my next step into JavaScript.
          </p>

          <div className="flex flex-wrap gap-2">
            {["HTML", "CSS", "Bootstrap"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-600 dark:text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "February 2026",
      content: (
        <div>
          <h3 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white">
            Diving into JavaScript
          </h3>

          <p className="mb-5 text-sm leading-7 text-neutral-600 dark:text-neutral-300 md:text-base">
            I started learning JavaScript through Jonas {"Schmedtmann's"}{" "}
            course, diving deeper into programming logic and interactive web
            development.
          </p>

          <div className="flex flex-wrap gap-2">
            {["JavaScript", "Programming Fundamentals"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-600 dark:text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "April 2026",
      content: (
        <div>
          <h3 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white">
            Discovering React
          </h3>

          <p className="mb-5 text-sm leading-7 text-neutral-600 dark:text-neutral-300 md:text-base">
            During {"Iran's"} internet shutdown, I began learning React and
            exploring component-based development and the possibilities of
            building modern user interfaces.
          </p>

          <div className="flex flex-wrap gap-2">
            {["React", "Components", "UI Development"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-600 dark:text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "September 2026",
      content: (
        <div>
          <h3 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white">
            Moving to Next.js
          </h3>

          <p className="mb-5 text-sm leading-7 text-neutral-600 dark:text-neutral-300 md:text-base">
            After completing my React learning journey, I moved on to Next.js to
            explore a more powerful approach to building modern web
            applications.
          </p>

          <div className="flex flex-wrap gap-2">
            {["React", "Next.js"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-600 dark:text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "September 11, 2026",
      content: (
        <div>
          <h3 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white">
            TaskFlow — My First Next.js Project
          </h3>

          <p className="mb-5 text-sm leading-7 text-neutral-600 dark:text-neutral-300 md:text-base">
            I started building TaskFlow, my first project with Next.js. It
            marked an important milestone in turning what I had learned into a
            practical project.
          </p>

          <div className="flex flex-wrap gap-2">
            {["TaskFlow", "Next.js", "Project Development"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-600 dark:text-violet-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Late September 2026",
      content: (
        <div>
          <h3 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white">
            Starting Arvan
          </h3>

          <p className="mb-5 text-sm leading-7 text-neutral-600 dark:text-neutral-300 md:text-base">
            Toward the end of September, I started working on Arvan, continuing
            to improve my development skills and gain more hands-on experience
            with Next.js.
          </p>

          <div className="flex flex-wrap gap-2">
            {["Arvan", "Next.js", "Learning by Building"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-600 dark:text-violet-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="journey"
      className="relative w-full overflow-hidden py-14 sm:py-20 md:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 size-64 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl sm:size-96" />

      {/* Section heading */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <BlurFade delay={0.1} className="shrink-0">
            <span className="inline-flex -rotate-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-linear-to-br from-violet-500/15 to-cyan-400/5 p-2.5 text-2xl text-violet-300 shadow-[0_0_30px_rgba(139,92,246,0.12)] transition-transform duration-300 hover:rotate-0 sm:p-3.5 sm:text-3xl">
              <HiOutlineCode />
            </span>
          </BlurFade>

          <TextAnimate
            startOnView
            once
            as="h2"
            animation="blurInUp"
            by="character"
            className="min-w-0 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            My Journey
          </TextAnimate>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative mx-auto mt-8 w-full min-w-0 max-w-7xl sm:mt-10 md:mt-12">
        <div className="min-w-0 max-w-full">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  );
}
