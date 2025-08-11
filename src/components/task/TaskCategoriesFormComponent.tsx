import { Category } from "@/types";
import { getAllCategories } from "../../services/TaskService";

export default async function TaskCategoriesFormComponent() {

    const categories = await getAllCategories();
    const allCategories: Category[] = categories.categories;

  return (
    <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">Category</label>
        <select
            id="category"
            name='category'
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
            {allCategories.map((category: Category) => (
                <option key={category.id} value={category.id}>
                    {category.name}
                </option>
            ))}
        </select>
    </div>
  );
}
