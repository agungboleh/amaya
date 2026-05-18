import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import ProjectHero from "@/components/project-detail/ProjectHero";
import ProjectOverview from "@/components/project-detail/ProjectOverview";
import ProjectBackground from "@/components/project-detail/ProjectBackground";
import ProjectSolution from "@/components/project-detail/ProjectSolution";
import MoreProjects from "@/components/sections/MoreProjects";

export default function MeadJohnsonPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectHero
          client="PT Mead Johnson Indonesia"
          title="Enterprise Retail & CRM Ecosystem"
          description="Comprehensive digital transformation for large-scale retail operations of PT Mead Johnson Indonesia, integrating real-time data with artificial intelligence for maximum efficiency."
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCU9GiIq7b2z1eCM6Sjrzg8dZ7Fp7nFX2Xm1LUwhfZy9o9ICO02hZK8QC93kuu1QeniFYgm3LAevNV_2hmkPvnUFvQDgbr-EQ8fKQ9E19DYJ8I6G8sILZWOSC5ERiPcc7UCN58NasXgMU7Uy9u7WxzhcEPCj37xxf-j-NKJMWPt4pePfUBZ6aIykLPPrXxUuoj2UCe1F2O12olryhdlvPTviBhkOA-MQqa-gdmNKXVvnXIAbSAVBbvVgqPSjb3PVAGAf5-_mSCZtau7"
          imageAlt="Dashboard Interface"
        />

        <ProjectOverview>
          Amaya Perdana Kreasindo led an ambitious digital transformation for{" "}
          <strong>PT Mead Johnson Indonesia</strong> as a global FMCG market
          leader. This project re-engineered data and customer interactions
          across Indonesia, creating a single source of truth for instant
          strategic decisions and personalized shopping experiences for millions
          of loyal consumers.
        </ProjectOverview>

        <ProjectBackground
          title="Background: Legacy System Constraints"
          description="Before this collaboration, PT Mead Johnson Indonesia operated with fragmented legacy systems and separate databases, causing operational inefficiencies and inventory data that wasn't synchronized in real-time. Dependency on manual reports hindered rapid market response."
          problems={[
            {
              icon: "history",
              title: "Legacy Systems",
              description:
                "Outdated technology no longer capable of supporting modern data volumes.",
            },
            {
              icon: "dangerous",
              title: "Human Error",
              description:
                "High risk of errors due to dependency on manual input.",
            },
          ]}
        />

        <ProjectSolution
          title="Solution: Microservices Ecosystem & AI"
          description="We implemented a robust microservices architecture for PT Mead Johnson Indonesia that integrates stock management, customer profiles, and analytics through modern APIs. An AI layer was added for accurate demand forecasting, while a smooth transition was ensured through intensive training for all operational staff."
          solutions={[
            { icon: "hub", label: "Unified API" },
            { icon: "psychology", label: "AI Prediction" },
            { icon: "cloud", label: "Cloud Native" },
            { icon: "security", label: "Data Secure" },
          ]}
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBpnw7lfNnZLEJ0WZ8L28f7eDRCham8y47rvG9fj3-z5hRZ1oP94BdI5oFm_6t9qzcyTCF3RWtwdycsPyYVQ1G1cY-tciKw02cfObMNrJYhJvRKcTp4bXtw7cCJ52auYzt3FUsPIko8rbb3OJougUJi1YZomfiun2s9IA4mAYuVEGbtt44jxaHCVfwFGvNKnJNJZolShfsoZNKMkOxKKJSKkpMasKPpjjC5dUaPpR7LG4fgPtmJDMWRxoFgc71A9y68fRRnER0SHRfc"
          imageAlt="Implementation"
          imagePosition="right"
        />

        <MoreProjects excludeId="mead-johnson" />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
