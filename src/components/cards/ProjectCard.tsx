import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col h-full border border-outline-variant/10 hover:shadow-md transition-shadow">
      <div className="p-8 flex flex-col flex-1">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 bg-on-background text-white flex items-center justify-center font-bold rounded">
            {project.initials}
          </div>
          <div className="text-right">
            <span className="text-caption text-on-surface-variant uppercase tracking-tighter">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <span className="text-primary text-caption font-bold block mb-1">
          {project.company}
        </span>
        <h3 className="font-display text-headline-md mb-4">{project.title}</h3>
        <p className="text-on-surface-variant text-sm mb-6">
          {project.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 text-sm text-on-surface-variant flex-1">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-base">
                check_circle
              </span>
              {feature}
            </li>
          ))}
        </ul>

        {/* Link */}
        <Link
          href={project.href}
          className="inline-flex items-center gap-2 text-primary font-bold mt-8 hover:opacity-70 transition-opacity"
        >
          View Project
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </Link>
      </div>
    </div>
  );
}
