import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import SectionHeading from "../components/SectionHeading";
import Panel from "../components/Panel";
import { IconChart, IconCpu, IconEye, IconGlobe } from "../components/icons";

const capabilities = [
  {
    icon: <IconEye />,
    title: "Unified Lifecycle Visibility",
    description:
      "360° oversight across onboarding, origination, settlement, monitoring, and reporting — one command layer for every participant in private capital.",
  },
  {
    icon: <IconGlobe />,
    title: "Cross-Party Orchestration",
    description:
      "Connect asset managers, asset owners, and asset servicers on a single intelligent infrastructure — eliminating siloed systems and manual handoffs.",
  },
  {
    icon: <IconCpu />,
    title: "Agentic Intelligence Layer",
    description:
      "Purpose-built AI orchestration that automates workflows, converts natural-language instructions into execution, and scales institutional operations.",
  },
  {
    icon: <IconChart />,
    title: "Real-Time Portfolio Intelligence",
    description:
      "Interactive dashboards and deep analytical insights delivering accurate, comprehensive performance data across the entire investment footprint.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="SYS::PRIVATE_CAPITAL_OS"
        title="The Universal OS for Private Capital"
        subtitle="Institutional-grade infrastructure connecting asset managers, asset owners, and asset servicers — one operating system from onboarding through settlement, monitoring, and reporting."
        primaryCta={{ label: "Early Access", to: "/contact" }}
        secondaryCta={{ label: "Explore Platform", to: "/platform" }}
        showDashboard
        gradient
      />

      <section className="section-intelligence cockpit-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="alignment-indicator">
              <p className="cockpit-eyebrow">Ends & Means · High Velocity</p>
              <h2 className="cockpit-title mt-4">
                Infrastructure built for institutional scale
              </h2>
              <p className="cockpit-body mt-6">
                Private capital markets demand more than fragmented point solutions. PriMarkA
                delivers a unified operating system — digitizing the full investment journey
                with deterministic workflows, cross-party audit trails, and agentic
                intelligence at every stage.
              </p>
              <p className="cockpit-body mt-4">
                From capital calls and distributions to covenant monitoring and compliance
                reporting, every stakeholder operates on shared infrastructure designed for
                speed, transparency, and institutional certainty.
              </p>
            </div>
            <Panel label="OS::CORE_VALUE" bodyClassName="p-6 lg:p-8">
              <p className="font-display text-lg font-semibold text-velocity-teal">
                One platform. Every participant. Total alignment.
              </p>
              <p className="cockpit-body mt-4 text-sm">
                PriMarkA unifies companies, asset managers, asset owners, and asset servicers
                through a single sovereign infrastructure — the entry portal into the
                operating system itself.
              </p>
              <Link to="/contact" className="btn-cockpit-primary mt-6">
                Request Access
              </Link>
            </Panel>
          </div>
        </div>
      </section>

      <section className="section-vision cockpit-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="SYS::CAPABILITIES"
            title="Built for the private capital lifecycle"
            subtitle="Systematic infrastructure that connects every institutional participant with clarity and conviction."
          />
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((f, i) => (
              <FeatureCard key={f.title} {...f} index={i} alert={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-intelligence cockpit-section">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="cockpit-title">Ready to operate on sovereign infrastructure?</h2>
          <p className="cockpit-body mt-4">
            Connect your organization to the universal OS for private capital.
          </p>
          <Link to="/institutions" className="btn-cockpit-ghost mt-8">
            INS · Institutions →
          </Link>
        </div>
      </section>
    </>
  );
}
