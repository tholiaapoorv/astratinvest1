import { getBlogs } from "@/sanity/lib/sanity.query";
import { blogs } from "@/types";
import {  MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getBlogs();
  const blogsToMap: MetadataRoute.Sitemap = blogs.map((blog: blogs) => {
    return {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/view-blog/${blog.slug.current}`,
      changeFrequency: "monthly",
    };
  });
  return [
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/about-us`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/blog`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/research/case-studies`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/research/performance-record`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/research/quantitative-model`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/research/risk-management`,
    },
    ...blogsToMap,
  ];
}
