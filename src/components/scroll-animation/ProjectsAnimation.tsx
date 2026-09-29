"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "../cards/ProjectCard";

export interface Project {
  id: string;
  initials: string;
  category: string;
  company: string;
  title: string;
  description: string;
  features: string[];
  href: string;
}
interface ProjectsAnimationProps {
  projects: Project[];
}

export default function ProjectsAnimation({
  projects,
}: ProjectsAnimationProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const topCardsRef = useRef<HTMLDivElement[]>([]);
  const bottomCardsRef = useRef<HTMLDivElement[]>([]);
  const topProjects = projects.slice(0, 3);
  const bottomProjects = projects.slice(3, 5);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const cardsWrapper = cardsWrapperRef.current;
    const topCards = topCardsRef.current;
    const bottomCards = bottomCardsRef.current;
    if (!section || !cardsWrapper) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=4000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
      topCards.forEach((card) => {
        if (card) {
          tl.to(card, {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 1,
            ease: "power3.out",
          });
        }
      });
      tl.to({}, { duration: 0.5 });
      tl.to(topCards, {
        rotateY: 180,
        duration: 1,
        stagger: 0.25,
        ease: "power2.inOut",
      });
      tl.to({}, { duration: 0.5 });
      tl.to(cardsWrapper, {
        y: -520,
        duration: 1.2,
        ease: "power3.inOut",
      });
      tl.to({}, { duration: 0.3 });
      bottomCards.forEach((card) => {
        if (card) {
          tl.to(card, {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 1,
            ease: "power3.out",
          });
        }
      });
      tl.to({}, { duration: 0.5 });
      tl.to(bottomCards, {
        rotateY: 180,
        duration: 1,
        stagger: 0.25,
        ease: "power2.inOut",
      });
      tl.to({}, { duration: 1 });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-screen bg-[#f7f6f3] overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      <div className="relative max-w-container-max mx-auto px-margin-x-desktop h-full pt-32">
        <div ref={cardsWrapperRef} className="relative w-full z-10">
          <div className="grid lg:grid-cols-3 gap-gutter">
            {topProjects.map((project, idx) => (
              <div
                key={project.id}
                ref={(el) => {
                  if (el) topCardsRef.current[idx] = el;
                }}
                className="opacity-0 transform translate-y-20 -rotate-y-90"
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center center",
                }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          <div className="grid lg:grid-cols-2 gap-gutter lg:w-2/3 mx-auto mt-gutter">
            {bottomProjects.map((project, idx) => (
              <div
                key={project.id}
                ref={(el) => {
                  if (el) bottomCardsRef.current[idx] = el;
                }}
                className="opacity-0 transform translate-y-20 -rotate-y-90"
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center center",
                }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
