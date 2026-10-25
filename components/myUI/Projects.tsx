import { HiArrowRight, HiOutlineCode } from "react-icons/hi";
import { BlurFade } from "../ui/blur-fade";
import { TextAnimate } from "../ui/text-animate";
import Image from "next/image";
import { RiArrowRightUpLine } from "react-icons/ri";
import Link from "next/link";
import { RainbowButton } from "../ui/rainbow-button";

const projects = [
  {
    title: "Arvan",
    image: "/Arvan.PNG",
    description:
      "ARVAN is a modern furniture e-commerce platform featuring product browsing, filtering, favorites, shopping cart, and user authentication.",
    href: "https://arvan-sofa.vercel.app/",
    alt: "Arvan project preview",
  },
  {
    title: "TaskFlow",
    image: "/taskFlow.PNG",
    description:
      "TaskFlow is a collaborative task management app where teams can create projects, assign prioritized tasks with deadlines, and track progress with live statistics.",
    href: "https://taskflow-tasks-projects.vercel.app/",
    alt: "TaskFlow project preview",
  },
];

function Projects() {
  return (
    <section className="relative mx-auto mt-5 flex w-full max-w-7xl flex-col px-4 py-10 sm:px-8 sm:py-12 lg:px-10">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/15 blur-3xl sm:size-120" />

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
          My Works
        </TextAnimate>
      </div>

      {/* Project Cards */}
      <div className="mt-7 grid grid-cols-1 items-stretch gap-5 sm:mt-9 sm:gap-6 lg:grid-cols-2 lg:gap-7">
        {projects.map((project, index) => (
          <BlurFade
            key={project.title}
            direction="up"
            delay={index * 0.1}
            inView
            className="h-full min-w-0"
          >
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} project`}
              className="project group relative flex h-full min-w-0 flex-col rounded-2xl border border-white/10 bg-[#171717] p-3 transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-400/50 sm:p-4"
            >
              {/* Preview */}
              <div className="relative aspect-3/2 w-full overflow-hidden rounded-xl bg-[#202024]">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Details */}
              <div className="flex flex-1 flex-col px-1 pb-1 pt-3 sm:px-2 sm:pt-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    {project.title}
                  </h3>

                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-xl text-neutral-400 transition-all duration-300 group-hover:border-violet-400/40 group-hover:bg-violet-400 group-hover:text-white">
                    <RiArrowRightUpLine />
                  </span>
                </div>

                <p className="mt-2 text-sm leading-6 text-neutral-400 sm:leading-7">
                  {project.description}
                </p>
              </div>
            </a>
          </BlurFade>
        ))}
      </div>

      {/* Explore Button */}
      <div className="mt-7 flex justify-center sm:mt-9">
        <Link href="/projects" className="inline-flex max-w-full">
          <RainbowButton className="h-11 rounded-full px-5! sm:h-12 sm:px-7!">
            Explore My Work
            <HiArrowRight className="ml-1 h-4 w-4" />
          </RainbowButton>
        </Link>
      </div>
    </section>
  );
}

export default Projects;
