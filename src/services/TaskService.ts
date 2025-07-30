import { Tasks } from "@/types";

export const getTasks = async (): Promise<Tasks> => {
  

  return {
      tasks: [],
      loading: false,
      error: null,
      totalCount: 0
  };
};
