import { NextResponse } from "next/server";
import {
  createCategory,
  fetchCategoryById,
  updateCategory,
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
        { error: "ID da categoria é obrigatório" },
        {
          status: 400,
        },
      );
    }

    const category = await fetchCategoryById(id);

    return NextResponse.json(category);
  } catch (error) {
    console.error("Erro na API de categorias:", error);

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
        { error: "ID da categoria é obrigatório" },
        {
          status: 400,
        },
      );
    }

    const formData = await request.formData();
    const category = await updateCategory(id, formData);

    return NextResponse.json(category);
  } catch (error) {
    console.error("Erro na API de categorias:", error);

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
    const category = await createCategory(formData);

    return NextResponse.json(category);
  } catch (error) {
    console.error("Erro na API de categorias:", error);

    return NextResponse.json(
      { error: "Erro interno do servidor" },
      {
        status: 500,
      },
    );
  }
}
