import { createNewCategory } from "@/services/TaskService";
import Form from "next/form";
import { useActionState } from "react";
import { CreateCategoryFormState } from "@/types";

export default function TaskCategory({ id }: { id: string }) {

    const formState: CreateCategoryFormState = {        
        errors: {
            name: ''
        }
    };

    const [
        state,
        formAction,
        isPending
     ] = useActionState(createNewCategory, formState)

  return (
    <>
        <Form action={formAction} className="space-y-6">
            <div className="w-full flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="mb-2">
                    <div className="w-100 gap-4 mb-4 p-4">
                        <div className="">
                            <label 
                                htmlFor="name" 
                                className="block text-sm font-medium text-gray-700 mb-2 dark:text-neutral-200">
                                Category Title *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name='name'
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:focus:ring-blue-500"
                                placeholder="Enter category name..."
                            />
                            <p className="text-red-500 text-sm">{state.errors.name}</p>
                        </div>
                    </div>

                    <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t border-gray-200 dark:border-neutral-700">
                        <button 
                            type="button" 
                            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" 
                            data-hs-overlay={`#${id}`}>
                            Close
                        </button>
                        <button 
                        type="submit" 
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                        disabled={isPending}>
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </Form>
    </>
  );
}
