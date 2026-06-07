import type { Project } from "types";
import Image from "next/image";
import { Typography } from "../typography";
import Link from "next/link";

export const RecCard = ({ project }: { project: Project }) => {
  return (
    <div className="relative">
      <Link
        href={`/projects/${project.id}`}
        className="flex w-full gap-sm p-sm rounded-md cursor-pointer"
      >
        <div className="relative w-[50%] aspect-video">
          <Image
            src={project.img}
            alt={project.name}
            fill
            className="rounded-md object-cover"
            unoptimized
          />
        </div>
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
