import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

interface TechnologyListProps {
  technologies: Technology[];
}

function TechnologyList({ technologies }: TechnologyListProps) {
  return (
    <section className="px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">

          {/* Left Side - Technologies */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Explore{" "} the
                <span className="brand-gradient">
                  Technologies
                </span>
              </h2>

              <p className="mt-3 max-w-2xl text-gray-500">
                Pick one technology per category to build your ideal stack.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Your Stack */}
          <div>
            <YourStack />
          </div>

        </div>

      </div>
    </section>
  );
}

export default TechnologyList;