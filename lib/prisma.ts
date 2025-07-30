import { CreateTaskData, Task } from "@/types";
import { PrismaClient } from "../src/generated/prisma";

export const prisma = new PrismaClient();

export async function getAllTasksWithCount() {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  const totalCount = await prisma.task.count();

  return { tasks, totalCount };
}

export async function createTask(data: CreateTaskData) {
  const { title, description } = data;

  return await prisma.task.create({
    data: {
      title,
      description: description || null,
      completed: false, // Default value for completed
    },
  });
}
