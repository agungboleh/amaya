import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/cards/ServiceCard";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section id="services" className="py-section-gap-lg bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-margin-x-mobile md:px-margin-x-desktop">
        <SectionHeading
          label="What We Do"
          title={
            <>
              Our <span className="text-primary">Services</span>
            </>
          }
          description="End-to-end digital engineering solutions tailored for enterprise demands — from intelligent automation to resilient infrastructure."
          align="right"
        />

        <div className="grid md:grid-cols-2 gap-gutter">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
