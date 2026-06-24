import { getBlogs } from "@/sanity/lib/sanity.query";
import { blogs } from "@/types";
import { MetadataRoute } from "next";

// Prefer the canonical production origin; fall back to the dev URL.
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.NEXT_PUBLIC_APP_URL ||
  "http://localhost:3000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getBlogs();
  const blogsToMap: MetadataRoute.Sitemap = blogs.map((blog: blogs) => {
    return {
      url: `${baseUrl}/view-blog/${blog.slug.current}`,
      lastModified: blog.publishedAt ? new Date(blog.publishedAt) : undefined,
      changeFrequency: "monthly",
    };
  });
  return [
    { url: `${baseUrl}` },
    { url: `${baseUrl}/about-us` },
    { url: `${baseUrl}/blog` },
    { url: `${baseUrl}/research/case-studies` },
    { url: `${baseUrl}/research/performance-record` },
    { url: `${baseUrl}/research/quantitative-model` },
    { url: `${baseUrl}/research/risk-management` },
    ...blogsToMap,
  ];
}
