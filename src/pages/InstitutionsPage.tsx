import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import FeatureCard from "../components/FeatureCard";
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
        eyebrow="Institutions"
        title="Serving and distributing private investment capital at scale"
        subtitle="A unified platform for a better private capital that connects asset managers, asset owners, and asset servicers intelligently."
        primaryCta={{ label: "Get In Touch", to: "/contact" }}
        secondaryCta={{ label: "Learn More", to: "/platform" }}
        compact
      />

      <section className="border-y border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Private Investors"
                title="Institutional quality for individual investors"
              />
              <p className="mt-6 leading-relaxed text-slate-600">
                Today&apos;s investors want more than just positive returns — digital
                transformation, smarter data, more transparency, and faster service. We
                help make these demands a reality.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                As a provider of private market solutions for individual investors, our
                perpetual solutions bring institutional quality investments to individuals,
                encompassing all private asset classes. With Partnership Enablement
                solutions, we provide specialist asset servicing, custody, payments, and
                market services to asset managers, asset owners, and other financial
                institutions.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-navy-900">
                Why Invest in Private Markets?
              </h3>
              <p className="mt-2 font-medium text-teal-600">Power Growth, Create Value</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Investing in private assets offers investors greater diversification and
                the potential for enhanced long-term performance. With PriMarkA,
                investors can access and participate in the $14T+ private markets — city
                of opportunities, and home to the private companies shaping the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Designed for Institutions"
            title="Built for Results"
          />
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {audiences.map((a) => (
              <article
                key={a.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-navy-900">{a.title}</h3>
                <p className="mt-2 text-sm font-medium text-teal-600">{a.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {a.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Platform"
            title="Alternative investments shouldn't require alternative infrastructure"
            subtitle="PriMarkA delivers full transparency, visibility, accessibility, and control across your private investment journey — one platform with total efficiency, built to scale across the lifecycle."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {platformFeatures.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/platform"
              className="inline-flex rounded-lg bg-gradient-to-r from-cyan-500 to-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:from-cyan-400 hover:to-teal-500"
            >
              Explore Full Platform
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
