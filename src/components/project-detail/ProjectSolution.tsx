interface SolutionItem {
  icon: string;
  label: string;
}

interface ProjectSolutionProps {
  title: string;
  description: string;
  solutions: SolutionItem[];
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
}

export default function ProjectSolution({
  title,
  description,
  solutions,
  imageSrc,
  imageAlt,
  imagePosition = "right",
}: ProjectSolutionProps) {
  const content = (
    <div>
      <h2 className="font-display text-headline-lg text-on-surface mb-6">
        {title}
      </h2>
      <p className="text-body-lg text-on-surface-variant mb-8">
        {description}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {solutions.map((sol) => (
          <div
            key={sol.label}
            className="flex flex-col items-center p-4 bg-surface-container-low rounded-lg"
          >
            <span className="material-symbols-outlined text-primary mb-2">
              {sol.icon}
            </span>
            <span className="text-xs font-bold uppercase tracking-tighter text-center">
              {sol.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  const image = (
    <img
      alt={imageAlt}
      className="rounded-xl shadow-xl w-full object-cover aspect-square"
      src={imageSrc}
    />
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-container-max mx-auto px-margin-x-mobile md:px-margin-x-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {imagePosition === "left" && (
            <>
              <div className="lg:col-span-5">{image}</div>
              <div className="lg:col-span-7">{content}</div>
            </>
          )}
          {imagePosition === "right" && (
            <>
              <div className="lg:col-span-7">{content}</div>
              <div className="lg:col-span-5">{image}</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
