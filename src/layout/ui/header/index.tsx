"use client";

import menuFill from "assets/icons/menu-fill.svg";
import checkboxMultipleBlankLine from "assets/icons/checkbox-multiple-blank-line.svg";
import searchLineFilled from "assets/icons/search-line-filled.svg";
import arrowLeftSLine from "assets/icons/arrow-left-s-line.svg";
import { useState } from "react";
import settings from "assets/icons/settings.svg";
import { Avatar, SearchBar, GroupButton } from "layout/ui";
import Link from "next/link";
import Image from "next/image";

export const Header = ({
  onCollapse,
  onSearch,
}: {
  onCollapse: () => void;
  onSearch: (formData: FormData) => void;
}) => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div
      className={`flex px-sm py-xs md:px-lg md:py-md items-center justify-between w-full ${searchOpen ? "gap-2xl" : ""}`}
    >
      {searchOpen ? (
        <>
          <button
            onClick={() => setSearchOpen(false)}
            className="cursor-pointer"
          >
            <Avatar img={arrowLeftSLine} bg={false} rounded={false} />
          </button>

          <SearchBar onSearch={onSearch} />
        </>
      ) : (
        <>
          <div className="flex md:gap-lg gap-sm items-center h-12.5">
            <button onClick={onCollapse} className="cursor-pointer">
              <Avatar img={menuFill} bg={false} rounded={false} size="xs" />
            </button>
            <Link href="/" className="relative h-12.5 w-30">
              <Image
                src="/logo.svg"
                alt="Logo"
                fill
                className="object-contain"
              />
            </Link>
          </div>

          <SearchBar onSearch={onSearch} className="hidden md:flex md:flex-1" />

          <div className="flex md:gap-lg gap-sm items-center">
            <button
              className="md:hidden"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Avatar img={searchLineFilled} />
            </button>
            <GroupButton img={checkboxMultipleBlankLine} />
            <Link href="/settings">
              <Avatar img={settings} />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
