import type { Project } from "../types";
import Card from "./Card";
import { Typography } from "./Typography";

const CardList = ({ projects }: { projects: Project[] }) => {
  return (
    <>
      {projects.length !== 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md p-sm">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <Typography variant="h4">Nenhum projeto encontrado.</Typography>
        </div>
      )}
    </>
  );
};

export default CardList;
