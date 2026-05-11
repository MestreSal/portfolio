import Icon from "./Icon";
import { Typography } from "./Typography";
import { Link } from "react-router";

const TAGS = {
  link: Link,
  button: "button",
};

const SidebarButton = ({
  img1,
  children,
  img2,
  open,
  onClick,
  href = "",
}: {
  img1?: string;
  children: React.ReactNode;
  img2?: string;
  open: boolean;
  onClick?: () => void;
  href?: string;
}) => {
  const Component = href ? TAGS.link : TAGS.button;

  return (
    <>
      {open ? (
        <Component
          to={href}
          className="flex gap-md px-sm py-xs md:px-md md:py-sm rounded-md items-center hover:bg-grayscale-200 w-full active:border-grayscale-950 border border-transparent cursor-pointer disabled:cursor-not-allowed"
          onClick={onClick}
        >
          {img1 && <Icon src={img1} />}
          <Typography
            variant="bodyLg"
            className="text-start disabled:text-grayscale-300"
          >
            {children}
          </Typography>
          {img2 && <Icon src={img2} />}
        </Component>
      ) : (
        <Component
          to={href}
          className="flex flex-col px-sm py-xs lg:px-md lg:py-sm rounded-md hover:bg-grayscale-200 w-full active:border-grayscale-950 border border-transparent items-center cursor-pointer disabled:cursor-not-allowed"
          onClick={onClick}
        >
          {img1 && <Icon src={img1} />}
          <Typography variant="bodySm" className="disabled:text-grayscale-300">
            {children}
          </Typography>
        </Component>
      )}
    </>
  );
};

export default SidebarButton;
