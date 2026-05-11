import { createContext } from "react";
import type { Category, Group, Project } from "../../types";

const ProjectContext = createContext<{
  projects: Project[];
  categories: Category[];
  groups: Group[];
  filterProjects: ({
    category,
    group,
    id,
    name,
    projectsToFilter,
  }: {
    category?: Category;
    group?: Group;
    id?: number;
    name?: string;
    projectsToFilter?: Project[];
  }) => Project[];
  filterCategoryOrGroup: ({
    type,
    id,
    name,
  }: {
    type: "categories" | "groups";
    id?: number;
    name?: string;
  }) => Category[] | Group[];
  getProjectsRandom: (max: number) => Project[];
}>({
  projects: [],
  categories: [],
  groups: [],
  filterProjects: () => [],
  filterCategoryOrGroup: () => [],
  getProjectsRandom: () => [],
});

export default ProjectContext;
