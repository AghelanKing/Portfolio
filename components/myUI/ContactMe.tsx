import { HiOutlineCode } from "react-icons/hi";
import { TextAnimate } from "../ui/text-animate";
import { BlurFade } from "../ui/blur-fade";
import { RiArrowRightUpLine } from "react-icons/ri";
import { FaGithub, FaInstagram, FaPhone } from "react-icons/fa";

function ContactMe() {
  return (
    <section
      id="contact"
      className="relative mx-auto mt-5 flex w-full max-w-7xl flex-col items-center overflow-hidden px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-3/5 w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/10 blur-3xl" />

      {/* Section heading */}
      <div className="flex w-full min-w-0 items-center gap-3 sm:gap-4">
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
          Contact Me
        </TextAnimate>
      </div>

      {/* Contact panel */}
      <div className="group relative isolate mt-7 w-full min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#101012] p-5 sm:mt-9 sm:rounded-3xl sm:p-8 md:p-10 lg:p-14">
        {/* Decorative glows */}
        <div className="pointer-events-none absolute -right-20 -top-24 -z-10 size-64 rounded-full bg-violet-600/20 blur-3xl transition-colors duration-700 group-hover:bg-violet-500/30 sm:size-80 sm:blur-[100px]" />

        <div className="pointer-events-none absolute -bottom-24 -left-20 -z-10 size-56 rounded-full bg-cyan-500/10 blur-3xl sm:size-72 sm:blur-[100px]" />

        <BlurFade delay={0.1} inView>
          <div className="mb-6 flex items-center gap-3 sm:mb-8">
            <span className="size-2 shrink-0 rounded-full bg-violet-400 shadow-[0_0_12px_#a78bfa]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-violet-300 sm:text-xs sm:tracking-[0.25em]">
              Have an idea in mind?
            </span>
          </div>
        </BlurFade>

        <TextAnimate
          startOnView
          once
          animation="blurInUp"
          by="word"
          as="h3"
          className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {"Let's make something"}
        </TextAnimate>

        <TextAnimate
          startOnView
          once
          animation="blurInUp"
          by="word"
          as="h3"
          className="mt-2 bg-linear-to-r from-violet-300 via-purple-400 to-cyan-300 bg-clip-text text-3xl font-extrabold leading-tight tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
        >
          extraordinary.
        </TextAnimate>

        <BlurFade delay={0.2} inView>
          <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-400 sm:mt-7 sm:text-base sm:leading-8">
            Good ideas deserve great execution. {"Let's"} turn your next big
            idea into something real.
          </p>
        </BlurFade>

        {/* Contact links */}
        <BlurFade delay={0.3} inView>
          <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href="mailto:aghelan945@gmail.com"
              className="group/btn inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-violet-200 hover:shadow-[0_8px_35px_rgba(139,92,246,0.2)] sm:px-6"
            >
              Start a conversation
              <RiArrowRightUpLine className="shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </a>

            <a
              href="https://github.com/AghelanKing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/3 px-5 py-3 text-sm text-neutral-300 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-400/10 hover:text-white sm:px-5"
            >
              <FaGithub className="shrink-0" />
              Explore GitHub
            </a>

            <a
              href="https://instagram.com/aghelan.king"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/3 px-5 py-3 text-sm text-neutral-300 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/30 hover:bg-pink-400/10 hover:text-white sm:px-5"
            >
              <FaInstagram className="shrink-0" />
              Go to Instagram
            </a>

            <a
              href="tel:+989014530998"
              className="inline-flex min-h-12 min-w-0 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-neutral-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-white sm:px-5"
            >
              <FaPhone className="shrink-0" />
              <span dir="ltr" className="wrap-break-words">
                +98 901 453 0998
              </span>
            </a>
          </div>
        </BlurFade>

        {/* Footer */}
        <div className="mt-10 border-t border-white/8 pt-5 sm:mt-14 sm:pt-6">
          <div className="flex flex-col gap-3 text-xs text-neutral-500 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <span>Designed with curiosity. Built with code.</span>
            <span className="font-mono text-violet-300/70">
              {"<let's-connect />"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
