import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import SkillBadge from "../ui/SkillBadge";
import { skillGroups } from "../../data/profile";

const topSkills = [
  { name: "Python", level: 90 },
  { name: "Machine Learning", level: 85 },
  { name: "Data Analysis", level: 88 },
  { name: "Generative AI", level: 80 },
  { name: "SQL", level: 82 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <SectionHeading title="Skills" subtitle="Technologies & tools I work with" />
        </AnimatedSection>

        {/* Top skills with proficiency bars */}
        <AnimatedSection delay={0.1}>
          <div className="mb-12 rounded-xl border border-bg-tertiary bg-bg-secondary p-6">
            <h3 className="text-lg font-semibold text-accent mb-6">Core Proficiencies</h3>
            <div className="space-y-4">
              {topSkills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-medium text-text-primary">{skill.name}</span>
                    <span className="text-xs text-text-secondary">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-bg-tertiary overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-accent-muted"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Skill groups */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, i) => (
            <AnimatedSection key={group.category} delay={0.2 + i * 0.1}>
              <div className="rounded-xl border border-bg-tertiary bg-bg-secondary p-6">
                <h3 className="text-lg font-semibold text-accent mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
