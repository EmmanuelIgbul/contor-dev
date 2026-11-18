
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Smartphone,
} from "lucide-react";

const technologies = ["React Native", "Expo", "TypeScript", "Neon"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="section-container relative flex min-h-[650px] items-center py-24 md:min-h-[730px] md:py-28">
        <div className="pointer-events-none absolute -right-40 top-10 h-[480px] w-[480px] rounded-full bg-[#8b5cf6]/[0.09] blur-[140px]" />

        <div className="relative grid w-full items-center gap-16 md:grid-cols-[1.1fr_0.9fr] md:gap-8 lg:gap-12">
          <div className="relative z-10">
            <div className="section-label mb-8">
              Independent developer · Building digital products
            </div>

            <h1 className="font-heading text-[clamp(3.3rem,6.3vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.065em]">
              Turning ideas
              <br />
              into <span className="text-accent">digital</span>
              <br />
              experiences.
            </h1>

            <p className="mt-8 max-w-[490px] text-[15px] leading-8 text-[#a5a1ad] md:text-base">
              I build digital experiences driven by curiosity, creativity,
              and a desire to solve real-world problems through technology.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-3 rounded-full bg-[#a78bfa] px-6 py-3.5 text-sm font-medium text-[#09090d] transition-transform hover:-translate-y-1"
              >
                Explore my work <ArrowUpRight size={16} />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-sm text-[#f4f1fa] transition-colors hover:text-accent"
              >
                More about me <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Grocify hero visual */}
          <div className="relative mx-auto flex min-h-[470px] w-full max-w-[410px] items-center justify-center md:min-h-[530px]">
            <div className="pointer-events-none absolute inset-8 rounded-full bg-[#8b5cf6]/[0.12] blur-[100px]" />

            <div className="absolute inset-x-5 top-8 bottom-8 rounded-[32px] border border-white/[0.07] bg-gradient-to-br from-[#171321] via-[#100f16] to-[#09090d]" />

            <div className="absolute left-8 top-14 z-20 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#a78bfa]" />
              <span className="font-mono text-[9px] tracking-[0.18em] text-[#a5a1ad]">
                SELECTED PROJECT / 001
              </span>
            </div>

            <div className="relative z-10 w-[220px] rotate-[-4deg] transition-transform duration-700 hover:rotate-0 md:w-[245px]">
              <Image
                src="/projects/grocify/screenshots/list-dark.png"
                alt="Grocify mobile grocery shopping list interface in dark mode"
                width={483}
                height={1020}
                priority
                className="h-auto w-full drop-shadow-[0_30px_50px_rgba(0,0,0,0.55)]"
                sizes="(max-width: 768px) 220px, 245px"
              />
            </div>

            <div className="absolute bottom-16 right-0 z-20 rounded-xl border border-white/10 bg-[#15131d]/95 p-3 shadow-2xl backdrop-blur-xl sm:right-2">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#a78bfa]/15 text-accent">
                  <Smartphone size={17} />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">Grocify</p>
                  <p className="mt-1 font-mono text-[9px] text-[#a5a1ad]">
                    MOBILE APPLICATION
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-16 left-4 z-20 hidden items-center gap-2 rounded-full border border-white/10 bg-[#15131d]/90 px-3 py-2 backdrop-blur-xl sm:flex">
              <CheckCircle2 size={13} className="text-[#a78bfa]" />
              <span className="font-mono text-[9px] tracking-wider text-[#c7c2d0]">
                BUILT WITH PURPOSE
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-0 hidden items-center gap-3 text-[10px] tracking-[0.15em] text-[#77727f] md:flex">
          <span className="font-mono">SCROLL TO EXPLORE</span>
          <ArrowDown size={14} />
        </div>
      </section>

      {/* Featured project */}
      <section className="border-t border-white/[0.06] py-28">
        <div className="section-container">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="section-label mb-5">
                Selected work · 001
              </div>

              <h2 className="font-heading text-4xl font-semibold tracking-tight md:text-5xl">
                Featured project<span className="text-accent">.</span>
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-muted">
                A closer look at a product I&apos;ve designed and developed.
              </p>
            </div>

            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm text-[#a5a1ad] transition-colors hover:text-accent"
            >
              View all work
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <Link
            href="/work/grocify"
            className="group block"
            aria-label="Explore the Grocify project"
          >
            <div className="relative overflow-hidden rounded-2xl border border-[#292631] bg-[#111016] p-5 transition-colors group-hover:border-[#a78bfa]/40 md:p-10">
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.15em] text-[#a5a1ad]">
                  MOBILE APPLICATION / 001
                </span>

                <ArrowUpRight
                  size={19}
                  className="text-[#a5a1ad] transition-colors group-hover:text-accent"
                />
              </div>

              <div className="grid items-center gap-12 md:grid-cols-[1fr_0.8fr]">
                <div>
                  <div className="mb-4 inline-flex rounded-full border border-[#a78bfa]/30 px-3 py-1 font-mono text-[10px] text-accent">
                    FEATURED PROJECT
                  </div>

                  <h3 className="font-heading text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
                    Grocify<span className="text-accent">.</span>
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-7 text-muted">
                    A grocery shopping planner designed to make everyday
                    shopping more organised. Plan your lists, track purchases,
                    and stay on top of what you need.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-[#292631] px-3 py-1.5 font-mono text-[10px] text-[#a5a1ad]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-9 inline-flex items-center gap-2 text-sm text-accent">
                    Explore project <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Actual Grocify screenshots */}
                <div className="relative mx-auto min-h-[540px] w-full max-w-[390px]">
                  <div className="pointer-events-none absolute inset-10 rounded-full bg-[#22c55e]/15 blur-[90px]" />

                  <div className="relative z-10 mx-auto w-[230px]">
                    <Image
                      src="/projects/grocify/screenshots/list-dark.png"
                      alt="Grocify grocery shopping list in dark mode"
                      width={483}
                      height={1020}
                      className="h-auto w-full drop-shadow-2xl"
                      sizes="230px"
                    />
                  </div>

                  <div className="absolute bottom-10 right-0 z-20 w-[145px]">
                    <Image
                      src="/projects/grocify/screenshots/insights-light.png"
                      alt="Grocify insights dashboard in light mode"
                      width={483}
                      height={1020}
                      className="h-auto w-full drop-shadow-2xl"
                      sizes="145px"
                    />
                  </div>

                  <div className="absolute bottom-0 left-0 z-30 flex w-full justify-center gap-3">
                    <span className="rounded-full border border-white/10 bg-[#15131d] px-3 py-1.5 font-mono text-[9px] tracking-wider text-[#a5a1ad]">
                      DARK MODE
                    </span>

                    <span className="rounded-full border border-white/10 bg-[#15131d] px-3 py-1.5 font-mono text-[9px] tracking-wider text-[#a5a1ad]">
                      LIGHT MODE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Closing introduction */}
      <section className="border-t border-white/[0.06] py-28">
        <div className="section-container">
          <div className="section-label mb-6">
            A little about me
          </div>

          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <h2 className="font-heading max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Curious by nature.
              <br />
              <span className="text-[#77727f]">
                Driven to create.
              </span>
            </h2>

            <Link
              href="/about"
              className="inline-flex w-fit items-center gap-3 border-b border-[#a78bfa]/50 pb-2 text-sm transition-colors hover:text-accent"
            >
              Get to know me <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8">
        <div className="section-container flex flex-col justify-between gap-4 text-xs text-muted sm:flex-row sm:items-center">
          <Link
            href="/"
            className="font-heading text-base font-bold text-white"
          >
            contor<span className="text-accent">{"//"}</span>dev
          </Link>

          <p>Turning ideas into digital experiences.</p>

          <p>© {new Date().getFullYear()} contor//dev</p>
        </div>
      </footer>
    </main>
  );
}
