import { Link } from "react-router";
import { Typography } from "./Typography";

const Button = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      to={href}
      className="mx-auto px-lg rounded-md py-md w-fit bg-brand-indigo-400 hover:bg-brand-300"
    >
      <Typography variant="h4" className="text-grayscale-50">
        {children}
      </Typography>
    </Link>
  );
};

export default Button;
