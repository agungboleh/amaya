import { IconType } from "react-icons";

interface ProblemCard {
  icon: IconType;
  title: string;
  description: string;
}

interface ProjectBackgroundProps {
  title: string;
  description: string;
  problems: ProblemCard[];
}

export default function ProjectBackground({
  title,
  description,
  problems,
}: ProjectBackgroundProps) {
  return (
    <section className="py-16">
      <div className="max-w-container-max mx-auto px-margin-x-mobile md:px-margin-x-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-bold text-2xl text-brand-base mb-8">{title}</h2>
            <div className="space-y-6 text-lg text-brand-base/70">
              <p>{description}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problems.map((problem) => {
              const Icon = problem.icon;
              return (
                <div
                  key={problem.title}
                  className="p-8 rounded-xl shadow-sm border border-brand-base/10"
                >
                  <span className="mb-4 inline-flex text-brand-red text-4xl">
                    <Icon className="text-2xl" />
                  </span>
                  <h4 className="font-bold mb-2 text-brand-base">
                    {problem.title}
                  </h4>
                  <p className="text-sm text-brand-base/70">
                    {problem.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
