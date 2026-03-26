import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillGroups } from "../../data/profile";

gsap.registerPlugin(ScrollTrigger);

export default function SkillsNew() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const badges = sectionRef.current.querySelectorAll(".skill-badge");
    gsap.fromTo(
      badges,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.02,
        duration: 0.4,
        ease: "back.out(1.7)",
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
      id="skills"
      className="py-32 px-6 md:px-12 lg:px-16 bg-bg-dark text-text-light"
    >
      <h2 className="text-sm uppercase tracking-widest text-text-light-secondary mb-4">
        Skills
      </h2>
      <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16">
        Tools & technologies
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="text-lg font-semibold text-text-light mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="skill-badge text-sm px-4 py-2 rounded-full border border-text-light-secondary/30 text-text-light-secondary hover:border-accent hover:text-accent transition-colors duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
