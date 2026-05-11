import { use } from "react";
import ProjectContext from "../components/ProjectProvider/ProjectContext";
import GroupList from "../components/GroupList";
import { useOutletContext } from "react-router";
import type { Group } from "../types";

function Groups() {
  const { groups } = use(ProjectContext);

  const { searchResults, searchedGroups } = useOutletContext<{
    searchResults: Group[];
    searchedGroups: boolean;
  }>();

  return <GroupList groups={searchedGroups ? searchResults : groups} />;
}

export default Groups;
