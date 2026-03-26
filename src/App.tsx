import NavbarNew from "./components/layout/NavbarNew";
import FooterNew from "./components/layout/FooterNew";
import LetterExplosion from "./components/sections/LetterExplosion";
import AboutNew from "./components/sections/AboutNew";
import ExperienceNew from "./components/sections/ExperienceNew";
import ProjectsNew from "./components/sections/ProjectsNew";
import SkillsNew from "./components/sections/SkillsNew";
import CertificationsNew from "./components/sections/CertificationsNew";
import VolunteeringNew from "./components/sections/VolunteeringNew";
import ContactNew from "./components/sections/ContactNew";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <NavbarNew />
      <main>
        <LetterExplosion />
        <AboutNew />
        <ProjectsNew />
        <ExperienceNew />
        <SkillsNew />
        <CertificationsNew />
        <VolunteeringNew />
        <ContactNew />
      </main>
      <FooterNew />
    </div>
  );
}
