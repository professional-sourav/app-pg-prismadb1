import { getTasks } from "@/services/TaskService";

export default async function TaskList() {

  const { tasks, loading, error, totalCount } = await getTasks();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Tasks ({totalCount ?? 0})
        </h2>
        
        {tasks.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-gray-400 text-lg mb-2">📝</div>
            <p className="text-gray-500">No tasks yet. Create your first task above!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className={`border rounded-lg p-4 transition duration-200 ${
                  task.completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-300'
                }`}
              >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <div className="flex-1">
                        <h3 className={`text-lg font-medium ${
                          task.completed ? 'text-gray-500 line-through' : 'text-gray-800'
                        }`}>
                          {task.title}
                        </h3>
                        {task.description && (
                          <p className={`text-sm mt-1 ${
                            task.completed ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {task.description}
                          </p>
                        )}
                        {/* <div className="mt-2">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getPriorityColor(task.priority)}`}>
                            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
                          </span>
                        </div> */}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 ml-4">
                      <button
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                      >
                        Edit
                      </button>
                      <button
                        className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
              </div>
            ))}
          </div>
        )}
      </div>
  );
}
