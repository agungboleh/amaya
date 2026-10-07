"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface DetailProjectAnimationProps {
  imageSrc: string;
  imageAlt?: string;
  triggerRef?: React.RefObject<HTMLElement | null>;
}

export default function DetailProjectAnimation({
  imageSrc,
  imageAlt = "Product Image",
  triggerRef,
}: DetailProjectAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskGroupRef = useRef<SVGGElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const maskGroup = maskGroupRef.current;
    const scrollTriggerTarget = triggerRef?.current || containerRef.current;
    if (!maskGroup || !scrollTriggerTarget) return;
    maskGroup.innerHTML = "";
    const rows = 10;
    const cols = 10;
    const blockWidth = 100 / cols;
    const blockHeight = 100 / rows;
    const createdBlocks: SVGRectElement[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const rect = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "rect",
        );
        const initialX = c * blockWidth;
        const initialY = r * blockHeight;
        rect.setAttribute("x", initialX.toString());
        rect.setAttribute("y", initialY.toString());
        rect.setAttribute("width", (blockWidth + 0.1).toString()); // Anti-aliasing gap fix
        rect.setAttribute("height", (blockHeight + 0.1).toString());
        rect.setAttribute("fill", "white");
        rect.setAttribute("shape-rendering", "crispEdges");
        rect.dataset.startY = initialY.toString();
        rect.dataset.row = r.toString();
        rect.dataset.col = c.toString();
        maskGroup.appendChild(rect);
        createdBlocks.push(rect);
      }
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: scrollTriggerTarget,
          start: "top 80px",
          end: "bottom 80px",
          scrub: 1,
        },
      });
      createdBlocks.forEach((block) => {
        const startY = parseFloat(block.dataset.startY || "0");
        const r = parseInt(block.dataset.row || "0", 10);
        const baseRowDelay = r * 0.08;
        const randomScatter = Math.random() * 0.15;
        const delay = baseRowDelay + randomScatter;
        timeline.to(
          block,
          {
            attr: {
              y: startY - 100 - r * 2,
            },
            ease: "power1.inOut",
          },
          delay,
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, [triggerRef]);

  return (
    <div
      ref={containerRef}
      className="relative h-full min-h-100 flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-brand-base/10 rounded-3xl -rotate-2 scale-102 opacity-30" />
      <div className="relative w-full bg-white rounded-3xl p-2 shadow-2xl h-full flex items-center justify-center overflow-hidden border-2 border-brand-base/10 ">
        <div className="rounded-2xl flex items-center justify-center w-full h-full min-h-87.5">
          <svg
            className="w-full h-full rounded-2xl block"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            aria-label={imageAlt}
          >
            <defs>
              <mask id="maskRevealMask" maskUnits="userSpaceOnUse">
                <rect x="0" y="0" width="100" height="100" fill="black" />
                <g ref={maskGroupRef} id="maskRevealBlinds"></g>
              </mask>
            </defs>
            <image
              x="0"
              y="0"
              width="100"
              height="100"
              preserveAspectRatio="xMidYMid slice"
              href={imageSrc}
              mask="url(#maskRevealMask)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
