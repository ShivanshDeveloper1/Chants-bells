
import { NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "node:crypto";

export async function POST(request: Request) {
  try {
    const secret = process.env.RAZORPAY_KEY_SECRET;

    if (!secret) {
      return NextResponse.json(
        { error: "Payment configuration is missing" },
        { status: 500 }
      );
    }

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = await request.json();

    if (
      typeof razorpay_order_id !== "string" ||
      typeof razorpay_payment_id !== "string" ||
      typeof razorpay_signature !== "string"
    ) {
      return NextResponse.json(
        { error: "Invalid payment details" },
        { status: 400 }
      );
    }

    // IMPORTANT: In production, load the expected order ID
    // from your database and check the user's ownership first.
    const expectedSignature = createHmac("sha256", secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    const received = Buffer.from(razorpay_signature, "hex");
    const expected = Buffer.from(expectedSignature, "hex");

    if (
      received.length !== expected.length ||
      !timingSafeEqual(received, expected)
    ) {
      return NextResponse.json(
        { error: "Payment verification failed" },
        { status: 400 }
      );
    }

    // Signature valid does not alone establish that
    // the payment is captured or that the order is unpaid.
    // Fetch/check payment status, amount, currency and order.
    // Then save confirmed access in your database.

    return NextResponse.json({
      verified: true,
      message: "Signature verified; payment status must be confirmed",
    });
  } catch {
    return NextResponse.json(
      { error: "Could not verify payment" },
      { status: 500 }
    );
  }
}
