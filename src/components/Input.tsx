const Input = ({
  type,
  placeholder,
  name,
}: {
  type: string;
  placeholder: string;
  name: string;
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="px-md py-sm text-grayscale-950 font-archivo border-2 border-brand-indigo-400 rounded-sm focus:outline-none focus:border-grayscale-950"
    />
  );
};

export default Input;
