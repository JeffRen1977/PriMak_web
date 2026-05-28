type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  variant?: "dark" | "audit";
  aligned?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered,
  variant = "dark",
  aligned,
}: SectionHeadingProps) {
  const isAudit = variant === "audit";
  const wrapperClass = centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl";
  const titleClass = isAudit ? "cockpit-title-audit" : "cockpit-title";
  const bodyClass = isAudit ? "cockpit-body-audit mt-4 text-base lg:text-lg" : "cockpit-body mt-4 text-base lg:text-lg";

  const content = (
    <>
      {eyebrow && (
        <p className={`cockpit-eyebrow mb-3 ${isAudit ? "!text-sovereign-navy/70" : ""}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={titleClass}>{title}</h2>
      {subtitle && <p className={bodyClass}>{subtitle}</p>}
      <div className={`cockpit-divider mt-6 ${centered ? "mx-auto max-w-xs" : "max-w-xs"} ${isAudit ? "via-sovereign-navy/20" : ""}`} />
    </>
  );

  if (aligned && !centered) {
    return <header className={`alignment-indicator ${wrapperClass}`}>{content}</header>;
  }

  return <header className={wrapperClass}>{content}</header>;
}
