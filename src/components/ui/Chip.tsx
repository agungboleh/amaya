interface ChipProps {
  label: string;
  className?: string;
}

export default function Chip({ label, className = "" }: ChipProps) {
  return (
    <span
      className={`px-3 py-1 bg-surface-container-low text-caption rounded-full ${className}`}
    >
      {label}
    </span>
  );
}
