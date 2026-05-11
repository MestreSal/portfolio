import { use } from "react";
import CardList from "../components/CardList";
import ProjectContext from "../components/ProjectProvider/ProjectContext";
import { Typography } from "../components/Typography";

function Categories() {
  const { categories, projects } = use(ProjectContext);

  return (
    <>
      {categories.map((category) => (
        <div key={category.id} className="flex flex-col gap-lg pb-2xl">
          <Typography variant="h4Bold" key={category.id}>
            {category.name}
          </Typography>
          <CardList
            key={"list" + category.id}
            projects={projects.filter(
              (project) => project.category.id === category.id,
            )}
          />
        </div>
      ))}
    </>
  );
}

export default Categories;
