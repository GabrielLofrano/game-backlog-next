import { GameService } from "@/lib/services/game.service";
import { ApiResponse } from "@/lib/types/api";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status, rating, hoursPlayed, notes, completedAt } = body;

    const userGame = await GameService.updateUserGame(id, {
      status,
      rating,
      hoursPlayed,
      notes,
      completedAt,
    });

    return NextResponse.json<ApiResponse>({
      success: true,
      data: userGame,
      message: "Game updated successfully",
    });
  } catch (error) {
    console.error("Error updating user game:", error);
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        error: "Failed to update game",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await GameService.removeGameFromBacklog(id);

    return NextResponse.json<ApiResponse>({
      success: true,
      message: "Game successfully removed from backlog",
    });
  } catch (error) {
    console.error("Error removing game:", error);
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        error: "Failed to remove game",
      },
      { status: 500 }
    );
  }
}
