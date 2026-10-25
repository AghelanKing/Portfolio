"use client";

import { IconCloud } from "../ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "postgresql",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "nextdotjs",
  "tailwindcss",
  "nodedotjs",
  "npm",
];

export function CloudeIcon() {
  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}`);

  return (
    <div className="relative flex w-full items-center justify-center">
      <div className="pointer-events-none absolute size-80 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="relative z-10">
        <IconCloud showControl={false} images={images} />
      </div>
    </div>
  );
}
