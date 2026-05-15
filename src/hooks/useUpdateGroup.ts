import { doc, updateDoc } from "firebase/firestore";
import { db } from "../db/firebase";
import { use, useEffect, useState } from "react";
import ProjectContext from "../components/ProjectProvider/ProjectContext";
import type { Group } from "../types";

export default function useUpdateGroup() {
  const { filterCategoryOrGroup, projects } = use(ProjectContext);

  const [groupId, setGroupId] = useState<string | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);

  const selectGroup = (formData: FormData) => {
    setGroupId(formData.get("select") as string);
  };

  const updateGroup = async (formData: FormData) => {
    if (groupId) {
      const projectRef = doc(db, "groups", groupId);
      const group = {
        name: formData.get("name") as string,
        img: formData.get("img") as string,
        icon: formData.get("icon") as string,
        description: formData.get("description") as string,
      };
      await updateDoc(projectRef, group);
      const groupWithId = { ...group, id: groupId };
      projects.forEach(async (project) => {
        if (project.group.id === groupId) {
          const projectRef = doc(db, "projects", project.id);
          await updateDoc(projectRef, {
            group: groupWithId,
          });
        }
      });
      setSelectedGroup(groupWithId);
    }
  };

  useEffect(() => {
    if (groupId) {
      const group = filterCategoryOrGroup({
        type: "groups",
        id: groupId,
      })[0];
      setSelectedGroup(group);
    }
  }, [groupId, filterCategoryOrGroup]);

  return { selectGroup, updateGroup, selectedGroup };
}
