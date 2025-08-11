import { CreateCategoryData, CreateTaskData } from "@/types";
import { PrismaClient } from "../prisma-client";

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
      completed: false,
    },
  });
}

export async function createCategory(data: CreateCategoryData) {
  const { name } = data;

  return await prisma.category.create({
    data: {
      name,
    },
  });
}

export async function getCategories() {
  return await prisma.category.findMany();
}
