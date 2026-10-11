import React from 'react';

export const metadata = {
  title: 'Privacy Policy - Chants & Bells',
  description: 'Privacy Policy for Chants & Bells guided Hindu puja content service.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground border-b border-border pb-4">
          Privacy Policy
        </h1>
        <p className="text-muted mt-2"><strong>Chants & Bells</strong> – Ancient Wisdom. Modern Life.</p>

        <h2 className="font-serif text-xl font-semibold text-foreground mt-8">1. Who We Are</h2>
        <p className="text-muted leading-relaxed">
          Chants & Bells is a guided Hindu puja content service operated by <strong>Dhananjai Singh</strong>, sole proprietor trading as Chants & Bells, located at:
        </p>
        <p className="text-muted italic">A-116, Sector 132, Noida, Gautambuddha Nagar, Uttar Pradesh 201304, India.</p>
        <p className="text-muted">
          <strong>Website:</strong> <a href="https://www.chantsandbells.com" className="text-amber-600 hover:underline">https://www.chantsandbells.com</a><br />
          <strong>Privacy Contact:</strong> dhananjai312@gmail.com
        </p>

        <h2 className="font-serif text-xl font-semibold text-foreground mt-8">2. Information We Collect</h2>
        <p className="text-muted leading-relaxed">
          When you browse, enquire, register, or purchase, we may collect your name, mobile number, email address, account/login details, purchase and access history, queries, and support communications. We may also collect device, browser, IP address, and usage information through website logs and enabled cookies/analytics tools.
        </p>
        <p className="text-muted">We do not ask you to provide sensitive personal information for ordinary purchases.</p>

        <h2 className="font-serif text-xl font-semibold text-foreground mt-8">3. Payments</h2>
        <p className="text-muted leading-relaxed">
          At launch, customers pay using the QR code displayed during checkout. To confirm payment and activate website access, we may request the payment transaction reference or UTR and verify receipt against our records.
        </p>
        <div className="my-4 rounded-lg border border-amber-300 bg-amber-50 p-4 text-amber-900 text-sm">
          <strong>Security Notice:</strong> Never send us your UPI PIN, OTP, banking password, or card security code.
        </div>
        <p className="text-muted">If a payment gateway is introduced later, this policy will be updated accordingly. The payment provider’s privacy practices also apply.</p>

        <h2 className="font-serif text-xl font-semibold text-foreground mt-8">4. Why We Use Information</h2>
        <p className="text-muted">We use personal information to:</p>
        <ul className="list-disc pl-6 space-y-1 text-muted">
          <li>Register and authenticate website accounts.</li>
          <li>Verify QR-code payments and provide purchased video access.</li>
          <li>Send purchase confirmations and requested puja reminders.</li>
          <li>Respond to support queries, prevent misuse, maintain security, and comply with legal requirements.</li>
        </ul>
        <p className="text-muted mt-2">Promotional WhatsApp or email messages will be sent only with separate appropriate consent and an opt-out mechanism.</p>

        <h2 className="font-serif text-xl font-semibold text-foreground mt-8">5. Sharing</h2>
        <p className="text-muted leading-relaxed">
          We may share information with website hosting, payment verification/banking, messaging, email, and technical support providers only to the extent needed to provide the service. We may disclose information when legally required.
        </p>

        <h2 className="font-serif text-xl font-semibold text-foreground mt-8">6. Retention & Security</h2>
        <p className="text-muted leading-relaxed">
          We retain information only as long as reasonably needed for the stated purposes, legal records, dispute resolution, and security. We use reasonable organizational and technical safeguards, though no online service can guarantee absolute security.
        </p>

        <h2 className="font-serif text-xl font-semibold text-foreground mt-8">7. Your Choices & Rights</h2>
        <p className="text-muted leading-relaxed">
          You may contact <a href="mailto:dhananjai312@gmail.com" className="text-amber-600 hover:underline">dhananjai312@gmail.com</a> to request access, correction, updating, or deletion of your personal information, withdraw consent, or raise a privacy grievance. Requests are handled according to applicable Indian law.
        </p>

        <h2 className="font-serif text-xl font-semibold text-foreground mt-8">8. Cookies, Children & Updates</h2>
        <p className="text-muted leading-relaxed">
          If non-essential cookies are used, consent controls will be implemented. Our service is intended for adults making purchases; a parent or guardian should supervise any child using it. We may update this policy periodically.
        </p>

        <div className="mt-8 rounded-lg bg-surface border border-border p-6">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Privacy & Grievance Contact</h3>
          <p className="text-sm text-muted mb-1"><strong>Grievance Officer:</strong> Dhananjai Singh (Sole Proprietor)</p>
          <p className="text-sm text-muted mb-1"><strong>Email:</strong> <a href="mailto:dhananjai312@gmail.com" className="text-amber-600 hover:underline">dhananjai312@gmail.com</a></p>
          <p className="text-sm text-muted mb-1"><strong>Address:</strong> A-116, Sector 132, Noida, Gautambuddha Nagar, Uttar Pradesh 201304, India</p>
          <p className="text-sm text-muted"><strong>Support WhatsApp:</strong> +91 9456433321</p>
        </div>
      </div>
    </main>
  );
}