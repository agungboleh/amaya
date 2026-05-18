"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { navItems } from "@/data/navigation";

// Map nav href to section IDs for intersection observer
const sectionIds = ["home", "about", "services", "products", "projects", "contact"];

export default function Navbar() {
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith("/projects/");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(isProjectPage);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll listener for background + active section
  useEffect(() => {
    const handleScroll = () => {
      // Only toggle background on non-project pages
      if (!isProjectPage) {
        setScrolled(window.scrollY > 20);
      }

      // Determine active section based on scroll position
      const navbarHeight = 80;
      const scrollY = window.scrollY + navbarHeight + 10;

      // On project pages, no sections to highlight
      if (isProjectPage) {
        setActiveSection("");
        return;
      }

      let currentSection = "home";
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollY) {
          currentSection = sectionIds[i];
          break;
        }
      }
      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isProjectPage]);

  // Sync scrolled state with route changes
  useEffect(() => {
    if (isProjectPage) {
      setScrolled(true);
      setActiveSection("");
    } else {
      setScrolled(window.scrollY > 20);
    }
  }, [isProjectPage]);

  // Map nav label to section id
  const getSectionId = (label: string): string => {
    const map: Record<string, string> = {
      Home: "home",
      About: "about",
      Services: "services",
      Products: "products",
      Projects: "projects",
      Contact: "contact",
    };
    return map[label] || "";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "bg-white/80 border-b border-outline-variant/30 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full px-margin-x-mobile md:px-margin-x-desktop max-w-container-max mx-auto h-20">
        {/* Logo */}
        <Link
          href="/"
          className={`flex items-center gap-3 font-bold transition-colors duration-300 ${
            scrolled ? "text-on-surface" : "text-white"
          }`}
        >
          <Logo />
          <span className="text-sm sm:text-headline-md font-bold">Amaya Perdana Kreasindo</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8">
          {navItems.map((item) => {
            const sectionId = getSectionId(item.label);
            const isActive = activeSection === sectionId;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActiveSection(sectionId)}
                className={`transition-colors duration-300 text-sm uppercase tracking-wider font-semibold ${
                  isActive
                    ? scrolled
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-white border-b-2 border-white pb-1"
                    : scrolled
                      ? "text-on-surface-variant hover:text-primary"
                      : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`xl:hidden transition-colors duration-300 ${
            scrolled ? "text-on-surface" : "text-white"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="xl:hidden bg-white border-t border-outline-variant/10 px-margin-x-mobile py-6 flex flex-col gap-4">
          {navItems.map((item) => {
            const sectionId = getSectionId(item.label);
            const isActive = activeSection === sectionId;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors text-sm uppercase tracking-wider font-semibold ${
                  isActive
                    ? "text-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
                onClick={() => {
                  setActiveSection(sectionId);
                  setMobileOpen(false);
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
