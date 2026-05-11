import { use, useEffect, useState } from "react";
import CardList from "../components/CardList";
import Options from "../components/Options";
import ProjectContext from "../components/ProjectProvider/ProjectContext";
import type { Category, Project } from "../types";
import { useOutletContext } from "react-router";

function Home() {
  const { categories, projects, filterProjects } = use(ProjectContext);

  const [localProjects, setLocalProjects] = useState(projects);

  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);

  const { searchResults, searchedProjects } = useOutletContext<{
    searchResults: Project[];
    searchedProjects: boolean;
  }>();

  const [searchFiltered, setSearchFiltered] = useState<Project[]>([]);

  useEffect(() => {
    if (currentCategory) {
      setSearchFiltered(
        filterProjects({
          category: currentCategory,
          projectsToFilter: searchResults,
        }),
      );
    } else {
      setSearchFiltered(searchResults);
    }
  }, [currentCategory, searchResults]);

  const handleClick = (category: Category) => {
    setCurrentCategory(category);
    setLocalProjects(filterProjects({ category }));
    searchResults &&
      setSearchFiltered(
        filterProjects({ category: category, projectsToFilter: searchResults }),
      );
  };

  const handleClickAll = () => {
    setCurrentCategory(null);
    setLocalProjects(projects);
    setSearchFiltered(searchResults);
  };

  return (
    <>
      <Options
        categories={categories}
        onClick={handleClick}
        onClickAll={handleClickAll}
      />
      <CardList projects={searchedProjects ? searchFiltered : localProjects} />
    </>
  );
}

export default Home;
