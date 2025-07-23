import { getCaseStudies } from "@/sanity/lib/sanity.query";
import { caseStudy } from "@/types";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response: caseStudy[] | undefined = await getCaseStudies();

    return response
      ? NextResponse.json(response, { status: 200 })
      : NextResponse.json("Case Studies not found", { status: 404 });
  } catch (err) {
    console.log("Case Studies GET Route error===", err);
  }
}
