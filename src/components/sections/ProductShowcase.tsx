import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const features = [
  { icon: "sync_alt", label: "Multi-Branch Synchronization" },
  { icon: "calculate", label: "Automated Tax Calculation" },
  { icon: "badge", label: "Staff & Access Role Management" },
  { icon: "loyalty", label: "Built-in CRM & Loyalty" },
  { icon: "inventory_2", label: "Real-time Inventory & Pricing" },
  { icon: "devices", label: "Omnichannel & Multi-Device Support" },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="py-section-gap-lg bg-white overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-x-mobile md:px-margin-x-desktop">
        <SectionHeading
          label="Our Products"
          title={
            <>
              <span className="text-primary">Juno</span> Point of Sales
            </>
          }
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h3 className="font-display text-headline-md mb-6 leading-tight">
              The Most Comprehensive &amp; Cost-Effective Retail Management
              Ecosystem in Indonesia.
            </h3>
            <p className="text-body-lg mb-8 text-on-surface-variant">
              Juno is more than just a point of sale; it&apos;s the operational
              hub for your growing business. Built for speed and reliability,
              Juno seamlessly synchronizes your daily transactions, multi-branch
              inventory, and financial reporting. Pre-integrated with leading
              payment gateways and logistics platforms, we provide an
              enterprise-grade retail experience designed to scale with your
              operations.
            </p>
            <Button href="/#contact" size="lg" className="mb-12">
              Request a Demo
            </Button>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-3 p-4 bg-surface rounded-lg"
                >
                  <span className="material-symbols-outlined text-primary">
                    {feature.icon}
                  </span>
                  <span className="font-semibold text-sm">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3 scale-105" />
            <div className="relative bg-brand-navy rounded-3xl p-4 shadow-2xl">
              <div className="rounded-2xl bg-surface-container-low aspect-[4/3] flex items-center justify-center">
                <span className="material-symbols-outlined text-8xl text-primary/30">
                  point_of_sale
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
