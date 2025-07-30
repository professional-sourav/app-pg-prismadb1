"use client";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-red-600">Something went wrong</h1>
      <p className="mt-4 text-lg text-gray-600">We are working to fix this issue.</p>
    </div>
  );
}
