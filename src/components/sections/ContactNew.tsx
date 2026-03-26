import { socialLinks } from "../../data/profile";

export default function ContactNew() {
  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-12 lg:px-16 bg-bg-primary border-t border-border"
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
        <div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Let's work
            <br />
            together!
          </h2>
        </div>

        <a
          href={socialLinks.email}
          className="w-44 h-44 rounded-full bg-accent flex items-center justify-center text-white text-sm font-medium hover:scale-105 transition-transform duration-300 shrink-0"
        >
          Get in touch
        </a>
      </div>

      <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <a
          href={socialLinks.email}
          className="text-text-secondary hover:text-text-primary transition-colors border-b border-text-secondary pb-0.5"
        >
          {socialLinks.email.replace("mailto:", "")}
        </a>
        <div className="flex gap-6">
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
