import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import ProjectHero from "@/components/project-detail/ProjectHero";
import ProjectOverview from "@/components/project-detail/ProjectOverview";
import ProjectBackground from "@/components/project-detail/ProjectBackground";
import ProjectSolution from "@/components/project-detail/ProjectSolution";
import MoreProjects from "@/components/sections/MoreProjects";

export default function SinarPrapancaPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectHero
          client="Sinar Prapanca"
          industry="Security / Corporate"
          title="Security Workforce Management"
          description="Digitizing physical security operations for a comprehensive mobile platform ensuring guard patrolling and incident reporting efficiency."
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuB318_CMjqr6rlkE_mg05Ek1njKIsyqKpgibwFuLduRDCKoFGDPYDkieN8AP0XdDpRfa5e88UHzYz2bn1C5pLV8FBQgD0hLrllckVCl6uFG5EzW4CQrySHt0iUAJabXjYRj2xWRVEr2wXtunUtZKVx0PXJYHNdVjx2FLE9j-fKZDvDmRZG9Z52DFpbEpT1gONO2Rk7EEo8GJaQgLny-Rdj2BE2ikajQar2Kmr14nr_m-5Gks-sDhMesQg5h-FZbnNb8-v8zfZ8aa-He"
          imageAlt="Security Command Center"
        />

        <ProjectOverview>
          Sinar Prapanca needed a transformation in how they managed their
          security workforce across various client locations. The shift from
          manual reporting systems to an integrated digital platform became key
          to improving accountability and incident response speed in the field.
        </ProjectOverview>

        <ProjectBackground
          title="Background: Operational Efficiency"
          description="Dependence on traditional paper logs caused significant operational blind spots. Management struggled to verify whether officers were actually conducting patrols according to schedule and designated routes, along with slow information flow during emergency incidents."
          problems={[
            {
              icon: "description",
              title: "Paper-based Logs",
              description:
                "Reliance on traditional paper-based logs leading to operational blind spots and difficulty in verifying guard rounds.",
            },
            {
              icon: "visibility_off",
              title: "Blind Spots",
              description:
                "Lack of real-time visibility into field operations made it nearly impossible to audit guard performance effectively.",
            },
          ]}
        />

        <ProjectSolution
          title="Solution: Multi-platform Management System"
          description="We implemented a multi-platform solution focused on real-time GPS tracking, NFC-based checkpoint scanning, and a centralized monitoring dashboard for headquarters. The system enables instant verification of officer presence and activity at every location point."
          solutions={[
            { icon: "location_on", label: "GPS Tracking" },
            { icon: "nfc", label: "NFC Scan" },
            { icon: "dashboard", label: "HQ Dashboard" },
            { icon: "report", label: "Instant Report" },
          ]}
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAZWrsOkCgflh-UIX7g80J_LtAkHMkXgZtkzq0eCnmUrCY1fNTwU1h4njYZLqkOmPEQMg6Zuskk2n4Tkbqf_LsYipS4FHvTe9zcy76bhItqTxUBInKb3ytxcrAxxFGkT00LCxpDANbx-zAdS9uB5yxhmic1Pzubs26lSr59ksZBGhMHofqQJ7BfG76ExUu5N8EqJFn71Krkzp4uUB-DkW3POKUt52n5V8FcXx15NCUNcQBvG7t_nW2QTzr3rB3z7b7KPBzRxaU-drf4"
          imageAlt="Security Guard using mobile app"
          imagePosition="right"
        />

        <MoreProjects excludeId="sinar-prapanca" />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
