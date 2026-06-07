import { NextResponse } from "next/server";
import {
  createProject,
  fetchProjectById,
  updateProject,
} from "../../../../../lib/data-layer";

// Força a execução dinâmica (sem cache do Next)
export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: { id?: string } },
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { error: "ID do projeto é obrigatório" },
        {
          status: 400,
        },
      );
    }

    const project = await fetchProjectById(id);

    return NextResponse.json(project);
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

export async function PUT(
  request: Request,
  { params }: { params: { id?: string } },
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { error: "ID do projeto é obrigatório" },
        {
          status: 400,
        },
      );
    }

    const formData = await request.formData();
    const project = await updateProject(id, formData);

    return NextResponse.json(project);
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

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const project = await createProject(formData);

    return NextResponse.json(project);
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
