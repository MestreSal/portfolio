import { NextResponse } from "next/server";
import { fetchGroups, fetchGroupsBySearch } from "../../../../lib/data-layer";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q")?.trim();

    if (query) {
      const groups = await fetchGroupsBySearch(query);
      return NextResponse.json(groups);
    } else {
      const groups = await fetchGroups();
      return NextResponse.json(groups);
    }
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
