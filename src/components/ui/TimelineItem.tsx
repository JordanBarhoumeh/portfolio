interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  badge?: string;
  description?: string;
  isLast?: boolean;
}

export default function TimelineItem({ title, subtitle, date, badge, description, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-10 group">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] top-3 bottom-0 w-px bg-bg-tertiary group-hover:bg-accent/30 transition-colors duration-300" />
      )}
      {/* Timeline dot */}
      <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full border-2 border-accent bg-bg-primary group-hover:bg-accent transition-colors duration-300" />
      {/* Content */}
      <div>
        <p className="text-sm text-text-secondary mb-1">{date}</p>
        <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-text-secondary">{subtitle}</p>
        {badge && (
          <span className="inline-block mt-2 text-xs px-2.5 py-1 rounded-full bg-accent-glow text-accent border border-accent/20">
            {badge}
          </span>
        )}
        {description && (
          <p className="mt-2 text-sm text-text-secondary leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
