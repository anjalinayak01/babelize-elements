"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyInstallButton({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  async function copyCommand() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copyCommand}
      aria-label={copied ? "Install command copied" : "Copy install command"}
      className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-neutral-300 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
    >
      {copied ? <Check className="size-4 text-emerald-300" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
    </button>
  );
}
