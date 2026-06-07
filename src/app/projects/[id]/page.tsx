import githubFill from "assets/icons/github-fill.svg";
import imgPlaceholder from "assets/placeholders/img-placeholder.svg";
import iconPlaceholder from "assets/placeholders/icon-placeholder.svg";
import Image from "next/image";
import { Avatar, RecList, Typography } from "layout/ui";
import Link from "next/link";
import { API_BASE_URL, API_ENDPOINTS } from "../../../../lib/config";

async function Project({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const project = await fetch(
    `${API_BASE_URL}${API_ENDPOINTS.PROJECTS}/${id}`,
  ).then((res) => res.json());
  const randomProjects = await fetch(
    `${API_BASE_URL}${API_ENDPOINTS.PROJECTS}/random`,
  ).then((res) => res.json());

  return (
    project && (
      <div className="gap-md flex h-full flex-col lg:flex-row">
        <div className="flex flex-col gap-md lg:flex-2">
          <a href={project.link} target="_blank">
            <div className="relative w-full aspect-video">
              <Image
                src={project.img || imgPlaceholder}
                alt={project.name}
                fill
                className="rounded-md object-cover"
                unoptimized
              />
            </div>
          </a>

          <Typography variant="h4Bold">{project.name}</Typography>

          <div className="flex gap-sm items-center">
            <Link href={`/categories/${project.category.id}`}>
              <Avatar img={project.category.icon || iconPlaceholder} />
            </Link>
            <div className="flex flex-col flex-1">
              <Typography variant="bodyLg" className="text-start">
                {project.category.name} | {project.group.name}
              </Typography>
            </div>
            <a href={project.github} target="_blank">
              <Image src={githubFill} alt="GitHub" />
            </a>
          </div>

          <Typography
            variant="bodyMd"
            className="bg-grayscale-200 rounded-sm p-md"
          >
            {project.description}
          </Typography>
        </div>
        <RecList projects={randomProjects} />
      </div>
    )
  );
}

export default Project;
