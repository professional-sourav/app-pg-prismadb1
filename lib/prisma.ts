import { PrismaClient } from "../src/generated/prisma";

export const prisma = new PrismaClient();

export async function getAllTasksWithCount() {
  const tasks = await prisma.task.findMany();
  const totalCount = await prisma.task.count();

  return { tasks, totalCount };
} 