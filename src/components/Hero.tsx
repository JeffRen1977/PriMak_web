import { Link } from "react-router-dom";
import CockpitDashboard from "./CockpitDashboard";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  compact?: boolean;
  showDashboard?: boolean;
};

export default function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  compact,
  showDashboard,
}: HeroProps) {
  return (
    <section
      className={`relative overflow-hidden ${compact ? "py-16 lg:py-20" : "py-20 lg:py-28"}`}
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`grid gap-12 ${showDashboard ? "lg:grid-cols-2 lg:items-center" : ""}`}>
          <div>
            {eyebrow && <p className="cockpit-eyebrow mb-4">{eyebrow}</p>}
            <h1 className="max-w-4xl cockpit-title-xl cockpit-glow-text">{title}</h1>
            <p className="mt-6 max-w-2xl cockpit-body text-base lg:text-lg">
              {subtitle}
            </p>
            {(primaryCta || secondaryCta) && (
              <div className="mt-10 flex flex-wrap gap-4">
                {primaryCta && (
                  <Link to={primaryCta.to} className="btn-cockpit-primary">
                    {primaryCta.label}
                  </Link>
                )}
                {secondaryCta && (
                  <Link to={secondaryCta.to} className="btn-cockpit-ghost">
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            )}
          </div>
          {showDashboard && (
            <aside className="hidden lg:block">
              <CockpitDashboard />
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}
