import { Link, useNavigate } from "react-router";
import Avatar from "./Avatar";
import { Typography } from "./Typography";
import type { Project } from "../types";
import type { ElementType, MouseEvent } from "react";
import githubFill from "../assets/icons/github-fill.svg";
import imgPlaceholder from "../assets/placeholders/img-placeholder.svg";
import iconPlaceholder from "../assets/placeholders/icon-placeholder.svg";

const TAGS: Record<string, ElementType> = {
  link: Link,
  div: "div",
  a: "a",
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

  const ComponentLink: ElementType = link ? TAGS.link : TAGS.div;
  const ComponentA: ElementType = link ? TAGS.a : TAGS.div;

  return (
    <div
      className={`flex w-full gap-sm p-sm rounded-md flex-col bg-grayscale-50 cursor-pointer ${link ? "hover:bg-brand-indigo-100" : ""}`}
      onClick={handleClick}
    >
      <img
        src={project.img || imgPlaceholder}
        alt={project.name}
        className="w-full rounded-md aspect-video object-cover"
      />
      <div className="flex gap-sm items-center">
        <ComponentLink
          to={`/categories/${project.category.id}`}
          onClick={(event: MouseEvent) => {
            event.stopPropagation();
          }}
        >
          <Avatar img={project.category.icon || iconPlaceholder} />
        </ComponentLink>
        <div className="flex flex-col flex-1">
          <Typography variant="bodyLg" className="text-start">
            {project.name}
          </Typography>
          <Typography variant="bodySm" className="text-start">
            {project.category.name} | {project.group.name}
          </Typography>
        </div>
        {project.github && (
          <ComponentA
            href={project.github}
            onClick={(event: MouseEvent) => {
              event.stopPropagation();
            }}
            target="_blank"
          >
            <img src={githubFill} />
          </ComponentA>
        )}
      </div>
    </div>
  );
};

export default Card;
