import { projects } from "@/data/projects";
import MoreProjectCard from "../cards/MoreProjectCard";

interface ProjectsMoreProps {
  excludeId?: string;
}
export default function ProjectsMore({ excludeId }: ProjectsMoreProps) {
  const filtered = projects.filter((p) => p.id !== excludeId).slice(0, 4);
  return (
    <section className="py-20 bg-[#f7f6f3] border-t border-b border-brand-base/5">
      <div className="max-w-container-max mx-auto px-margin-x-mobile md:px-margin-x-desktop">
        <div className="mb-12">
          <p className="font-bold text-2xl text-brand-base mb-2">
            More Projects
          </p>
          <p className="text-brand-base/70 text-lg">
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
