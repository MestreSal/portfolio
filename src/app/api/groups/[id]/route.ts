import { NextResponse } from "next/server";
import {
  createGroup,
  fetchGroupById,
  updateGroup,
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
        { error: "ID do grupo é obrigatório" },
        {
          status: 400,
        },
      );
    }

    const group = await fetchGroupById(id);

    return NextResponse.json(group);
  } catch (error) {
    console.error("Erro na API de grupos:", error);

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
        { error: "ID do grupo é obrigatório" },
        {
          status: 400,
        },
      );
    }

    const formData = await request.formData();
    const group = await updateGroup(id, formData);

    return NextResponse.json(group);
  } catch (error) {
    console.error("Erro na API de grupos:", error);

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
    const group = await createGroup(formData);

    return NextResponse.json(group);
  } catch (error) {
    console.error("Erro na API de grupos:", error);

    return NextResponse.json(
      { error: "Erro interno do servidor" },
      {
        status: 500,
      },
    );
  }
}
