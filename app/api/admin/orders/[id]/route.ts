
import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectDB } from "@/lib/db"
import Order from "@/models/Order";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  // This assumes your auth session contains a trusted
  // user.role value set on the server.
  const session = await auth();

  if (session?.user?.role !== "admin") {
    return NextResponse.json(
      { error: "Forbidden" },
      { status: 403 }
    );
  }

  try {
    const { id } = await params;
    const body = await request.json();

    if (!["approved", "rejected"].includes(body.status)) {
      return NextResponse.json(
        { error: "Invalid status" },
        { status: 400 }
      );
    }

    await connectDB();

    const order = await Order.findOneAndUpdate(
      { _id: id, status: "pending" },
      {
        $set: {
          status: body.status,
          reviewedAt: new Date(),
        },
      },
      { new: true, runValidators: true }
    ).select("_id videoId amount status reviewedAt");

    if (!order) {
      return NextResponse.json(
        { error: "Pending order not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      orderId: order._id.toString(),
      status: order.status,
    });
  } catch {
    return NextResponse.json(
      { error: "Could not update order." },
      { status: 400 }
    );
  }
}
