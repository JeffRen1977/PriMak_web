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
  gradient?: boolean;
};

export default function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  compact,
  showDashboard,
  gradient,
}: HeroProps) {
  return (
    <section
      className={`section-vision relative overflow-hidden ${compact ? "py-16 lg:py-20" : "py-20 lg:py-28"}`}
    >
      <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-velocity-teal/[0.08] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`grid gap-12 ${showDashboard ? "lg:grid-cols-2 lg:items-center" : ""}`}>
          <div className={showDashboard ? "" : "max-w-4xl"}>
            {eyebrow && <p className="cockpit-eyebrow mb-4">{eyebrow}</p>}
            <h1 className={`max-w-4xl ${gradient ? "cockpit-title-gradient" : "cockpit-title-xl"}`}>
              {title}
            </h1>
            <p className="mt-6 max-w-2xl cockpit-body text-base lg:text-lg">{subtitle}</p>
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
