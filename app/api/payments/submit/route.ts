
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Order from "@/models/Order";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const customerName =
      typeof body.customerName === "string"
        ? body.customerName.trim()
        : "";

    const email =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    const transactionId =
      typeof body.transactionId === "string"
        ? body.transactionId.trim()
        : "";

    if (
      !customerName ||
      customerName.length > 100 ||
      !email ||
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !transactionId ||
      transactionId.length > 100
    ) {
      return NextResponse.json(
        { error: "Please enter valid details." },
        { status: 400 }
      );
    }

    await connectDB();

    const order = await Order.create({
      customerName,
      email,
      transactionId,
      amount: 199,
      status: "pending",
    });

    return NextResponse.json(
      {
        message: "Details submitted. Payment verification is pending.",
        orderId: order._id.toString(),
        status: "pending",
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === 11000
    ) {
      return NextResponse.json(
        { error: "This transaction ID was already submitted." },
        { status: 409 }
      );
    }

    console.error("Payment submission failed:", error);

    return NextResponse.json(
      { error: "Submission failed. Please try again." },
      { status: 500 }
    );
  }
}
