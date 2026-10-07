import { IconType } from "react-icons";

interface SolutionItem {
  icon: IconType;
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
      <p className="font-black text-2xl text-brand-base mb-6">{title}</p>
      <p className="text-lg text-brand-base/70 mb-8">{description}</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {solutions.map((sol) => {
          const Icon = sol.icon;

          return (
            <div
              key={sol.label}
              className="flex flex-col items-center p-4 bg-brand-base/5 rounded-lg"
            >
              <span className="text-brand-red text-2xl mb-2">
                <Icon />
              </span>
              <span className="text-xs font-bold uppercase tracking-tighter text-center">
                {sol.label}
              </span>
            </div>
          );
        })}
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
