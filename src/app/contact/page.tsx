
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  Camera,
  Mail,
  MessageCircle,
} from "lucide-react";

const contacts = [
  {
    name: "Email",
    detail: "For professional enquiries and opportunities.",
    value: "emmanueljamesigbul@gmail.com",
    href: "mailto:emmanueljamesigbul@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    name: "GitHub",
    detail: "Explore my code and development projects.",
    value: "github.com/EmmanuelIgbul",
    href: "https://github.com/EmmanuelIgbul",
    icon: Code2,
    external: true,
  },
  {
    name: "WhatsApp",
    detail: "Let's have a direct conversation.",
    value: "+234 808 257 1840",
    href: "https://wa.me/2348082571840",
    icon: MessageCircle,
    external: true,
  },
  {
    name: "Instagram",
    detail: "Connect with me beyond development.",
    value: "@emmanueligbul",
    href: "https://www.instagram.com/emmanueligbul",
    icon: Camera,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#09090D] text-[#F4F1FA]">
      <Navbar />

      {/* Contact Introduction */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-24 lg:px-10 lg:pb-28 lg:pt-32">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-[#A78BFA]">
          Get in touch
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold leading-[1.1] tracking-tight sm:text-6xl lg:text-8xl">
          Let&apos;s build something
          <span className="text-[#A78BFA]"> meaningful.</span>
        </h1>

        <div className="mt-10 flex max-w-2xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-xl text-lg leading-9 text-[#A5A1AD]">
            Have a project in mind, an interesting idea, or an opportunity
            worth discussing? I&apos;d be glad to hear from you.
          </p>

          <span className="shrink-0 font-mono text-xs uppercase tracking-widest text-[#A5A1AD]">
            Open to conversations
          </span>
        </div>
      </section>

      {/* Contact Links */}
      <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-10">
        <div className="mb-8 flex items-center justify-between border-b border-[#292631] pb-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A78BFA]">
            Find me here
          </p>
          <span className="font-mono text-xs text-[#A5A1AD]">
            04 WAYS TO CONNECT
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.name}
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                className="group flex min-h-52 flex-col justify-between rounded-2xl border border-[#292631] bg-[#15131D] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#A78BFA]/60 sm:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#A78BFA]">
                    0{index + 1}
                  </span>

                  <div className="flex size-11 items-center justify-center rounded-full border border-[#292631] text-[#A78BFA] transition group-hover:border-[#A78BFA]/50 group-hover:bg-[#A78BFA]/10">
                    <Icon size={20} />
                  </div>
                </div>

                <div className="mt-10">
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <h2 className="text-2xl font-semibold">
                      {contact.name}
                    </h2>
                    <ArrowUpRight
                      size={20}
                      className="shrink-0 text-[#A5A1AD] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#A78BFA]"
                    />
                  </div>

                  <p className="mb-4 text-sm leading-6 text-[#A5A1AD]">
                    {contact.detail}
                  </p>

                  <span className="break-all text-sm text-[#A78BFA]">
                    {contact.value}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Closing Message */}
      <section className="border-y border-[#292631] bg-[#0E0D13]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-20 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#A78BFA]">
              One more thing
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Good ideas start with a conversation.
            </h2>

            <p className="mt-4 text-[#A5A1AD]">
              Let&apos;s see what we can create.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex shrink-0 items-center gap-3 text-sm font-medium text-white transition hover:text-[#A78BFA]"
          >
            Explore my work
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#292631] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-[#A5A1AD] sm:flex-row">
          <span>© 2026 contor//dev</span>

          <Link
            href="/"
            className="inline-flex items-center gap-2 transition hover:text-white"
          >
            <ArrowLeft size={14} />
            Back to home
          </Link>

          <span>Turning ideas into digital experiences.</span>
        </div>
      </footer>
    </main>
  );
}
