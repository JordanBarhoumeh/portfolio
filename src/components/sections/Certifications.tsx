import { FiAward } from "react-icons/fi";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import { certifications } from "../../data/profile";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <SectionHeading title="Certifications" subtitle="Continuous learning & development" />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <AnimatedSection key={cert.name} delay={i * 0.05}>
              <div className="group rounded-xl border border-bg-tertiary bg-bg-secondary p-5 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_20px_var(--color-accent-glow)] hover:-translate-y-1">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-accent-glow text-accent shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                    <FiAward className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors duration-300 leading-tight">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-text-secondary mt-1">{cert.issuer}</p>
                    <p className="text-xs text-text-secondary/70 mt-0.5">{cert.date}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
