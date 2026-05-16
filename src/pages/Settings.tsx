import { use } from "react";
import Button from "../components/Button";
import { Typography } from "../components/Typography";
import ProjectContext from "../components/ProjectProvider/ProjectContext";
import Input from "../components/Input";
import Select from "../components/Select";
import useCreate from "../hooks/useCreate";
import useLogin from "../hooks/useLogin";
import useUpdateGroup from "../hooks/useUpdateGroup";
import useUpdateCategory from "../hooks/useUpdateCategory";
import useUpdateProject from "../hooks/useUpdateProject";
import Textarea from "../components/Textarea";

function Settings() {
  const { categories, groups, projects } = use(ProjectContext);

  const { submitCategory, submitGroup, submitProject } = useCreate();
  const { handleLogin, user } = useLogin();
  const { selectedCategory, selectCategory, updateCategory } =
    useUpdateCategory();
  const { selectedGroup, selectGroup, updateGroup } = useUpdateGroup();
  const { selectedProject, selectProject, updateProject } = useUpdateProject();

  return (
    <div className="flex flex-col gap-sm">
      <form
        action={handleLogin}
        className="flex flex-col rounded-md bg-grayscale-100 h-fit gap-sm"
      >
        <Typography variant="h2">Login</Typography>
        <Input type="email" placeholder="Email" name="email" />
        <Input type="password" placeholder="Password" name="password" />
        <Button className="cursor-pointer">{user ? "Logout" : "Login"}</Button>
      </form>
      <div
        className={`${user ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md" : "w-full max-w-100 mx-auto justify-center my-auto"}`}
      >
        {user && (
          <>
            <form
              action={submitCategory}
              className="flex flex-col rounded-md bg-grayscale-100 h-fit gap-sm p-sm"
            >
              <Typography variant="h2">Criar categoria</Typography>
              <Textarea placeholder="Description" name="description" />
              <Typography variant="bodyLg">Icon</Typography>
              <Input
                type="file"
                placeholder="Icon"
                name="icon"
                accept="image/svg+xml, image/avif"
              />
              <Typography variant="bodyLg">Image</Typography>
              <Input
                type="file"
                placeholder="Image"
                name="img"
                accept="image/svg+xml, image/avif"
              />
              <Input type="text" placeholder="Name" name="name" />
              <Button className="cursor-pointer">Adicionar</Button>
            </form>
            <form
              action={submitGroup}
              className="flex flex-col rounded-md bg-grayscale-100 h-fit gap-sm p-sm"
            >
              <Typography variant="h2">Criar grupo</Typography>
              <Textarea placeholder="Description" name="description" />
              <Typography variant="bodyLg">Icon</Typography>
              <Input
                type="file"
                placeholder="Icon"
                name="icon"
                accept="image/svg+xml, image/avif"
              />
              <Typography variant="bodyLg">Image</Typography>
              <Input
                type="file"
                placeholder="Image"
                name="img"
                accept="image/svg+xml, image/avif"
              />
              <Input type="text" placeholder="Name" name="name" />
              <Button className="cursor-pointer">Adicionar</Button>
            </form>
            <form
              action={submitProject}
              className="flex flex-col rounded-md bg-grayscale-100 h-fit gap-sm p-sm"
            >
              <Typography variant="h2">Criar projeto</Typography>
              <Textarea placeholder="Description" name="description" />
              <Typography variant="bodyLg">Image</Typography>
              <Input
                type="file"
                placeholder="Image"
                name="img"
                accept="image/svg+xml, image/avif"
              />
              <Input type="text" placeholder="Link" name="link" />
              <Input type="text" placeholder="Name" name="name" />
              <Select list={categories} name="category" />
              <Select list={groups} name="group" />
              <Input type="text" placeholder="Github" name="github" />
              <Button className="cursor-pointer">Adicionar</Button>
            </form>
            <div className="flex flex-col rounded-md bg-grayscale-100 h-fit gap-sm p-sm">
              <form
                action={selectCategory}
                className="flex flex-col h-fit gap-sm"
              >
                <Typography variant="h2">Atualizar categoria</Typography>
                <Select list={categories} name="select" />
                <Button className="cursor-pointer">Selecionar</Button>
              </form>
              {selectedCategory && (
                <form
                  action={updateCategory}
                  className="flex flex-col h-fit gap-sm"
                >
                  <Textarea
                    placeholder="Description"
                    name="description"
                    defaultValue={selectedCategory.description}
                  />
                  <Input
                    type="text"
                    placeholder="Icon"
                    name="icon"
                    defaultValue={selectedCategory.icon}
                  />
                  <Input
                    type="text"
                    placeholder="Image"
                    name="img"
                    defaultValue={selectedCategory.img}
                  />
                  <Input
                    type="text"
                    placeholder="Name"
                    name="name"
                    defaultValue={selectedCategory.name}
                  />
                  <Button className="cursor-pointer">Atualizar</Button>
                </form>
              )}
            </div>
            <div className="flex flex-col rounded-md bg-grayscale-100 h-fit gap-sm p-sm">
              <form action={selectGroup} className="flex flex-col h-fit gap-sm">
                <Typography variant="h2">Atualizar grupo</Typography>
                <Select list={groups} name="select" />
                <Button className="cursor-pointer">Selecionar</Button>
              </form>
              {selectedGroup && (
                <form
                  action={updateGroup}
                  className="flex flex-col h-fit gap-sm"
                >
                  <Textarea
                    placeholder="Description"
                    name="description"
                    defaultValue={selectedGroup.description}
                  />
                  <Input
                    type="text"
                    placeholder="Icon"
                    name="icon"
                    defaultValue={selectedGroup.icon}
                  />
                  <Input
                    type="text"
                    placeholder="Image"
                    name="img"
                    defaultValue={selectedGroup.img}
                  />
                  <Input
                    type="text"
                    placeholder="Name"
                    name="name"
                    defaultValue={selectedGroup.name}
                  />
                  <Button className="cursor-pointer">Atualizar</Button>
                </form>
              )}
            </div>
            <div className="flex flex-col rounded-md bg-grayscale-100 h-fit gap-sm p-sm">
              <form
                action={selectProject}
                className="flex flex-col h-fit gap-sm"
              >
                <Typography variant="h2">Atualizar projeto</Typography>
                <Select list={projects} name="select" />
                <Button className="cursor-pointer">Selecionar</Button>
              </form>
              {selectedProject && (
                <form
                  action={updateProject}
                  className="flex flex-col h-fit gap-sm"
                >
                  <Input
                    type="text"
                    placeholder="Name"
                    name="name"
                    defaultValue={selectedProject.name}
                  />
                  <Input
                    type="text"
                    placeholder="Image"
                    name="img"
                    defaultValue={selectedProject.img}
                  />
                  <Select list={groups} name="group" />
                  <Select list={categories} name="category" />
                  <Textarea
                    placeholder="Description"
                    name="description"
                    defaultValue={selectedProject.description}
                  />
                  <Input
                    type="text"
                    placeholder="Link"
                    name="link"
                    defaultValue={selectedProject.link}
                  />
                  <Input
                    type="text"
                    placeholder="Github"
                    name="github"
                    defaultValue={selectedProject.github}
                  />
                  <Button className="cursor-pointer">Atualizar</Button>
                </form>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Settings;
