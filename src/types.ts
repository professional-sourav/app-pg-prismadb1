export type Task = {
    id: string;
    title: string;
    description: string;
    priority: 'low' | 'medium' | 'high';
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export type Tasks = {
    tasks: Task[];
    loading: boolean;
    error: string | null;
    totalCount?: number;
}