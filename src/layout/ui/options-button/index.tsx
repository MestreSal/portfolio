import { Typography } from "../typography";

export const OptionsButton = ({
  value,
  children,
  onClick,
  isActive = false,
}: {
  value?: string;
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
}) => {
  return (
    <button
      value={value}
      className={`rounded-sm px-sm py-xs cursor-pointer mx-auto active:bg-brand-indigo-400 ${isActive ? "bg-brand-indigo-400" : "bg-grayscale-50"}`}
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
