import Link from "next/link";
import type { Project } from "@/data/projects";

interface MoreProjectCardProps {
  project: Project;
}

export default function MoreProjectCard({ project }: MoreProjectCardProps) {
  return (
    <Link
      href={project.href}
      className="group bg-white rounded-xl p-6 border border-outline-variant/10 shadow-sm hover:shadow-md transition-all duration-300 block"
    >
      {/* Initials Badge */}
      <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-6 bg-on-background">
        <span className="font-bold text-xl text-white">{project.initials}</span>
      </div>

      {/* Category */}
      <span className="text-primary font-bold uppercase tracking-widest block mb-1 text-[10px]">
        {project.category}
      </span>

      {/* Company */}
      <div className="font-bold text-on-surface text-sm mb-1">
        {project.company}
      </div>

      {/* Title */}
      <h3 className="font-display text-lg text-on-surface mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm line-clamp-3 text-tertiary">
        {project.description}
      </p>
    </Link>
  );
}
