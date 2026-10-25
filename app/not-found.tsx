import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0b0b0b] px-6 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/15 blur-[120px]" />

      <section className="relative z-10 flex max-w-xl flex-col items-center text-center">
        <span className="mb-5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-400">
          404 · Page Not Found
        </span>

        {/* <h1 className="bg-linear-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-8xl font-bold tracking-tighter text-transparent sm:text-9xl">
          404
        </h1> */}

        <AuroraText className="text-8xl font-bold tracking-tighter sm:text-9xl">
          404
        </AuroraText>

        <h2 className="mt-5 text-2xl font-semibold sm:text-3xl">
          Lost in the void?
        </h2>

        <p className="mt-4 max-w-md text-sm leading-7 text-neutral-400 sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back on track.
        </p>

        <Link
          href="/"
          className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:bg-purple-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]"
        >
          <Home size={18} />
          Back to Home
          <ArrowLeft
            size={18}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
        </Link>

        <span className="mt-12 text-xs tracking-widest text-neutral-600">
          MOHAMMAD MEHDI AGHELAN · MM
        </span>
      </section>
    </main>
  );
}
