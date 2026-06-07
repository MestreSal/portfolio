import { cva } from "class-variance-authority";
import { Typography } from "../typography";
import Image from "next/image";

const variant = cva(
  "items-center flex justify-center overflow-hidden relative",
  {
    variants: {
      variant: {
        xs: "w-8 h-8",
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

export const Avatar = ({
  children,
  img,
  size,
  className,
  rounded = true,
  bg = true,
}: {
  children?: React.ReactNode;
  img?: string;
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
  rounded?: boolean;
  bg?: boolean;
}) => {
  return (
    <div
      className={
        variant({ variant: size }) +
        ` ${className}` +
        (rounded ? " rounded-full" : "") +
        (bg ? " bg-brand-indigo-400" : "")
      }
    >
      {img ? (
        <Image
          src={img}
          alt="Avatar"
          fill
          className="object-cover"
          unoptimized
        />
      ) : (
        <Typography variant="h4" className="text-grayscale-50">
          {children ? children : "A"}
        </Typography>
      )}
    </div>
  );
};
