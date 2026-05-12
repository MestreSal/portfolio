import { Link, useNavigate } from "react-router";
import Avatar from "./Avatar";
import { Typography } from "./Typography";
import type { Project } from "../types";
import type { ElementType, MouseEvent } from "react";

const TAGS: Record<string, ElementType> = {
  link: Link,
  div: "div",
};

const Card = ({
  project,
  link = true,
}: {
  project: Project;
  link?: boolean;
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (link) {
      navigate(`/projects/${project.id}`);
    }
  };

  const Component: ElementType = link ? TAGS.link : TAGS.div;

  return (
    <div
      className={`flex w-full gap-sm p-sm rounded-md flex-col bg-grayscale-50 cursor-pointer ${link ? "hover:bg-brand-indigo-100" : ""}`}
      onClick={handleClick}
    >
      <img
        src={project.img}
        alt={project.name}
        className="w-full rounded-md aspect-video object-cover"
      />
      <div className="flex gap-sm items-center">
        <Component
          to={`/categories/${project.category.id}`}
          onClick={(event: MouseEvent) => {
            event.stopPropagation();
          }}
        >
          <Avatar img={project.category.icon} />
        </Component>
        <div className="flex flex-col flex-1">
          <Typography variant="bodyLg" className="text-start">
            {project.name}
          </Typography>
          <Typography variant="bodySm" className="text-start">
            {project.category.name} | {project.group.name}
          </Typography>
        </div>
        {/* <Icon src="src\assets\icons\information-line.svg" /> */}
      </div>
    </div>
  );
};

export default Card;
