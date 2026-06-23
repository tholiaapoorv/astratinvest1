"use client";

import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import Link from "next/link";

export default function MarkdownRenderer({ content }: { content: string }) {
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
        img: ({ src, alt }) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={typeof src === "string" ? src : ""}
            alt={alt ?? ""}
            className="mx-auto h-auto w-[80%]"
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
