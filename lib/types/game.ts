import {
  Game,
  UserGame,
  Review,
  GameStatus,
  Platform,
} from "../../lib/generated/prisma/client";

export type { Game, UserGame, Review, GameStatus, Platform };

export type UserGameWithGame = UserGame & { game: Game };

export type GameFilters = {
  status?: GameStatus;
  platform?: Platform;
  search?: string;
};

export type GameStats = {
  total: number;
  backlog: number;
  playing: number;
  completed: number;
  dropped: number;
};
