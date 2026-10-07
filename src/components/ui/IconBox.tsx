import { IconType } from "react-icons";

interface IconBoxProps {
  icon: IconType;
  className?: string;
}

export default function IconBox({ icon: Icon, className = "" }: IconBoxProps) {
  return (
    <div
      className={`flex items-center justify-center bg-brand-gray-light p-4 rounded-lg md:text-[#fecdcd] text-brand-red text-3xl ${className}`}
    >
      <Icon />
    </div>
  );
}