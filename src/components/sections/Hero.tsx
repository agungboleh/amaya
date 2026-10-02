"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Button from "../ui/Button";
import { RiArrowRightLongLine } from "react-icons/ri";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full lg:min-h-screen bg-white overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 lg:py-10"
    >
      <div className="max-w-container-max mx-auto px-margin-x-mobile md:px-margin-x-desktop">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-10 lg:min-h-screen">
          <div className="col-span-12 lg:col-span-6 xl:col-span-7 flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-black text-black leading-tight">
              Architecting <span className="text-brand-red">Intelligent</span>{" "}
              Digital Solutions for
              <span className="text-brand-red"> Business Growth.</span>
            </h1>
            <p className="text-sm sm:text-base xl:text-lg mt-4 text-brand-base max-w-2xl mx-auto lg:mx-0">
              Transforming complex challenges into AI-powered web and mobile
              applications. From fluid cross-platform experiences to advanced
              language model integrations, we build secure, scalable systems
              designed to automate operations and drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10 justify-center lg:justify-start">
              <Button href="/#contact" icon={RiArrowRightLongLine}>
                Let&apos;s Build Together
              </Button>
              <Button href="/#services" variant="secondary">
                Our Services
              </Button>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 xl:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-xs sm:max-w-md lg:max-w-xl aspect-square">
              <div className="w-full h-full lg:scale-120">
                <DotLottieReact
                  src="/assets/animation/Hero.lottie"
                  loop={false}
                  autoplay
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
