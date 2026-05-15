import { doc, updateDoc } from "firebase/firestore";
import { db } from "../db/firebase";
import { use, useEffect, useState } from "react";
import ProjectContext from "../components/ProjectProvider/ProjectContext";
import type { Category, Group, Project } from "../types";

export default function useUpdateProject() {
  const { filterCategoryOrGroup, filterProjects } = use(ProjectContext);

  const [projectId, setProjectId] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const selectProject = (formData: FormData) => {
    setProjectId(formData.get("select") as string);
  };

  const updateProject = async (formData: FormData) => {
    if (projectId) {
      const projectRef = doc(db, "projects", projectId);
      const project = {
        name: formData.get("name") as string,
        img: formData.get("img") as string,
        group: filterCategoryOrGroup({
          type: "groups",
          id: formData.get("group") as string,
        })[0] as Group,
        category: filterCategoryOrGroup({
          type: "categories",
          id: formData.get("category") as string,
        })[0] as Category,
        description: formData.get("description") as string,
        link: formData.get("link") as string,
        github: formData.get("github") as string,
      };
      await updateDoc(projectRef, project);
      const projectWithId = { ...project, id: projectId };
      setSelectedProject(projectWithId);
    }
  };

  useEffect(() => {
    if (projectId) {
      const project = filterProjects({
        id: projectId,
      })[0];
      setSelectedProject(project);
    }
  }, [projectId, filterProjects]);

  return { selectProject, updateProject, selectedProject };
}
