import type { ReactNode } from "react";

type PanelProps = {
  children: ReactNode;
  label?: string;
  className?: string;
  bodyClassName?: string;
};

export default function Panel({
  children,
  label,
  className = "",
  bodyClassName = "p-6 lg:p-8",
}: PanelProps) {
  return (
    <article className={`cockpit-panel ${className}`}>
      {label ? <header className="cockpit-panel-label">{label}</header> : null}
      <section className={bodyClassName}>{children}</section>
    </article>
  );
}
