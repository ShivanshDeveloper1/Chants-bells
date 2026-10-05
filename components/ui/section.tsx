import type { HTMLAttributes, ReactNode } from "react";
import { Container } from "./container";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  contentClassName?: string;
};

export function Section({
  children,
  className = "",
  contentClassName = "",
  ...props
}: SectionProps) {
  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${className}`} {...props}>
      <Container className={contentClassName}>{children}</Container>
    </section>
  );
}
