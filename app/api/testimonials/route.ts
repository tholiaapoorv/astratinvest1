import { getTestimonials } from "@/sanity/lib/sanity.query";
import { testimonial } from "@/types";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response: testimonial[] | undefined = await getTestimonials();

    return response
      ? NextResponse.json(response, { status: 200 })
      : NextResponse.json("Testimonials not found", { status: 404 });
  } catch (err) {
    console.log("Testimonials GET Route error===", err);
  }
}
