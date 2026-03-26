interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-text-primary to-accent bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-lg">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-accent" />
    </div>
  );
}
