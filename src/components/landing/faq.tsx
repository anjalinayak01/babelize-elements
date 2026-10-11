"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Which components are included today?",
    answer:
      "The library currently exports LanguageSwitcher, PhoneInput, and NavBar. Browse the component docs for their props, examples, and customization options.",
  },
  {
    question: "Can I customize the components?",
    answer:
      "Yes. The components expose props for their behavior and styling, and you can adapt the source to your project’s needs.",
  },
  {
    question: "Which i18n libraries do the components require?",
    answer:
      "The components accept locale values and callbacks rather than requiring a specific i18n library. You can connect them to the translation setup in your app.",
  },
  {
    question: "Is Babelize Elements open source?",
    answer:
      "Yes. Babelize Elements is MIT licensed. You can inspect the source, use it in your projects, and contribute improvements through GitHub.",
  },
  {
    question: "How can I contribute?",
    answer:
      "Start with an open issue, read the contribution guide, make a focused change, run the project checks, and open a pull request for review.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:gap-16">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center">
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-xs font-medium uppercase tracking-widest text-neutral-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30 motion-safe:animate-ping"></span>
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                </span>
                Support
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Frequently asked{" "}
                <span className="bg-gradient-to-r from-emerald-300 to-emerald-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(52,211,153,0.2)]">
                  questions
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/50">
                Everything you need to know about using Babelize Elements in your React projects.
                Can&apos;t find what you&apos;re looking for? Check out our GitHub discussions.
              </p>
            </Reveal>
          </div>

          {/* Accordion */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <Reveal key={faq.question} delay={i * 0.1}>
                  <div
                    className={cn(
                      "group relative overflow-hidden rounded-2xl border transition-colors duration-300",
                      isOpen
                        ? "border-emerald-500/20 bg-emerald-500/[0.02]"
                        : "border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.03]"
                    )}
                  >
                    <button
                      className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span
                        className={cn(
                          "text-base font-medium transition-colors duration-300",
                          isOpen ? "text-emerald-400" : "text-white group-hover:text-white/80"
                        )}
                      >
                        {faq.question}
                      </span>
                      <div
                        className={cn(
                          "flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                          isOpen
                            ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400 rotate-45"
                            : "border-white/[0.08] bg-white/[0.02] text-white/50 group-hover:bg-white/[0.06] group-hover:text-white"
                        )}
                      >
                        <Plus size={16} />
                      </div>
                    </button>
                    <div
                      className={cn(
                        "grid transition-all duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 text-sm leading-relaxed text-white/50">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
