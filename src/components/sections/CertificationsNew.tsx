import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { certifications } from "../../data/profile";

gsap.registerPlugin(ScrollTrigger);

export default function CertificationsNew() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const items = sectionRef.current.querySelectorAll(".cert-item");
    gsap.fromTo(
      items,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.5,
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
        Certifications
      </h2>
      <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16">
        Credentials
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <div
            key={i}
            className="cert-item p-6 rounded-2xl border border-border hover:border-accent/50 transition-colors duration-200"
          >
            <p className="text-xs text-text-secondary mb-2">{cert.date}</p>
            <h3 className="font-semibold mb-1">{cert.name}</h3>
            <p className="text-sm text-text-secondary">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
