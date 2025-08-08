"use client";

import { Task } from "@/types";

export default function TaskSelectComponent({ task }: {task: Task}) {

    const handleOnChange = () => {
        // Handle checkbox change
    };

  return (
    <>
        <input
            type="checkbox"
            checked={task.completed}
            onChange={handleOnChange}
            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
    </>
  );
}
