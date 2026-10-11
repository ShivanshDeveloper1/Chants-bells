import React from 'react';

export const metadata = {
  title: 'Digital Delivery & Access Policy - Chants & Bells',
  description: 'Information regarding digital content delivery and access procedures for Chants & Bells.',
};

export default function DigitalDeliveryPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground border-b border-border pb-4">
          Digital Delivery & Access Policy
        </h1>
        <p className="text-muted mt-2"><strong>Chants & Bells</strong> – Ancient Wisdom. Modern Life.</p>

        <h2 className="font-serif text-xl font-semibold text-foreground mt-8">1. No Physical Shipping</h2>
        <p className="text-muted leading-relaxed">
          The current Chants & Bells offering consists of digital video guidance. No physical products are shipped with a digital-only purchase unless the product page expressly says otherwise.
        </p>

        <h2 className="font-serif text-xl font-semibold text-foreground mt-8">2. How Access is Delivered</h2>
        <p className="text-muted leading-relaxed">
          After QR-code payment is received and verified, purchased videos are made available through the customer’s website login. Access is intended to begin promptly after verification and account activation; QR payments may require manual verification.
        </p>
        <p className="text-muted leading-relaxed">
          Customers should retain their transaction reference (UTR / UPI Transaction ID) available in their UPI app history. If access is not activated promptly, contact WhatsApp at <strong>+91 9456433321</strong> with your registered mobile number and transaction ID or payment screenshot.
        </p>
        <div className="my-4 rounded-lg border border-amber-300 bg-amber-50 p-4 text-amber-900 text-sm">
          <strong>Security Notice:</strong> Never share your UPI PIN or OTP.
        </div>

        <h2 className="font-serif text-xl font-semibold text-foreground mt-8">3. Navratri Access Window</h2>
        <p className="text-muted leading-relaxed">
          For a Navratri Anushthan product, access begins once QR payment is verified and the website account is activated, and ends on the last day of the relevant Navratri edition. The exact calendar date and time (IST) will be displayed at checkout. Buying later during Navratri does not extend the expiry date. Access expiry alone does not qualify for a refund.
        </p>

        <h2 className="font-serif text-xl font-semibold text-foreground mt-8">4. Technical Requirements and Assistance</h2>
        <p className="text-muted leading-relaxed">
          A compatible smartphone, tablet, or computer, a supported browser, sound output, and a stable internet connection are required. If access fails, contact WhatsApp +91 9456433321 or email <a href="mailto:dhananjai312@gmail.com" className="text-amber-600 hover:underline">dhananjai312@gmail.com</a> with your order reference.
        </p>

        <h2 className="font-serif text-xl font-semibold text-foreground mt-8">5. Service Reminders</h2>
        <p className="text-muted leading-relaxed">
          Service reminders may be sent by WhatsApp and/or email when the customer has provided appropriate contact details and permissions. Delivery can depend on third-party messaging services and is not guaranteed. Missing a reminder does not extend the video access period.
        </p>

        <div className="mt-8 rounded-lg bg-surface border border-border p-6">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Support Contacts</h3>
          <p className="text-sm text-muted mb-1"><strong>Website:</strong> <a href="https://www.chantsandbells.com" className="text-amber-600 hover:underline">www.chantsandbells.com</a></p>
          <p className="text-sm text-muted mb-1"><strong>Email:</strong> <a href="mailto:dhananjai312@gmail.com" className="text-amber-600 hover:underline">dhananjai312@gmail.com</a></p>
          <p className="text-sm text-muted"><strong>Support WhatsApp:</strong> +91 9456433321</p>
        </div>
      </div>
    </main>
  );
}