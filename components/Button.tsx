import Link from "next/link";

type Variant = "primary" | "secondary";
type Size = "default" | "small";

type Common = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type AsLink = Common & { href: string };
type AsButton = Common &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

// Full class names spelled out so Tailwind's content scan keeps them.
const VARIANT_CLASSES: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
};

function buttonClasses(variant: Variant, size: Size, className = "") {
  return `btn ${VARIANT_CLASSES[variant]} ${size === "small" ? "btn-sm" : ""} ${className}`.trim();
}

// Primary buttons carry a trailing arrow. Use at most one primary per section.
export default function Button(props: AsLink | AsButton) {
  const { variant = "primary", size = "default", className, children } = props;
  const classes = buttonClasses(variant, size, className);
  const content = (
    <>
      {children}
      {variant === "primary" && <span aria-hidden="true">&rarr;</span>}
    </>
  );

  if (props.href !== undefined) {
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, href: _h, ...buttonProps } = props;
  return (
    <button type="button" {...buttonProps} className={classes}>
      {content}
    </button>
  );
}

export function TextLink({
  href,
  className = "",
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={`link text-sm ${className}`.trim()}>
      {children}
    </Link>
  );
}
