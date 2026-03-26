import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function NavbarNew() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top nav - visible before scroll */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="flex items-start justify-between px-6 md:px-12 lg:px-16 pt-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-text-primary flex items-center justify-center text-bg-primary text-xs font-bold">
              JB
            </div>
            <span className="text-sm text-text-secondary hidden sm:inline">
              coded by Jordan
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-text-primary hover:text-accent transition-colors"
              >
                {link.label}
                {link.label === "Contact" && <span className="text-xs ml-1">↗</span>}
              </a>
            ))}
          </div>

          {/* Mobile only contact link */}
          <a
            href="#contact"
            className="md:hidden text-sm text-text-primary hover:text-accent transition-colors flex items-center gap-1"
          >
            Contact <span className="text-xs">↗</span>
          </a>
        </div>
      </nav>

      {/* MENU button - visible after scroll */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`fixed top-6 right-6 md:right-12 z-[60] px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-500 ${
          scrolled
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } ${
          menuOpen
            ? "bg-text-primary text-bg-primary"
            : "bg-bg-primary text-text-primary border border-border shadow-lg"
        }`}
      >
        {menuOpen ? "CLOSE" : "MENU"}
      </button>

      {/* Fullscreen menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-bg-primary flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-4xl md:text-6xl font-bold text-text-primary hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
