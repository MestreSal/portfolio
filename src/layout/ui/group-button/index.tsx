"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Link from "next/link";
import { Avatar, Typography } from "layout/ui";

export const GroupButton = ({ img }: { img?: string }) => {
  const location = usePathname();
  const { destiny, message, show } = useMemo(() => {
    if (location === "/groups") {
      return { destiny: "/", message: "Ungroup", show: true };
    } else if (location === "/") {
      return { destiny: "/groups", message: "Group", show: true };
    } else {
      return { destiny: "", message: "", show: false };
    }
  }, [location]);

  return (
    <>
      {show && (
        <Link
          className="flex gap-md px-lg py-md rounded-full items-center bg-grayscale-200"
          href={destiny}
        >
          {img && <Avatar img={img} bg={false} rounded={false} size="xs" />}
          <Typography variant="bodyMd">{message}</Typography>
        </Link>
      )}
    </>
  );
};
