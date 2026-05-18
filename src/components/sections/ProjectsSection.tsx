import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-section-gap-lg bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-margin-x-mobile md:px-margin-x-desktop">
        <SectionHeading
          label="Case Studies"
          title={
            <>
              Our <span className="text-primary">Projects</span>
            </>
          }
          description="A selection of enterprise-grade systems we've architected and deployed for global and national brands across Indonesia."
          align="right"
        />

        <div className="grid lg:grid-cols-3 gap-gutter">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
