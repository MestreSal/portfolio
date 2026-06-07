import { CardList, Typography } from "layout/ui";
import type { Category } from "../../../types";
import { API_BASE_URL, API_ENDPOINTS } from "../../../lib/config";

async function Categories() {
  const categories: Category[] = await fetch(
    `${API_BASE_URL}${API_ENDPOINTS.CATEGORIES}`,
  ).then((res) => res.json());

  // Pré-busca os projetos para cada categoria em paralelo
  const categoriesWithProjects = await Promise.all(
    categories.map(async (category) => {
      const projects = await fetch(
        `${API_BASE_URL}${API_ENDPOINTS.PROJECTS}?category=${category.id}`,
      ).then((res) => res.json());

      return { ...category, projects };
    }),
  );

  return (
    <>
      {categoriesWithProjects.length !== 0 ? (
        <>
          {categoriesWithProjects.map((category) => (
            <div key={category.id} className="flex flex-col gap-lg pb-2xl">
              <Typography variant="h4Bold">{category.name}</Typography>
              <CardList
                key={"list" + category.id}
                projects={category.projects}
              />
            </div>
          ))}
        </>
      ) : (
        <Typography variant="h4" className="text-center p-lg">
          Nenhuma categoria encontrada.
        </Typography>
      )}
    </>
  );
}

export default Categories;
