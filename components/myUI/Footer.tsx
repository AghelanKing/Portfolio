import Link from "next/link";
import { ArrowUpRight, Code2, Send, Mail } from "lucide-react";
import { FaGithub, FaInstagram } from "react-icons/fa";

const navigation = [
  { label: "Home", href: "/home" },
  { label: "About Me", href: "/about" },
  { label: "Projects", href: "#projects" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/AghelanKing",
    icon: FaGithub,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/aghelan.king",
    icon: FaInstagram,
  },
  {
    label: "Telegram",
    href: "https://t.me/Aghelanking1357",
    icon: Send,
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-white/10 bg-[#0b0b0b] px-6 pb-24 pt-12 text-white md:px-12">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-white/4 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Brand */}
        <div className="flex items-center justify-between gap-4">
          <Link href="#home" className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-white text-black">
              <Code2 size={22} />
            </span>
            <span className="text-xl font-bold tracking-tight">
              Mohammad Mehdi Aghelan
              <span className="text-neutral-500">.</span>
            </span>
          </Link>

          <span className="hidden items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs text-neutral-400 sm:flex">
            <span className="size-2 rounded-full bg-emerald-400" />
            Open to opportunities
          </span>
        </div>

        {/* CTA */}
        <div className="my-14 max-w-3xl md:my-20">
          <p className="mb-5 text-xs font-medium tracking-[0.25em] text-neutral-500">
            HAVE A PROJECT IN MIND?
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-7xl">
            Let&apos;s build something
            <span className="mt-1 block text-neutral-500">
              remarkable together.
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-7 text-neutral-400 md:text-base">
            I turn ideas into modern, thoughtful, and user-friendly web
            experiences.
          </p>

          <Link
            href="mailto:your@email.com"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
          >
            <Mail size={17} />
            Get in touch
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-10 border-t border-white/10 py-8 md:grid-cols-3">
          <div>
            <p className="mb-5 text-xs tracking-widest text-neutral-500">
              NAVIGATION
            </p>

            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-xs tracking-widest text-neutral-500">
              SOCIALS
            </p>

            <ul className="space-y-4">
              {socials.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
                    >
                      <Icon size={16} />
                      {item.label}
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <p className="mb-5 text-xs tracking-widest text-neutral-500">
              CURRENTLY
            </p>

            <p className="text-sm leading-6 text-neutral-400">
              Learning, building, and exploring new ways to create better
              experiences on the web.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ReactKing. All rights reserved.</p>

          <p className="flex items-center gap-2">
            <Code2 size={14} />
            Designed & built with passion
          </p>

          <Link href="#home" className="transition-colors hover:text-white">
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
