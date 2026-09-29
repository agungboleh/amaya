"use client";

import {
  Ri24HoursLine,
  RiMailLine,
  RiMailSendLine,
  RiMapPinLine,
} from "react-icons/ri";
import SectionHeading from "../ui/SectionHeading";
import { useRef, useEffect, useState } from "react";
import Button from "../ui/Button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react/webgpu";
import type { DotLottie } from "@lottiefiles/dotlottie-react";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);
  const dotLottieRefCallback = (dotLottieInstance: DotLottie) => {
    setDotLottie(dotLottieInstance);
  };
  useEffect(() => {
    if (!dotLottie) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          dotLottie.stop();
          dotLottie.play();
        } else {
          dotLottie.stop();
        }
      },
      {
        threshold: 0.3,
      },
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [dotLottie]);

  return (
    <section
      id="contact"
      className="relative w-full bg-white scroll-mt-20 py-20 overflow-hidden"
      ref={sectionRef}
    >
      <div className="relative max-w-container-max mx-auto px-margin-x-desktop">
        <div className="relative z-10">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <SectionHeading
                label="Get In Touch"
                title={
                  <>
                    Contact <span className="text-brand-red">Us</span>
                  </>
                }
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 mt-4">
            <div>
              <p className="font-bold text-2xl mb-4 text-brand-base">
                Ready to Scale Your Business?
              </p>
              <p className="text-brand-base/70 text-lg leading-relaxed mb-4">
                Whether you need a robust enterprise architecture, an
                intelligent AI integration, or a dedicated engineering team, we
                are ready to help. Drop us a message detailing your technical
                challenges, and our lead engineers will get back to you with a
                strategic consultation.
              </p>
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-brand-base/10 rounded-full flex items-center justify-center">
                    <RiMailLine className="text-brand-base/70 text-sm" />
                  </div>
                  <span className="text-brand-base/70">
                    hello@amayaperdana.id
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-brand-base/10 rounded-full flex items-center justify-center">
                    <RiMapPinLine className="text-brand-base/70 text-sm" />
                  </div>
                  <span className="text-brand-base/70">Jakarta, Indonesia</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-caption text-brand-base/70">
                <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                Our engineers respond within
                <Ri24HoursLine className="text-brand-red text-2xl" />
                <span className="font-bold text-brand-base/70">
                  24 business hours
                </span>
              </div>
              <div className="relative h-50 overflow-visible mt-8">
                <div className="absolute left-0 top-0 w-full max-w-md scale-100 origin-top-left">
                  <DotLottieReact
                    src="/assets/animation/Contact.lottie"
                    loop={false}
                    autoplay={false}
                    dotLottieRefCallback={dotLottieRefCallback}
                  />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-brand-base/10 rounded-2xl -rotate-2 scale-102 z-0 opacity-30" />
              <div className="relative z-10 p-10 rounded-2xl bg-[#f7f6f3] shadow-lg border-2 border-brand-base/10">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="uppercase text-xs text-brand-base/70 font-semibold tracking-wider">
                        Full Name *
                      </label>
                      <input
                        className="text-sm w-full bg-white border-none focus:ring-1 focus:ring-brand-red rounded-lg p-4 outline-none mt-2 focus:placeholder-transparent"
                        placeholder="John Doe"
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="uppercase text-xs text-brand-base/70 font-semibold tracking-wider">
                        Work Email *
                      </label>
                      <input
                        className="text-sm w-full bg-white border-none focus:ring-1 focus:ring-brand-red rounded-lg p-4 outline-none mt-2 focus:placeholder-transparent"
                        placeholder="john@company.com"
                        type="email"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="uppercase text-xs text-brand-base/70 font-semibold tracking-wider">
                      Company Name *
                    </label>
                    <input
                      className="text-sm w-full bg-white border-none focus:ring-1 focus:ring-brand-red rounded-lg p-4 outline-none mt-2 focus:placeholder-transparent"
                      placeholder="Your Company"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="uppercase text-xs text-brand-base/70 font-semibold tracking-wider">
                      Message *
                    </label>
                    <textarea
                      className="text-sm w-full bg-white border-none focus:ring-1 focus:ring-brand-red rounded-lg p-4 outline-none resize-none mt-2 focus:placeholder-transparent"
                      placeholder="Tell us about your project, technical challenges, and what you'd like to build..."
                      rows={5}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full mt-4"
                    size="lg"
                    icon={RiMailSendLine}
                  >
                    Request a Consultation
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
