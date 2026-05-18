import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import ProjectHero from "@/components/project-detail/ProjectHero";
import ProjectOverview from "@/components/project-detail/ProjectOverview";
import ProjectBackground from "@/components/project-detail/ProjectBackground";
import ProjectSolution from "@/components/project-detail/ProjectSolution";
import MoreProjects from "@/components/sections/MoreProjects";

export default function JtiPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectHero
          client="Japan Tobacco International"
          industry="FMCG / Multinational"
          title="Field Force Management & CRM"
          description="Empowering field representatives with a robust Android application for real-time sales tracking, advanced CRM data collection, and strict geolocation auditing."
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAlzcGYtQZOTNjfST5cTNCEL0F5VcVyeTQndedRsZf-2OxJAi_Lelji239JjxX0MEkjoYSNVoU137BXt_-MOJdqlIMuBrZq3z9VKAsyg3J8OH_psdxDyGbJ5Z5RNsQ0WV8qB5cKUUX-1Y4_Z1H6GbzDJo0iumIpuBYxyCN8urL6MuZaeEgNUT269RKTX0Or9xOPFAOhQud6Pc4BjdaC9NyckBT-Ntj-yAkNfhw_UQdDd7zstk9NxU9s7toiZbOLyU10H3lYMKG5EDpC"
          imageAlt="Field Force Management Dashboard"
        />

        <ProjectOverview>
          Japan Tobacco International required a robust digital solution to
          empower their field representatives across Indonesia. The challenge
          was to enable real-time sales tracking, advanced CRM data collection,
          and strict geolocation auditing — all while functioning reliably in
          areas with limited connectivity.
        </ProjectOverview>

        <ProjectBackground
          title="Background: Field Force Challenges"
          description="JTI's field representatives operated across diverse Indonesian territories, many with unreliable internet access. Manual reporting processes led to data delays, while lack of real-time visibility made it difficult to audit field activities and prevent fraudulent reporting."
          problems={[
            {
              icon: "signal_wifi_off",
              title: "Connectivity Issues",
              description:
                "Field representatives operating in areas with limited or no internet connectivity, causing data sync delays.",
            },
            {
              icon: "gps_off",
              title: "Tracking Gaps",
              description:
                "Inability to verify representative locations and activities in real-time led to reporting inaccuracies.",
            },
          ]}
        />

        <ProjectSolution
          title="Solution: Offline-First Mobile Platform"
          description="We engineered a robust Android application with offline-first architecture, enabling field representatives to continue working without internet connectivity. The app features advanced fraud prevention through real-time geolocation tracking, automatic data synchronization when connectivity is restored, and a comprehensive CRM module for client management."
          solutions={[
            { icon: "android", label: "Android Native" },
            { icon: "cloud_off", label: "Offline-First" },
            { icon: "location_on", label: "Geolocation" },
            { icon: "verified_user", label: "Fraud Prevention" },
          ]}
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAlzcGYtQZOTNjfST5cTNCEL0F5VcVyeTQndedRsZf-2OxJAi_Lelji239JjxX0MEkjoYSNVoU137BXt_-MOJdqlIMuBrZq3z9VKAsyg3J8OH_psdxDyGbJ5Z5RNsQ0WV8qB5cKUUX-1Y4_Z1H6GbzDJo0iumIpuBYxyCN8urL6MuZaeEgNUT269RKTX0Or9xOPFAOhQud6Pc4BjdaC9NyckBT-Ntj-yAkNfhw_UQdDd7zstk9NxU9s7toiZbOLyU10H3lYMKG5EDpC"
          imageAlt="Field Force Mobile Application"
          imagePosition="right"
        />

        <MoreProjects excludeId="jti" />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
