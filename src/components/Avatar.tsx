import { cva } from "class-variance-authority";
import { Typography } from "./Typography";

const variant = cva(
  "rounded-full items-center flex bg-brand-indigo-400 justify-center",
  {
    variants: {
      variant: {
        sm: "w-10 h-10",
        md: "w-30 h-30",
        lg: "w-50 h-50",
      },
    },
    defaultVariants: {
      variant: "sm",
    },
  },
);

const Avatar = ({
  children,
  img,
  size,
  className,
}: {
  children?: React.ReactNode;
  img?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) => {
  return (
    <div className={variant({ variant: size }) + ` ${className}`}>
      {img && (
        <img src={img} alt="Avatar" className="w-full h-full rounded-full" />
      )}
      {children && (
        <Typography variant="h4" className="text-grayscale-50">
          {children}
        </Typography>
      )}
    </div>
  );
};

export default Avatar;
