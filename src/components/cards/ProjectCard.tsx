import { RiCheckboxCircleLine } from "react-icons/ri";
import Button from "../ui/Button";
import { Project } from "../sections/Projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
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
          <p className="text-xl sm:text-2xl font-bold mb-4 text-brand-base shrink-0">
            {project.title}
          </p>
          <div className="collapsible max-h-125 opacity-100 transition-all shrink-0">
            <span className="border-b border-brand-base/5 w-full block mb-4" />
            <p className="text-brand-base/70 text-sm sm:text-base mb-6">
              {project.description}
            </p>
          </div>
          <div className="collapsible max-h-125 opacity-100 transition-all flex-1">
            <ul className="space-y-2 text-sm sm:text-base text-brand-base/70">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <RiCheckboxCircleLine className="text-brand-base/70 text-lg shrink-0 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="card-cta-wrapper mt-6 sm:mt-8 pt-2 shrink-0">
          <Button
            variant="ghost"
            href={project.href}
            size="sm"
            className="font-light w-full"
          >
            Discover More
          </Button>
        </div>
      </div>
    </div>
  );
}
