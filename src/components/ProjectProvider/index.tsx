import { useCallback, useEffect, useState } from "react";
import ProjectContext from "./ProjectContext";
import type { Category, Group, Project } from "../../types";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../db/firebase";

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [groups, setGroups] = useState<Group[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const queryCategories = await getDocs(collection(db, "categories"));
      setCategories(queryCategories.docs.map((doc) => doc.data() as Category));

      const queryGroups = await getDocs(collection(db, "groups"));
      setGroups(queryGroups.docs.map((doc) => doc.data() as Group));

      const queryProjects = await getDocs(collection(db, "projects"));
      setProjects(queryProjects.docs.map((doc) => doc.data() as Project));
    };

    fetchData();
  }, []);

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
    [projects],
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
    [categories, groups],
  );

  const getProjectsRandom = useCallback(
    (max: number) => {
      const shuffled = [...projects].sort(() => Math.random());
      return shuffled.slice(0, max);
    },
    [projects],
  );

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
