"use client";
import BlogCard from "@/components/ui/BlogCard";
import { blogs } from "@/types";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [blogs, setBlogs] = useState<blogs[]>([]);
  useEffect(() => {
    const response = axios.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/blogs`);
    response
      .then((data) => {
        setBlogs(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="grid h-full w-[90%] items-start justify-start text-[#000121] phone:grid-cols-1 phone:gap-[2rem] tablet:grid-cols-2 tablet:gap-[2rem] smLaptop:gap-[2rem]">
      {blogs &&
        blogs.length !== 0 &&
        blogs.map((blog, idx) => {
          return (
            <Link
              href={`${process.env.NEXT_PUBLIC_APP_URL}/view-blog/${blog.slug.current}`}
              key={idx}
              className="flex h-full items-start justify-start rounded-[2rem] p-4 transition hover:scale-105"
            >
              <BlogCard
                title={blog.title}
                date={blog.publishedAt}
                description={blog.description}
                imageSrc={blog.mainImage}
                slug={blog.slug.current}
              />
            </Link>
          );
        })}
    </div>
  );
};

export default Page;
