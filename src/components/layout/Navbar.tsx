"use client";

import { navItems } from "@/data/navigation";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useCallback, Suspense } from "react";

const sectionIds = [
  "home",
  "about",
  "services",
  "products",
  "projects",
  "contact",
];

const NAVBAR_HEIGHT = 80;
export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const isSubPage =
  pathname === "/projects" ||
  pathname.startsWith("/projects/") ||
  pathname === "/legal" ||
  pathname.startsWith("/legal/");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(isSubPage);
  const [activeSection, setActiveSection] = useState("home");
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
  const getAbsoluteTop = (element: HTMLElement): number => {
    let offsetTop = 0;
    let currentElement: HTMLElement | null = element;
    while (currentElement) {
      offsetTop += currentElement.offsetTop;
      currentElement = currentElement.offsetParent as HTMLElement | null;
    }
    return offsetTop;
  };
  const scrollToSection = useCallback(
    (sectionId: string, behavior: ScrollBehavior = "smooth") => {
      const section = document.getElementById(sectionId);
      if (!section) {
        return false;
      }
      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior });
        setActiveSection("home");
        return true;
      }
      const sectionTop = getAbsoluteTop(section);
      const targetPosition = Math.max(0, sectionTop - NAVBAR_HEIGHT);
      window.scrollTo({
        top: targetPosition,
        behavior,
      });
      setActiveSection(sectionId);
      return true;
    },
    [],
  );
  useEffect(() => {
    if (isSubPage) {
      setScrolled(true);
      setActiveSection("");
      return;
    }
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      const scrollPosition = currentScrollY + NAVBAR_HEIGHT + 20;
      let currentSection = "home";
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const absoluteTop = getAbsoluteTop(section);
          if (absoluteTop <= scrollPosition) {
            currentSection = sectionIds[i];
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSubPage]);
  useEffect(() => {
    if (isSubPage) return;
    const targetSection = searchParams.get("section");
    if (!targetSection || !sectionIds.includes(targetSection)) {
      return;
    }
    const executeScroll = () => {
      scrollToSection(targetSection, "smooth");
    };
    const timer1 = setTimeout(executeScroll, 100);
    const timer2 = setTimeout(() => {
      executeScroll();
      window.history.replaceState(
        null,
        "",
        targetSection === "home" ? "/" : `/#${targetSection}`,
      );
    }, 600);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [isSubPage, searchParams, scrollToSection]);
  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    setMobileOpen(false);
    if (isSubPage) {
      event.preventDefault();
      router.push(`/?section=${sectionId}`);
      return;
    }
    event.preventDefault();
    scrollToSection(sectionId, "smooth");
    if (sectionId === "home") {
      window.history.replaceState(null, "", window.location.pathname);
    } else {
      window.history.replaceState(null, "", `#${sectionId}`);
    }
  };
  return (
    <Suspense fallback={null}>
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled
          ? "bg-white border-b border-white shadow-sm"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full px-margin-x-mobile md:px-margin-x-desktop max-w-container-max mx-auto h-20">
        <Link
          href="/"
          className="flex items-center gap-5 font-bold transition-colors duration-300 text-black"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src="/assets/logo.svg"
            alt="Amaya Logo"
            className="w-auto h-10"
          />
          <span className="text-2xl font-bold tracking-tight leading-none md:block hidden">
            AMAYA PERDANA KREASINDO
          </span>
          <span className="text-2xl font-bold tracking-tight leading-none md:hidden block">
            AMAYA
          </span>
        </Link>
        <nav className="hidden xl:flex items-center gap-8">
          {navItems.map((item) => {
            const sectionId = getSectionId(item.label);
            const isActive = activeSection === sectionId;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavigation(event, sectionId)}
                className={`transition-colors duration-300 text-sm uppercase tracking-wider font-semibold ${
                  isActive
                    ? "text-brand-red border-b-2 border-brand-red pb-1"
                    : "text-black hover:text-brand-red"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          className="flex justify-between items-center xl:hidden transition-colors duration-300 text-black"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className="material-symbols-outlined text-3xl!">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>
      {mobileOpen && (
        <nav className="xl:hidden bg-white border-t-2 border-black/10 mx-margin-x-mobile py-10 flex flex-col gap-5">
          {navItems.map((item) => {
            const sectionId = getSectionId(item.label);
            const isActive = activeSection === sectionId;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavigation(event, sectionId)}
                className={`transition-colors text-sm uppercase tracking-wider font-semibold ${
                  isActive
                    ? "text-brand-red"
                    : "text-black hover:text-brand-red"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
    </Suspense>
  );
}
