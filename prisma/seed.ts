import { PrismaClient } from "../lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  console.log("🌱 Starting seed...");

  // Criar usuário de teste
  const user = await prisma.user.upsert({
    where: { email: "test@example.com" },
    update: {},
    create: {
      email: "test@example.com",
      name: "Test User",
      password: "hashed_password_here",
      active: true,
    },
  });

  console.log("✅ User created:", user.email);

  // Criar alguns jogos de exemplo
  const game1 = await prisma.game.create({
    data: {
      title: "The Witcher 3",
      description: "RPG de mundo aberto",
      genres: ["RPG", "Action"],
      platforms: ["PC", "PLAYSTATION", "XBOX"],
      releaseYear: 2015,
      developer: "CD Projekt Red",
    },
  });

  const game2 = await prisma.game.create({
    data: {
      title: "Hollow Knight",
      description: "Metroidvania indie",
      genres: ["Metroidvania", "Platformer"],
      platforms: ["PC", "NINTENDO"],
      releaseYear: 2017,
      developer: "Team Cherry",
    },
  });

  const game3 = await prisma.game.create({
    data: {
      title: "Elden Ring",
      description: "Action RPG souls-like",
      genres: ["RPG", "Action", "Souls-like"],
      platforms: ["PC", "PLAYSTATION", "XBOX"],
      releaseYear: 2022,
      developer: "FromSoftware",
    },
  });

  console.log("✅ Games created:", game1.title, game2.title, game3.title);

  // Adicionar jogos ao backlog do usuário
  await prisma.userGame.create({
    data: {
      userId: user.id,
      gameId: game1.id,
      status: "PLAYING",
      hoursPlayed: 15,
      rating: 9,
      startedAt: new Date("2024-01-15"),
    },
  });

  await prisma.userGame.create({
    data: {
      userId: user.id,

      gameId: game2.id,
      status: "BACKLOG",
    },
  });

  await prisma.userGame.create({
    data: {
      userId: user.id,
      gameId: game3.id,
      status: "COMPLETED",
      hoursPlayed: 120,
      rating: 10,
      startedAt: new Date("2024-02-01"),
      completedAt: new Date("2024-03-15"),
    },
  });

  console.log("✅ User games created!");

  // Criar uma review
  await prisma.review.create({
    data: {
      userId: user.id,
      gameId: game3.id,
      rating: 10,
      content: "Obra-prima absoluta! Melhor jogo que já joguei.",
    },
  });

  console.log("✅ Review created!");
  console.log("\n🎉 Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:");
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
