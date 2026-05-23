import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import FeatureCard from "../components/FeatureCard";
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
    title: "Capital engine powering your growth",
    description:
      "Delivering speed, exclusivity, and confidence — streamlined access to secondary investment opportunities across private markets, spanning both equity and credit secondaries.",
  },
  {
    icon: <IconUsers />,
    title: "Digital investor onboarding",
    description:
      "Digitize the entire investment journey on a single unified platform. Onboard investors seamlessly with intelligent, automated workflows that capture data once at entry.",
  },
  {
    icon: <IconBolt />,
    title: "End-to-end digitisation",
    description:
      "Streamline everything from onboarding, KYC, and regulatory compliance to subscriptions, capital calls, distributions, and investor reporting — eliminating operational friction at every stage.",
  },
  {
    icon: <IconGlobe />,
    title: "Seamless global distribution",
    description:
      "Leverage our partners' infrastructure strength and global distribution network to supercharge your fund's growth and unlock new investor segments and jurisdictions.",
  },
  {
    icon: <IconShield />,
    title: "AI-powered workflows",
    description:
      "Deploy AI-powered associates that convert natural-language instructions into end-to-end workflow execution — so your team can concentrate on strategic, high-impact decisions.",
  },
  {
    icon: <IconChart />,
    title: "Portfolio monitoring",
    description:
      "A purpose-built workspace offering investors instant access to accurate, comprehensive 360° portfolio performance data with interactive dashboards and deep analytical insights.",
  },
  {
    icon: <IconBolt />,
    title: "Automated transactions",
    description:
      "Provide investors with real-time visibility into their investment activity with accurate transaction data. Automate capital calls and distributions.",
  },
  {
    icon: <IconLink />,
    title: "API-first, seamless integrations",
    description:
      "Integrated platform that connects effortlessly with your existing tech stack, ensuring real-time data synchronisation and eliminating manual data re-entry.",
  },
  {
    icon: <IconShield />,
    title: "Intelligent due diligence",
    description:
      "Automate KYC/AML processes with intelligent regulatory workflows. A built-in audit trail ensures full transparency for reporting and compliance reviews.",
  },
  {
    icon: <IconDocument />,
    title: "Intelligent document management",
    description:
      "Centralise, share, and e-sign critical investment materials and agreements securely. Control access, leverage pre-populated data, and ensure compliance.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <Hero
        eyebrow="SYS::PLATFORM"
        title="A One-Stop Private Markets Platform, Built to Scale With Intelligence"
        subtitle="The PriMarkA operating system — connecting institutional investors, asset managers, asset owners, and asset servicers through one unified command layer."
        primaryCta={{ label: "Connect", to: "/contact" }}
        compact
      />

      <section className="cockpit-section cockpit-section-alt">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="cockpit-body text-lg">
            The PriMarkA platform modernizes the investor journey with a single operating
            model that drives seamless, end-to-end workflows. By offering flexible access
            points on a unified platform, we eliminate manual bottlenecks and help you
            scale operations to drive strategic growth.
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-wider text-slate-500">
            Built for and by leading financial reasoning — designed with the sophistication
            of bankers, investors, and AI researchers to accelerate firm productivity,
            automate workflows, and unify financial data at scale.
          </p>
        </div>
      </section>

      <section className="cockpit-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Core Modules"
            title="Everything you need across the private markets lifecycle"
          />
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <FeatureCard key={c.title} {...c} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="cockpit-section cockpit-section-alt">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="cockpit-title">One secure platform. Total confidence.</h2>
          <p className="cockpit-body mt-4">
            Manage your private investments with intelligent, unified data architecture.
          </p>
          <Link to="/contact" className="btn-cockpit-primary mt-8">
            Schedule Demo
          </Link>
        </div>
      </section>
    </>
  );
}
