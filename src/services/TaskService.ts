"use server";

import { CreateTaskData, CreateTaskFormState, Errors, Tasks } from "@/types";
import { createTask, getAllTasksWithCount } from "../../lib/prisma";

export const getTasks = async (): Promise<Tasks> => {
  const { tasks, totalCount } = await getAllTasksWithCount();

    return {
        tasks,
        loading: false,
        error: null,
        totalCount
    };
};

export const createNewTask = async (prevState: CreateTaskFormState, taskData: FormData): Promise<CreateTaskFormState> => {
  try {

    const task: CreateTaskData = {
      title: taskData.get("title") as string,
      description: taskData.get("description") as string,
      priority: taskData.get("priority") as 'low' | 'medium' | 'high'
    };
    
    const errors: Errors = {
      title: '',
      description: '',
      priority: ''
    };

    if (!task.title) {
      errors.title = "Title is required";
    }

    if (!task.priority) {
      errors.priority = "Priority is required";
    }

    if (task.description && task.description.length > 500) {
      errors.description = "Description cannot exceed 500 characters";
    }

    if (errors.title || errors.priority || errors.description) {
      return { errors };
    }

    await createTask(task);

    return {
      errors: {
        title: '',
        description: '',
        priority: ''
      }
    };
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};
