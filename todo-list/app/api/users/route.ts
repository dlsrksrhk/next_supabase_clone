import { NextResponse } from "next/server";

const DB = [
  { id: 1, name: "David" },
  { id: 2, name: "Amilee" },
  { i: 3, name: "Chaly" },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name") || "";
  return NextResponse.json({
    users: DB.filter((user) => user.name.includes(name)),
  });
}
