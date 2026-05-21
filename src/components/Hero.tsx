import { Link } from "react-router-dom";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  compact?: boolean;
};

export default function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  compact,
}: HeroProps) {
  return (
    <section
      className={`relative overflow-hidden bg-white ${
        compact ? "py-20 lg:py-24" : "py-24 lg:py-32"
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-teal-500/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,21,41,.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,21,41,.06) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {eyebrow && (
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-teal-600">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-4xl font-display text-4xl leading-tight text-navy-900 sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 lg:text-xl">
          {subtitle}
        </p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-wrap gap-4">
            {primaryCta && (
              <Link
                to={primaryCta.to}
                className="rounded-lg bg-gradient-to-r from-cyan-500 to-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-cyan-400 hover:to-teal-500"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                to={secondaryCta.to}
                className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-medium text-navy-900 transition hover:border-teal-500 hover:bg-slate-50"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
