import { FiBriefcase, FiAward, FiBookOpen } from "react-icons/fi";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import { about } from "../../data/profile";

const stats = [
  { icon: FiBriefcase, label: "ML Experience", value: "1+ Years" },
  { icon: FiAward, label: "Certifications", value: "10+" },
  { icon: FiBookOpen, label: "University", value: "Macquarie" },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <SectionHeading title="About Me" />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Bio */}
          <AnimatedSection className="md:col-span-2" delay={0.1}>
            <div className="space-y-4">
              {about.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-text-secondary leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-bg-secondary border border-bg-tertiary hover:border-accent/30 transition-colors duration-300"
                >
                  <div className="p-2.5 rounded-lg bg-accent-glow text-accent">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-text-primary">{stat.value}</p>
                    <p className="text-sm text-text-secondary">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
