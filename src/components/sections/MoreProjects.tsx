import MoreProjectCard from "@/components/cards/MoreProjectCard";
import { projects } from "@/data/projects";

interface MoreProjectsProps {
  excludeId?: string;
}

export default function MoreProjects({ excludeId }: MoreProjectsProps) {
  const filtered = projects.filter((p) => p.id !== excludeId).slice(0, 4);

  return (
    <section className="py-20 bg-surface-container-low border-t border-outline-variant/10">
      <div className="max-w-container-max mx-auto px-margin-x-mobile md:px-margin-x-desktop">
        <div className="mb-12">
          <h2 className="font-display text-headline-lg text-on-surface mb-2">
            More Projects
          </h2>
          <p className="text-on-surface-variant text-body-md">
            Discover how our precise technology solutions help diverse industry
            sectors achieve operational efficiency and sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-4">
          {filtered.map((project) => (
            <MoreProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
