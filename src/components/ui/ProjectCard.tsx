import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import type { Project } from "../../data/profile";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group rounded-xl border border-bg-tertiary bg-bg-secondary p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_30px_var(--color-accent-glow)]">
      <p className="text-sm text-accent mb-2">{project.date}</p>
      <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
        {project.title}
      </h3>
      {project.association && (
        <p className="text-sm text-text-secondary mb-3 italic">
          {project.association}
        </p>
      )}

      {/* Description */}
      <p className="text-text-secondary text-sm leading-relaxed mb-3">
        {project.description}
      </p>

      {/* Expandable full description */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border-t border-bg-tertiary pt-3 mb-3">
              {project.fullDescription.split("\n\n").map((para, i) => (
                <p key={i} className="text-text-secondary text-sm leading-relaxed mb-2">
                  {para}
                </p>
              ))}
            </div>

            {/* Highlights */}
            {project.highlights.length > 0 && (
              <div className="mb-3">
                <p className="text-xs font-semibold text-accent mb-2 uppercase tracking-wider">Key Highlights</p>
                <ul className="space-y-1">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                      <span className="text-accent mt-1 shrink-0">▹</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Read more toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1 text-sm text-accent hover:text-accent-muted transition-colors duration-200 mb-4"
      >
        {expanded ? "Show less" : "Read more"}
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FiChevronDown className="w-4 h-4" />
        </motion.span>
      </button>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full bg-accent-glow text-accent border border-accent/20"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
