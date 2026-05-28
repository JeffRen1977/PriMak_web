import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
  alert?: boolean;
};

export default function FeatureCard({ icon, title, description, index, alert }: FeatureCardProps) {
  const modId = index !== undefined ? `MOD-${String(index + 1).padStart(2, "0")}` : null;

  return (
    <article className="group cockpit-panel transition hover:border-velocity-teal/30 hover:shadow-[0_0_24px_rgba(0,245,255,0.06)]">
      <header className="cockpit-panel-label flex items-center justify-between">
        <span>{modId ?? "MODULE"}</span>
        <span className={alert ? "metric-alert" : "text-velocity-teal"}>
          {alert ? "PRIORITY" : "ACTIVE"}
        </span>
      </header>
      <section className="p-6">
        <div className="mb-4 flex h-10 w-10 items-center justify-center text-velocity-teal">
          {icon}
        </div>
        <h3 className="font-display text-base font-semibold text-white">{title}</h3>
        <p className="cockpit-body mt-3 text-sm opacity-90">{description}</p>
      </section>
    </article>
  );
}
