import Image from "next/image";
import { Skill } from "../about/Skills";
import { BlurFade } from "@/components/ui/blur-fade";
import { RiArrowRightUpLine } from "react-icons/ri";
import Link from "next/link";
import Skills from "./Skills";

type ProjectType = {
  name: string;
  img: string;
  description: string;
  href: string;
  skills: Skill[];
};

function Project({
  project,
  index = 0,
}: {
  project: ProjectType;
  index?: number;
}) {
  return (
    <BlurFade
      delay={index * 0.08}
      direction="up"
      inView
      className="h-full min-w-0"
    >
      <Link
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.name} project`}
        className="project group relative flex h-full min-w-0 flex-col rounded-xl border border-white/10 bg-[#0a0a0a] p-2.5 transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-400/60 hover:shadow-lg hover:shadow-violet-600/20 sm:p-3"
      >
        <div className="relative aspect-3/2 w-full overflow-hidden rounded-lg bg-[#171717]">
          <Image
            src={project.img}
            alt={`${project.name} project preview`}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div className="flex flex-1 flex-col px-1 sm:px-2">
          <div className="mt-3 flex items-start justify-between gap-2">
            <h3 className="min-w-0 text-lg font-bold leading-snug sm:text-xl">
              {project.name}
            </h3>

            <span className="flex size-8 shrink-0 items-center justify-center rounded-full text-xl text-neutral-400 transition-all duration-300 group-hover:bg-violet-400 group-hover:text-white sm:size-9">
              <RiArrowRightUpLine />
            </span>
          </div>

          <p className="mt-2 text-sm leading-6 text-gray-300">
            {project.description}
          </p>

          <div className="mt-auto border-t border-white/10 pt-4">
            <Skills skills={project.skills} />
          </div>
        </div>
      </Link>
    </BlurFade>
  );
}

export default Project;
