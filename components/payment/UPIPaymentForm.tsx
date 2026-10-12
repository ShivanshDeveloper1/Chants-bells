
"use client";

import { useState } from "react";

export default function UPIPaymentForm() {
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/payments/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerName,
          email,
          transactionId,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Submission failed.");
      }

      setSubmitted(true);
      setMessage(
        "Your details have been submitted successfully."
      );
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="space-y-4 rounded-xl border border-border p-4">
        <h3 className="text-lg font-semibold">
          Payment Verification Pending
        </h3>
        <p className="text-sm text-muted">
          {message} We will verify your payment manually.
          Your video access will be granted after approval.
        </p>

        <a
          href="https://wa.me/YOUR_NUMBER"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-green-600 px-4 py-2 text-white"
        >
          Contact Us on WhatsApp
        </a>
      </div>
    );
  }

  const inputClass =
    "mt-1 w-full rounded-lg border border-border bg-surface p-3 text-foreground";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="customerName">Full Name</label>
        <input
          id="customerName"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className={inputClass}
          maxLength={100}
          autoComplete="name"
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          maxLength={254}
          autoComplete="email"
          required
        />
      </div>

      <div>
        <label htmlFor="transactionId">
          UPI Transaction ID / UTR
        </label>
        <input
          id="transactionId"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
          className={inputClass}
          maxLength={100}
          required
        />
      </div>

      {message && (
        <p role="alert" className="text-sm text-red-500">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-gold px-4 py-3 font-semibold text-white disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Payment Details"}
      </button>
    </form>
  );
}
