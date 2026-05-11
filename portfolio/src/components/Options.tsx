import { useState } from "react";
import OptionsButton from "./OptionsButton";
import type { Category } from "../types";

const Options = ({
  categories,
  onClick,
  onClickAll,
}: {
  categories: Category[];
  onClick: (category: Category) => void;
  onClickAll: () => void;
}) => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const handleClick = (category: Category) => {
    onClick(category);
    setActiveCategory(category.name);
  };

  return (
    <div className="flex justify-between px-sm">
      <OptionsButton
        onClick={() => {
          onClickAll();
          setActiveCategory("Todos");
        }}
        isActive={activeCategory === "Todos"}
      >
        Todos
      </OptionsButton>
      {categories.map((category) => (
        <OptionsButton
          key={category.id}
          onClick={() => handleClick(category)}
          isActive={activeCategory === category.name}
        >
          {category.name}
        </OptionsButton>
      ))}
    </div>
  );
};

export default Options;
