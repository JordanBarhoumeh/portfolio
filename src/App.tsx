import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/ui/ScrollProgress";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Certifications from "./components/sections/Certifications";
import Volunteering from "./components/sections/Volunteering";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Volunteering />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
