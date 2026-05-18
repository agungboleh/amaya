import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function ContactSection() {
  return (
    <section id="contact" className="py-section-gap-lg bg-white">
      <div className="max-w-container-max mx-auto px-margin-x-mobile md:px-margin-x-desktop">
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Info */}
          <div>
            <SectionHeading
              label="Get In Touch"
              title={
                <>
                  Contact <span className="text-primary">Us</span>
                </>
              }
            />
            <h3 className="font-display text-headline-md mb-6">
              Ready to Scale Your Business?
            </h3>
            <p className="text-body-lg text-on-surface-variant mb-10">
              Whether you need a robust enterprise architecture, an intelligent
              AI integration, or a dedicated engineering team, we are ready to
              help. Drop us a message detailing your technical challenges, and
              our lead engineers will get back to you with a strategic
              consultation.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <span className="text-body-md">hello@amayaperdana.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <span className="text-body-md">Jakarta, Indonesia</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-caption text-on-surface-variant">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Our engineers respond within{" "}
              <span className="font-bold">24 business hours</span>
            </div>
          </div>

          {/* Form */}
          <div className="bg-surface-container-low p-10 rounded-2xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="uppercase text-xs opacity-60 font-semibold tracking-wider">
                    Full Name *
                  </label>
                  <input
                    className="w-full bg-white border-none focus:ring-1 focus:ring-primary rounded-lg p-4 outline-none"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="uppercase text-xs opacity-60 font-semibold tracking-wider">
                    Work Email *
                  </label>
                  <input
                    className="w-full bg-white border-none focus:ring-1 focus:ring-primary rounded-lg p-4 outline-none"
                    placeholder="john@company.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="uppercase text-xs opacity-60 font-semibold tracking-wider">
                  Company Name *
                </label>
                <input
                  className="w-full bg-white border-none focus:ring-1 focus:ring-primary rounded-lg p-4 outline-none"
                  placeholder="Your Company"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="uppercase text-xs opacity-60 font-semibold tracking-wider">
                  Message *
                </label>
                <textarea
                  className="w-full bg-white border-none focus:ring-1 focus:ring-primary rounded-lg p-4 outline-none resize-none"
                  placeholder="Tell us about your project, technical challenges, and what you'd like to build..."
                  rows={5}
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                size="lg"
                icon="arrow_forward"
              >
                REQUEST A CONSULTATION
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
