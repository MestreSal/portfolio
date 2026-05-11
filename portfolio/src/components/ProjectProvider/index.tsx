import { useCallback } from "react";
import ProjectContext from "./ProjectContext";
import projects from "../../db/projects";
import categories from "../../db/categories";
import groups from "../../db/group";
import type { Category, Group, Project } from "../../types";

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const filterProjects = useCallback(
    ({
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
    }) => {
      const filtered = (projectsToFilter ?? projects).filter(
        (project: Project) => {
          if (category) {
            return project.category.id == category.id;
          } else if (group) {
            return project.group.id == group.id;
          } else if (id) {
            return project.id == id;
          } else if (name) {
            return project.name.toLowerCase().includes(name.toLowerCase());
          }
          return true;
        },
      );

      return filtered;
    },
    [],
  );

  const filterCategoryOrGroup = useCallback(
    ({
      type,
      id,
      name,
    }: {
      type: "categories" | "groups";
      id?: number;
      name?: string;
    }) => {
      if (type === "categories") {
        if (id) {
          return categories.filter(
            (category: Category) => id && category.id == id,
          );
        } else if (name) {
          return categories.filter((category: Category) =>
            category.name.toLowerCase().includes(name.toLowerCase()),
          );
        }
      } else if (type === "groups") {
        if (id) {
          return groups.filter((group: Group) => id && group.id == id);
        } else if (name) {
          return groups.filter((group: Group) =>
            group.name.toLowerCase().includes(name.toLowerCase()),
          );
        }
      }

      return [];
    },
    [],
  );

  const getProjectsRandom = useCallback((max: number) => {
    const shuffled = [...projects].sort(() => Math.random());
    return shuffled.slice(0, max);
  }, []);

  return (
    <ProjectContext
      value={{
        projects,
        categories,
        groups,
        filterProjects,
        filterCategoryOrGroup,
        getProjectsRandom,
      }}
    >
      {children}
    </ProjectContext>
  );
}
