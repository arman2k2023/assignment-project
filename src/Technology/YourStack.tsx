import type { Technology } from "../types/technology";
import { toast } from "react-toastify";

interface YourStackProps {
    stack: Technology[];
    setStack: React.Dispatch<React.SetStateAction<Technology[]>>;
}

function YourStack({ stack, setStack }: YourStackProps) {
    const handleRemove = (id: number) => {
        const removedTechnology = stack.find(
            (technology) => technology.id === id
        );

        setStack(stack.filter((technology) => technology.id !== id));

        if (removedTechnology) {
            toast.info(`${removedTechnology.name} removed from your stack.`);
        }
    };

    const handleRemoveAll = () => {
        setStack([]);
        toast.info("All technologies removed from your stack.");
    };

    return (
        <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">
                    Your Stack
                </h2>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
                    {stack.length}
                </span>
            </div>

            {/* Empty State */}
            {stack.length === 0 ? (
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
            ) : (
                <>
                    {/* Remove All Button */}
                    <button
                        onClick={handleRemoveAll}
                        className="mt-5 w-full rounded-xl border border-red-200 px-4 py-2 text-sm font-semibold text-red-500 hover:bg-red-50"
                    >
                        Remove All
                    </button>

                    {/* Selected Technologies */}
                    <div className="mt-4 space-y-3">
                        {stack.map((technology) => (
                            <div
                                key={technology.id}
                                className="flex items-center gap-3 rounded-xl border border-gray-200 p-3"
                            >
                                {/* Icon */}
                                <img
                                    src={technology.icon}
                                    alt={`${technology.name} logo`}
                                    className="h-8 w-8 object-contain"
                                />

                                {/* Name + Category */}
                                <div className="min-w-0 flex-1">
                                    <h3 className="font-semibold text-gray-800">
                                        {technology.name}
                                    </h3>

                                    <p className="text-xs text-gray-500">
                                        {technology.category}
                                    </p>
                                </div>

                                {/* Remove Button */}
                                <button
                                    onClick={() => handleRemove(technology.id)}
                                    className="text-lg font-bold text-gray-400 hover:text-red-500"
                                    aria-label={`Remove ${technology.name}`}
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </aside>
    );
}

export default YourStack;