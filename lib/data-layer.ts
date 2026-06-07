import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./firebase";
import type { Category, Group, Project } from "../types";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export const fetchCategories = async () => {
  try {
    const rawCategories = await getDocs(collection(db, "categories"));

    return rawCategories.docs.map((doc) => doc.data() as Category);
  } catch (error) {
    console.error("Erro no fetchCategories:", error);
    throw error;
  }
};

export const fetchGroups = async () => {
  try {
    const rawGroups = await getDocs(collection(db, "groups"));

    return rawGroups.docs.map((doc) => doc.data() as Group);
  } catch (error) {
    console.error("Erro no fetchGroups:", error);
    throw error;
  }
};

export const fetchProjects = async () => {
  try {
    const rawProjects = await getDocs(collection(db, "projects"));

    return rawProjects.docs.map((doc) => doc.data() as Project);
  } catch (error) {
    console.error("Erro no fetchProjects:", error);
    throw error;
  }
};

export const fetchProjectById = async (id: string) => {
  try {
    const docRef = doc(db, "projects", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Erro no fetchProjectById:", error);
    throw error;
  }
};

export const fetchCategoryById = async (id: string) => {
  try {
    const docRef = doc(db, "categories", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Erro no fetchCategoryById:", error);
    throw error;
  }
};

export const fetchGroupById = async (id: string) => {
  try {
    const docRef = doc(db, "groups", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Erro no fetchGroupById:", error);
    throw error;
  }
};

export const fetchProjectsBySearch = async (searchTerm: string) => {
  try {
    const projects = await fetchProjects();
    const filteredProjects = projects.filter((project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    return filteredProjects;
  } catch (error) {
    console.error("Erro no fetchProjectsBySearch:", error);
    throw error;
  }
};

export const fetchGroupsBySearch = async (searchTerm: string) => {
  try {
    const groups = await fetchGroups();
    const filteredGroups = groups.filter((group) =>
      group.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    return filteredGroups;
  } catch (error) {
    console.error("Erro no fetchGroupsBySearch:", error);
    throw error;
  }
};

export const fetchProjectsByGroup = async (id: string, searchTerm?: string) => {
  try {
    const q = query(collection(db, "projects"), where("group.id", "==", id));
    const querySnapshot = await getDocs(q);

    if (searchTerm) {
      const filteredProjects = querySnapshot.docs
        .map((doc) => doc.data() as Project)
        .filter((project) =>
          project.name.toLowerCase().includes(searchTerm.toLowerCase()),
        );

      return filteredProjects;
    }

    return querySnapshot.docs.map((doc) => doc.data() as Project);
  } catch (error) {
    console.error("Erro no fetchProjectsByGroup:", error);
    throw error;
  }
};

export const fetchProjectsByCategory = async (
  id: string,
  searchTerm?: string,
): Promise<Project[]> => {
  try {
    const q = query(collection(db, "projects"), where("category.id", "==", id));
    const querySnapshot = await getDocs(q);

    if (searchTerm) {
      const filteredProjects = querySnapshot.docs
        .map((doc) => doc.data() as Project)
        .filter((project) =>
          project.name.toLowerCase().includes(searchTerm.toLowerCase()),
        );

      return filteredProjects;
    }

    return querySnapshot.docs.map((doc) => doc.data() as Project);
  } catch (error) {
    console.error("Erro no fetchProjectsByCategory:", error);
    throw error;
  }
};

export const fetchProjectsRandom = async (
  max: number = 5,
): Promise<Project[]> => {
  const shuffled = (await fetchProjects()).sort(() => Math.random());
  return shuffled.slice(0, max);
};

export const updateCategory = async (id: string, formData: FormData) => {
  if (id) {
    const projectRef = doc(db, "categories", id);
    const category = {
      name: formData.get("name") as string,
      img: formData.get("img") as string,
      icon: formData.get("icon") as string,
      description: formData.get("description") as string,
    };
    await updateDoc(projectRef, category);
    const categoryWithId = { ...category, id: id };
    fetchProjects().then((projects) => {
      projects.forEach(async (project) => {
        if (project.category.id === id) {
          const projectRef = doc(db, "projects", project.id);
          await updateDoc(projectRef, {
            category: categoryWithId,
          });
        }
      });
    });
  }
};

export const updateGroup = async (id: string, formData: FormData) => {
  if (id) {
    const projectRef = doc(db, "groups", id);
    const group = {
      name: formData.get("name") as string,
      img: formData.get("img") as string,
      icon: formData.get("icon") as string,
      description: formData.get("description") as string,
    };
    await updateDoc(projectRef, group);
    const groupWithId = { ...group, id: id };
    fetchProjects().then((projects) => {
      projects.forEach(async (project) => {
        if (project.group.id === id) {
          const projectRef = doc(db, "projects", project.id);
          await updateDoc(projectRef, {
            group: groupWithId,
          });
        }
      });
    });
  }
};

export const updateProject = async (id: string, formData: FormData) => {
  if (id) {
    const projectRef = doc(db, "projects", id);
    const project = {
      name: formData.get("name") as string,
      img: formData.get("img") as string,
      group: fetchGroupById(formData.get("group") as string),
      category: fetchCategoryById(formData.get("category") as string),
      description: formData.get("description") as string,
      link: formData.get("link") as string,
      github: formData.get("github") as string,
    };
    await updateDoc(projectRef, project);
  }
};

const storage = getStorage();

export const createCategory = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const img = formData.get("img") as File;
  const icon = formData.get("icon") as File;
  const description = formData.get("description") as string;

  try {
    const id = crypto.randomUUID().slice(0, 8);
    const iconRef = ref(
      storage,
      `categories/${id}/${name.toLowerCase().replace(/\s/g, "-")}-icon`,
    );
    const imgRef = ref(
      storage,
      `categories/${id}/${name.toLowerCase().replace(/\s/g, "-")}-img`,
    );

    await uploadBytes(iconRef, icon);
    await uploadBytes(imgRef, img);

    const iconUrl = await getDownloadURL(iconRef);
    const imgUrl = await getDownloadURL(imgRef);

    await setDoc(doc(db, "categories", id), {
      id: id,
      name: name,
      img: imgUrl,
      icon: iconUrl,
      description: description,
    });
  } catch (error) {
    console.error(error);
  }
};

export const createGroup = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const img = formData.get("img") as File;
  const icon = formData.get("icon") as File;
  const description = formData.get("description") as string;

  try {
    const id = crypto.randomUUID().slice(0, 8);
    const iconRef = ref(
      storage,
      `groups/${id}/${name.toLowerCase().replace(/\s/g, "-")}-icon`,
    );
    const imgRef = ref(
      storage,
      `groups/${id}/${name.toLowerCase().replace(/\s/g, "-")}-img`,
    );

    await uploadBytes(iconRef, icon);
    await uploadBytes(imgRef, img);

    const iconUrl = await getDownloadURL(iconRef);
    const imgUrl = await getDownloadURL(imgRef);

    await setDoc(doc(db, "groups", id), {
      id: id,
      name: name,
      img: imgUrl,
      icon: iconUrl,
      description: description,
    });
  } catch (error) {
    console.error(error);
  }
};

export const createProject = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const img = formData.get("img") as File;
  const group = formData.get("group") as string;
  const category = formData.get("category") as string;
  const description = formData.get("description") as string;
  const link = formData.get("link") as string;
  const github = formData.get("github") as string;

  try {
    const id = crypto.randomUUID().slice(0, 8);
    const imgRef = ref(
      storage,
      `projects/${id}/${name.toLowerCase().replace(/\s/g, "-")}-img`,
    );

    await uploadBytes(imgRef, img);

    const imgUrl = await getDownloadURL(imgRef);

    await setDoc(doc(db, "projects", id), {
      id: id,
      name: name,
      img: imgUrl,
      group: fetchGroupById(group),
      category: fetchCategoryById(category),
      description: description,
      link: link,
      github: github,
    });
  } catch (error) {
    console.error(error);
  }
};
