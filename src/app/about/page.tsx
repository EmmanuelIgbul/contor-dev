
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Lightbulb,
  Rocket,
  Search,
  ClipboardList,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const skills = [
  {
    category: "Languages",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frontend & Mobile",
    items: ["React Native", "Expo", "Tailwind CSS", "NativeWind"],
  },
  {
    category: "Backend & Database",
    items: ["Drizzle ORM", "Neon", "Authentication"],
  },
  {
    category: "Tools & Deployment",
    items: ["VS Code", "Git", "GitHub", "Vercel"],
  },
];

const principles = [
  {
    number: "01",
    title: "Curiosity",
    description:
      "I enjoy understanding how things work, exploring new technologies, and continuously learning.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Problem solving",
    description:
      "I approach development as an opportunity to turn real problems into useful digital solutions.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Innovation",
    description:
      "I'm interested in building meaningful products and bringing ideas to life through technology.",
    icon: Rocket,
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    description:
      "Start with the problem. Understand what needs to be solved and who the product is for.",
    icon: Search,
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Define the core features, map out the user experience, and think through the technical structure.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Build",
    description:
      "Bring the idea to life through clean implementation, functional interfaces, and connected systems.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Test & Improve",
    description:
      "Check that everything works as expected, fix issues, and refine the product based on what I learn.",
    icon: CheckCircle2,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#09090D] text-[#F4F1FA]">
      <Navbar />

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-24 lg:px-10 lg:pt-32">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-[#A78BFA]">
          A little about me
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold leading-[1.1] tracking-tight sm:text-6xl lg:text-8xl">
          The person behind
          <span className="text-[#A78BFA]"> the code.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-9 text-[#A5A1AD]">
          I&apos;m a self-taught developer driven by curiosity, innovation, and
          the desire to solve real-world problems through technology.
        </p>
      </section>

      {/* Personal Story */}
      <section className="mx-auto grid max-w-7xl gap-14 px-6 pb-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:px-10">
        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#292631] bg-[#15131D]">
            <Image
              src="/images/profile.jpeg"
              alt="Portrait of the developer"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-[#292631] pt-5">
            <span className="font-mono text-xs text-[#A5A1AD]">
              SELF-TAUGHT DEVELOPER
            </span>
            <span className="font-mono text-xs text-[#A78BFA]">
              ALWAYS LEARNING
            </span>
          </div>
        </div>

        <div className="space-y-7">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#A78BFA]">
              My journey
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              From simple webpages to building digital products.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#A5A1AD]">
            <p>
              My journey into development started with a simple interest in
              creating webpages. I began with HTML and CSS, learning the
              fundamentals of how websites are structured and styled.
            </p>

            <p>
              As I progressed into JavaScript and SQL, my curiosity grew beyond
              what was visible on a screen. I became interested in how
              applications work behind the scenes, how data is managed, and
              how different technologies come together to create complete
              products.
            </p>

            <p>
              Over time, I moved from experimenting with basic websites to
              building more functional applications. Grocify is one example
              of that journey: taking an idea and developing it into a working
              mobile application.
            </p>

            <p>
              I continue to learn, experiment, and challenge myself through
              projects. For me, development is not just about writing code.
              It&apos;s about having an idea, understanding the problem, and
              building something that works.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-y border-[#292631] bg-[#0E0D13]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#A78BFA]">
              What drives me
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              More than writing code.
            </h2>
            <p className="mt-5 leading-8 text-[#A5A1AD]">
              The principles that shape how I approach learning, development,
              and the products I build.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.number}
                  className="rounded-2xl border border-[#292631] bg-[#15131D] p-7 transition duration-300 hover:border-[#A78BFA]/50"
                >
                  <div className="mb-10 flex items-center justify-between">
                    <span className="font-mono text-xs text-[#A78BFA]">
                      {principle.number}
                    </span>
                    <Icon size={22} className="text-[#A78BFA]" />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {principle.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#A5A1AD]">
                    {principle.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Approach */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#A78BFA]">
            How I build
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            From an idea to a working product.
          </h2>
          <p className="mt-5 leading-8 text-[#A5A1AD]">
            I believe good development starts before writing code. Every
            project is an opportunity to understand a problem, think through
            a solution, and build something that works.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="rounded-2xl border border-[#292631] bg-[#15131D] p-7 transition duration-300 hover:border-[#A78BFA]/50"
              >
                <div className="mb-10 flex items-center justify-between">
                  <span className="font-mono text-xs text-[#A78BFA]">
                    {step.number}
                  </span>
                  <Icon size={22} className="text-[#A78BFA]" />
                </div>

                <h3 className="text-xl font-semibold">{step.title}</h3>

                <p className="mt-4 text-sm leading-7 text-[#A5A1AD]">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="mb-14">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#A78BFA]">
            My toolkit
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Technologies I work with.
          </h2>
          <p className="mt-5 max-w-xl leading-8 text-[#A5A1AD]">
            Tools and technologies I&apos;ve explored and used while building
            projects and developing my skills.
          </p>
        </div>

        <div className="divide-y divide-[#292631] border-y border-[#292631]">
          {skills.map((group, index) => (
            <div
              key={group.category}
              className="grid gap-5 py-8 md:grid-cols-[0.7fr_1.3fr] md:gap-10"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-[#A78BFA]">
                  0{index + 1}
                </span>
                <h3 className="font-medium">{group.category}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#292631] px-4 py-2 text-sm text-[#A5A1AD] transition hover:border-[#A78BFA]/50 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direction */}
      <section className="border-y border-[#292631] bg-[#0E0D13]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-10">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#A78BFA]">
              Looking ahead
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Building towards something bigger.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#A5A1AD]">
              My long-term ambition is to become a full-stack developer and
              entrepreneur, creating innovative digital products that solve
              meaningful problems. I&apos;m focused on strengthening my technical
              foundation, learning through real projects, and turning more
              ideas into reality.
            </p>

            <Link
              href="/work"
              className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-white transition hover:text-[#A78BFA]"
            >
              Explore my work
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-7xl px-6 py-28 text-center lg:px-10">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[#A78BFA]">
          Let&apos;s connect
        </p>

        <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Have an idea worth
          <span className="text-[#A78BFA]"> building?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-8 text-[#A5A1AD]">
          I&apos;m always interested in meaningful ideas, collaboration, and
          opportunities to create something useful.
        </p>

        <Link
          href="/contact"
          className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#A78BFA] px-7 py-4 text-sm font-semibold text-[#09090D] transition hover:bg-[#C4B5FD]"
        >
          Get in touch
          <ArrowRight size={17} />
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#292631] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-[#A5A1AD] sm:flex-row">
          <span>© 2026 contor//dev</span>
          <span>Turning ideas into digital experiences.</span>
        </div>
      </footer>
    </main>
  );
}
