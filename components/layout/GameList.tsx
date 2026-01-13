import { GameService } from "@/lib/services/game.service";

export async function GameList() {
  const MOCK_USER_ID = "test-user-id";
  const backlogGames = await GameService.getUserGames(MOCK_USER_ID);
  return ImageList;
}
