import { FiHeart } from "react-icons/fi";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import { volunteering } from "../../data/profile";

export default function Volunteering() {
  return (
    <section id="volunteering" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <SectionHeading title="Volunteering" subtitle="Community leadership & impact" />
        </AnimatedSection>

        <div className="space-y-6">
          {volunteering.map((vol, i) => (
            <AnimatedSection key={vol.role} delay={i * 0.1}>
              <div className="group rounded-xl border border-bg-tertiary bg-bg-secondary p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_20px_var(--color-accent-glow)]">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-accent-glow text-accent shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                    <FiHeart className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors duration-300">
                        {vol.role}
                      </h3>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-accent-glow text-accent border border-accent/20 w-fit">
                        {vol.startDate} – {vol.endDate}
                      </span>
                    </div>
                    <p className="text-sm text-accent mb-2">{vol.organization}</p>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {vol.description}
                    </p>
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
