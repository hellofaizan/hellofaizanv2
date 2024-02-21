// POST req to update profile on prisma

import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const response = await fetch(
    "https://gh-pinned-repos-api.ysnirix.xyz/api/get/?username=hellofaizan",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return NextResponse.json(data);
}
