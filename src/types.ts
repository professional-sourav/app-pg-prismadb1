export type Task = {
    id: number;
    title: string;
    description: string| null;
    // priority: 'low' | 'medium' | 'high';
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
}

export type Tasks = {
    tasks: Task[];
    loading: boolean;
    error: string | null;
    totalCount?: number;
}

export type CreateTaskData = {
    title: string;
    description?: string;
    priority?: 'low' | 'medium' | 'high';
}

export type Errors = {
    title: string;
    description?: string;
    priority?: string;
}

export type CreateTaskFormState = {
    errors: Errors;
}