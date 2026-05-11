import { cva, type VariantProps } from "class-variance-authority";
import type { ElementType, JSX } from "react";

const TAGS: Record<string, keyof JSX.IntrinsicElements> = {
  h1Bold: "h1",
  h1: "h1",
  h2Bold: "h2",
  h2: "h2",
  h3Bold: "h3",
  h3: "h3",
  h4Bold: "h4",
  h4: "h4",
  bodyLgBold: "p",
  bodyLg: "p",
  bodyMdBold: "p",
  bodyMd: "p",
  bodySmBold: "p",
  bodySm: "p",
};

const text = cva("font-archivo text-brand-indigo-500", {
  variants: {
    variant: {
      h1Bold: "text-headingXl font-bold leading-[120%]",
      h1: "text-headingXl leading-[120%]",
      h2Bold: "text-headingLg font-bold leading-[120%]",
      h2: "text-headingLg leading-[120%]",
      h3Bold: "text-headingMd font-bold leading-[120%]",
      h3: "text-headingMd leading-[120%]",
      h4Bold: "text-headingSm font-bold leading-[120%]",
      h4: "text-headingSm leading-[120%]",
      bodyLgBold: "text-bodyLg font-bold leading-[150%]",
      bodyLg: "text-bodyLg leading-[150%]",
      bodyMdBold: "text-bodyMd font-bold leading-[150%]",
      bodyMd: "text-bodyMd leading-[150%]",
      bodySmBold: "text-bodySm font-bold leading-[150%]",
      bodySm: "text-bodySm leading-[150%]",
    },
  },
  defaultVariants: {
    variant: "bodyMd",
  },
});

export const Typography = ({
  variant,
  children,
  className,
}: {
  variant?: NonNullable<VariantProps<typeof text>["variant"]>;
  children: React.ReactNode;
  className?: string;
}) => {
  const Component: ElementType = variant ? TAGS[variant] : TAGS.bodyMd;

  return (
    <Component className={text({ variant }) + " " + className}>
      {children}
    </Component>
  );
};
