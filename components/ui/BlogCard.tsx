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
    <div className="mx-auto flex h-full items-start justify-center gap-12">
      <div className="flex h-full flex-col items-start justify-between gap-5">
        <SanityImage src={imageSrc} className="h-auto w-fit rounded-3xl" />
        <div className="flex w-full justify-between font-poppins font-extralight phone:text-[min(3vh,3vw)] smTablet:text-[min(1.6vh,1.6vw)]">
          <p className=" ">Author: Astratinvest </p> &nbsp; &nbsp; &nbsp;
          <p className=" ">{new Date(date).toUTCString()}</p>
        </div>
        <p className="font-poppins font-semibold tracking-wide phone:text-[min(4.5vh,4.5vw)] smTablet:text-[min(2.8vw,2.8vh)] smLaptop:text-[min(2.5vh,2.5vw)]">
          {title}
        </p>
        <p className="line-clamp-2 font-poppins font-extralight phone:text-[min(3vh,3vw)] smTablet:text-[min(1.8vw,1.8vh)]">
          {description}
        </p>
        <div className="w-full">
          <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/view-blog/${slug}`}>
            <button className="flex w-full cursor-pointer items-center justify-center gap-1 border border-[#000121] p-3 font-ivy tracking-wide text-[#000121] transition hover:bg-[#000121] hover:text-white xsPhone:text-[min(3.5vw,3.5vh)] smTablet:text-[min(1.8vw,1.8vh)]">
              Learn More <TbArrowUpRight className="h-auto phone:w-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
