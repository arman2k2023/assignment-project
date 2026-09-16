import type { Dispatch, SetStateAction } from "react";
import type { Technology } from "../types/technology";
import { toast } from "react-toastify";

interface TechnologyCardProps {
  technology: Technology;
  stack: Technology[];
  setStack: Dispatch<SetStateAction<Technology[]>>;
}

function TechnologyCard({
  technology,
  stack,
  setStack,
}: TechnologyCardProps) {

  const handleAddToStack = () => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack([...stack, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

  const isAdded = stack.some(
    (item) => item.id === technology.id
  );

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      {/* Icon + Badge */}
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50">
          <img
            src={technology.icon}
            alt={`${technology.name} logo`}
            className="h-8 w-8 object-contain"
          />
        </div>

        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-500">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h2 className="mt-4 text-xl font-bold text-gray-900">
        {technology.name}
      </h2>

      {/* Description */}
      <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-500">
        {technology.description}
      </p>

      {/* Category + Difficulty + Rating */}
      <div className="mt-4 flex items-center gap-2">

        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
          {technology.category}
        </span>

        <span className="text-xs text-gray-500">
          {technology.difficulty}
        </span>

        <span className="ml-auto flex items-center gap-1 text-sm font-semibold text-gray-700">
          <span>★</span>
          <span>{technology.rating}</span>
        </span>

      </div>

      {/* Add Button */}
      <button
        onClick={handleAddToStack}
        disabled={isAdded}
        className={`mt-4 w-full rounded-xl px-4 py-3 font-semibold text-white ${isAdded
          ? "cursor-not-allowed bg-gray-400"
          : "gradient-button"
          }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
}

export default TechnologyCard;