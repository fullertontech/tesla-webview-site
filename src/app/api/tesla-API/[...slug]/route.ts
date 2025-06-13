import { NextRequest, NextResponse } from "next/server";
import configs from "@/config/api.json";

const BASE_URL = configs.development.teslaAPIaddress;
// const FTC_KEY = process.env.FTC_KEY!;
const TESLA_KEY = process.env.TESLA_KEY!;

export async function GET(
  req: NextRequest,
  context: { params: { slug: string[] } }
) {
  // const { searchParams } = new URL(req.url);
  const searchParams = req.nextUrl.searchParams;
  const queryString = searchParams.toString();
  const { params } = await context;
  const { slug } = await params;
  const fullPath = slug.join("/");
  const token = req.headers.get("x-ftc-authorization");
  const url = `${BASE_URL}/tesla-API/${fullPath}${
    queryString ? `?${queryString}` : ""
  }`;
  console.log("url:" + url);

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "x-ftc-authorization": token || "",
        "x-ftcsys-key": TESLA_KEY,
      },
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const path = searchParams.get("path");
  const token = req.headers.get("access_token");

  if (!token) {
    return NextResponse.json(
      { error: "Access token missing" },
      { status: 401 }
    );
  }

  const body = await req.json();

  try {
    const res = await fetch(`${BASE_URL}/tesla-API/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
