import { Tasks } from "@/types";
import { getAllTasksWithCount } from "../../lib/prisma";

export const getTasks = async (): Promise<Tasks> => {
  const { tasks, totalCount } = await getAllTasksWithCount();

    return {
        tasks,
        loading: false,
        error: null,
        totalCount
    };
};
