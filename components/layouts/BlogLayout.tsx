"use client";
import React from "react";
import { BookOpen } from "lucide-react";

const BlogLayout = () => {
  return (
    <div className="mt-[5rem] flex h-full w-screen flex-col items-center justify-center bg-transparent">
      <div className="absolute right-0 top-0 z-[-1] h-[min(40vw,40vh)] w-[min(30vw,30vh)] -rotate-45 rounded-full bg-gradient-to-br from-pink-500 via-sky-700 to-[#257194] blur-[100px]"></div>
      <div className="absolute left-[5rem] top-[10rem] z-[-1] h-[min(30vw,30vh)] w-[min(30vw,30vh)] rounded-full bg-gradient-to-bl from-pink-100 to-pink-900 blur-[100px]"></div>
      <div className="absolute left-[20rem] top-[10rem] z-[-1] h-[min(20vw,20vh)] w-[min(20vw,20vh)] rounded-full bg-gradient-to-bl from-purple-200 to-purple-900 blur-[100px]"></div>

      <div className="flex flex-col items-center justify-center gap-0">
        <BookOpen className="mt-[3rem] h-auto w-[4.2rem] text-[#3959e6]" />

        <div className="flex flex-col items-center justify-center gap-2">
          <p className="font-ivy text-[min(11.5vh,11.5vw)] text-[#FFFFFF]">
            Blogs
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
