import { Link } from "react-router";
import { Typography } from "./Typography";
import type { Project } from "../types";

const RecCard = ({ project }: { project: Project }) => {
  return (
    <div className="relative">
      <Link
        to={`/projects/${project.id}`}
        className="flex w-full gap-sm p-sm rounded-md cursor-pointer"
      >
        <img
          src={project.img}
          alt={project.name}
          className="rounded-md w-[50%] aspect-video object-cover"
        />
        <div className="flex gap-sm flex-col w-[50%] text-start">
          <Typography variant="bodyLg">{project.name}</Typography>
          <Typography variant="bodySm">
            {project.category.name} | {project.group.name}
          </Typography>
        </div>
      </Link>
    </div>
  );
};

export default RecCard;
