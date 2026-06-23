"use client";
import React from "react";
import { TbArrowUpRight } from "react-icons/tb";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import SanityImage from "./SanityImage";
import Link from "next/link";
const BlogCard = ({
  imageSrc,
  title,
  description,
  date,
  slug,
}: {
  imageSrc: SanityImageSource;
  title: string;
  description: string;
  date: string;
  slug: string;
}) => {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex h-full w-full flex-col items-start justify-start gap-2.5">
        <SanityImage
          src={imageSrc}
          className="rounded-2xl"
          // SanityImage forces height:auto inline, so the fixed crop height is
          // set via style (inline wins) to keep every card's image uniform.
          style={{ width: "100%", height: "10rem", objectFit: "cover" }}
          alt={title}
        />
        <div className="flex w-full items-center justify-between gap-2 font-poppins text-[0.7rem] font-extralight">
          <p>Astratinvest</p>
          <p>
            {new Date(date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
        <p className="line-clamp-2 font-poppins text-base font-semibold leading-snug tracking-wide">
          {title}
        </p>
        <p className="line-clamp-2 font-poppins text-sm font-extralight text-[#000121]/80">
          {description}
        </p>
        <div className="mt-auto w-full pt-1">
          <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/view-blog/${slug}`}>
            <button
              className="flex w-full cursor-pointer items-center justify-center gap-1 rounded-md border border-[#000121] p-2 font-ivy text-sm tracking-wide text-[#000121] transition hover:bg-[#000121] hover:text-white"
              aria-label={`Learn more about ${title}`}
            >
              Learn More <TbArrowUpRight className="h-auto w-4" aria-hidden="true" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
