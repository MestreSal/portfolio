import { NextResponse } from "next/server";
import { fetchCategories } from "../../../../lib/data-layer";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const categories = await fetchCategories();

    return NextResponse.json(categories);
  } catch (error) {
    console.error("Erro interno no servidor:", error);

    return NextResponse.json(
      { error: "Erro interno do servidor" },
      {
        status: 500,
      },
    );
  }
}
