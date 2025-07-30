import Link from "next/link";

export default function HeaderComponent() {
  return (
    <header className="flex items-center justify-space-between p-4 bg-gray-800 text-white">
      <h1 className="text-lg font-bold">Task App</h1>
      <nav className="ml-auto">
        <ul className="flex space-x-4">
          <li className="hover:text-gray-300">
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li className="hover:text-gray-300">
            <Link href="#" className="hover:underline">
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
