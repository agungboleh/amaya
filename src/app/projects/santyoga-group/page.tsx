import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import ProjectHero from "@/components/project-detail/ProjectHero";
import ProjectOverview from "@/components/project-detail/ProjectOverview";
import ProjectBackground from "@/components/project-detail/ProjectBackground";
import ProjectSolution from "@/components/project-detail/ProjectSolution";
import MoreProjects from "@/components/sections/MoreProjects";

export default function SantyogaGroupPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectHero
          client="Santyoga Group"
          title="End-to-End Dealership Ecosystem & AI Integration"
          description="National dealer network transformation through microservices architecture implementation and artificial intelligence (AI) integration to unify sales operations, after-sales service, and inventory management."
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAEfOl3232C-mj91NXrbTGiycbWFH-ld7wlEM39T0hh1zxK0xHVs-6Er8MphmSiVGDdEoRbLmLIPfxJUHHMe8cCyjybvZTy3TItCEayIqb9JuzcBbo0-3ilp1dRTnlrxLaqGSZ0fHK5OeknQKyFLkIAAyohNf3UVbk1nc-QQynRjy-DNUBh_BMvzTXnhyh9pfVuK_FAsLBBLu-iMe3a69l6nyE4TyaoGVUrWf1TwAfmDfQrLNqXRrm8jY3wNVNrERT3qv8R0ctvlLkA"
          imageAlt="Dashboard Interface"
        />

        <ProjectOverview>
          Santyoga Group faced major challenges in managing their rapidly
          growing car dealer network. The use of fragmented legacy systems
          caused inventory synchronization between branches to experience delays
          of up to 24 hours, hampering operational efficiency and customer
          satisfaction.
        </ProjectOverview>

        <ProjectBackground
          title="Background: Inventory Sync & Network"
          description="Before this collaboration, Santyoga Group managed dozens of branches with disconnected systems. Branch teams often sold units already reserved at other branches due to data delays, while after-sales reports had to be processed manually at the end of each month."
          problems={[
            {
              icon: "history",
              title: "Legacy Systems",
              description:
                "Fragmented legacy systems caused inventory sync delays of up to 24 hours between branches, hampering operational efficiency.",
            },
            {
              icon: "dangerous",
              title: "Human Error",
              description:
                "High risk of errors due to dependency on manual input and disconnected data between sales and after-sales departments.",
            },
          ]}
        />

        <ProjectSolution
          title="Solution: Microservices Ecosystem & AI"
          description="We built a centralized platform using microservices connecting every sales point and workshop in real-time. AI modules were integrated to predict spare parts requirements and optimize unit distribution between regions based on local market demand trends."
          solutions={[
            { icon: "hub", label: "Unified API" },
            { icon: "psychology", label: "AI Prediction" },
            { icon: "cloud", label: "Cloud Native" },
            { icon: "security", label: "Data Secure" },
          ]}
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBlyaAEkRF3qjEs8RTJFDjwaKsveHhpwKo3aPkXkeccFjpZs0kprMD3EyllF5oST0a70DMoIH0SEcYQjkBp5O9UBv2HyXs5c50HbzP274v1PaXRVG0-7FRc1x1BUUzspi_0c6wXYJlgrQgl9qc5z6zlKVO-T34JfIDpqWibcCS4pxJRwgvpfi2kABi2lNTRPpguIvN6INVI5jNIjLKnNwmuP_BkelFlw4kyUBEu_ECUT2GhxaAfPYhry5G3xwSuA0i5gytpbr6mUBws"
          imageAlt="Implementation Architecture"
          imagePosition="right"
        />

        <MoreProjects excludeId="santyoga-group" />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
