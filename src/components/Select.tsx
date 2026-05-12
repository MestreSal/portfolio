import type { Category, Group } from "../types";

const Select = ({
  list,
  name,
}: {
  list: Group[] | Category[];
  name: string;
}) => {
  return (
    <select
      name={name}
      className="px-md py-sm text-grayscale-950 font-archivo border-2 border-brand-indigo-400 rounded-sm focus:outline-none focus:border-grayscale-950"
    >
      {list.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
