import { GameStatus, Platform } from "@prisma/client";

export const GAME_STATUS_LABELS: Record<GameStatus, string> = {
  BACKLOG: "Backlog",
  PLAYING: "Jogando",
  COMPLETED: "Finalizado",
  DROPPED: "Dropado",
};

export const PLATFORM_LABELS: Record<Platform, string> = {
  PC: "PC",
  PLAYSTATION: "PlayStation",
  XBOX: "Xbox",
  NINTENDO: "Nintendo",
  MOBILE: "Mobile",
  OTHER: "Outro",
};

export const GAME_STATUS_COLORS: Record<GameStatus, string> = {
  BACKLOG: "bg-slate-500",
  PLAYING: "bg-blue-500",
  COMPLETED: "bg-green-500",
  DROPPED: "bg-red-500",
};
