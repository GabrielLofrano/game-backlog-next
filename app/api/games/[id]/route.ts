import { GameService } from "@/lib/services/game.service";
import { ApiResponse } from "@/lib/types/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const game = await GameService.getGameById(id);

    if (!game) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: "Game not found" },
        { status: 404 }
      );
    }

    return NextResponse.json<ApiResponse>({
      success: false,
      data: game,
    });
  } catch (error) {
    console.error("Error fetching game:", error);

    NextResponse.json<ApiResponse>(
      { success: false, error: "failed to fetch game" },
      { status: 500 }
    );
  }
}
