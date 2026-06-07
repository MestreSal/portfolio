import { NextResponse } from "next/server";
import {
  fetchProjectById,
  fetchProjects,
  fetchProjectsByCategory,
  fetchProjectsByGroup,
  fetchProjectsBySearch,
} from "../../../../lib/data-layer";

// Força a execução dinâmica (sem cache do Next)
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const group = searchParams.get("group");
    const query = searchParams.get("q")?.trim();

    if (query) {
      if (category) {
        const projects = await fetchProjectsByCategory(category, query);
        return NextResponse.json(projects);
      } else if (group) {
        const projects = await fetchProjectsByGroup(group, query);
        return NextResponse.json(projects);
      } else {
        const projects = await fetchProjectsBySearch(query);
        return NextResponse.json(projects);
      }
    } else if (category) {
      const projects = await fetchProjectsByCategory(category);
      return NextResponse.json(projects);
    } else if (group) {
      const projects = await fetchProjectsByGroup(group);
      return NextResponse.json(projects);
    } else {
      const projects = await fetchProjects();
      return NextResponse.json(projects);
    }
  } catch (error) {
    console.error("Erro na API de projetos:", error);

    return NextResponse.json(
      { error: "Erro interno do servidor" },
      {
        status: 500,
      },
    );
  }
}
