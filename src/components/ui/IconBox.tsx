interface IconBoxProps {
  icon: string;
  className?: string;
}

export default function IconBox({ icon, className = "" }: IconBoxProps) {
  return (
    <div
      className={`bg-surface-container-low p-4 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors ${className}`}
    >
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
  );
}
