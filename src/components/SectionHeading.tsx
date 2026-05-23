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
    <header className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="cockpit-eyebrow mb-3">{eyebrow}</p>}
      <h2 className="cockpit-title">{title}</h2>
      {subtitle && <p className="cockpit-body mt-4 text-base lg:text-lg">{subtitle}</p>}
      <div className={`cockpit-divider mt-6 ${centered ? "mx-auto max-w-xs" : "max-w-xs"}`} />
    </header>
  );
}
