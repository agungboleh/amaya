"use client";
import { Suspense } from 'react';
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-brand-base overflow-hidden flex flex-col justify-center items-center py-20">
        <div className="max-w-container-max mx-auto px-margin-x-mobile md:px-margin-x-desktop py-12 md:py-20">
          <div className="max-w-3xl mx-auto mb-12 border-b border-brand-base/30 pb-8 text-center">
            <p className="text-5xl font-black tracking-tight mb-4">
              Privacy Policy
            </p>
            <p className="text-brand-base/70 text-sm md:text-base">
              Last updated: October 7, 2026
            </p>
          </div>
          <div className="max-w-3xl space-y-10">
            <section>
              <p className="text-brand-base text-lg leading-relaxed">
                This Privacy Policy explains how Amaya Perdana Kreasindo ("we,"
                "us," or "our") collects, uses, and protects your information
                when you use our website and services. By using the Amaya
                Perdana Kreasindo website, you agree to the terms outlined in
                this Privacy Policy. If you disagree with any part, you may not
                access our services.
                <br />
                <br />
                We take your privacy seriously. This policy breaks down what
                data we collect, how we use it, and what your options are to
                stay in control.
              </p>
            </section>
            <section>
              <p className="text-lg md:text-xl font-semibold text-brand-base mb-3">
                1. Information We Collect
              </p>
              <p className="text-brand-base/70 mb-3">
                PT Amaya Perdana Kreasindo collects information to provide
                better services to our clients and site visitors. We may collect
                the following types of information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-brand-base/70 pl-2">
                <li>
                  <strong className="text-brand-base/70">
                    Personal Data :
                  </strong>{" "}
                  Name, email address, phone number, and company name when you
                  fill out our contact forms or inquire about our services.
                </li>
                <li>
                  <strong className="text-brand-base/70">Usage Data :</strong>{" "}
                  Information on how you access and use our site, including IP
                  address, browser type, and page interaction details.
                </li>
              </ul>
            </section>
            <section>
              <p className="text-lg md:text-xl font-semibold text-brand-base mb-3">
                2. How We Use Your Information
              </p>
              <p className="text-brand-base/70 mb-3">
                We use the collected data for various operational and business
                purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-brand-base/70 pl-2">
                <li>
                  To respond to your inquiries and offer customer support.
                </li>
                <li>
                  To improve, test, and monitor the performance of our platform.
                </li>
                <li>
                  To send periodic project updates or promotional material, if
                  opted in.
                </li>
              </ul>
            </section>
            <section>
              <p className="text-lg md:text-xl font-semibold text-brand-base mb-3">
                3. Data Sharing and Protection
              </p>
              <p className="text-brand-base/70">
                We do not sell, trade, or rent your personal information to
                third parties. We implement strict security measures to protect
                your data against unauthorized access, alteration, disclosure,
                or destruction.
              </p>
            </section>
            <section>
              <p className="text-lg md:text-xl font-semibold text-brand-base mb-3">
                4. Your Rights
              </p>
              <p className="text-brand-base/70">
                You have the right to request access to, correction of, or
                deletion of your personal data stored with us. If you wish to
                exercise any of these rights, please contact us directly.
              </p>
            </section>
            <section className="pt-6 border-t border-slate-800">
              <p className="text-lg md:text-xl font-semibold text-brand-base mb-3">
                5. Contact Us
              </p>
              <p className="text-brand-base/70">
                If you have any questions regarding this Privacy Policy or how
                we handle your personal data, please contact us at{" "}
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
