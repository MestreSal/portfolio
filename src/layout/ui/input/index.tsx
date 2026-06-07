export const Input = ({
  type,
  placeholder,
  name,
  defaultValue,
  accept,
}: {
  type: string;
  placeholder: string;
  name: string;
  defaultValue?: string;
  accept?: string;
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      defaultValue={defaultValue}
      accept={accept}
      className="px-md py-sm text-grayscale-950 font-archivo border-2 border-brand-indigo-400 rounded-sm focus:outline-none focus:border-grayscale-950"
    />
  );
};
