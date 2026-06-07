import { NextResponse } from "next/server";
import { fetchProjectsRandom } from "../../../../../lib/data-layer";

// Força a execução dinâmica (sem cache do Next)
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const projects = await fetchProjectsRandom();

    return NextResponse.json(projects);
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
