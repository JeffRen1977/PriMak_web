import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
};

export default function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  const modId = index !== undefined ? `MOD-${String(index + 1).padStart(2, "0")}` : null;

  return (
    <article className="group cockpit-panel transition hover:border-teal-400/40 hover:shadow-md">
      <header className="cockpit-panel-label flex items-center justify-between">
        <span>{modId ?? "MODULE"}</span>
        <span className="text-signal">ACTIVE</span>
      </header>
      <section className="p-6">
        <div className="mb-4 flex h-10 w-10 items-center justify-center border border-teal-500/25 bg-teal-50 text-teal-700 transition group-hover:border-teal-500/50 group-hover:bg-teal-100">
          {icon}
        </div>
        <h3 className="font-display text-base font-semibold text-navy-950">{title}</h3>
        <p className="cockpit-body mt-3 text-sm">{description}</p>
      </section>
    </article>
  );
}
