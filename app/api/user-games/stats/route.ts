import { GameService } from "@/lib/services/game.service";
import { ApiResponse } from "@/lib/types/api";
import { NextRequest, NextResponse } from "next/server";

const MOCK_USER_ID = "test-user-id";

export async function GET(request: NextRequest) {
  try {
    const stats = await GameService.getUserGameStats(MOCK_USER_ID);

    return NextResponse.json<ApiResponse>({
      success: true,
      data: stats,
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
