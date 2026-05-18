import SectionHeading from "@/components/ui/SectionHeading";
import IconBox from "@/components/ui/IconBox";

const missions = [
  {
    icon: "psychology",
    title: "01. Intelligent Automation",
    description:
      "Integrating sophisticated language models and automated AI workflows to streamline complex business operations and enhance decision-making.",
  },
  {
    icon: "architecture",
    title: "02. Scalable Architecture",
    description:
      "Building secure, high-performance custom web and mobile applications designed to support enterprise-grade demands.",
  },
  {
    icon: "update",
    title: "03. Future-Proof Ecosystems",
    description:
      "Delivering end-to-end digital infrastructures that don't just solve today's problems, but continuously evolve with technological advancements.",
  },
];

export default function VisionMission() {
  return (
    <section id="about" className="py-section-gap-lg bg-surface">
      <div className="max-w-container-max mx-auto px-margin-x-mobile md:px-margin-x-desktop">
        <SectionHeading
          label="About Us"
          title={
            <>
              Vision &amp; <span className="text-primary">Mission</span>
            </>
          }
        />

        <div className="grid lg:grid-cols-12 gap-gutter">
          {/* Vision */}
          <div className="lg:col-span-5 bg-white p-10 rounded-xl shadow-sm border-l-4 border-primary">
            <span className="text-primary font-bold text-caption uppercase mb-4 block">
              Our Vision
            </span>
            <p className="font-display text-headline-md text-on-surface leading-snug">
              To be the catalyst for enterprise transformation by architecting
              intelligent digital solutions that bridge robust software
              engineering with advanced AI technologies.
            </p>
          </div>

          {/* Mission items */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {missions.map((mission) => (
              <div
                key={mission.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex gap-6 items-start">
                  <IconBox icon={mission.icon} />
                  <div>
                    <h3 className="font-display text-headline-md mb-2">
                      {mission.title}
                    </h3>
                    <p className="text-on-surface-variant">
                      {mission.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
