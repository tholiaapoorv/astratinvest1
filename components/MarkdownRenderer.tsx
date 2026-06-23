"use client";

import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import Link from "next/link";

type BodyImage = { name?: string; alt?: string; url?: string };

/**
 * remark-math only renders `$$...$$` as centered *display* math when the `$$`
 * delimiters sit on their own lines. Written inline (`$$E=mc^2$$` on a single
 * line) it parses as *inline* math, which is left-aligned. To make standalone
 * formulas "just work", expand any line that is ONLY `$$...$$` into the fenced
 * block form. Genuine inline `$$` inside a sentence is left untouched.
 */
function expandDisplayMath(src: string): string {
  return src.replace(
    /^[ \t]*\$\$((?:(?!\$\$)[^\n])+?)\$\$[ \t]*$/gm,
    (_match, body) => `$$\n${body.trim()}\n$$`,
  );
}

export default function MarkdownRenderer({
  content,
  images = [],
}: {
  content: string;
  images?: BodyImage[];
}) {
  // Map a Markdown image's reference name (![alt](name)) to its uploaded asset.
  const imageMap = new Map<string, BodyImage>();
  for (const img of images) {
    if (img?.name) imageMap.set(img.name, img);
  }

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={{
        h1: ({ children }) => (
          <h1 className="font-ivy text-5xl font-semibold text-[#000121]">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="font-ivy text-4xl font-semibold text-[#000121]">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="font-ivy text-3xl font-semibold text-[#000121]">
            {children}
          </h3>
        ),
        h4: ({ children }) => (
          <h4 className="font-ivy text-2xl font-semibold text-[#000121]">
            {children}
          </h4>
        ),
        h5: ({ children }) => (
          <h5 className="font-ivy text-xl font-semibold text-[#000121]">
            {children}
          </h5>
        ),
        h6: ({ children }) => (
          <h6 className="font-ivy text-lg font-semibold text-[#000121]">
            {children}
          </h6>
        ),
        p: ({ children }) => (
          <p className="font-poppins font-light text-[#000121]">{children}</p>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-[#3959e6] font-poppins font-light text-[#3959e6]">
            {children}
          </blockquote>
        ),
        ul: ({ children }) => (
          <ul className="py-auto list-disc space-y-5 font-poppins font-light text-[#000121]">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="py-auto list-decimal space-y-5 font-poppins font-light text-[#000121]">
            {children}
          </ol>
        ),
        a: ({ href, children }) => (
          <Link
            href={href ?? "#"}
            className="rounded-md bg-blue-100 p-1 font-poppins font-semibold text-blue-700 underline"
          >
            {children}
          </Link>
        ),
        // eslint-disable-next-line @next/next/no-img-element
        img: ({ src, alt }) => {
          // If the src matches a Studio-uploaded image's reference name,
          // swap in its CDN URL; otherwise fall back to the raw src (so plain
          // external image URLs keep working).
          const key = typeof src === "string" ? src : "";
          const resolved = imageMap.get(key);
          const finalSrc = resolved?.url ?? key;
          const finalAlt = alt ?? resolved?.alt ?? "";
          return (
            // Mirrors the PortableText image styling: centered, responsive.
            // A span (inline) is used because markdown wraps images in <p>,
            // and a block-level <div> there would be invalid HTML.
            <span className="flex w-full items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={finalSrc}
                alt={finalAlt}
                className="h-auto object-contain phone:w-[80%] tablet:w-[50%]"
              />
            </span>
          );
        },
      }}
    >
      {expandDisplayMath(content)}
    </ReactMarkdown>
  );
}
