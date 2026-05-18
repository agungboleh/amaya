interface ProjectHeroProps {
  client: string;
  industry?: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ProjectHero({
  client,
  industry,
  title,
  description,
  imageSrc,
  imageAlt,
}: ProjectHeroProps) {
  return (
    <section className="hero-gradient pt-28 pb-20 overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-x-mobile md:px-margin-x-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-primary font-bold uppercase tracking-widest text-caption block mb-4">
              {industry ? `Client: ${client} | Industry: ${industry}` : `Client: ${client}`}
            </span>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-on-surface mb-6">
              {title}
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-xl">
              {description}
            </p>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="bg-white rounded-xl shadow-2xl p-4 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                alt={imageAlt}
                className="w-full h-auto rounded-lg object-cover aspect-[4/3]"
                src={imageSrc}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
