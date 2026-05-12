import { Link } from "react-router";
import { Typography } from "./Typography";
import type { ElementType, JSX } from "react";

const TAGS: Record<string, ElementType> = {
  link: Link,
  button: "button",
};

const Button = ({
  children,
  href,
  onClick,
  className,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}) => {
  const Component: ElementType = href ? TAGS.link : TAGS.button;

  return (
    <Component
      onClick={onClick}
      to={href}
      className={`mx-auto px-lg rounded-md py-md w-fit bg-brand-indigo-400 hover:bg-brand-300 ${className || ""}`}
    >
      <Typography variant="h4" className="text-grayscale-50">
        {children}
      </Typography>
    </Component>
  );
};

export default Button;
