
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ListChecks,
  ShoppingBasket,
  ChartNoAxesCombined,
} from "lucide-react";

const technologies = [
  "React Native",
  "Expo",
  "TypeScript",
  "Expo Router",
  "NativeWind",
  "Clerk",
  "Drizzle ORM",
  "Neon",
];

const features = [
  {
    number: "01",
    icon: ShoppingBasket,
    title: "Shopping list management",
    description:
      "Create grocery lists and organise the items needed for each shopping trip.",
  },
  {
    number: "02",
    icon: CheckCircle2,
    title: "Purchase tracking",
    description:
      "Mark items as purchased and keep track of what is still left on your list.",
  },
  {
    number: "03",
    icon: ChartNoAxesCombined,
    title: "Shopping insights",
    description:
      "View shopping activity and completion information through the insights dashboard.",
  },
  {
    number: "04",
    icon: ListChecks,
    title: "List organisation",
    description:
      "Clear completed items when you&apos;re ready to prepare for another shopping trip.",
  },
];

const screenshots = [
  {
    src: "/projects/grocify/screenshots/list-dark.png",
    alt: "Grocify grocery shopping list in dark mode",
    title: "Grocery list",
    theme: "Dark mode",
  },
  {
    src: "/projects/grocify/screenshots/list-light.png",
    alt: "Grocify grocery shopping list in light mode",
    title: "Grocery list",
    theme: "Light mode",
  },
  {
    src: "/projects/grocify/screenshots/planner-dark.png",
    alt: "Grocify shopping planner in dark mode",
    title: "Shopping planner",
    theme: "Dark mode",
  },
  {
    src: "/projects/grocify/screenshots/planner-light.png",
    alt: "Grocify shopping planner in light mode",
    title: "Shopping planner",
    theme: "Light mode",
  },
  {
    src: "/projects/grocify/screenshots/insights-dark.png",
    alt: "Grocify insights dashboard in dark mode",
    title: "Shopping insights",
    theme: "Dark mode",
  },
  {
    src: "/projects/grocify/screenshots/insights-light.png",
    alt: "Grocify insights dashboard in light mode",
    title: "Shopping insights",
    theme: "Light mode",
  },
  {
    src: "/projects/grocify/screenshots/authentication-dark.png",
    alt: "Grocify authentication screen",
    title: "Authentication",
    theme: "Dark mode",
  },
  {
    src: "/projects/grocify/screenshots/feedback.png",
    alt: "Grocify feedback screen",
    title: "Feedback",
    theme: "Application screen",
  },
];

export function generateStaticParams() {
  return [{ slug: "grocify" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug !== "grocify") {
    return { title: "Project not found | contor//dev" };
  }

  return {
    title: "Grocify | contor//dev",
    description:
      "A closer look at Grocify, a grocery shopping planner designed and developed by contor//dev.",
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug !== "grocify") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#09090d] px-6 text-center">
        <div>
          <p className="font-mono text-xs tracking-widest text-accent">
            404 / PROJECT NOT FOUND
          </p>
          <h1 className="mt-5 font-heading text-4xl font-semibold text-white">
            This project doesn&apos;t exist.
          </h1>
          <Link
            href="/work"
            className="mt-8 inline-flex items-center gap-2 text-sm text-accent"
          >
            <ArrowLeft size={16} /> Back to work
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#09090d] text-[#f4f1fa]">
      <Navbar backLink />

      {/* Project introduction */}
      <section className="section-container relative py-24 md:py-32">
        <div className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-[#8b5cf6]/[0.08] blur-[140px]" />

        <div className="relative">
          <div className="section-label mb-8">
            SELECTED WORK / 001
          </div>

          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <p className="mb-4 font-mono text-xs tracking-[0.18em] text-accent">
                MOBILE APPLICATION
              </p>

              <h1 className="font-heading text-[clamp(4rem,10vw,8rem)] font-semibold leading-none tracking-[-0.07em]">
                Grocify<span className="text-accent">.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#a5a1ad] md:text-lg">
                Plan smarter. Shop happier. A grocery shopping planner
                designed to simplify everyday shopping.
              </p>
            </div>

            <div className="flex flex-col gap-3 text-xs text-[#a5a1ad]">
              <span>MY ROLE</span>
              <span className="text-sm text-white">
                Product Design & Full-Stack Mobile Development
              </span>
              <span className="mt-2">PLATFORM</span>
              <span className="text-sm text-white">Android</span>
            </div>
          </div>

          {/* Project hero image */}
          <div className="relative mt-16 overflow-hidden rounded-2xl border border-[#292631] bg-[#111016] px-6 pt-12 md:px-12 md:pt-16">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22c55e]/15 blur-[100px]" />

            <div className="relative mx-auto grid max-w-3xl grid-cols-2 items-end gap-5 md:gap-10">
              <Image
                src="/projects/grocify/screenshots/list-dark.png"
                alt="Grocify grocery list in dark mode"
                width={483}
                height={1020}
                priority
                className="relative z-10 mx-auto h-auto w-full max-w-[260px] drop-shadow-2xl"
                sizes="(max-width: 768px) 42vw, 260px"
              />

              <Image
                src="/projects/grocify/screenshots/insights-light.png"
                alt="Grocify insights dashboard in light mode"
                width={483}
                height={1020}
                priority
                className="relative z-10 mx-auto h-auto w-full max-w-[260px] drop-shadow-2xl"
                sizes="(max-width: 768px) 42vw, 260px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-t border-white/[0.06] py-24">
        <div className="section-container grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <div className="section-label mb-5">01 / OVERVIEW</div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
              About the project<span className="text-accent">.</span>
            </h2>
          </div>

          <div className="max-w-2xl space-y-6 text-sm leading-8 text-[#a5a1ad] md:text-base">
            <p>
              Grocify is a grocery shopping planner built to make everyday
              shopping more organised. It gives users a simple place to
              prepare shopping lists, manage grocery items and keep track
              of their purchases.
            </p>

            <p>
              Users can create lists, add the items they need, mark items
              as purchased and clear completed items when preparing for
              their next shopping trip.
            </p>

            <p>
              The application also includes an insights dashboard and
              supports both light and dark themes.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-white/[0.06] py-24">
        <div className="section-container">
          <div className="section-label mb-5">02 / FUNCTIONALITY</div>

          <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            Built around everyday needs<span className="text-accent">.</span>
          </h2>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.number}
                  className="rounded-2xl border border-[#292631] bg-[#111016] p-7 transition-colors hover:border-[#a78bfa]/40 md:p-9"
                >
                  <div className="flex items-center justify-between">
                    <Icon size={23} className="text-accent" />
                    <span className="font-mono text-xs text-[#77727f]">
                      {feature.number}
                    </span>
                  </div>

                  <h3 className="mt-8 font-heading text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#a5a1ad]">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="border-t border-white/[0.06] py-24">
        <div className="section-container grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <div className="section-label mb-5">03 / TECHNOLOGY</div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
              The technology behind it<span className="text-accent">.</span>
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-sm leading-8 text-[#a5a1ad]">
              Grocify was developed using a modern mobile development
              stack, with tools for application development, authentication,
              database integration and interface styling.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-[#292631] bg-[#111016] px-4 py-2.5 font-mono text-xs text-[#c7c2d0]"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="border-t border-white/[0.06] py-24">
        <div className="section-container">
          <div className="section-label mb-5">04 / APPLICATION GALLERY</div>

          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
                Inside Grocify<span className="text-accent">.</span>
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#a5a1ad]">
                A look at the interface across light and dark themes.
              </p>
            </div>

            <span className="font-mono text-[10px] tracking-wider text-[#77727f]">
              {screenshots.length.toString().padStart(2, "0")} SCREENS
            </span>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {screenshots.map((screenshot) => (
              <div key={screenshot.src} className="group">
                <div className="overflow-hidden rounded-xl border border-[#292631] bg-[#111016] p-2 transition-colors group-hover:border-[#a78bfa]/50 sm:p-3">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={483}
                    height={1020}
                    className="h-auto w-full rounded-lg transition-transform duration-500 group-hover:scale-[1.025]"
                    sizes="(max-width: 768px) 45vw, 220px"
                  />
                </div>

                <div className="mt-4">
                  <p className="text-sm font-medium text-white">
                    {screenshot.title}
                  </p>
                  <p className="mt-1 font-mono text-[10px] text-[#77727f]">
                    {screenshot.theme}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-white/[0.06] py-28">
        <div className="section-container">
          <div className="rounded-2xl border border-[#292631] bg-[#111016] px-7 py-14 text-center md:px-16 md:py-20">
            <div className="section-label mb-6">NEXT PROJECT</div>

            <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-5xl">
              More ideas. More things to build.
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#a5a1ad]">
              Grocify is one step in my journey of turning ideas into
              useful digital experiences.
            </p>

            <Link
              href="/about"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#a78bfa] px-6 py-3.5 text-sm font-medium text-[#09090d] transition-transform hover:-translate-y-1"
            >
              Get to know me <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="mt-12 flex justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs text-[#a5a1ad] transition-colors hover:text-white"
            >
              <ArrowLeft size={14} /> Back home
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs text-[#a5a1ad] transition-colors hover:text-accent"
            >
              Get in touch <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8">
        <div className="section-container flex flex-col justify-between gap-4 text-xs text-[#77727f] sm:flex-row sm:items-center">
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
