interface ProjectOverviewProps {
  children: React.ReactNode;
}

export default function ProjectOverview({ children }: ProjectOverviewProps) {
  return (
    <section className="py-section-gap-sm md:py-16 bg-white border-b border-outline-variant/10">
      <div className="max-w-container-max mx-auto px-margin-x-mobile md:px-margin-x-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-4">
            <h2 className="font-display text-headline-lg text-on-surface border-l-4 border-primary pl-6">
              Project Overview
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              {children}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
