import { Link } from "react-router";
import { Typography } from "./Typography";
import { use } from "react";
import ProjectContext from "./ProjectProvider/ProjectContext";
import Card from "./Card";
import type { Group } from "../types";

const CardGroup = ({ group }: { group: Group }) => {
  const { filterProjects } = use(ProjectContext);
  let projects = filterProjects({ group });
  const displayProjects =
    projects.length > 4
      ? projects.slice(0, 3)
      : projects.slice(0, projects.length);

  return (
    <Link
      to={`/groups/${group.id}`}
      className="flex w-full gap-sm p-sm rounded-md flex-col bg-grayscale-100 hover:bg-brand-indigo-100 cursor-pointer justify-between"
    >
      <div className="grid grid-cols-2 gap-sm">
        {displayProjects.map((project) => (
          <Card key={project.id} project={project} link={false} />
        ))}
        {projects.length > 4 && (
          <div className="flex w-full gap-sm p-sm rounded-md flex-col bg-brand-indigo-400 justify-center items-center">
            <Typography variant="h1Bold" className="text-grayscale-50">
              +{projects.length - 3}
            </Typography>
          </div>
        )}
      </div>

      <Typography variant="h4" className="text-center">
        {group.name}
      </Typography>
    </Link>
  );
};

export default CardGroup;
