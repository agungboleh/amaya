import Link from "next/link";
import type { Project } from "@/data/projects";

interface MoreProjectCardProps {
  project: Project;
}

export default function MoreProjectCard({ project }: MoreProjectCardProps) {
  return (
    <div className="w-full h-full">
      <div className="project-card bg-white rounded-xl border border-brand-base/10 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8 flex flex-col justify-between h-full overflow-hidden">
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-start gap-4 mb-6 shrink-0">
            <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 bg-brand-base text-white flex items-center justify-center font-bold rounded">
              {project.initials}
            </div>
            <div className="text-right">
              <span className="text-xs text-brand-base uppercase tracking-tighter">
                {project.category}
              </span>
            </div>
          </div>
          <span className="text-brand-red font-bold block mb-1 shrink-0">
            {project.company}
          </span>
          <p className="text-lg font-bold mb-4 text-brand-base shrink-0">
            {project.title}
          </p>
          <div className="collapsible max-h-125 opacity-100 transition-all shrink-0">
            <span className="border-b border-brand-base/5 w-full block mb-4" />
            <p className="text-brand-base/70 text-sm sm:text-base line-clamp-3">
              {project.description}
            </p>
          </div>
        </div>
        <div className="card-cta-wrapper mt-6 sm:mt-8 pt-2 shrink-0">
          <Link
            href={project.href}
            className="inline-flex items-center justify-center gap-2 rounded-lg transition-all scale-100 active:scale-95 group border border-brand-red text-brand-red hover:bg-brand-red hover:text-white px-4 py-2 font-light w-full"
          >
            Discover More
          </Link>
        </div>
      </div>
    </div>
  );
}
