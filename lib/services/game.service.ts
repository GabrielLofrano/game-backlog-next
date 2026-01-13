/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from "../prisma";
import { GameStatus, Platform } from "../../lib/generated/prisma";
import type { GameFilters, GameStats } from "../types/game";

export class GameService {
  static async getUserGames(userId: string, filters?: GameFilters) {
    const where: any = { userId };

    if (filters?.status) {
      where.status = filters.status;
    }

    if (filters?.platform) {
      where.game = {
        platforms: {
          has: filters.platform,
        },
      };
    }

    if (filters?.search) {
      where.game = {
        ...where.game,
        title: {
          contains: filters.search,
          mode: "insensitive",
        },
      };
    }

    return prisma.userGame.findMany({
      where,
      include: {
        game: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  static async getUserGameStats(userId: string): Promise<GameStats> {
    const [total, backlog, playing, completed, dropped] = await Promise.all([
      prisma.userGame.count({ where: { userId } }),
      prisma.userGame.count({ where: { userId, status: "BACKLOG" } }),
      prisma.userGame.count({ where: { userId, status: "PLAYING" } }),
      prisma.userGame.count({ where: { userId, status: "COMPLETED" } }),
      prisma.userGame.count({ where: { userId, status: "DROPPED" } }),
    ]);

    return { total, backlog, playing, completed, dropped };
  }

  static async addGameToBacklog(
    userId: string,
    gameId: string,
    status: GameStatus = "BACKLOG"
  ) {
    return prisma.userGame.create({
      data: {
        userId,
        gameId,
        status,
      },
      include: {
        game: true,
      },
    });
  }

  static async updateUserGame(
    userGameId: string,
    data: {
      status?: GameStatus;
      rating?: number;
      hoursPlayed?: number;
      notes?: string;
      completedAt?: Date | null;
    }
  ) {
    return prisma.userGame.update({
      where: { id: userGameId },
      data,
      include: {
        game: true,
      },
    });
  }

  static async removeGameFromBacklog(userGameId: string) {
    return prisma.userGame.delete({
      where: { id: userGameId },
    });
  }

  static async getGameById(gameId: string) {
    return prisma.game.findUnique({
      where: { id: gameId },
      include: {
        userGames: true,
        reviews: true,
      },
    });
  }

  static async createGame(data: {
    title: string;
    description?: string;
    coverUrl?: string;
    genres?: string[];
    platforms?: Platform[];
    releaseYear?: number;
    developer?: string;
    publisher?: string;
    externalId?: string;
  }) {
    return prisma.game.create({
      data,
    });
  }

  static async searchGames(query: string) {
    return prisma.game.findMany({
      where: {
        title: {
          contains: query,
          mode: "insensitive",
        },
      },
      take: 10,
    });
  }
}
