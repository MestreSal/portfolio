const Icon = ({ src }: { src: string }) => {
  return (
    <img src={src} alt="Icon" className="w-[24px] h-[24px] object-cover" />
  );
};

export default Icon;
