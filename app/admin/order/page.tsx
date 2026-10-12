"use client";

import { useEffect, useState } from "react";

type Order = {
  _id: string;
  customerName: string;
  contact: string;
  transactionId: string;
  amount: number;
  status: string;
  createdAt: string;
};

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch pending orders on load (or create a GET /api/admin/orders endpoint)
  useEffect(() => {
    fetch("/api/admin/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.orders || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleUpdateStatus = async (id: string, status: "approved" | "rejected") => {
    const res = await fetch(`/api/payments/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    if (res.ok) {
      setOrders((prev) =>
        prev.map((o) => (o._id === id ? { ...o, status } : o))
      );
    } else {
      alert("Failed to update order status");
    }
  };

  if (loading) return <div className="p-8 text-center">Loading admin orders...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Payment Verifications</h1>
      <div className="overflow-x-auto border rounded-xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b bg-muted/10 text-xs uppercase text-muted">
              <th className="p-4">Customer</th>
              <th className="p-4">Contact</th>
              <th className="p-4">UTR / Ref</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {orders.map((order) => (
              <tr key={order._id} className="text-sm">
                <td className="p-4 font-medium">{order.customerName}</td>
                <td className="p-4">{order.contact}</td>
                <td className="p-4 font-mono">{order.transactionId}</td>
                <td className="p-4">₹{order.amount}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                    order.status === "approved" ? "bg-green-100 text-green-700" :
                    order.status === "rejected" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="p-4 flex gap-2">
                  {order.status === "pending" && (
                    <>
                      <button
                        onClick={() => handleUpdateStatus(order._id, "approved")}
                        className="px-3 py-1 bg-green-600 text-white rounded text-xs font-semibold hover:bg-green-700"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleUpdateStatus(order._id, "rejected")}
                        className="px-3 py-1 bg-red-600 text-white rounded text-xs font-semibold hover:bg-red-700"
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td colSpan={6} className="p-6 text-center text-muted">No orders found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}