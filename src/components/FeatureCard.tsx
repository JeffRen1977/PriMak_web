import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <article className="group rounded-2xl border border-white/8 bg-navy-900/40 p-8 transition hover:border-gold-500/25 hover:bg-navy-900/70">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400 ring-1 ring-gold-500/20 transition group-hover:bg-gold-500/20">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">{description}</p>
    </article>
  );
}
