import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type emailType = {
  name: string;
  email: string;
  phone: number;
  stock: string;
  message: string;
};

export async function POST(req: NextRequest) {
  const body: emailType = await req.json();
  const email = await resend.emails.send({
    from: "Query<onboarding@astratinvest.com>",
    cc: "",
    to: "shivam.agrawal@astratinvest.com",
    subject: `Enquiry from ${body.email}`,
    html: `<p>Name:${body.name}</p><p>Email:${body.email}</p><p>Stock Name: ${body.stock}</p><p>Phone: ${body.phone}</p><p>Query:${body.message}</p>`,
    // headers: {
    //   "Access-Control-Allow-Origin": "no-cors",
    // },
  });
  if (email.data) {
    return NextResponse.json({ success: true });
  }
  return NextResponse.json({ success: false });
}
