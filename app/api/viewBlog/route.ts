import { getBlogBySlug, getBlogs } from "@/sanity/lib/sanity.query";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const slug = headers().get("slug");
  try {
    if (slug) {
      const blogs = await getBlogBySlug(slug);
      console.log(blogs);
      return NextResponse.json(blogs, { status: 200 });
    }
    return NextResponse.json("Blog Not Found", { status: 404 });
  } catch (err) {
    console.log("Blogs GET Route Error=== ", err);
    return NextResponse.json(`Cannot GET Blogs: ${err}`, { status: 401 });
  }
}
