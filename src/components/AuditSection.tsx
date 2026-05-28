import type { ReactNode } from "react";

type AuditSectionProps = {
  children: ReactNode;
  className?: string;
};

export default function AuditSection({ children, className = "" }: AuditSectionProps) {
  return (
    <section className={`section-audit cockpit-section ${className}`}>{children}</section>
  );
}
