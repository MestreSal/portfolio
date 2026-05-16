import { use, useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProjectContext from "../components/ProjectProvider/ProjectContext";
import { Outlet, useLocation, useNavigate } from "react-router";
import type { Group, Project } from "../types";

function Feed() {
  const { filterProjects, filterCategoryOrGroup } = use(ProjectContext);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const skipNextSearchReset = useRef(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const location = useLocation();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState<Project[] | Group[]>([]);
  const [searchedProjects, setSearchedProjects] = useState(false);
  const [searchedGroups, setSearchedGroups] = useState(false);
  const handleSearch = (formData: FormData) => {
    if (location.pathname == "/") {
      setSearchResults(
        filterProjects({ name: String(formData.get("searchTerm")) }),
      );
      setSearchedProjects(true);
      setSearchedGroups(false);
    } else if (location.pathname == "/groups") {
      setSearchResults(
        filterCategoryOrGroup({
          type: "groups",
          name: String(formData.get("searchTerm")),
        }),
      );
      setSearchedGroups(true);
      setSearchedProjects(false);
    } else {
      skipNextSearchReset.current = true;
      navigate("/");
      setSearchResults(
        filterProjects({ name: String(formData.get("searchTerm")) }),
      );
      setSearchedProjects(true);
      setSearchedGroups(false);
    }
  };

  useEffect(() => {
    if (location.pathname !== "/" && location.pathname !== "/groups") {
      return;
    }

    if (skipNextSearchReset.current) {
      skipNextSearchReset.current = false;
      return;
    }

    setSearchResults([]);
    setSearchedProjects(false);
    setSearchedGroups(false);
  }, [location.pathname]);

  return (
    <div className="flex flex-col h-screen">
      <Header onCollapse={handleSidebarOpen} onSearch={handleSearch} />
      <div className="flex flex-1">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex flex-1 flex-col lg:px-xl px-md min-w-0">
          <Outlet
            context={{ searchResults, searchedProjects, searchedGroups }}
          />
        </main>
      </div>
    </div>
  );
}

export default Feed;
