import GroupButton from "./GroupButton";
import Icon from "./Icon";
import SearchBar from "./SearchBar";
import logo from "../assets/icons/logo.svg";
import menuFill from "../assets/icons/menu-fill.svg";
import checkboxMultipleBlankLine from "../assets/icons/checkbox-multiple-blank-line.svg";
import searchLineFilled from "../assets/icons/search-line-filled.svg";
import arrowLeftSLine from "../assets/icons/arrow-left-s-line.svg";
import { useState } from "react";
import { Link } from "react-router";

const Header = ({
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
            <Icon src={arrowLeftSLine} />
          </button>

          <SearchBar onSearch={onSearch} />
        </>
      ) : (
        <>
          <div className="flex md:gap-lg gap-sm items-center h-12.5">
            <button onClick={onCollapse} className="cursor-pointer">
              <Icon src={menuFill} />
            </button>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          <SearchBar onSearch={onSearch} className="hidden md:flex md:flex-1" />

          <div className="flex md:gap-lg gap-sm items-center">
            <button
              className="md:hidden"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Icon src={searchLineFilled} />
            </button>
            <GroupButton img={checkboxMultipleBlankLine} />
            {/* <Avatar>A</Avatar> */}
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
