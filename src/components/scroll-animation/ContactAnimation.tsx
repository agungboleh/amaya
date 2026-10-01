"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function ServicesAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);

  useGSAP(
    () => {
      const path = pathRef.current;
      const dot = dotRef.current;
      if (!path || !dot) return;
      const pathLength = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
      tl.to(
        dot,
        {
          motionPath: {
            path: path,
            align: path,
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
          },
          ease: "none",
          duration: 1,
        },
        0,
      );
      tl.to(
        path,
        {
          strokeDashoffset: 0,
          ease: "none",
          duration: 1,
        },
        0,
      );
      tl.to(".node-1", { opacity: 1, scale: 1, duration: 0.05 }, 0.99);
      tl.to(dot, { autoAlpha: 0, scale: 0, duration: 0.05 }, 1);
      ScrollTrigger.refresh();
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <svg
        className="w-full h-full overflow-visible"
        viewBox="0 0 517 710"
        fill="none"
        preserveAspectRatio="xMinYMin meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="path-bg"
          d="M0 1H430C457.614 1 480 23.3858 480 51V570C480 597.614 457.614 620 430 620H9"
          stroke="#FFE7E7"
          strokeWidth="4"
          fill="none"
        />
        <path
          ref={pathRef}
          id="path"
          className="path-progress"
          d="M0 1H430C457.614 1 480 23.3858 480 51V570C480 597.614 457.614 620 430 620H9"
          stroke="#F90706"
          strokeWidth="4.5"
          fill="none"
        />
        <circle ref={dotRef} id="dot" fill="#F90706" cx="0" cy="1" r="6" />
        <circle cx="1195" cy="1110" r="4" />
        <g className="node node-1 opacity-0" transform="translate(-65, 620)">
          <svg
            width="74"
            height="31"
            viewBox="0 0 74 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43.5009 30.8496L43.3522 31H43.1419H1.22561H0L0.866642 30.1235L30.4991 0.150353L30.6477 0H30.858H72.7744H74L73.1334 0.876644L43.5009 30.8496Z"
              fill="#F90706"
            />
          </svg>
        </g>
        <g transform="translate(-220, 605)">
          <svg
            width="230"
            height="92"
            viewBox="0 0 230 92"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M108.25 0.5H153.75H154V0.75V43.75L154.25 44L183.75 14.5H229.75C230 14.4167 230.083 14.8333 230 15.75L198.5 47.25V91.75V92H198.25H152.75H152.5V91.75V48.25L152.25 48L122.25 78H76.75L45.25 46.5H0.75H0.5C0.5 46.25 0.5 45.6667 0.5 44.75L31.75 13.5H77.75L107.25 43L107.5 42.75V1.25L108.25 0.5ZM109.5 2V2.5V44.5H110H152V2.5V2H110H109.5ZM33.5 15L4 44.5H4.5H45.5L74.5 15.5V15H33.5ZM77 16L47 46L77 75.5H77.5L107 46L77.5 16H77ZM185.5 16L156 45.5H156.5H197.5L226.5 16.5V16H185.5ZM109.5 46.5L80 76H80.5H121.5L150.5 47V46.5H109.5ZM154 47.5V48V90H154.5H196.5V48V47.5H154.5H154Z"
              fill="#CCCCCC"
            />
          </svg>
        </g>
      </svg>
    </div>
  );
}
