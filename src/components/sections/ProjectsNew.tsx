import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../../data/profile";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsNew() {
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".project-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
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
      id="projects"
      className="py-32 px-6 md:px-12 lg:px-16 bg-bg-primary"
    >
      <div className="flex items-end justify-between mb-16">
        <div>
          <h2 className="text-sm uppercase tracking-widest text-text-secondary mb-4">
            Projects
          </h2>
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Selected work
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="project-card group cursor-pointer"
            onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 mb-6 overflow-hidden flex items-center justify-center relative group-hover:shadow-xl transition-shadow duration-300">
              <div className="text-center p-8">
                <p className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
                  {project.title}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-white/80 text-text-secondary border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-text-secondary">{project.date}</p>
                {project.association && (
                  <p className="text-sm text-text-secondary italic mt-1">
                    {project.association}
                  </p>
                )}
              </div>
              <span className="text-2xl text-text-secondary group-hover:text-accent transition-colors">
                ↗
              </span>
            </div>

            {expandedIdx === i && (
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-text-secondary mb-4">
                  {project.description}
                </p>
                {project.fullDescription.split("\n\n").map((para, j) => (
                  <p key={j} className="text-sm text-text-secondary mb-2">
                    {para}
                  </p>
                ))}
                {project.highlights.length > 0 && (
                  <ul className="mt-4 space-y-1">
                    {project.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-sm text-text-secondary flex items-start gap-2"
                      >
                        <span className="text-accent mt-0.5">▸</span> {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
