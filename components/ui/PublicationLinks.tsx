import React from "react";
import { FaMedium, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import { TbArrowUpRight } from "react-icons/tb";

type ExternalLink = { platform?: string; url?: string };

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Medium: FaMedium,
  Substack: SiSubstack,
  LinkedIn: FaLinkedin,
  X: FaXTwitter,
};

export default function PublicationLinks({
  links,
  className = "",
}: {
  links?: ExternalLink[];
  className?: string;
}) {
  // Only render links that actually have a URL.
  const valid = (links || []).filter((l) => l?.url);
  if (valid.length === 0) return null;

  return (
    <div
      className={`flex w-full flex-wrap items-center justify-center gap-3 ${className}`}
    >
      {valid.map((link, idx) => {
        const Icon = ICONS[link.platform || ""] ?? TbArrowUpRight;
        const named = link.platform && link.platform !== "Other";
        const label = named ? `Read on ${link.platform}` : "Read the original";
        return (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-[#000121] px-5 py-2 font-poppins text-sm text-[#000121] transition hover:bg-[#000121] hover:text-white"
            aria-label={`${label} (opens in a new tab)`}
          >
            <Icon className="h-auto w-5" aria-hidden="true" />
            {label}
            <TbArrowUpRight className="h-auto w-4" aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
