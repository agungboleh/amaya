import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[921px] flex items-center overflow-hidden bg-brand-navy text-white pt-20 md:pt-20"
    >
      {/* Dot pattern */}
      <div className="absolute inset-0 hero-pattern opacity-20" />

      <div className="max-w-container-max mx-auto px-margin-x-mobile md:px-margin-x-desktop relative z-10 py-20 md:py-0">
        <div className="max-w-4xl">
          <h1 className="font-display text-display-lg-mobile md:text-display-lg mb-6 leading-tight">
            Architecting{" "}
            <span className="text-brand-red">Intelligent</span> Digital
            Solutions for{" "}
            <span className="text-brand-red">Business Growth.</span>
          </h1>
          <p className="font-display text-body-lg text-white/70 mb-10 max-w-2xl">
            Transforming complex challenges into AI-powered web and mobile
            applications. From fluid cross-platform experiences to advanced
            language model integrations, we build secure, scalable systems
            designed to automate operations and drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/#contact" icon="arrow_forward">
              Let&apos;s Build Together
            </Button>
            <Button href="/#services" variant="secondary">
              Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Red glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden lg:block opacity-10">
        <div className="w-full h-full bg-brand-red blur-[120px] rounded-full" />
      </div>
    </section>
  );
}
