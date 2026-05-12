import type { Project } from "../types";
import RecCard from "./RecCard";
import { Typography } from "./Typography";

const RecList = ({ projects }: { projects: Project[] }) => {
  return (
    <>
      {projects.length !== 0 ? (
        <div className="flex flex-col lg:flex-1">
          {projects.map((project) => (
            <RecCard key={project.id} project={project} />
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

export default RecList;
