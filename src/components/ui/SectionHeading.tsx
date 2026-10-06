interface SectionHeadingProps {
  label: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "right";
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-8">
      <div>
        <p className="text-xs font-bold text-brand-red uppercase">{label}</p>
        <p className="text-2xl sm:text-3xl font-bold text-black py-2 md:py-2.5">
          {title}
        </p>
      </div>
      <div>
        {description && (
          <div className="text-sm sm:text-base text-gray-600 text-left md:text-right max-w-md">
            {description}
          </div>
        )}
      </div>
    </div>
  );
}
