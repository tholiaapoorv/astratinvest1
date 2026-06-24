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
    <main id="main-content" className="w-full">
      <div className="mx-auto grid w-full max-w-[1400px] gap-6 px-2 text-[#000121] phone:grid-cols-1 smTablet:grid-cols-2 smLaptop:grid-cols-3 laptop:grid-cols-4">
        {blogs &&
          blogs.length !== 0 &&
          blogs.map((blog, idx) => {
            return (
            <Link
              href={`${process.env.NEXT_PUBLIC_APP_URL}/view-blog/${blog.slug.current}`}
              key={idx}
              className="flex h-full rounded-2xl p-2 transition hover:scale-[1.03]"
            >
              <BlogCard
                title={blog.title}
                date={blog.publishedAt}
                description={blog.description}
                imageSrc={blog.mainImage}
                slug={blog.slug.current}
                author={blog.author}
              />
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Page;
