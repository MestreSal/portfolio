"use client";

import { useState } from "react";
import { Tabs } from "@mui/material";
import { OptionsButton } from "layout/ui";
import type { Category } from "../../../../types";

export const Options = ({
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
    setActiveCategory(category.id);
  };

  if (categories.length > 0) {
    return (
      <Tabs variant="scrollable" scrollButtons="auto" value={activeCategory}>
        <OptionsButton
          value="Todos"
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
            value={category.id}
            key={category.id}
            onClick={() => handleClick(category)}
            isActive={activeCategory === category.id}
          >
            {category.name}
          </OptionsButton>
        ))}
      </Tabs>
    );
  }
};
