type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-600">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl text-navy-900 sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-slate-600 lg:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
