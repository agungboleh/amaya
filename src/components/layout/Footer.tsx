import Link from "next/link";
import Logo from "./Logo";
import { footerColumns } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 w-full">
      <div className="max-w-container-max mx-auto px-margin-x-mobile md:px-margin-x-desktop py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-gutter w-full mb-12">
          {/* Brand */}
          <div className="max-w-md">
            <Link href="/" className="flex items-center gap-3 font-bold text-on-surface mb-4">
              <Logo />
              <span className="text-headline-md">Amaya Perdana Kreasindo</span>
            </Link>
            <p className="text-on-surface-variant text-sm">
              Architecting Intelligent Digital Solutions for Business Growth.
              Leading the digital transformation through precision engineering and
              AI.
            </p>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {footerColumns.map((col) => (
              <nav key={col.title} className="flex flex-col gap-3">
                <span className="font-bold text-xs uppercase tracking-widest text-primary mb-2">
                  {col.title}
                </span>
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-on-surface-variant hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-outline-variant/10 w-full gap-4">
          <p className="text-caption text-on-surface-variant">
            &copy; {new Date().getFullYear()} Amaya Perdana Kreasindo. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-on-surface-variant">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Enterprise IT Solutions &bull; Jakarta, Indonesia
          </div>
        </div>
      </div>
    </footer>
  );
}
