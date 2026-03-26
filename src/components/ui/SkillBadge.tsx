interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="inline-block px-4 py-2 rounded-lg bg-bg-tertiary text-text-primary text-sm border border-bg-tertiary hover:border-accent/30 hover:text-accent transition-all duration-300 cursor-default">
      {skill}
    </span>
  );
}
