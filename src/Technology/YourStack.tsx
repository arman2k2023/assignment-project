function YourStack() {
  return (
    <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">
          Your Stack
        </h2>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
          0
        </span>
      </div>

      {/* Empty State */}
      <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-2xl">
          📦
        </div>

        <h3 className="text-lg font-semibold text-gray-800">
          Your stack is empty
        </h3>

        <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500">
          Add technologies from the list to build your development stack.
        </p>
      </div>
    </aside>
  );
}

export default YourStack;