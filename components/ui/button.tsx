import Link from "next/link";
import type {
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";

export type ButtonVariant = "primary" | "secondary" | "outline";
export type ButtonSize = "default" | "compact";

type SharedButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  "aria-label"?: string;
};

type LinkButtonProps = SharedButtonProps & {
  href: string;
  target?: string;
  rel?: string;
};

type NativeButtonProps = SharedButtonProps &
  {
    href?: never;
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border border-transparent bg-gold text-foreground hover:bg-light-gold",
  secondary: "border border-border bg-surface text-foreground hover:border-gold",
  outline: "border border-gold text-foreground hover:bg-surface",
};

const baseStyles =
  "inline-flex min-h-11 items-center justify-center rounded-full py-3 text-sm font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50";

const sizeStyles: Record<ButtonSize, string> = {
  default: "px-5",
  compact: "px-3",
};

export function Button(props: ButtonProps) {
  const {
    children,
    className = "",
    variant = "primary",
    size = "default",
    "aria-label": ariaLabel,
  } = props;
  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (typeof props.href === "string") {
    return (
      <Link
        href={props.href}
        target={props.target}
        rel={props.rel}
        aria-label={ariaLabel}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
      aria-label={ariaLabel}
      className={classes}
    >
      {children}
    </button>
  );
}
