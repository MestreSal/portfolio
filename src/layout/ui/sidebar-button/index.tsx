import Link from "next/link";
import { Avatar, Typography } from "layout/ui";

const TAGS = {
  link: Link,
  button: "button",
};

export const SidebarButton = ({
  img1,
  children,
  img2,
  open,
  onClick,
  href = "",
  bg = true,
  rounded = true,
}: {
  img1?: string;
  children: React.ReactNode;
  img2?: string;
  open: boolean;
  onClick?: () => void;
  href?: string;
  bg?: boolean;
  rounded?: boolean;
}) => {
  const Component = href ? TAGS.link : TAGS.button;

  return (
    <>
      {open ? (
        <Component
          href={href}
          className="flex gap-md px-sm py-xs md:px-md md:py-sm rounded-md items-center hover:bg-grayscale-200 w-full active:border-grayscale-950 border border-transparent cursor-pointer disabled:cursor-not-allowed"
          onClick={onClick}
        >
          {img1 && <Avatar img={img1} size="xs" bg={bg} rounded={rounded} />}
          <Typography
            variant="bodyLg"
            className="text-start disabled:text-grayscale-300"
          >
            {children}
          </Typography>
          {img2 && <Avatar img={img2} size="xs" bg={bg} rounded={rounded} />}
        </Component>
      ) : (
        <Component
          href={href}
          className="flex flex-col px-sm py-xs lg:px-md lg:py-sm rounded-md hover:bg-grayscale-200 w-full active:border-grayscale-950 border border-transparent items-center cursor-pointer disabled:cursor-not-allowed"
          onClick={onClick}
        >
          {img1 && <Avatar img={img1} size="xs" bg={bg} rounded={rounded} />}
          <Typography variant="bodySm" className="disabled:text-grayscale-300">
            {children}
          </Typography>
        </Component>
      )}
    </>
  );
};
