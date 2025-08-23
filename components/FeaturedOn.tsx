"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export type FeaturedLogo = {
  name: string;
  src: string; // path under /public or a remote URL allowed by next.config
  href?: string; // optional outbound link
  width?: number; // optional intrinsic width hint (improves CLS)
  height?: number; // optional intrinsic height hint
};

interface FeaturedOnProps {
  title?: string;
  subtitle?: string;
  logos: FeaturedLogo[];
  className?: string;
}

/**
 * Responsive, accessible "Featured on" section.
 * - Uses Next/Image for optimization
 * - Logos are shown in grayscale by default; color on hover
 * - Keyboard & screen‑reader friendly (links are focusable with visible ring)
 */
export default function FeaturedOn({
  title = "Featured on",
  subtitle,
  logos,
  className = "",
}: FeaturedOnProps) {
  return (
    <section
      aria-labelledby="featured-on-heading"
      className={`w-full py-16 md:py-20 bg-white ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2
            id="featured-on-heading"
            className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900"
          >
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 text-base text-gray-600">{subtitle}</p>
          ) : null}
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10 items-center justify-items-center">
          {logos.map((logo) => {
            const content = (
              <>
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width ?? 200}
                  height={logo.height ?? 60}
                  className="h-10 w-auto object-contain filter grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                />
                <span className="sr-only">{logo.name}</span>
              </>
            );

            return (
              <li key={logo.name} className="group">
                {logo.href ? (
                  <a
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-800 p-2"
                    aria-label={logo.name}
                  >
                    {content}
                  </a>
                ) : (
                  <div aria-label={logo.name} className="p-2">{content}</div>
                )}
              </li>
            );
          })}
        </ul>

        {/* subtle divider wave effect (optional) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"
        />
      </div>
    </section>
  );
}

// ---------- Example usage (remove if you pass your own props) ----------
// You can import this component and pass the logos array from your page.
// Example logos array (place matching files under /public/logos/*):
export const DEFAULT_FEATURED_LOGOS: FeaturedLogo[] = [
  { name: "The Economic Times", src: "/logos/et times.png" },
  { name: "Entrepreneur India", src: "/logos/Ent logo.svg" },
  { name: "Entracker", src: "/logos/entracker.png" },
  { name: "Business Today", src: "/logos/businesstoday.webp" },
  { name: "News 18", src: "/logos/News18.png" },
];
