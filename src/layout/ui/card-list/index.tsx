import { Card } from "../card";
import { Typography } from "../typography";
import type { Project } from "../../../../types";

export const CardList = ({ projects }: { projects: Project[] }) => {
  return (
    <>
      {projects.length !== 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md p-sm">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <Typography variant="h4" className="text-center p-lg">
          Nenhum projeto encontrado.
        </Typography>
      )}
    </>
  );
};
