"use client";

import { createNewTask, getAllCategories } from '@/services/TaskService';
import { Categories, Category, CreateTaskFormState } from '@/types';
import Form from 'next/form'
import { useEffect, useState } from 'react';
import { useActionState } from 'react';
import TaskPopup from '../modals/TaskPopup';
import TaskCategory from './TaskCategory';

export default function CreateTaskComponent() {
  const initialFormState: CreateTaskFormState = {
    errors: {
      title: '',
      description: '',
      priority: ''
    }
  }

  const [state, formAction, isPending] = useActionState(createNewTask, initialFormState);
  const [allCategories, setAllCategories] = useState<Category[]>([]);

  useEffect(() => {
    getAllCategories().then(
      (categories: Categories) => {
        setAllCategories(categories.categories);
      }
    );
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Task Manager</h1>

      {/* Create Task Section */}
      <Form action={formAction} className="space-y-6">
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Task Title *
              </label>
              <input
                type="text"
                id="title"
                name='title'
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter task title..."
              />
              <p className="text-red-500 text-sm">{state.errors.title}</p>
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                    id="category"
                    name='category'
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a category</option>
                  {allCategories.map((category: Category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
            </div>   


            <div>
              <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                Priority
              </label>
              <select
                id="priority"
                name='priority'
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              id="description"
              name='description'
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter task description..."
            />
          </div>

          <div className='flex justify-start items-center gap-4'>
            <button
              type="submit"
              disabled={isPending}
              className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200">
              Add Task
            </button>

            <button 
              type="button" 
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" 
              aria-haspopup="dialog" 
              aria-expanded="false"
              aria-controls="task-category-modal" 
              data-hs-overlay="#task-category-modal">
              Task Category
            </button>
          </div>
        </div>
      </Form>
      <TaskPopup id="task-category-modal">
        <TaskCategory id="task-category-modal" />
      </TaskPopup>
    </div>
  );
}
