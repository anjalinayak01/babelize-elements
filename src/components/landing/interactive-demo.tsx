"use client";

import { useState } from "react";
import { Copy } from "lucide-react";

const COPY = {
  en: { eyebrow: "PRODUCT PREVIEW", title: "Welcome back", body: "Manage your workspace and language preferences in one place.", action: "Open workspace" },
  fr: { eyebrow: "APERÇU DU PRODUIT", title: "Bon retour", body: "Gérez votre espace de travail et vos préférences de langue au même endroit.", action: "Ouvrir l’espace" },
  ar: { eyebrow: "معاينة المنتج", title: "مرحبًا بعودتك", body: "أدر مساحة العمل وتفضيلات اللغة في مكان واحد.", action: "افتح مساحة العمل" },
  he: { eyebrow: "תצוגת מוצר", title: "ברוך שובך", body: "נהל את סביבת העבודה והעדפות השפה שלך במקום אחד.", action: "פתיחת סביבת העבודה" },
} as const;

type DemoLocale = keyof typeof COPY;

const LABELS: Record<DemoLocale, string> = {
  en: "English",
  fr: "Français",
  ar: "العربية",
  he: "עברית",
};

export function InteractiveDemo() {
  const [locale, setLocale] = useState<DemoLocale>("en");
  const copy = COPY[locale];
  const isRtl = locale === "ar" || locale === "he";

  return (
    <div className="min-w-0 rounded-2xl border border-white/10 bg-[#0d100f] p-4 shadow-[0_24px_90px_rgba(0,0,0,0.45)] sm:p-6">
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">Try the locale switcher</p>
      <div className="rounded-xl border border-white/[0.08] bg-[#080a09] p-4 sm:p-5">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <label htmlFor="landing-locale" className="text-sm text-neutral-300">Preview language</label>
          <select
            id="landing-locale"
            value={locale}
            onChange={(event) => setLocale(event.target.value as DemoLocale)}
            className="max-w-full rounded-lg border border-white/10 bg-[#111513] px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            {Object.entries(LABELS).map(([code, label]) => <option key={code} value={code}>{label}</option>)}
          </select>
        </div>
        <div dir={isRtl ? "rtl" : "ltr"} lang={locale} className="rounded-xl border border-emerald-400/15 bg-emerald-400/[0.04] p-4">
          <p className="text-xs text-emerald-300">{copy.eyebrow}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{copy.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-300">{copy.body}</p>
          <button type="button" className="mt-4 rounded-lg bg-emerald-400 px-3 py-2 text-sm font-semibold text-black">{copy.action}</button>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-neutral-500">Choose a language to preview translated UI copy and right-to-left layout.</p>
      </div>
    </div>
  );
}
