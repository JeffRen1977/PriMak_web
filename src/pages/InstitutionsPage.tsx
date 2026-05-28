import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import Panel from "../components/Panel";
import AuditSection from "../components/AuditSection";
import { IconBolt, IconDocument, IconLink, IconShield, IconUsers } from "../components/icons";

const stakeholders = [
  {
    title: "Asset Owners",
    tagline: "Turning Data into Insights.",
    description:
      "Limited Partner landscapes grow more complex every year. PriMarkA's institutional-grade agentic AI platform reduces operational risk and delivers total oversight across your private capital portfolio.",
  },
  {
    title: "Asset Managers",
    tagline: "Run the Business. Not the Software.",
    description:
      "Digitized, end-to-end private investment infrastructure brings scalability to fund operations. Purpose-built agentic workflows streamline distribution, reduce operational burden, and enhance oversight.",
  },
  {
    title: "Asset Servicers",
    tagline: "Streamlining Operations at Scale.",
    description:
      "Empower depositaries, custodians, transfer agents, and advisors with intelligent automation — smarter decisions, faster workflows, and lean, transparent operations without compromising profitability.",
  },
];

const platformFeatures = [
  {
    icon: <IconUsers />,
    title: "Digital Investor Onboarding",
    description:
      "Onboard the entire investment journey at the speed of the market on one unified platform.",
  },
  {
    icon: <IconBolt />,
    title: "Centralized Portfolio Monitoring",
    description:
      "Investor portal with clear access and superior insights to private capital portfolio performance data.",
  },
  {
    icon: <IconLink />,
    title: "Seamless Global Distribution",
    description:
      "Access a global network of distributors and reach institutional investor bases across jurisdictions.",
  },
  {
    icon: <IconShield />,
    title: "Automated KYC and Compliance",
    description:
      "Streamline KYC/AML checks with automated regulatory processes and built-in audit trails.",
    alert: true,
  },
  {
    icon: <IconDocument />,
    title: "Intelligent Document Processing",
    description:
      "Centralized investor relations, e-signing of critical agreements, and automated capital calls and distributions.",
  },
];

export default function InstitutionsPage() {
  return (
    <>
      <Hero
        eyebrow="SYS::INSTITUTIONS"
        title="Serving and distributing private capital at institutional scale"
        subtitle="A unified operating system connecting asset managers, asset owners, and asset servicers — built for the full lifecycle, not a single asset class."
        primaryCta={{ label: "Connect", to: "/contact" }}
        secondaryCta={{ label: "Platform Specs", to: "/platform" }}
        compact
      />

      <section className="section-intelligence cockpit-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="alignment-indicator max-w-3xl">
            <SectionHeading
              eyebrow="Institutional Focus"
              title="Built for the stakeholders who move private capital"
              subtitle="PriMarkA is infrastructure for the institutions that originate, allocate, service, and govern private capital — not a retail investment portal."
            />
          </div>
        </div>
      </section>

      <section className="section-vision cockpit-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            {stakeholders.map((a, i) => (
              <Panel key={a.title} label={`ROLE::0${i + 1}`} bodyClassName="p-6">
                <h3 className="font-display text-lg font-semibold text-white">{a.title}</h3>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-velocity-teal">
                  {a.tagline}
                </p>
                <p className="cockpit-body mt-4 text-sm">{a.description}</p>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      <AuditSection>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            aligned
            variant="audit"
            eyebrow="Transparency · Auditability"
            title="Institutional infrastructure demands institutional clarity"
            subtitle="Complex data, compliance workflows, and cross-party reporting require clean, auditable surfaces. PriMarkA delivers full transparency, visibility, and control across the private investment lifecycle."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {platformFeatures.map((f) => (
              <article
                key={f.title}
                className="border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 text-velocity-teal">{f.icon}</div>
                <h3 className="font-display text-base font-semibold text-sovereign-navy">
                  {f.title}
                </h3>
                <p className="cockpit-body-audit mt-3 text-sm">{f.description}</p>
                {f.alert && (
                  <p className="metric-alert mt-3 font-mono text-[10px] uppercase tracking-wider">
                    ● Compliance Priority
                  </p>
                )}
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/platform" className="btn-cockpit-audit">
              Explore Full Platform
            </Link>
          </div>
        </div>
      </AuditSection>
    </>
  );
}
