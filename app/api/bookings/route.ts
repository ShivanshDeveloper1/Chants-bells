import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  // Validate Password Server-Side
  if (body.password !== "1234") {
    return NextResponse.json(
      { success: false, message: "Invalid Password" },
      { status: 401 }
    );
  }

  const booking = {
    id: crypto.randomUUID(),
    anusthanId: body.anusthanId,
    status: "confirmed",
  };

  // Google Drive File ID extracted from your provided shareable URL
  const DRIVE_FILE_ID = "1jhkm01vtA1sd2C3w8DjvXn8q9aKt5m5v";

  return NextResponse.json({
    success: true,
    booking,
    fileId: DRIVE_FILE_ID,
  });
}