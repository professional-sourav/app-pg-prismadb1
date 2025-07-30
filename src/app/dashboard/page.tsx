import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import CreateTaskComponent from "@/components/task/CreateTaskComponent";
import TaskList from "@/components/task/TaskList";

export default function DashboardPage() {
  return (
    <>
      <HeaderComponent />
        <main className="p-4">
          <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
            <CreateTaskComponent />
            <TaskList />
          </div>
        </main>
      <FooterComponent /> 
    </>
  );
}
