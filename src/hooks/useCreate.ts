import { doc, setDoc } from "firebase/firestore";
import { db } from "../db/firebase";
import { use } from "react";
import ProjectContext from "../components/ProjectProvider/ProjectContext";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export default function useCreate() {
  const { filterCategoryOrGroup } = use(ProjectContext);

  const storage = getStorage();

  const submitCategory = async (formData: FormData) => {
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

  const submitGroup = async (formData: FormData) => {
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

  const submitProject = async (formData: FormData) => {
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
        group: filterCategoryOrGroup({ type: "groups", id: group })[0],
        category: filterCategoryOrGroup({
          type: "categories",
          id: category,
        })[0],
        description: description,
        link: link,
        github: github,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return { submitCategory, submitGroup, submitProject };
}
