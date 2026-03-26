import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { heroLines, heroSubline } from "../../data/profile";

gsap.registerPlugin(ScrollTrigger);

function getRandomSpeed() {
  return 0.8 + Math.random() * 0.7;
}

function getRandomRotation() {
  return Math.random() * 60 - 30;
}

function LetterDisplay({ word }: { word: string }) {
  return (
    <>
      {word.split("").map((char, i) => (
        <div
          key={i}
          className="letter text-[clamp(3rem,12vw,10rem)]"
          data-speed={getRandomSpeed()}
        >
          {char === " " ? "\u00A0" : char}
        </div>
      ))}
    </>
  );
}

export default function LetterExplosion() {
  const ref = useRef<HTMLDivElement>(null);
  const sublineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const letters = ref.current.querySelectorAll<HTMLElement>(".letter");
    const tweens: gsap.core.Tween[] = [];

    letters.forEach((letter) => {
      const speed = parseFloat(letter.dataset.speed || "1");
      const tween = gsap.to(letter, {
        y: (1 - speed) * ScrollTrigger.maxScroll(window),
        rotation: getRandomRotation(),
        ease: "power2.out",
        duration: 0.8,
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          end: window.innerHeight,
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });
      tweens.push(tween);
    });

    if (sublineRef.current) {
      gsap.to(sublineRef.current, {
        opacity: 0,
        y: -30,
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          end: window.innerHeight * 0.3,
          scrub: 0.3,
        },
      });
    }

    return () => {
      tweens.forEach((t) => t.scrollTrigger?.kill());
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen bg-bg-primary">
      {/* Floating accent dot */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-accent z-10 pointer-events-none" />

      <div ref={ref} className="px-6 md:px-12 lg:px-16">
        <div className="flex min-h-screen flex-col justify-end pb-24">
          {heroLines.map((line, lineIdx) => (
            <div key={lineIdx} className="flex flex-wrap">
              {line.map((word, wordIdx) => (
                <span key={wordIdx} className="flex">
                  <LetterDisplay word={word} />
                  {wordIdx < line.length - 1 && (
                    <div className="w-4 sm:w-8 md:w-12" />
                  )}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Subline and scroll indicator */}
      <div
        ref={sublineRef}
        className="absolute bottom-8 left-0 right-0 flex items-end justify-between px-6 md:px-12 lg:px-16"
      >
        <p className="text-sm md:text-base text-text-secondary max-w-xs">
          {heroSubline}
        </p>
        <p className="text-sm text-text-secondary flex items-center gap-2">
          Scroll <span className="text-lg">↘</span>
        </p>
      </div>
    </section>
  );
}
