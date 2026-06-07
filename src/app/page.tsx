"use client";

// import { useState } from "react";
import { CardList, Options } from "layout/ui";
import type { Category, Project } from "../../types";
import { API_BASE_URL, API_ENDPOINTS } from "../../lib/config";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [localProjects, setLocalProjects] = useState<Project[]>([]);
  const [category, setCategory] = useState<string>("");

  const searchParams = useSearchParams();
  const q = searchParams.get("q")?.trim() || "";

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCategories = await fetch(
        `${API_BASE_URL}${API_ENDPOINTS.CATEGORIES}`,
      ).then((res) => res.json());
      setCategories(fetchedCategories);

      if (category) {
        const projects = await fetch(
          q
            ? `${API_BASE_URL}${API_ENDPOINTS.PROJECTS}?category=${category}&q=${encodeURIComponent(q)}`
            : `${API_BASE_URL}${API_ENDPOINTS.PROJECTS}?category=${category}`,
        ).then((res) => res.json());

        setLocalProjects(projects);
      } else {
        const fetchedProjects = await fetch(
          q
            ? `${API_BASE_URL}${API_ENDPOINTS.PROJECTS}?q=${encodeURIComponent(q)}`
            : `${API_BASE_URL}${API_ENDPOINTS.PROJECTS}`,
        ).then((res) => res.json());
        setProjects(fetchedProjects);
        setLocalProjects(fetchedProjects);
      }
    };

    fetchData();
  }, [q, category]);

  const handleClick = async (category: Category) => {
    setCategory(category.id);
  };

  const handleClickAll = async () => {
    setLocalProjects(projects);
    setCategory("");
  };

  return (
    <>
      <Options
        categories={categories}
        onClick={handleClick}
        onClickAll={handleClickAll}
      />
      <CardList projects={localProjects} />
    </>
  );
}

export default Home;
