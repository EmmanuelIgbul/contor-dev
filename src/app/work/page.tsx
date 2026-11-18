
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#09090D] text-[#F4F1FA]">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-24 lg:px-10">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-[#A78BFA]">
          Selected work / 01
        </p>

        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          Things I&apos;ve
          <span className="text-[#A78BFA]"> built.</span>
        </h1>

        <p className="mt-7 max-w-xl text-base leading-8 text-[#A5A1AD]">
          A collection of digital experiences shaped by curiosity,
          experimentation, and a passion for solving problems through code.
        </p>

        <div className="mt-20 border-t border-[#292631] pt-8">
          <div className="mb-6 flex items-center justify-between">
            <span className="font-mono text-xs text-[#A5A1AD]">
              01 / MOBILE APPLICATION
            </span>
            <span className="font-mono text-xs text-[#A5A1AD]">
              2026
            </span>
          </div>

          <Link href="/work/grocify" className="group block">
            <div className="relative overflow-hidden rounded-2xl border border-[#292631] bg-[#15131D] p-5 transition duration-500 group-hover:border-[#A78BFA]/50 sm:p-8">
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div className="relative mx-auto w-full max-w-sm">
                  <Image
                    src="/projects/grocify/screenshots/list-dark.png"
                    alt="Grocify grocery shopping list interface"
                    width={483}
                    height={1020}
                    loading="eager"
                    className="mx-auto h-auto max-h-[560px] w-auto rounded-2xl object-contain shadow-2xl transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="py-6 lg:py-12">
                  <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#A78BFA]">
                    Featured project
                  </p>

                  <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                    Grocify
                  </h2>

                  <p className="mt-5 max-w-lg leading-8 text-[#A5A1AD]">
                    A grocery shopping planner designed to make everyday
                    shopping more organised. Create lists, track purchases,
                    and prepare for your next shopping trip.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {["React Native", "Expo", "TypeScript", "Neon"].map(
                      (technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-[#292631] px-3 py-2 font-mono text-xs text-[#A5A1AD]"
                        >
                          {technology}
                        </span>
                      )
                    )}
                  </div>

                  <div className="mt-10 inline-flex items-center gap-3 text-sm font-medium text-white">
                    Explore project
                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-5 border-t border-[#292631] pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-[#A5A1AD]">
            More projects will appear here as they are completed.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm text-[#A78BFA] transition hover:text-white"
          >
            Have a project in mind?
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#292631] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-[#A5A1AD] sm:flex-row">
          <span>© 2026 contor//dev</span>
          <span>Turning ideas into digital experiences.</span>
        </div>
      </footer>
    </main>
  );
}
