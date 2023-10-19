import { sanityClient } from "@/sanity/client";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    sanityClient.create(body);
    return new NextResponse(JSON.stringify({statusCode: 200, message: 'success'}));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ statusCode: 500, message: error.message })
    );
  }
}
