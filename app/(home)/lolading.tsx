// app/loading.tsx
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
        {/* Loading text */}
        <p className="mt-4 text-gray-700 dark:text-gray-200 text-lg font-medium">
          Loading...
        </p>
      </div>
    </div>
  );
}
