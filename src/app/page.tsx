import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <main className="flex flex-col items-center justify-between p-8">
        <h2 className="text-2xl font-bold">Welcome to the Task App</h2>
        <p className="mt-4 text-gray-600">Manage your tasks efficiently and effectively.</p>
      </main>
      <FooterComponent />
    </>
  );
}