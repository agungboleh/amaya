interface ProblemCard {
  icon: string;
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
    <section className="py-16 bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-margin-x-mobile md:px-margin-x-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-headline-lg text-on-surface mb-8">
              {title}
            </h2>
            <div className="space-y-6 text-on-surface-variant text-body-lg">
              <p>{description}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="bg-white p-8 rounded-xl shadow-sm border border-outline-variant/10"
              >
                <span className="material-symbols-outlined text-primary text-4xl mb-4">
                  {problem.icon}
                </span>
                <h4 className="font-bold mb-2 text-on-surface">
                  {problem.title}
                </h4>
                <p className="text-sm opacity-70">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
