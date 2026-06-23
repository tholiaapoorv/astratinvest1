"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export type FeaturedLogo = {
  name: string;
  src: string;      // path under /public or a remote URL allowed by next.config
  href?: string;    // optional outbound link
  width?: number;   // intrinsic size hints to improve CLS
  height?: number;
};

interface FeaturedOnProps {
  title?: string;
  subtitle?: string;
  logos?: FeaturedLogo[]; // optional; falls back to defaults
  className?: string;
}

// 🔹 Default logos baked into the component
export const DEFAULT_FEATURED_LOGOS: FeaturedLogo[] = [
  { name: "The Economic Times",  src: "/logos/Economic-times.png",   width: 300, height: 90 },
  { name: "Entrepreneur India",  src: "/logos/Entrepreneur-India.png", width: 300, height: 90 },
  { name: "Entracker",           src: "/logos/Entracker.png",        width: 300, height: 90 },
  { name: "Business Today",      src: "/logos/Business-today.png",   width: 300, height: 90 },
  { name: "ET Edge",             src: "/logos/ET-Edge.png",          width: 300, height: 90 },
  { name: "News 18",             src: "/logos/News18.png",           width: 300, height: 90 },
];

/**
 * Responsive, accessible "Featured on" section.
 * - Uses Next/Image for optimization
 * - Balanced grid: 2 cols (mobile), 3 cols (sm+)
 * - If last row has 2 items on a 3-col grid, they're centered
 * - No hover effects; logos always full color
 * - `font-ivy` applied to the whole section
 */
export default function FeaturedOn({
  title = "Featured on",
  subtitle = "Coverage from leading business publications",
  logos = DEFAULT_FEATURED_LOGOS,
  className = "",
}: FeaturedOnProps) {
  return (
    <section
      aria-labelledby="featured-on-heading"
      className={`w-full py-16 md:py-20 bg-white font-ivy ${className}`}
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

        {/* Balanced grid: 2 cols on mobile, 3 cols from sm+.
            The arbitrary selector centers a 2-item last row on 3-col grids. */}
        <ul
          aria-label="Media logos"
          className="
            grid grid-cols-2 sm:grid-cols-3
            gap-x-10 gap-y-12
            items-center justify-items-center
            px-4 sm:px-8
            sm:[&>li:nth-last-child(2):nth-child(3n+1)]:[grid-column:2]
          "
        >
          {logos.map((logo) => {
            const content = (
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width ?? 300}
                height={logo.height ?? 90}
                className="h-12 sm:h-14 md:h-18 w-auto object-contain"
              />
            );

            return (
              <li key={logo.name} className="p-4">
                {logo.href ? (
                  <a
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-800 p-2"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="p-2">
                    {content}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* subtle divider */}
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
