"use client";

import { useLogin } from "hooks";
import { Button, Input, Select, Textarea, Typography } from "layout/ui";
import { useEffect, useState } from "react";
import type { Category, Group, Project } from "../../../types";

function Settings() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [groups, setGroups] = useState<Group[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    Promise.all([
      fetch("/api/categories").then((res) => res.json()),
      fetch("/api/groups").then((res) => res.json()),
      fetch("/api/projects").then((res) => res.json()),
    ]).then(([categories, groups, projects]) => {
      setCategories(categories);
      setGroups(groups);
      setProjects(projects);
    });
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const selectCategory = async (formData: FormData) => {
    const id = formData.get("select") as string;
    const category = await fetch(`/api/categories/${id}`).then((res) =>
      res.json(),
    );
    setSelectedCategory(category);
  };

  const selectGroup = async (formData: FormData) => {
    const id = formData.get("select") as string;
    const group = await fetch(`/api/groups/${id}`).then((res) => res.json());
    setSelectedGroup(group);
  };

  const selectProject = async (formData: FormData) => {
    const id = formData.get("select") as string;
    const project = await fetch(`/api/projects/${id}`).then((res) =>
      res.json(),
    );
    setSelectedProject(project);
  };

  const updateCategory = async (formData: FormData) => {
    const id = selectedCategory?.id;
    if (id) {
      await fetch(`/api/categories/${id}`, {
        method: "PUT",
        body: formData,
      });
    }
  };

  const updateGroup = async (formData: FormData) => {
    const id = selectedGroup?.id;
    if (id) {
      await fetch(`/api/groups/${id}`, {
        method: "PUT",
        body: formData,
      });
    }
  };

  const updateProject = async (formData: FormData) => {
    const id = selectedProject?.id;
    if (id) {
      await fetch(`/api/projects/${id}`, {
        method: "PUT",
        body: formData,
      });
    }
  };

  const { handleLogin, user } = useLogin();

  const submitCategory = async (formData: FormData) => {
    await fetch("/api/categories", {
      method: "POST",
      body: formData,
    });
  };

  const submitGroup = async (formData: FormData) => {
    await fetch("/api/groups", {
      method: "POST",
      body: formData,
    });
  };

  const submitProject = async (formData: FormData) => {
    await fetch("/api/projects", {
      method: "POST",
      body: formData,
    });
  };

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
