"use server";

import { CreateCategoryData, CreateCategoryFormState, CreateTaskData, CreateTaskFormState, Errors, Tasks } from "@/types";
import { createCategory, createTask, getAllTasksWithCount } from "../../lib/prisma";
import { redirect } from "next/navigation";
import { CategoryFormErrors } from "../types";

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

    console.log("Received task data:", taskData.get("title"), taskData.get("description"), taskData.get("priority"));

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
    
    console.log("Creating task with data:", task);

    if (!task.title) {
      errors.title = "Title is required";
    }

    if (!task.priority) {
      errors.priority = "Priority is required";
    }

    console.log("Task errors:", errors);

    if (errors.title || errors.priority || errors.description) {
      return { errors };
    }

    await createTask(task);

    console.log("Task created successfully", task);

    redirect("/dashboard");

    // return { errors: { title: '', description: '', priority: '' } };
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};


export const createNewCategory = async (prevState: CreateCategoryFormState, categoryState: FormData): Promise<CreateCategoryFormState> => {

    const newCategoryData: CreateCategoryData = {
        name: categoryState.get("name") as string
    };

    console.log("Creating category with data:", newCategoryData);

    const errors: CategoryFormErrors = {
        name: ''
    };

    if (newCategoryData.name.trim() === '') {
      errors.name = "Name is required";
    }

    if (errors.name) {
        return { errors };
    }

    await createCategory(newCategoryData);

    console.log("Category created successfully", newCategoryData);

    redirect("/dashboard");
}