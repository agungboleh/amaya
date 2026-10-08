import { Suspense } from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function CookiePolicyPage() {
  return (
    <Suspense fallback={<div>Memuat...</div>}>
      <>
        <Navbar />
        <main className="min-h-screen text-brand-base overflow-hidden flex flex-col justify-center items-center py-20">
          <div className="max-w-container-max mx-auto px-margin-x-mobile md:px-margin-x-desktop py-12 md:py-20">
            <div className="max-w-3xl mx-auto mb-12 border-b border-brand-base/30 pb-8 text-center">
              <p className="text-5xl font-black tracking-tight mb-4">
                Cookie Policy
              </p>
              <p className="text-brand-base/70 text-sm md:text-base">
                Last updated: October 7, 2026
              </p>
            </div>
            <div className="max-w-3xl space-y-10">
              <section>
                <p className="text-brand-base text-lg leading-relaxed">
                  At Amaya Perdana Kreasindo, we use cookies and local storage
                  (and similar technologies) to improve your experience, make
                  our website work seamlessly, and help us understand how it’s
                  being used. This Cookie Policy explains what cookies are, why
                  we use them, and how you can control their use.
                  <br />
                  <br />
                  For more information about how we handle data, please see our{" "}
                  <a
                    href="/legal/privacy-policy"
                    className="text-brand-red/70 underline underline-offset-6 hover:text-brand-red hover:font-bold transition-opacity"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </section>
              <section>
                <p className="text-lg md:text-xl font-semibold text-brand-base mb-3">
                  1. What Are Cookies
                </p>
                <p className="text-brand-base/70">
                  Cookies are small text files stored on your device when you
                  visit our website. They help us ensure basic website
                  functionality, improve performance, and understand how
                  visitors interact with our services.
                </p>
              </section>
              <section>
                <p className="text-lg md:text-xl font-semibold text-brand-base mb-3">
                  2. How We Use Cookies
                </p>
                <p className="text-brand-base/70 mb-3">
                  PT Amaya Perdana Kreasindo uses cookies for the following
                  purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-brand-base/70 pl-2">
                  <li>
                    <strong className="text-brand-base/70">
                      Essential Cookies :
                    </strong>{" "}
                    Required for security, network management, and basic page
                    navigation.
                  </li>
                  <li>
                    <strong className="text-brand-base/70">
                      Analytics Cookies :
                    </strong>{" "}
                    Help us measure site traffic, load speeds, and user
                    interactions to improve our platform.
                  </li>
                  <li>
                    <strong className="text-brand-base/70">
                      Functionality Cookies :
                    </strong>{" "}
                    Remember your settings and preferences for a seamless
                    experience.
                  </li>
                </ul>
              </section>
              <section>
                <p className="text-lg md:text-xl font-semibold text-brand-base mb-3">
                  3. Third-Party Services
                </p>
                <p className="text-brand-base/70">
                  We may use trusted third-party analytics and infrastructure
                  services (such as Vercel or Google Analytics) that set cookies
                  on our behalf to monitor system performance and traffic
                  metrics.
                </p>
              </section>
              <section>
                <p className="text-lg md:text-xl font-semibold text-brand-base mb-3">
                  4. Managing Your Preferences
                </p>
                <p className="text-brand-base/70">
                  You can choose to disable or block cookies through your
                  individual browser settings. Please note that disabling
                  essential cookies may impact the overall stability and
                  functionality of our website.
                </p>
              </section>
              <section className="pt-6 border-t border-slate-800">
                <p className="text-lg md:text-xl font-semibold text-brand-base mb-3">
                  5. Contact Us
                </p>
                <p className="text-brand-base/70">
                  If you have any questions regarding this Cookie Policy, please
                  contact us at{" "}
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
    </Suspense>
  );
}
