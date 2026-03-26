import { FiBookOpen, FiBriefcase } from "react-icons/fi";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import TimelineItem from "../ui/TimelineItem";
import { experiences, education } from "../../data/profile";

export default function Experience() {
  // Group News Corp roles together
  const newsCorpRoles = experiences.filter((e) => e.company === "News Corp Australia");
  const otherRoles = experiences.filter((e) => e.company !== "News Corp Australia");

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <SectionHeading title="Experience" subtitle="My professional journey" />
        </AnimatedSection>

        {/* News Corp grouped */}
        <AnimatedSection delay={0.1}>
          <div className="mb-8 rounded-xl border border-bg-tertiary bg-bg-secondary p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg bg-accent-glow text-accent">
                <FiBriefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary">News Corp Australia</h3>
                <p className="text-sm text-text-secondary">
                  {newsCorpRoles[newsCorpRoles.length - 1]?.startDate} – {newsCorpRoles[0]?.endDate}
                </p>
              </div>
            </div>
            {newsCorpRoles.map((exp, i) => (
              <TimelineItem
                key={`${exp.role}-${i}`}
                title={exp.role}
                subtitle={`${exp.startDate} – ${exp.endDate}`}
                date=""
                badge={exp.type}
                description={exp.description}
                isLast={i === newsCorpRoles.length - 1}
              />
            ))}
          </div>
        </AnimatedSection>

        {/* Other roles */}
        <AnimatedSection delay={0.2}>
          <div className="mb-12">
            {otherRoles.map((exp, i) => (
              <TimelineItem
                key={`${exp.company}-${exp.role}-${i}`}
                title={exp.role}
                subtitle={exp.company}
                date={`${exp.startDate} – ${exp.endDate}`}
                badge={exp.type}
                description={exp.description}
                isLast={i === otherRoles.length - 1}
              />
            ))}
          </div>
        </AnimatedSection>

        {/* Education */}
        <AnimatedSection delay={0.3}>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-accent-glow text-accent">
              <FiBookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-text-primary">Education</h3>
          </div>
          <div className="rounded-xl border border-bg-tertiary bg-bg-secondary p-6">
            <p className="text-sm text-text-secondary mb-1">
              {education.startDate} – {education.endDate}
            </p>
            <h4 className="text-lg font-semibold text-text-primary">{education.degree}</h4>
            <p className="text-text-secondary">{education.institution}</p>
            {education.skills && (
              <div className="flex flex-wrap gap-2 mt-3">
                {education.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-full bg-accent-glow text-accent border border-accent/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
