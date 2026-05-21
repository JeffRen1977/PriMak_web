import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-teal-500/30 hover:shadow-md">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/10 to-teal-600/10 text-teal-600 ring-1 ring-teal-500/20 transition group-hover:from-cyan-500/15 group-hover:to-teal-600/15">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-navy-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
    </article>
  );
}
