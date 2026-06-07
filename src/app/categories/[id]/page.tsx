"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Avatar, CardList, SearchBar, Typography } from "layout/ui";
import { API_BASE_URL, API_ENDPOINTS } from "../../../../lib/config";
import type { Category, Group } from "../../../../types";

function Details() {
  const location = usePathname();
  const typeName = location
    ? (location.split("/")[1] as "categories" | "groups")
    : "categories";

  const typeId = location.split("/")[2];

  const [type, setType] = useState<Category | Group | null>(null);

  const [localProjects, setLocalProjects] = useState([]);

  const [typeProjects, setTypeProjects] = useState([]);

  useEffect(() => {
    const fetchType = async () => {
      const typeData =
        typeName == "categories"
          ? await fetch(
              `${API_BASE_URL}${API_ENDPOINTS.CATEGORIES}/${typeId}`,
            ).then((res) => res.json())
          : await fetch(
              `${API_BASE_URL}${API_ENDPOINTS.GROUPS}/${typeId}`,
            ).then((res) => res.json());
      setType(typeData);
      console.log(typeData);

      const typeProjects =
        typeName == "categories"
          ? await fetch(
              `${API_BASE_URL}${API_ENDPOINTS.PROJECTS}?category=${typeId}`,
            ).then((res) => res.json())
          : await fetch(
              `${API_BASE_URL}${API_ENDPOINTS.PROJECTS}?group=${typeId}`,
            ).then((res) => res.json());
      setTypeProjects(typeProjects);
      setLocalProjects(typeProjects);
    };

    fetchType();
  }, []);

  const handleSearch = async (formData: FormData) => {
    const query = formData.get("searchTerm")?.toString().toLowerCase() || "";
    const searchResults = await fetch(
      `${API_BASE_URL}${API_ENDPOINTS.PROJECTS}?category=${typeId}&q=${query}`,
    ).then((res) => res.json());
    setLocalProjects(searchResults);
  };

  return (
    type && (
      <div className="flex flex-col gap-lg">
        <div className="relative h-40 w-full overflow-hidden rounded-xl">
          <Image alt={type.name} src={type.img} fill className="object-cover" />
        </div>

        <div className="flex gap-md">
          <Avatar img={type.icon} size="lg" className="hidden md:block" />
          <Avatar img={type.icon} size="md" className="block md:hidden" />
          <div className="flex flex-col flex-1 justify-center md:justify-start">
            <Typography variant="h1Bold">{type.name}</Typography>
            <Typography variant="bodyLg" className="hidden md:block">
              {type.description}
            </Typography>
          </div>
        </div>
        <Typography variant="bodyMd" className="block md:hidden">
          {type.description}
        </Typography>

        <div className="flex gap-2xl items-center">
          <button onClick={() => setLocalProjects(typeProjects)}>
            <Typography variant="bodyLgBold">Projetos</Typography>
          </button>

          <SearchBar onSearch={handleSearch} simplified={true} />
        </div>
        <hr className="border-brand-indigo-500" />

        {localProjects && <CardList projects={localProjects} />}
      </div>
    )
  );
}

export default Details;
