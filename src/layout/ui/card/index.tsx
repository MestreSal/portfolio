"use client";

import type { ElementType, MouseEvent } from "react";
import githubFill from "assets/icons/github-fill.svg";
import imgPlaceholder from "assets/placeholders/img-placeholder.svg";
import iconPlaceholder from "assets/placeholders/icon-placeholder.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Avatar } from "../avatar";
import { Typography } from "../typography";
import type { Project } from "../../../../types";

const TAGS: Record<string, ElementType> = {
  link: Link,
  div: "div",
  a: "a",
};

export const Card = ({
  project,
  link = true,
}: {
  project: Project;
  link?: boolean;
}) => {
  const router = useRouter();
  const handleClick = () => {
    if (link) {
      router.push(`/projects/${project.id}`);
    }
  };

  const ComponentLink: ElementType = link ? TAGS.link : TAGS.div;
  const ComponentA: ElementType = link ? TAGS.a : TAGS.div;

  return (
    <div
      className={`flex w-full gap-sm p-sm rounded-md flex-col bg-grayscale-50 cursor-pointer ${link ? "hover:bg-brand-indigo-100" : ""}`}
      onClick={handleClick}
    >
      <div className="relative aspect-video overflow-hidden rounded-md">
        <Image
          src={project.img || imgPlaceholder}
          alt={project.name}
          fill
          unoptimized
        />
      </div>

      <div className="flex gap-sm items-center">
        <ComponentLink
          href={`/categories/${project.category.id}`}
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
            <Image src={githubFill} alt="GitHub" />
          </ComponentA>
        )}
      </div>
    </div>
  );
};
