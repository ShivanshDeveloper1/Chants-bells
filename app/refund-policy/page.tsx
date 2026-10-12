import React from 'react';

export const metadata = {
  title: 'Refund & Cancellation Policy - Chants & Bells',
  description: 'Refund and cancellation guidelines for Chants & Bells digital products.',
};

export default function RefundPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground border-b border-border pb-4">
          Refund & Cancellation Policy
        </h1>
        <p className="text-muted mt-2"><strong>Chants & Bells</strong> – Ancient Wisdom. Modern Life.</p>

        <h2 className="font-serif text-xl font-semibold text-foreground mt-8">1. Digital Content Purchases</h2>
        <p className="text-muted leading-relaxed">
          Because access is to digital, time-sensitive pre-recorded puja videos, purchases are generally non-cancellable and non-refundable once paid access has been supplied, except as described below or where applicable law requires otherwise. This policy is displayed clearly before checkout.
        </p>

        <h2 className="font-serif text-xl font-semibold text-foreground mt-8">2. When We Will Review a Refund</h2>
        <p className="text-muted">Please contact us if:</p>
        <ul className="list-disc pl-6 space-y-1 text-muted">
          <li>You were charged twice for the same order.</li>
          <li>Payment was deducted but no valid access was provided.</li>
          <li>We materially failed to provide the purchased content and could not fix the issue within a reasonable period.</li>
          <li>A refund is otherwise required by applicable law.</li>
        </ul>
        <p className="text-muted mt-2">We will assess the transaction and provide an appropriate refund, restored access, or other legally compliant remedy.</p>

        <h2 className="font-serif text-xl font-semibold text-foreground mt-8">3. How to Request</h2>
        <p className="text-muted leading-relaxed">
          Email <a href="mailto:chantsandbells@gmail.com" className="text-amber-600 hover:underline">chantsandbells@gmail.com</a> or message WhatsApp at <strong>+91 9456433321</strong> with your name, order/transaction reference, date of payment, registered phone/email, and a brief explanation.
        </p>
        <div className="my-4 rounded-lg border border-amber-300 bg-amber-50 p-4 text-amber-900 text-sm">
          <strong>Security Notice:</strong> Do not share OTPs, passwords, CVVs, or complete card numbers.
        </div>

        <h2 className="font-serif text-xl font-semibold text-foreground mt-8">4. Processing Timelines</h2>
        <p className="text-muted leading-relaxed">
          We aim to acknowledge requests within 24 hours during support hours and communicate a decision within 7 business days, where reasonably possible. Approved refunds will be initiated to the original payment method where possible; actual credit times depend on the payment provider and bank.
        </p>

        <h2 className="font-serif text-xl font-semibold text-foreground mt-8">5. Cancellations and Access Expiry</h2>
        <p className="text-muted leading-relaxed">
          There is no recurring subscription or automatic renewal unless expressly stated on the relevant product page. An access window ending on its advertised date is not a cancellation and does not itself create a refund entitlement.
        </p>

        <div className="mt-8 rounded-lg bg-surface border border-border p-6">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Support Contacts</h3>
          <p className="text-sm text-muted mb-1"><strong>Website:</strong> <a href="https://www.chantsandbells.com" className="text-amber-600 hover:underline">www.chantsandbells.com</a></p>
          <p className="text-sm text-muted mb-1"><strong>Email:</strong> <a href="mailto:chantsandbells@gmail.com" className="text-amber-600 hover:underline">chantsandbells@gmail.com</a></p>
          <p className="text-sm text-muted"><strong>Support WhatsApp:</strong> +91 9456433321</p>
        </div>
      </div>
    </main>
  );
}