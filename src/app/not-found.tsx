import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-700 dark:text-gray-300">
          404
        </h1>
        <h2 className="text-4xl font-medium my-4 text-gray-600 dark:text-gray-400">
          Page Not Found
        </h2>
        <p className="text-lg mb-8 text-gray-500 dark:text-gray-500">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-none dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-colors duration-200"
        >
          <Home className="w-5 h-5 mr-2" />
          Go Home
        </Link>
      </div>
    </div>
  );
}
