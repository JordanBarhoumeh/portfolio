import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences, education } from "../../data/profile";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceNew() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const items = sectionRef.current.querySelectorAll(".exp-item");
    gsap.fromTo(
      items,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-32 px-6 md:px-12 lg:px-16 bg-bg-primary"
    >
      <h2 className="text-sm uppercase tracking-widest text-text-secondary mb-4">
        Experience
      </h2>
      <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16">
        Where I've worked
      </p>

      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="exp-item group border-t border-border py-8 flex flex-col md:flex-row md:items-start gap-4 md:gap-12"
          >
            <div className="md:w-48 shrink-0">
              <p className="text-sm text-text-secondary">
                {exp.startDate} – {exp.endDate}
              </p>
              <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full border border-border text-text-secondary">
                {exp.type}
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                {exp.role}
              </h3>
              <p className="text-text-secondary mt-1">{exp.company}</p>
              {exp.description && (
                <p className="text-sm text-text-secondary mt-3 leading-relaxed">
                  {exp.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24">
        <h2 className="text-sm uppercase tracking-widest text-text-secondary mb-4">
          Education
        </h2>
        <div className="border-t border-border py-8">
          <p className="text-sm text-text-secondary">
            {education.startDate} – {education.endDate}
          </p>
          <h3 className="text-xl font-semibold mt-2">{education.degree}</h3>
          <p className="text-text-secondary mt-1">{education.institution}</p>
          {education.skills && (
            <div className="flex flex-wrap gap-2 mt-4">
              {education.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1 rounded-full border border-border text-text-secondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
