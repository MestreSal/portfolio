"use client";

import { GroupList } from "layout/ui";
import { API_BASE_URL, API_ENDPOINTS } from "../../../lib/config";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { Group } from "../../../types";

function Groups() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q")?.trim() || "";

  const [localGroups, setLocalGroups] = useState<Group[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedGroups = await fetch(
        q
          ? `${API_BASE_URL}${API_ENDPOINTS.GROUPS}?q=${encodeURIComponent(q)}`
          : `${API_BASE_URL}${API_ENDPOINTS.GROUPS}`,
      ).then((res) => res.json());
      setLocalGroups(fetchedGroups);
    };

    fetchData();
  }, [q]);

  return <GroupList groups={localGroups} />;
}

export default Groups;
