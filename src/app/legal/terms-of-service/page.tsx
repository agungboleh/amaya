"use client";
import { Suspense } from 'react';
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-brand-base overflow-hidden flex flex-col justify-center items-center py-20">
        <div className="max-w-container-max mx-auto px-margin-x-mobile md:px-margin-x-desktop py-12 md:py-20">
          <div className="max-w-3xl mx-auto mb-12 border-b border-brand-base/30 pb-8 text-center">
            <p className="text-5xl font-black tracking-tight mb-4">
              Terms of Service
            </p>
            <p className="text-brand-base/70 text-sm md:text-base">
              Last updated: October 7, 2026
            </p>
          </div>
          <div className="max-w-3xl space-y-10">
            <section>
              <p className="text-brand-base text-lg leading-relaxed">
                Terms of Service ("Terms") set out the rules for using our website, resources, and services. By accessing or using Amaya Perdana Kreasindo’s platform and/or website, you agree to these Terms. If you don’t agree, that’s okay, but you won’t be able to use our services.
              </p>
            </section>
            <section>
              <p className="text-lg md:text-xl font-semibold text-brand-base mb-3">
                1. Acceptance of Terms
              </p>
              <p className="text-brand-base/70">
                By accessing or using the website of PT Amaya Perdana Kreasindo,
                you agree to be bound by these Terms of Service and all
                applicable laws and regulations. If you do not agree with any of
                these terms, you are prohibited from using or accessing this
                site.
              </p>
            </section>
            <section>
              <p className="text-lg md:text-xl font-semibold text-brand-base mb-3">
                2. Intellectual Property Rights
              </p>
              <p className="text-brand-base/70">
                All content, logos, graphics, brand assets, and project
                materials displayed on this website are the intellectual
                property of PT Amaya Perdana Kreasindo or its content suppliers,
                and are protected by copyright, trademark, and other applicable
                intellectual property laws.
              </p>
            </section>
            <section>
              <p className="text-lg md:text-xl font-semibold text-brand-base mb-3">
                3. Use License
              </p>
              <p className="text-brand-base/70 mb-3">
                Permission is granted to temporarily view the materials on our
                website for personal, non-commercial viewing only. Under this
                license, you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-brand-base/70 pl-2">
                <li>Modify or copy the materials;</li>
                <li>
                  Use the materials for any commercial purpose or public
                  display;
                </li>
                <li>
                  Attempt to decompile or reverse-engineer any software
                  contained on the website;
                </li>
                <li>
                  Transfer the materials to another person or mirror the
                  materials on any other server.
                </li>
              </ul>
            </section>
            <section>
              <p className="text-lg md:text-xl font-semibold text-brand-base mb-3">
                4. Limitation of Liability
              </p>
              <p className="text-brand-base/70">
                In no event shall PT Amaya Perdana Kreasindo or its suppliers be
                liable for any damages arising out of the use or inability to
                use the materials on this website, even if we have been notified
                orally or in writing of the possibility of such damage.
              </p>
            </section>
            <section className="pt-6 border-t border-slate-800">
              <p className="text-lg md:text-xl font-semibold text-brand-base mb-3">
                5. Contact Us
              </p>
              <p className="text-brand-base/70">
                If you have any questions regarding these Terms of Service,
                please contact us at{" "}
                <a
                  href="mailto:hello@amayaperdana.id"
                  className="text-brand-red/70 underline underline-offset-6 hover:text-brand-red hover:font-bold transition-opacity"
                >
                  hello@amayaperdana.id
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
