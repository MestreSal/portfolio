const Textarea = ({
  placeholder,
  name,
  defaultValue,
}: {
  placeholder: string;
  name: string;
  defaultValue?: string;
}) => {
  return (
    <textarea
      placeholder={placeholder}
      name={name}
      defaultValue={defaultValue}
      rows={5}
      className="px-md py-sm text-grayscale-950 font-archivo border-2 border-brand-indigo-400 rounded-sm focus:outline-none focus:border-grayscale-950 resize-none"
    />
  );
};

export default Textarea;
