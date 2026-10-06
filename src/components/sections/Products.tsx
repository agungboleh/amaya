"use client";

import { useState, useRef } from "react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import ProductsAnimation from "../scroll-animation/ProductsAnimation";
import { productsData } from "@/data/products";

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState(productsData[0].id);
  const sectionRef = useRef<HTMLDivElement>(null);
  const activeProduct =
    productsData.find((p) => p.id === activeTab) || productsData[0];

  return (
    <section
      id="products"
      className="relative w-full bg-white scroll-mt-20 py-14 md:py-20 overflow-hidden"
      ref={sectionRef}
    >
      <div className="relative max-w-container-max mx-auto px-margin-x-mobile md:px-margin-x-desktop">
        <div className="relative z-10">
          <div className="grid grid-cols-12 gap-y-6 items-center">
            <div className="col-span-12">
              <SectionHeading
                label="our products"
                title={activeProduct.headingTitle}
                description={
                  <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                    {productsData.map((prod) => (
                      <button
                        key={prod.id}
                        onClick={() => setActiveTab(prod.id)}
                        className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                          activeTab === prod.id
                            ? "bg-brand-red text-white shadow-sm"
                            : "bg-brand-base/5 text-brand-base/70 hover:bg-brand-base/10"
                        }`}
                      >
                        {prod.tabLabel}
                      </button>
                    ))}
                  </div>
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-8">
            <div>
              <p className="font-bold text-xl sm:text-2xl mb-4 text-brand-base">
                {activeProduct.highlightTitle}
              </p>
              <p className="text-brand-base/70 text-base md:text-lg leading-relaxed mb-6 md:mb-4">
                {activeProduct.description}
              </p>
              <Button
                href={activeProduct.demoUrl}
                size="md"
                className="mb-8 md:mb-12"
              >
                Request a Demo
              </Button>
              <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-3 sm:gap-6">
                {activeProduct.features.map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center gap-3 p-3 bg-brand-base/10 rounded-lg"
                  >
                    <feature.icon className="text-xl text-brand-base/70 shrink-0" />
                    <span className="font-light text-xs sm:text-sm lg:text-xs text-brand-base/70">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <ProductsAnimation
              key={activeProduct.id}
              imageSrc={activeProduct.imageSrc}
              imageAlt={activeProduct.imageAlt}
              triggerRef={sectionRef}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
