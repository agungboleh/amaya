import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import ProjectHero from "@/components/project-detail/ProjectHero";
import ProjectOverview from "@/components/project-detail/ProjectOverview";
import ProjectBackground from "@/components/project-detail/ProjectBackground";
import ProjectSolution from "@/components/project-detail/ProjectSolution";
import MoreProjects from "@/components/sections/MoreProjects";

export default function KorindoGroupPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectHero
          client="Korindo Group"
          title="Enterprise Plantation Management System"
          description="Digitizing end-to-end plantation operations with a highly resilient digital ecosystem for real-time monitoring and logistics."
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBL4HAX4ZZveMaKB6HIdJZBEPB5XDIxW9IhOOAmJG2bmoC20n72wi6id7F4f8SIJ92zgbIr4dNzNDc8RdANSm4trt298HL6b7BkuLB6s2rj4LkWr5YkSOmKwGzX2ggyDkFmHgxIEdPidAg1ATrBOsHldhctCTYhWY5FgLPKlDcBhEIXx3JTFUL7pIaog7PormNp8W7Eq3cOoUKcRptKmvUVZvufyjglzj4WyqoCl8jbE6B3aAI5LfF_J4D2EJRxWWVKf7KeD06mSL8m"
          imageAlt="Agricultural Technology Interface"
        />

        <ProjectOverview>
          Korindo Group manages extensive plantation land in remote locations.
          Their main challenge was geographic isolation causing frequent delays
          in operational data transmission, along with system fragmentation
          that complicated centralized logistics management and inventory
          monitoring.
        </ProjectOverview>

        <ProjectBackground
          title="Background: Isolation & Fragmentation"
          description="Before this collaboration, plantation sites far from stable signal coverage caused reporting delays of up to several days. The central team often lacked accurate data on real-time harvest yields and logistics fleet movements, causing significant operational cost inefficiencies."
          problems={[
            {
              icon: "signal_cellular_off",
              title: "Geographic Isolation",
              description:
                "Remote locations with limited communication infrastructure hindered daily operational data flow from the field to headquarters in a timely manner.",
            },
            {
              icon: "settings_input_component",
              title: "Legacy Silos",
              description:
                "Non-integrated systems across departments caused data duplication and difficulties in conducting comprehensive inventory and logistics audits.",
            },
          ]}
        />

        <ProjectSolution
          title="Solution: Modern Architecture & Offline-First"
          description="We designed a modern microservices architecture with offline-first capability, enabling automatic data synchronization when connectivity is available. Satellite telemetry data integration was used to monitor assets in blank spot areas, providing full visibility across the entire supply chain."
          solutions={[
            { icon: "settings_remote", label: "Satellite Link" },
            { icon: "sync_disabled", label: "Offline First" },
            { icon: "grid_view", label: "Microservices" },
            { icon: "monitoring", label: "Real-time BI" },
          ]}
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBP9ZC4NwGDGIadET8FtMMzGsAdXLEP7U8D55kFkcIeMOv2gSh7dP17m1SdgitQReiVcp2vC4LNoxk97P_zti---OCi6qVYy6JhKQEFg1naNRIQMbGFWSkm5UPhQPrUIqQlh4bEodZpMZoCJKUVUAxE5SqT-mREpvp5DcuRTXRf_JUybhpble-aH8A_MWKRsunQiVMc_XHmpaB-D2OKtjHTb50uxaMsC6pu5TIpqbZCmw5RXZdYXdSu1Twm9lis47mcmLI2SrcpACna"
          imageAlt="Server Infrastructure for Plantation Management"
          imagePosition="right"
        />

        <MoreProjects excludeId="korindo-group" />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
