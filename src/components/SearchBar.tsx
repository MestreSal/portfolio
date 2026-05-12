import searchLine from "../assets/icons/search-line.svg";
import searchLineSimplified from "../assets/icons/search-line-simplified.svg";
import Icon from "./Icon";

const SearchBar = ({
  onSearch,
  simplified = false,
  className,
}: {
  onSearch: (formData: FormData) => void;
  simplified?: boolean;
  className?: string;
}) => {
  return (
    <>
      {simplified ? (
        <form className={`flex gap-sm ${className}`} action={onSearch}>
          <button className="cursor-pointer">
            <Icon src={searchLineSimplified} />
          </button>
          <input
            className="border-brand-indigo-400 border-b-2 focus:border-grayscale-950 focus:outline-none placeholder:text-brand-indigo-200 text-grayscale-950 font-archivo"
            placeholder="Pesquisar"
            name="searchTerm"
          />
        </form>
      ) : (
        <form
          className={`flex max-w-112.5 min-w-50 flex-1 ${className}`}
          action={onSearch}
        >
          <div className="rounded-l-full border-brand-indigo-400 border-2 overflow-clip focus-within:border-grayscale-950 flex-1 flex">
            <input
              className="mx-md my-sm focus:outline-none peer text-grayscale-950 font-archivo flex-1"
              placeholder="Pesquisar"
              name="searchTerm"
            />
          </div>
          <button className="px-[12px] py-[8px] bg-brand-indigo-400 rounded-r-full cursor-pointer">
            <Icon src={searchLine} />
          </button>
        </form>
      )}
    </>
  );
};

export default SearchBar;
