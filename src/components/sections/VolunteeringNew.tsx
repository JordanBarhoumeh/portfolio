import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { volunteering } from "../../data/profile";

gsap.registerPlugin(ScrollTrigger);

export default function VolunteeringNew() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const items = sectionRef.current.querySelectorAll(".vol-item");
    gsap.fromTo(
      items,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
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
      className="py-32 px-6 md:px-12 lg:px-16 bg-bg-primary"
    >
      <h2 className="text-sm uppercase tracking-widest text-text-secondary mb-4">
        Volunteering
      </h2>
      <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16">
        Community impact
      </p>

      <div className="space-y-0">
        {volunteering.map((vol, i) => (
          <div
            key={i}
            className="vol-item border-t border-border py-8 flex flex-col md:flex-row md:items-start gap-4 md:gap-12"
          >
            <div className="md:w-48 shrink-0">
              <p className="text-sm text-text-secondary">
                {vol.startDate} – {vol.endDate}
              </p>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{vol.role}</h3>
              <p className="text-text-secondary mt-1">{vol.organization}</p>
              <p className="text-sm text-text-secondary mt-3 leading-relaxed">
                {vol.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
