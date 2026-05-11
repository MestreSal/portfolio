import { Typography } from "./Typography";

const OptionsButton = ({
  children,
  onClick,
  isActive = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
}) => {
  return (
    <button
      className={`rounded-sm px-sm py-xs cursor-pointer active:bg-brand-indigo-400 ${isActive ? "bg-brand-indigo-400" : "bg-grayscale-50"}`}
      onClick={onClick}
    >
      <Typography
        variant="bodyMd"
        className={isActive ? "text-grayscale-50" : "text-brand-indigo-500"}
      >
        {children}
      </Typography>
    </button>
  );
};

export default OptionsButton;
