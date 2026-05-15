import { doc, updateDoc } from "firebase/firestore";
import { db } from "../db/firebase";
import { use, useEffect, useState } from "react";
import ProjectContext from "../components/ProjectProvider/ProjectContext";
import type { Category } from "../types";

export default function useUpdateCategory() {
  const { filterCategoryOrGroup, projects } = use(ProjectContext);

  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );

  const selectCategory = (formData: FormData) => {
    setCategoryId(formData.get("select") as string);
  };

  const updateCategory = async (formData: FormData) => {
    if (categoryId) {
      const projectRef = doc(db, "categories", categoryId);
      const category = {
        name: formData.get("name") as string,
        img: formData.get("img") as string,
        icon: formData.get("icon") as string,
        description: formData.get("description") as string,
      };
      await updateDoc(projectRef, category);
      const categoryWithId = { ...category, id: categoryId };
      projects.forEach(async (project) => {
        if (project.category.id === categoryId) {
          const projectRef = doc(db, "projects", project.id);
          await updateDoc(projectRef, {
            category: categoryWithId,
          });
        }
      });
      setSelectedCategory(categoryWithId);
    }
  };

  useEffect(() => {
    if (categoryId) {
      const category = filterCategoryOrGroup({
        type: "categories",
        id: categoryId,
      })[0];
      setSelectedCategory(category);
    }
  }, [categoryId, filterCategoryOrGroup]);

  return { selectCategory, updateCategory, selectedCategory };
}
