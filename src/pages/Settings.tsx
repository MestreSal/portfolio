import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { use, useEffect, useState } from "react";
import Button from "../components/Button";
import { Typography } from "../components/Typography";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../db/firebase";
import ProjectContext from "../components/ProjectProvider/ProjectContext";
import Input from "../components/Input";
import Select from "../components/Select";

function Settings() {
  const { filterCategoryOrGroup, categories, groups } = use(ProjectContext);

  const [type, setType] = useState<"category" | "group" | "project">(
    "category",
  );

  const auth = getAuth();

  const [user, setUser] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(true);
      } else {
        setUser(false);
      }
    });
  }, [auth]);

  const handleLogin = async (formData: FormData) => {
    try {
      if (auth.currentUser) {
        await signOut(auth);
        setUser(false);
        console.log("Logout bem-sucedido");
        return;
      }

      await signInWithEmailAndPassword(
        auth,
        formData.get("email") as string,
        formData.get("password") as string,
      );

      console.log("Login bem-sucedido");
    } catch (error) {
      console.error(error);
    }
  };

  const submitCategory = async (
    name: string,
    img: string,
    icon: string,
    description: string,
  ) => {
    try {
      await addDoc(collection(db, "categories"), {
        id: crypto.randomUUID().slice(0, 8),
        name: name,
        img: img,
        icon: icon,
        description: description,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const submitGroup = async (
    name: string,
    img: string,
    icon: string,
    description: string,
  ) => {
    try {
      await addDoc(collection(db, "groups"), {
        id: crypto.randomUUID().slice(0, 8),
        name: name,
        img: img,
        icon: icon,
        description: description,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const submitProject = async (
    name: string,
    img: string,
    group: string,
    category: string,
    description: string,
    link: string,
  ) => {
    try {
      await addDoc(collection(db, "projects"), {
        id: crypto.randomUUID().slice(0, 8),
        name: name,
        img: img,
        group: filterCategoryOrGroup({ type: "groups", id: group })[0],
        category: filterCategoryOrGroup({
          type: "categories",
          id: category,
        })[0],
        description: description,
        link: link,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (formData: FormData) => {
    if (type === "category") {
      submitCategory(
        formData.get("name") as string,
        formData.get("img") as string,
        formData.get("icon") as string,
        formData.get("description") as string,
      );
    } else if (type === "group") {
      submitGroup(
        formData.get("name") as string,
        formData.get("img") as string,
        formData.get("icon") as string,
        formData.get("description") as string,
      );
    } else if (type === "project") {
      submitProject(
        formData.get("name") as string,
        formData.get("img") as string,
        formData.get("group") as string,
        formData.get("category") as string,
        formData.get("description") as string,
        formData.get("link") as string,
      );
    }
  };

  return (
    <div
      className={`${user ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md" : "w-100 mx-auto justify-center my-auto"}`}
    >
      {user && (
        <>
          <form
            action={handleSubmit}
            className="flex flex-col rounded-md bg-grayscale-100 h-fit gap-sm p-sm"
          >
            <Typography variant="h2">Categoria</Typography>
            <Input
              type="textarea"
              placeholder="Description"
              name="description"
            />
            <Input type="text" placeholder="Icon" name="icon" />
            <Input type="text" placeholder="Image" name="img" />
            <Input type="text" placeholder="Name" name="name" />
            <Button
              className="cursor-pointer"
              onClick={() => setType("category")}
            >
              Adicionar
            </Button>
          </form>
          <form
            action={handleSubmit}
            className="flex flex-col rounded-md bg-grayscale-100 h-fit gap-sm p-sm"
          >
            <Typography variant="h2">Grupo</Typography>
            <Input
              type="textarea"
              placeholder="Description"
              name="description"
            />
            <Input type="text" placeholder="Icon" name="icon" />
            <Input type="text" placeholder="Image" name="img" />
            <Input type="text" placeholder="Name" name="name" />
            <Button className="cursor-pointer" onClick={() => setType("group")}>
              Adicionar
            </Button>
          </form>
          <form
            action={handleSubmit}
            className="flex flex-col rounded-md bg-grayscale-100 h-fit gap-sm p-sm"
          >
            <Typography variant="h2">Projeto</Typography>
            <Input
              type="textarea"
              placeholder="Description"
              name="description"
            />
            <Input type="text" placeholder="Image" name="img" />
            <Input type="text" placeholder="Link" name="link" />
            <Input type="text" placeholder="Name" name="name" />
            <Select list={categories} name="category" />
            <Select list={groups} name="group" />
            <Button
              className="cursor-pointer"
              onClick={() => setType("project")}
            >
              Adicionar
            </Button>
          </form>
        </>
      )}

      <form
        action={handleLogin}
        className="flex flex-col rounded-md bg-grayscale-100 h-fit gap-sm p-sm"
      >
        <Typography variant="h2">Login</Typography>
        <Input type="email" placeholder="Email" name="email" />
        <Input type="password" placeholder="Password" name="password" />
        <Button className="cursor-pointer">{user ? "Logout" : "Login"}</Button>
      </form>
    </div>
  );
}

export default Settings;
