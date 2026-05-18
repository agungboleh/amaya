import Chip from "@/components/ui/Chip";

interface ServiceCardProps {
  number: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export default function ServiceCard({
  number,
  icon,
  title,
  description,
  tags,
}: ServiceCardProps) {
  return (
    <div className="bg-white p-10 rounded-xl relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-outline-variant/10">
      {/* Large background number */}
      <span className="absolute top-4 right-8 text-8xl font-black text-surface-container-highest/30 select-none">
        {number}
      </span>

      <div className="relative z-10">
        <span
          className="material-symbols-outlined text-primary text-5xl mb-4 block"
          data-weight="fill"
        >
          {icon}
        </span>
        <h3 className="font-display text-headline-md mb-4">{title}</h3>
        <p className="text-on-surface-variant mb-6">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Chip key={tag} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
