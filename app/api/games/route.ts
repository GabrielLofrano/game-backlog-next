import { GameService } from "@/lib/services/game.service";
import { ApiResponse } from "@/lib/types/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get("search");

    if (search) {
      const games = await GameService.searchGames(search);
      return NextResponse.json<ApiResponse>({
        success: true,
        data: games,
      });
    }

    return NextResponse.json<ApiResponse>(
      {
        success: false,
        error: "Missing search parameter",
      },
      { status: 400 }
    );
  } catch (error) {
    console.error("Error fetching games:", error);
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        error: "Failed to fetch games",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      title,
      description,
      coverUrl,
      genres,
      platforms,
      releaseYear,
      developer,
      publisher,
    } = body;

    if (!title) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          error: "Title is missing",
        },
        { status: 400 }
      );
    }

    const game = await GameService.createGame({
      title,
      description,
      coverUrl,
      genres,
      platforms,
      releaseYear,
      developer,
      publisher,
    });

    return NextResponse.json<ApiResponse>(
      {
        success: true,
        data: {
          game,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating game:", error);
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        error: "Failed to create game",
      },
      { status: 500 }
    );
  }
}
