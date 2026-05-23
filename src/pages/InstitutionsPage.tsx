import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import FeatureCard from "../components/FeatureCard";
import Panel from "../components/Panel";
import { IconBolt, IconDocument, IconLink, IconShield, IconUsers } from "../components/icons";

const audiences = [
  {
    title: "Asset Owners",
    tagline: "Turning Data into Insights.",
    description:
      "Every year, the Limited Partner investment landscape becomes more complex. PriMarkA's institutional-grade Agentic AI platform reduces operational risk and gives you total oversight of your private investments.",
  },
  {
    title: "Alternative Asset Managers",
    tagline: "Run the Business. Not the Software.",
    description:
      "PriMarkA's digitized, end-to-end private investment journey brings scalability to private-fund distribution. Our purpose-built agentic infrastructure streamlines workflows, reduces operational burden, and enhances oversight.",
  },
  {
    title: "Asset Servicers",
    tagline: "Streamlining your Operations.",
    description:
      "We empower asset servicers to scale with smarter decisions, faster workflows, and intelligent automation — whether you are a depositary, custodian, transfer agent, or advisor.",
  },
];

const platformFeatures = [
  {
    icon: <IconUsers />,
    title: "Digital Investor Onboarding",
    description:
      "Onboard the entire investment journey at the speed of the market on one platform.",
  },
  {
    icon: <IconBolt />,
    title: "Centralized Portfolio Monitoring",
    description:
      "Digital investor portal with clear access and superior insights to your private capital portfolio performance data.",
  },
  {
    icon: <IconLink />,
    title: "Seamless Global Distribution",
    description:
      "Designed for institutions. Built for results. Access a global network of distributors and reach a broader investor base.",
  },
  {
    icon: <IconShield />,
    title: "Automated KYC and Compliance",
    description:
      "Streamline KYC/AML checks with automated regulatory processes to verify investors' identities.",
  },
  {
    icon: <IconDocument />,
    title: "Intelligent Document Processing",
    description:
      "Advanced centralized investor relations data visualization, e-signing of critical investment documents, and automated capital calls and distributions.",
  },
];

export default function InstitutionsPage() {
  return (
    <>
      <Hero
        eyebrow="SYS::INSTITUTIONS"
        title="Serving and distributing private investment capital at scale"
        subtitle="A unified operating system for private capital — connecting asset managers, asset owners, and asset servicers intelligently."
        primaryCta={{ label: "Connect", to: "/contact" }}
        secondaryCta={{ label: "Platform Specs", to: "/platform" }}
        compact
      />

      <section className="cockpit-section cockpit-section-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Private Investors"
                title="Institutional quality for individual investors"
              />
              <p className="cockpit-body mt-6">
                Today&apos;s investors want more than just positive returns — digital
                transformation, smarter data, more transparency, and faster service. We
                help make these demands a reality.
              </p>
              <p className="cockpit-body mt-4">
                As a provider of private market solutions for individual investors, our
                perpetual solutions bring institutional quality investments to individuals,
                encompassing all private asset classes. With Partnership Enablement
                solutions, we provide specialist asset servicing, custody, payments, and
                market services to asset managers, asset owners, and other financial
                institutions.
              </p>
            </div>
            <Panel label="INTEL::PRIVATE_MARKETS">
              <h3 className="font-display text-xl font-semibold text-navy-950">
                Why Invest in Private Markets?
              </h3>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-teal-700">
                Power Growth · Create Value
              </p>
              <p className="cockpit-body mt-4 text-sm">
                Investing in private assets offers investors greater diversification and
                the potential for enhanced long-term performance. With PriMarkA,
                investors can access and participate in the $14T+ private markets — city
                of opportunities, and home to the private companies shaping the future.
              </p>
            </Panel>
          </div>
        </div>
      </section>

      <section className="cockpit-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading centered eyebrow="Institutional Grade" title="Built for Results" />
          <div className="mt-16 grid gap-4 lg:grid-cols-3">
            {audiences.map((a, i) => (
              <Panel key={a.title} label={`ROLE::0${i + 1}`} bodyClassName="p-6">
                <h3 className="font-display text-lg font-semibold text-navy-950">{a.title}</h3>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-teal-700">
                  {a.tagline}
                </p>
                <p className="cockpit-body mt-4 text-sm">{a.description}</p>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      <section className="cockpit-section cockpit-section-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Platform Infrastructure"
            title="Alternative investments shouldn't require alternative infrastructure"
            subtitle="PriMarkA delivers full transparency, visibility, accessibility, and control across your private investment journey — one OS with total efficiency, built to scale across the lifecycle."
          />
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {platformFeatures.map((f, i) => (
              <FeatureCard key={f.title} {...f} index={i} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/platform" className="btn-cockpit-primary">
              Explore Full Platform
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
