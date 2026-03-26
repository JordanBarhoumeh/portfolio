import { FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import { socialLinks } from "../../data/profile";

const links = [
  { icon: FiLinkedin, label: "LinkedIn", href: socialLinks.linkedin, desc: "Connect with me" },
  { icon: FiMail, label: "Email", href: socialLinks.email, desc: "Send me a message" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 relative">
      {/* Decorative gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <SectionHeading title="Let's Connect" subtitle="I'm always open to new opportunities and conversations" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid sm:grid-cols-2 gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-xl border border-bg-tertiary bg-bg-secondary hover:border-accent/30 hover:shadow-[0_0_30px_var(--color-accent-glow)] transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-accent-glow text-accent group-hover:bg-accent/20 transition-colors duration-300">
                  <link.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-text-primary group-hover:text-accent transition-colors duration-300">
                    {link.label}
                  </p>
                  <p className="text-sm text-text-secondary">{link.desc}</p>
                </div>
                <FiArrowRight className="w-5 h-5 text-text-secondary group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
