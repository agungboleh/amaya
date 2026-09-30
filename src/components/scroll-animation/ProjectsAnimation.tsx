"use client";

import { useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ProjectAnimationProps {
  children: ReactNode;
}

export default function ProjectAnimation({ children }: ProjectAnimationProps) {
  const pinContainerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const allCards = gsap.utils.toArray<HTMLElement>(".project-card");
      if (allCards.length === 0) return;
      const row1Cards = allCards.slice(0, 3);
      const row2Cards = allCards.slice(3, 5);
      const getSubElements = (cards: HTMLElement[], selector: string) => {
        return cards.flatMap((card) =>
          Array.from(card.querySelectorAll<HTMLElement>(selector)),
        );
      };
      const mm = gsap.matchMedia();
      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          const { isDesktop } = context.conditions as { isDesktop: boolean };
          const paddingVertical = isDesktop ? "1rem" : "0.75rem";
          const liftDistance = isDesktop ? -240 : -90;

          const scrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: pinContainerRef.current,
              start: "top top+=10",
              end: "+=600",
              scrub: 0.5,
              pin: true,
              pinSpacing: true,
              anticipatePin: 1,
              onRefresh: (self) => {
                const spacer = (self as any).spacer as HTMLElement | null;
                if (spacer) {
                  spacer.style.height = isDesktop ? "1100px" : "1300px";
                }
              },
              onUpdate: (self) => {
                const spacer = (self as any).spacer as HTMLElement | null;
                if (spacer) {
                  spacer.style.height = isDesktop ? "1100px" : "1300px";
                }
              },
            },
          });
          const collapseCards = (cards: HTMLElement[], stepLabel: string) => {
            scrollTl
              .to(
                getSubElements(cards, ".collapsible"),
                {
                  opacity: 0,
                  maxHeight: 0,
                  marginTop: 0,
                  marginBottom: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                  ease: "power1.inOut",
                  duration: 0.8,
                },
                stepLabel,
              )
              .to(
                cards,
                {
                  paddingTop: paddingVertical,
                  paddingBottom: paddingVertical,
                  paddingLeft: "1.25rem",
                  paddingRight: "1.25rem",
                  borderRadius: "0.75rem",
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.08)",
                  ease: "power1.inOut",
                  duration: 0.8,
                },
                stepLabel,
              )
              .to(
                getSubElements(cards, ".card-title"),
                {
                  fontSize: "0.95rem",
                  marginBottom: "0.25rem",
                  ease: "power1.inOut",
                  duration: 0.8,
                },
                stepLabel,
              )
              .to(
                getSubElements(cards, ".card-cta-wrapper"),
                {
                  marginTop: "0.5rem",
                  paddingTop: "0rem",
                  ease: "power1.inOut",
                  duration: 0.8,
                },
                stepLabel,
              );
          };
          scrollTl.to({}, { duration: 0.1 });
          collapseCards(row1Cards, "step1");
          scrollTl.to(
            ".projects-content-wrapper",
            {
              y: liftDistance,
              ease: "power1.inOut",
              duration: 0.8,
            },
            "step1",
          );
          scrollTl.to({}, { duration: 0.4 });
          if (row2Cards.length > 0) {
            collapseCards(row2Cards, "step2");
          }
          scrollTl.to({}, { duration: 0.1 });
        },
      );
    },
    { scope: pinContainerRef },
  );
  return (
    <div ref={pinContainerRef} className="w-full">
      {children}
    </div>
  );
}
