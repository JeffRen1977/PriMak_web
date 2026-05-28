import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import FeatureCard from "../components/FeatureCard";
import AuditSection from "../components/AuditSection";
import {
  IconBolt,
  IconChart,
  IconCpu,
  IconDocument,
  IconGlobe,
  IconLink,
  IconShield,
  IconUsers,
} from "../components/icons";

const capabilities = [
  {
    icon: <IconCpu />,
    title: "Capital engine powering growth",
    description:
      "Streamlined access to secondary opportunities across private markets — equity and credit — with speed, exclusivity, and institutional confidence.",
  },
  {
    icon: <IconUsers />,
    title: "Digital investor onboarding",
    description:
      "Digitize the entire investment journey on one unified platform. Intelligent, automated workflows capture data once at entry.",
  },
  {
    icon: <IconBolt />,
    title: "End-to-end digitisation",
    description:
      "From onboarding and KYC through subscriptions, capital calls, distributions, and investor reporting — eliminating operational friction at every stage.",
  },
  {
    icon: <IconGlobe />,
    title: "Seamless global distribution",
    description:
      "Leverage partner infrastructure and global distribution networks to unlock new investor segments and jurisdictions.",
  },
  {
    icon: <IconShield />,
    title: "AI-powered workflows",
    description:
      "Deploy AI associates that convert natural-language instructions into end-to-end workflow execution — freeing teams for high-impact decisions.",
    alert: true,
  },
  {
    icon: <IconChart />,
    title: "Portfolio monitoring",
    description:
      "Purpose-built workspace with instant access to accurate, comprehensive 360° portfolio performance data and deep analytical insights.",
  },
  {
    icon: <IconBolt />,
    title: "Automated transactions",
    description:
      "Real-time visibility into investment activity with accurate transaction data. Automate capital calls and distributions.",
  },
  {
    icon: <IconLink />,
    title: "API-first integrations",
    description:
      "Connect effortlessly with existing tech stacks, ensuring real-time data synchronisation and eliminating manual re-entry.",
  },
  {
    icon: <IconShield />,
    title: "Intelligent due diligence",
    description:
      "Automate KYC/AML with intelligent regulatory workflows and built-in audit trails for full transparency in compliance reviews.",
  },
  {
    icon: <IconDocument />,
    title: "Intelligent document management",
    description:
      "Centralise, share, and e-sign critical investment materials securely. Control access, pre-populate data, and ensure compliance.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <Hero
        eyebrow="SYS::PLATFORM"
        title="One Operating System. Built to Scale With Intelligence."
        subtitle="The PriMarkA platform modernizes the institutional journey with a single operating model — seamless, end-to-end workflows for asset managers, asset owners, and asset servicers."
        primaryCta={{ label: "Schedule Demo", to: "/contact" }}
        compact
      />

      <section className="section-intelligence cockpit-section">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="cockpit-body text-lg">
            Flexible access points on a unified platform eliminate manual bottlenecks and
            scale operations for strategic growth. Built with the sophistication of bankers,
            investors, and AI researchers to accelerate firm productivity and unify financial
            data at scale.
          </p>
        </div>
      </section>

      <section className="section-vision cockpit-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Core Modules"
            title="Everything across the private capital lifecycle"
          />
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <FeatureCard key={c.title} {...c} index={i} />
            ))}
          </div>
        </div>
      </section>

      <AuditSection>
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <SectionHeading
            centered
            variant="audit"
            eyebrow="Compliance · Auditability"
            title="One secure platform. Total confidence."
            subtitle="Manage private capital with intelligent, unified data architecture — designed for the analytical rigor institutional operations demand."
          />
          <Link to="/contact" className="btn-cockpit-audit mt-8">
            Schedule Demo
          </Link>
        </div>
      </AuditSection>
    </>
  );
}
