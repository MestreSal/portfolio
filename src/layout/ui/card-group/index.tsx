"use client";

import { Card, Typography } from "layout/ui";
import Link from "next/link";
import type { Group, Project } from "../../../../types";
import { API_BASE_URL, API_ENDPOINTS } from "../../../../lib/config";
import { useEffect, useState } from "react";

export const CardGroup = ({ group }: { group: Group }) => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProjects = await fetch(
        `${API_BASE_URL}${API_ENDPOINTS.PROJECTS}?group=${group.id}`,
      ).then((res) => res.json());
      setProjects(fetchedProjects);
    };
    fetchData();
  }, [group.id]);

  const displayProjects = projects.slice(0, 3);

  return (
    <Link
      href={`/groups/${group.id}`}
      className="flex w-full gap-sm p-sm rounded-md flex-col bg-grayscale-100 hover:bg-brand-indigo-100 cursor-pointer justify-between"
    >
      <div className="grid grid-cols-2 gap-sm">
        {displayProjects.map((project: Project) => (
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
