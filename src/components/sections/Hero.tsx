"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Button from "../ui/Button";
import { RiArrowRightLongLine } from "react-icons/ri";

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-screen bg-white py-10">
      <div className="max-w-container-max mx-auto px-margin-x-desktop">
        <div className="grid grid-cols-12 gap-0 lg:gap-10 min-h-screen">
          <div className="col-span-12 lg:col-span-6 xl:col-span-7 flex flex-col justify-center mt-12.5 lg:mt-0">
            <h1 className="text-4xl xl:text-6xl font-black text-black">
              Architecting <span className="text-brand-red">Intelligent</span>{" "}
              Digital Solutions for
              <span className="text-brand-red"> Business Growth.</span>
            </h1>
            <p className="text-base xl:text-lg mt-4 text-brand-base">
              Transforming complex challenges into AI-powered web and mobile
              applications. From fluid cross-platform experiences to advanced
              language model integrations, we build secure, scalable systems
              designed to automate operations and drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button href="/#contact" icon={RiArrowRightLongLine}>
                Let&apos;s Build Together
              </Button>
              <Button href="/#services" variant="secondary">
                Our Services
              </Button>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 xl:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-xl aspect-square">
              <div className="w-full h-full scale-120">
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
