export default function FooterComponent() {
  return (
    <footer className="flex items-center justify-center p-4 bg-gray-800 text-white">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Task App. All rights reserved.
      </p>
    </footer>
  );
}
