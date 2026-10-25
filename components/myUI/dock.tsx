"use client";

import { CodeXml, HomeIcon, UserRound } from "lucide-react";

import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import Link from "next/link";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

const data = [
  {
    title: "Home",
    icon: (
      <HomeIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/",
  },
  {
    title: "Projects",
    icon: (
      <CodeXml className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/projects",
  },
  {
    title: "About Me",
    icon: (
      <UserRound className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/about",
  },
  {
    title: "Github",
    icon: (
      <FaGithub className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "https://github.com/AghelanKing",
    external: true,
  },
  {
    title: "Instagram",
    icon: (
      <FaInstagram className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "https://instagram.com/aghelan.king",
    external: true,
  },
  {
    title: "Telegram",
    icon: (
      <FaTelegram className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "https://t.me/Aghelanking1357",
    external: true,
  },
];

export function AppleStyleDock() {
  return (
    <div className="fixed bottom-2 left-1/2 z-50 -translate-x-1/2 max-w-full">
      <Dock className="z-50 items-end border border-white/10 bg-[#141414]/60 pb-3">
        {data.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
          >
            <DockItem className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800">
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          </Link>
        ))}
      </Dock>
    </div>
  );
}
