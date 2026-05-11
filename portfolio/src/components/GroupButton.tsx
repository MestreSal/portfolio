import { Link, useLocation } from "react-router";
import Icon from "./Icon";
import { Typography } from "./Typography";
import { useMemo } from "react";

const GroupButton = ({ img }: { img?: string }) => {
  const location = useLocation();
  const { destiny, message, show } = useMemo(() => {
    if (location.pathname === "/groups") {
      return { destiny: "/", message: "Ungroup", show: true };
    } else if (location.pathname === "/") {
      return { destiny: "/groups", message: "Group", show: true };
    } else {
      return { destiny: "", message: "", show: false };
    }
  }, [location.pathname]);

  return (
    <>
      {show && (
        <Link
          className="flex gap-md px-lg py-md rounded-full items-center bg-grayscale-200"
          to={destiny}
        >
          {img && <Icon src={img} />}
          <Typography variant="bodyMd">{message}</Typography>
        </Link>
      )}
    </>
  );
};

export default GroupButton;
