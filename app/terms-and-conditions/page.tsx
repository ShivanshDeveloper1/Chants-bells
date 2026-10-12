import React from 'react';

export const metadata = {
  title: 'Terms & Conditions - Chants & Bells',
  description: 'Terms and Conditions for Chants & Bells guided Hindu puja content service.',
};

export default function TermsAndConditionsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground border-b border-border pb-4">
          Terms & Conditions
        </h1>
        <p className="text-muted mt-2"><strong>Chants & Bells</strong> – Ancient Wisdom. Modern Life.</p>

        <h2 className="font-serif text-xl font-semibold text-foreground mt-8">1. Service Description</h2>
        <p className="text-muted leading-relaxed">
          Chants & Bells offers pre-recorded videos in which a Panditji explains and demonstrates Hindu puja practices so that customers can perform the rituals themselves at home. Unless a product page expressly states otherwise, the purchase does not include a live Panditji, an in-person ceremony, physical samagri, or individual religious consultation.
        </p>

        <h2 className="font-serif text-xl font-semibold text-foreground mt-8">2. Purchase and Access</h2>
        <p className="text-muted leading-relaxed">
          Each product page or checkout will state its price, inclusions, supported language, access start and expiry dates, and any device or account requirements. Access begins after receipt of payment is verified and your website account is activated; activation is intended to be immediate after successful purchase, subject to QR-payment verification.
        </p>
        <p className="text-muted leading-relaxed">
          Access lasts until the final day of the applicable Navratri edition, as displayed on the product page. Purchasing after the access period has begun does not automatically extend its end date. We may use secure links, accounts, or other access controls.
        </p>

        <h2 className="font-serif text-xl font-semibold text-foreground mt-8">3. Personal-Use Licence</h2>
        <p className="text-muted leading-relaxed">
          Upon valid purchase, we grant you a limited, non-exclusive, non-transferable, revocable licence to view the purchased content for personal or household devotional use during the advertised access period. You may pause and replay within that period. Recording, downloading without permission, copying, distributing, uploading, reselling, sharing paid login credentials, or publicly screening our content is prohibited except where expressly authorised.
        </p>

        <h2 className="font-serif text-xl font-semibold text-foreground mt-8">4. Accuracy and Religious Practices</h2>
        <p className="text-muted leading-relaxed">
          We aim to present carefully prepared guidance; Hindu rituals and traditions can vary by family, region, and sampradaya. You are responsible for choosing practices suited to your beliefs and circumstances. No particular spiritual, health, financial, personal, or other outcome is promised or guaranteed. Fasting and the use of flames, incense, or ritual materials should be undertaken safely and with appropriate personal judgment.
        </p>

        <h2 className="font-serif text-xl font-semibold text-foreground mt-8">5. Your Responsibilities</h2>
        <p className="text-muted leading-relaxed">
          You must provide accurate purchase details, maintain the security of your account or access link, use a compatible device and internet connection, and refrain from unlawful use, unauthorised access, or interference with the website.
        </p>

        <h2 className="font-serif text-xl font-semibold text-foreground mt-8">6. Availability and Support</h2>
        <p className="text-muted leading-relaxed">
          We work to keep the service accessible but may need reasonable maintenance or changes. If a paid video is inaccessible due to a fault on our side, contact WhatsApp +91 9456433321 or email <a href="mailto:chantsandbells@gmail.com" className="text-amber-600 hover:underline">chantsandbells@gmail.com</a> with your order reference. We will make reasonable efforts to restore access or provide an appropriate remedy consistent with applicable law.
        </p>

        <h2 className="font-serif text-xl font-semibold text-foreground mt-8">7. Intellectual Property</h2>
        <p className="text-muted leading-relaxed">
          Our videos, scripts, graphics, logos, website design, and original materials belong to Chants & Bells or their respective licensors. Traditional prayers and religious texts remain subject to their own applicable rights and status. No intellectual-property ownership transfers to customers.
        </p>

        <h2 className="font-serif text-xl font-semibold text-foreground mt-8">8. Liability and Applicable Law</h2>
        <p className="text-muted leading-relaxed">
          To the extent permitted by applicable law, we are not responsible for interruptions caused by third-party networks or user devices or for indirect losses. Nothing in these Terms excludes mandatory consumer rights or liability that cannot legally be excluded. These Terms are governed by Indian law; any jurisdiction provision is subject to applicable consumer forums and other mandatory legal protections.
        </p>

        <h2 className="font-serif text-xl font-semibold text-foreground mt-8">9. Changes and Contact</h2>
        <p className="text-muted leading-relaxed">
          We may revise these Terms prospectively. The terms displayed at purchase govern that transaction to the extent required by law.
        </p>

        <div className="mt-8 rounded-lg bg-surface border border-border p-6">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Questions & Contact</h3>
          <p className="text-sm text-muted mb-1"><strong>Email:</strong> <a href="mailto:chantsandbells@gmail.com" className="text-amber-600 hover:underline">chantsandbells@gmail.com</a></p>
          <p className="text-sm text-muted mb-1"><strong>Website:</strong> <a href="https://www.chantsandbells.com" className="text-amber-600 hover:underline">www.chantsandbells.com</a></p>
          <p className="text-sm text-muted"><strong>Support WhatsApp:</strong> +91 9456433321</p>
        </div>
      </div>
    </main>
  );
}