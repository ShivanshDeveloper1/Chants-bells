import { NextResponse } from "next/server";

import Order from "@/models/Order"; // तुम्हारा Order मॉडल
import { connectDB } from "@/lib/db";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ success: false, message: "Email is required" }, { status: 400 });
    }

    // Find order by email
    const order = await Order.findOne({ email: email.toLowerCase().trim() });

    if (!order) {
      return NextResponse.json({
        success: false,
        approved: false,
        message: "No payment record found with this email. Please make a payment first.",
      });
    }

    if (order.status !== "approved") {
      return NextResponse.json({
        success: false,
        approved: false,
        message: `Your payment status is '${order.status}'. Please wait for admin approval.`,
      });
    }

    return NextResponse.json({
      success: true,
      approved: true,
      message: "Access granted!",
    });
  } catch (error) {
    console.error("Verification error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}