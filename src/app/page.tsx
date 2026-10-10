import Link from "next/link";
import {
  ArrowUpRight,
  Blocks,
  GitPullRequest,
  Package,
  Terminal,
} from "lucide-react";
import { getRegistryIndex } from "@/registry/registry";
import { Navbar } from "@/components/landing/navbar";
import { Community } from "@/components/landing/community";
import { InteractiveDemo } from "@/components/landing/interactive-demo";
import { CopyInstallButton } from "@/components/landing/copy-install-button";
import { Faq } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";

export const metadata = {
  alternates: { canonical: "/" },
};

const PUBLIC_COMPONENTS = new Set([
  "language-switcher",
  "phone-input",
  "navbar",
  "translation-widget",
  "locale-number",
  "relative-time",
]);

const COMPONENT_DOCS: Record<string, string> = {
  "language-switcher": "/docs/components/language-switchers/language-switcher",
  "phone-input": "/docs/components/inputs/phone-input",
  navbar: "/docs/components/navigation/navbar",
  "translation-widget": "/docs/components/translation/translation-widget",
  "locale-number": "/docs/components/formatters/locale-number",
  "relative-time": "/docs/components/formatters/relative-time",
};

function ComponentShowcase() {
  const items = getRegistryIndex().items.filter((item) => PUBLIC_COMPONENTS.has(item.name));

  return (
    <section
      id="components"
      className="border-y border-white/[0.06] bg-[#080a09] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
              The component shelf
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              Real pieces. <span className="text-emerald-400">Ready to make yours.</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-400">
              Browse the components currently shipped by Babelize Elements. Each card leads to
              its implementation docs.
            </p>
          </div>
          <Link
            href="/docs/components"
            className="inline-flex min-h-10 items-center gap-2 self-start rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-emerald-400/40 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:self-auto"
          >
            All component docs <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.name}
              href={COMPONENT_DOCS[item.name] ?? "/docs/components"}
              className="group flex min-w-0 flex-col rounded-2xl border border-white/[0.08] bg-[#0d100f] p-4 transition-colors hover:border-emerald-400/30 hover:bg-[#101512] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:p-5"
            >
              <ComponentPreview name={item.name} />
              <div className="flex items-start justify-between gap-3 pt-4">
                <div className="min-w-0">
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-400">
                    {item.description}
                  </p>
                </div>
                <ArrowUpRight
                  className="mt-0.5 size-4 shrink-0 text-neutral-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-300"
                  aria-hidden="true"
                />
              </div>
              <span className="mt-4 text-xs text-emerald-300">View documentation</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComponentPreview({ name }: { name: string }) {
  return (
    <div className="flex min-h-28 items-center justify-center overflow-hidden rounded-xl border border-white/[0.06] bg-[#080a09] p-4">
      {name === "language-switcher" && (
        <div className="inline-flex max-w-full items-center gap-2 rounded-lg border border-white/10 bg-[#111513] px-3 py-2 text-sm text-white">
          <span className="text-emerald-300" aria-hidden="true">◎</span>
          <span>English</span>
          <span className="text-neutral-500" aria-hidden="true">⌄</span>
        </div>
      )}
      {name === "phone-input" && (
        <div className="flex w-full max-w-xs items-center gap-3 rounded-lg border border-white/10 bg-[#111513] px-3 py-2.5 text-sm">
          <span>🇮🇳 <span className="text-neutral-300">+91</span></span>
          <span className="h-5 w-px bg-white/10" />
          <span className="text-neutral-500">Phone number</span>
        </div>
      )}
      {name === "navbar" && (
        <div className="flex w-full max-w-sm items-center justify-between gap-2 rounded-full border border-white/10 bg-[#111513] px-3 py-2 text-[11px] text-neutral-300">
          <span className="font-semibold text-emerald-300">Babelize</span>
          <span>Components</span><span>Docs</span>
          <span className="rounded-full bg-emerald-400 px-2 py-1 font-semibold text-black">Start</span>
        </div>
      )}
      {name === "translation-widget" && (
        <div className="grid w-full max-w-sm grid-cols-2 gap-2">
          <div className="rounded-lg border border-white/10 bg-[#111513] p-3">
            <span className="text-xs text-neutral-400">English</span>
            <p className="mt-2 text-sm text-white">Hello!</p>
          </div>
          <div dir="rtl" className="rounded-lg border border-emerald-400/20 bg-[#111513] p-3">
            <span className="text-xs text-neutral-400">العربية</span>
            <p className="mt-2 text-sm text-white">مرحباً!</p>
          </div>
        </div>
      )}
      {name === "locale-number" && (
        <div className="text-center">
          <p className="font-mono text-2xl font-semibold text-white">1.234.567,89</p>
          <p className="mt-1 text-xs text-neutral-500">de-DE · decimal</p>
        </div>
      )}
      {name === "relative-time" && (
        <div className="text-center">
          <p className="font-semibold text-white">3 hours ago</p>
          <p className="mt-1 text-xs text-neutral-500">Relative to now · en</p>
        </div>
      )}
    </div>
  );
}

function WhyElements() {
  const values = [
    {
      title: "You own the code",
      body: "Copy components into your project and shape the implementation around your product.",
      icon: Blocks,
    },
    {
      title: "React-first, stack-friendly",
      body: "Components take locale state and callbacks from you, without locking you into one i18n library.",
      icon: Package,
    },
    {
      title: "RTL considered",
      body: "Locale-aware pieces account for right-to-left languages such as Arabic and Hebrew.",
      icon: Terminal,
    },
    {
      title: "Open to contributions",
      body: "Read the source, report a gap, or improve a component alongside the community.",
      icon: GitPullRequest,
    },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
            Why Elements
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Localization UI without the lock-in.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ title, body, icon: Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6"
            >
              <Icon className="mb-5 size-5 text-emerald-400" aria-hidden="true" />
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstallSection() {
  return (
    <section className="border-y border-white/[0.06] bg-[#080a09] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
            Get started
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Start small. Ship globally.
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-neutral-400">
            Install the package for the exported components, or add a component’s source to your
            project and own every line.
          </p>
          <Link
            href="/docs/getting-started"
            className="mt-6 inline-flex min-h-10 items-center gap-2 rounded-xl bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200"
          >
            Read the install guide <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#0d100f]">
          <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
            <span className="size-2.5 rounded-full bg-red-400/70" />
            <span className="size-2.5 rounded-full bg-yellow-300/70" />
            <span className="size-2.5 rounded-full bg-emerald-400/70" />
            <span className="ml-2 font-mono text-xs text-neutral-500">terminal</span>
          </div>
          <pre className="overflow-x-auto p-4 text-sm leading-7 text-neutral-200 sm:p-6">
            <code><span className="text-neutral-500"># Install the React package</span>{"\n"}<span className="text-emerald-300">npm install @babelize/elements</span>{"\n\n"}<span className="text-neutral-500"># Or add a single component</span>{"\n"}<span className="text-emerald-300">npx @babelize/elements add language-switcher</span></code>
          </pre>
        </div>
      </div>
    </section>
  );
}

function ContributeSection() {
  const steps = [
    ["01", "Choose an issue", "Read the scope and claim a focused slice."],
    ["02", "Build and test", "Follow the repo conventions and add coverage."],
    ["03", "Open a pull request", "Explain the change and link the issue."],
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
            Build with us
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Your next PR can help the whole community.
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-neutral-400">
            Pick a focused issue, follow the contribution guide, and open a pull request. Start
            with a small improvement or help fill a component gap.
          </p>
          <div className="mt-6 flex flex-col gap-3 min-[420px]:flex-row">
            <a
              href="https://github.com/babelize/babelize-elements/issues?q=is%3Aissue%20is%3Aopen%20label%3A%22good%20first%20issue%22"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200"
            >
              Find a good first issue <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/babelize/babelize-elements/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              Contribution guide
            </a>
          </div>
        </div>
        <ol className="space-y-3">
          {steps.map(([step, title, body]) => (
            <li
              key={step}
              className="flex gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 sm:p-5"
            >
              <span className="font-mono text-sm text-emerald-300">{step}</span>
              <div>
                <h3 className="font-medium text-white">{title}</h3>
                <p className="mt-1 text-sm text-neutral-400">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default function Home() {
  const installCommand = "npm install @babelize/elements";

  return (
    <div className="flex flex-1 flex-col bg-[#050605] text-white">
      <Navbar />
      <main>
        <section className="relative isolate overflow-hidden pb-20 pt-32 sm:pt-40 md:pb-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,189,125,0.17),transparent_55%)]"
          />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1.5 text-xs font-medium text-emerald-300">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                MIT licensed · Open source · React
              </div>
              <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Localization components that feel{" "}
                <span className="text-emerald-400">at home in your app.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-300 sm:text-lg">
                Useful building blocks for language switching, international phone inputs,
                translation workflows, and locale-aware formatting. Copy the code, adapt it, ship it.
              </p>
              <div className="mt-8 flex flex-col gap-3 min-[400px]:flex-row">
                <Link
                  href="/docs/getting-started"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200"
                >
                  Get started <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
                <a
                  href="#components"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  Browse components <Blocks className="size-4" aria-hidden="true" />
                </a>
              </div>
              <div className="mt-8 flex max-w-xl items-center gap-3 rounded-xl border border-white/[0.08] bg-[#0d100f] px-3 py-3 sm:px-4">
                <Terminal className="size-4 shrink-0 text-emerald-300" aria-hidden="true" />
                <code className="min-w-0 flex-1 break-all font-mono text-xs text-neutral-200 sm:text-sm">
                  {installCommand}
                </code>
                <CopyInstallButton command={installCommand} />
              </div>
            </div>
            <InteractiveDemo />
          </div>
        </section>
        <ComponentShowcase />
        <WhyElements />
        <InstallSection />
        <ContributeSection />
        <Community />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
