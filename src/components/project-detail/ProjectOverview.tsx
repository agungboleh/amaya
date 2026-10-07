interface ProjectOverviewProps {
  children: React.ReactNode;
}

export default function ProjectOverview({ children }: ProjectOverviewProps) {
  return (
    <section className="py-section-gap-sm md:py-16 bg-[#f7f6f3] border-t border-b border-brand-base/5">
      <div className="max-w-container-max mx-auto px-margin-x-mobile md:px-margin-x-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-4">
            <p className="font-bold text-2xl text-brand-base border-l-4 border-brand-red pl-6">
              Project Overview
            </p>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg text-brand-base/70 leading-relaxed">
              {children}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
