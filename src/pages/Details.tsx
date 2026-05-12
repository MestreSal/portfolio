import { use, useEffect, useMemo, useState } from "react";
import ProjectContext from "../components/ProjectProvider/ProjectContext";
import { useLocation } from "react-router";
import { Typography } from "../components/Typography";
import Avatar from "../components/Avatar";
import SearchBar from "../components/SearchBar";
import CardList from "../components/CardList";

function Details() {
  const location = useLocation();
  const typeName = location.pathname.split("/")[1] as "categories" | "groups";

  const { filterCategoryOrGroup, filterProjects } = use(ProjectContext);
  const type = filterCategoryOrGroup({
    type: typeName,
    id: location.pathname.split("/")[2],
  })[0];

  const typeProjects = useMemo(
    () =>
      filterProjects(
        typeName == "categories" ? { category: type } : { group: type },
      ),
    [type],
  );

  const [localProjects, setLocalProjects] = useState(typeProjects);

  useEffect(() => {
    setLocalProjects(typeProjects);
  }, [typeProjects]);

  const handleSearch = (formData: FormData) => {
    setLocalProjects(
      filterProjects({
        name: String(formData.get("searchTerm")),
        projectsToFilter: localProjects,
      }),
    );
  };

  return (
    type && (
      <div className="flex flex-col gap-lg">
        <img
          src={type.img}
          className="h-40 w-full overflow-hidden rounded-xl object-cover"
        />

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
