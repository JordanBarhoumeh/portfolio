import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { about, name, title, company } from "../../data/profile";

gsap.registerPlugin(ScrollTrigger);

export default function AboutNew() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const paragraphs = textRef.current.querySelectorAll("p");
    gsap.fromTo(
      paragraphs,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
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
      id="about"
      className="relative bg-bg-dark text-text-light py-32 px-6 md:px-12 lg:px-16"
    >
      {/* Floating circle CTA */}
      <div className="absolute top-12 right-12 w-40 h-40 rounded-full bg-accent-red flex items-center justify-center text-white text-sm font-medium cursor-pointer hover:scale-105 transition-transform duration-300 hidden lg:flex">
        About me
      </div>

      <div className="max-w-4xl">
        <h2 className="text-sm uppercase tracking-widest text-text-light-secondary mb-8">
          About
        </h2>
        <div ref={textRef}>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
            {name}
          </p>
          <p className="text-lg md:text-xl text-text-light-secondary leading-relaxed mb-4">
            {title} at {company}
          </p>
          {about.split("\n\n").map((para, i) => (
            <p
              key={i}
              className="text-base md:text-lg text-text-light-secondary leading-relaxed mb-4"
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
