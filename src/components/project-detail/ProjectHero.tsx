import DetailProjectAnimation from "../scroll-animation/DetailProjectAnimation";

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
    <section className="pt-28 pb-20 overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-x-mobile md:px-margin-x-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="text-brand-red font-bold uppercase tracking-widest text-xs block mb-4">
              {industry
                ? `Client: ${client} | Industry: ${industry}`
                : `Client: ${client}`}
            </span>
            <h1 className="text-6xl font-black text-brand-base mb-6">{title}</h1>
            <p className="text-lg text-brand-base/70 max-w-xl">{description}</p>
          </div>
          <DetailProjectAnimation imageSrc={imageSrc} imageAlt={imageAlt} />
        </div>
      </div>
    </section>
  );
}
