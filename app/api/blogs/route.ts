import { getBlogs } from "@/sanity/lib/sanity.query";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const blogs = await getBlogs();
    // console.log(blogs);
    return NextResponse.json(blogs, { status: 200 });
  } catch (err) {
    console.log("Blogs GET Route Error=== ", err);
    return NextResponse.json(`Cannot GET Blogs: ${err}`, { status: 401 });
  }
}
