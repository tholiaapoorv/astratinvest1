"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Contrast } from "lucide-react";

/**
 * High Contrast Mode toggle (GIGW 3.0 6.5.2).
 * Switches the next-themes value between "light" and "high-contrast", which
 * flips the `data-theme` attribute on <html> and drives the overrides in
 * globals.css. The choice is persisted by next-themes (localStorage).
 */
const HighContrastToggle = ({
  showText = false,
  className = "",
}: {
  showText?: boolean;
  className?: string;
}) => {
  const { theme, setTheme } = useTheme();
  // next-themes returns no resolved value during SSR; gate the pressed state
  // on mount to avoid a hydration mismatch on aria-pressed.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isHighContrast = mounted && theme === "high-contrast";

  return (
    <button
      type="button"
      aria-label="Toggle high contrast mode"
      aria-pressed={isHighContrast}
      onClick={() => setTheme(isHighContrast ? "light" : "high-contrast")}
      className={`flex items-center justify-center gap-2 rounded-md border border-white/30 px-3 py-2 font-poppins text-white transition hover:border-white hover:text-[#3959E5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3959E5] ${className}`}
    >
      <Contrast className="h-auto w-5 shrink-0" aria-hidden="true" />
      {showText && (
        <span className="whitespace-nowrap">
          High Contrast{isHighContrast ? ": On" : ": Off"}
        </span>
      )}
    </button>
  );
};

export default HighContrastToggle;
