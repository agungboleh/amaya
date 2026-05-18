interface SectionHeadingProps {
  label: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "right";
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col ${
        align === "right" ? "md:flex-row md:justify-between md:items-end" : ""
      } mb-16 gap-4 ${className}`}
    >
      <div>
        <span className="text-primary font-bold tracking-widest uppercase text-caption block mb-2">
          {label}
        </span>
        <h2 className="font-display text-headline-lg text-on-surface">
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-md text-on-surface-variant text-right">
          {description}
        </p>
      )}
    </div>
  );
}
