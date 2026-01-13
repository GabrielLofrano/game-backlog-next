/* eslint-disable @typescript-eslint/no-explicit-any */
import { GameService } from "@/lib/services/game.service";
import { ApiResponse } from "@/lib/types/api";
import { NextRequest, NextResponse } from "next/server";

const MOCK_USER_ID = "test-user-id";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get("status") as any;
    const platform = searchParams.get("platform") as any;
    const search = searchParams.get("search") as any;

    const userGames = await GameService.getUserGames(MOCK_USER_ID, {
      status,
      platform,
      search,
    });

    return NextResponse.json<ApiResponse>({
      success: true,
      data: userGames,
    });
  } catch (error) {
    return NextResponse.json<ApiResponse>({
      success: false,
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { gameId, status } = body;

    if (!gameId) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          error: "Game ID is required",
        },
        { status: 400 }
      );
    }

    const userGame = await GameService.addGameToBacklog(
      MOCK_USER_ID,
      gameId,
      status
    );

    return NextResponse.json<ApiResponse>(
      {
        success: true,
        data: userGame,
        message: "Game added to backlog",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding game to backlog:", error);
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        error: "Failed to add game to backlog",
      },
      { status: 500 }
    );
  }
}
