import { socialLinks } from "../../data/profile";

export default function FooterNew() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-16 bg-bg-dark text-text-light">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col sm:flex-row gap-8 text-sm text-text-light-secondary">
          <div>
            <p className="text-xs uppercase tracking-widest mb-1">Version</p>
            <p>{new Date().getFullYear()} Edition</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest mb-1">Local time</p>
            <p>
              {new Date().toLocaleTimeString("en-AU", {
                timeZone: "Australia/Sydney",
                hour: "2-digit",
                minute: "2-digit",
              })}{" "}
              AEST
            </p>
          </div>
        </div>

        <div className="flex gap-6 text-sm">
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-light-secondary hover:text-text-light transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
