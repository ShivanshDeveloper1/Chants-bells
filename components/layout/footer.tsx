import Link from 'next/link';
import { Container } from '../ui/container';
import { Brand } from '../ui/brand';

export default function Footer() {
  const footerNavigation = [
    {
      title: 'Legal Policies',
      links: [
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms & Conditions', href: '/terms-and-conditions' },
        { label: 'Refund Policy', href: '/refund-policy' },
        { label: 'Digital Delivery Policy', href: '/digital-delivery-policy' },
      ],
    },
    {
      title: 'Customer Support',
      links: [
        { label: 'Contact & Grievance', href: '/contact' },
        { label: 'Support WhatsApp (+91 9456433321)', href: 'https://wa.me/919456433321' },
        { label: 'Email Us', href: 'mailto:chantsandbells@gmail.com' },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Brand />
            <p className="mt-5 max-w-sm text-sm leading-6 text-muted">
              Ancient Wisdom. Modern Life.
            </p>
            <p className="mt-2 text-xs text-muted">
              Operated by Dhananjai Singh (Sole Proprietor) <br />
              GSTIN: 09FCWPS1737M3ZF
            </p>
          </div>

          {footerNavigation.map(({ title, links }) => (
            <div key={title}>
              <h2 className="font-serif text-lg text-foreground">{title}</h2>
              <ul className="mt-4 space-y-3">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between border-t border-border pt-5 text-xs text-muted gap-4">
          <div>
            &copy; {new Date().getFullYear()} Chants &amp; Bells. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy-policy" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="transition-colors hover:text-foreground">
              Terms &amp; Conditions
            </Link>
            <Link href="/refund-policy" className="transition-colors hover:text-foreground">
              Refunds
            </Link>
            <Link href="/contact" className="transition-colors hover:text-foreground">
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}