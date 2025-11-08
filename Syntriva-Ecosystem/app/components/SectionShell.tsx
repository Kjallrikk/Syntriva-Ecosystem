interface SectionShellProps {
  title: string;
  kicker?: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function SectionShell({
  title,
  kicker,
  subtitle,
  children
}: SectionShellProps) {
  return (
    <section className="space-y-8">
      <header className="space-y-2">
        {kicker && (
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-syntrivaAccent">
            {kicker}
          </p>
        )}
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm md:text-base text-slate-400 max-w-2xl">
            {subtitle}
          </p>
        )}
      </header>
      {children}
    </section>
  );
}
