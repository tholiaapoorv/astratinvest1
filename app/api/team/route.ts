import { getTeams } from "@/sanity/lib/sanity.query";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const teams = await getTeams();

    return NextResponse.json(teams, { status: 200 });
  } catch (err) {
    console.log("Teams GET Route Error=== ", err);
    return NextResponse.json(`Cannot GET Teams: ${err}`, { status: 401 });
  }
}
