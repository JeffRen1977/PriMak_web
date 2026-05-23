import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import SectionHeading from "../components/SectionHeading";
import Panel from "../components/Panel";
import { IconChart, IconCpu, IconEye, IconGlobe } from "../components/icons";

const features = [
  {
    icon: <IconEye />,
    title: "360-Degree Perspective",
    description:
      "Be first in line when a vetted deal hits the market on a global scale with the aim of identifying compelling value across private markets.",
  },
  {
    icon: <IconGlobe />,
    title: "Global Reach. Unparalleled Results",
    description:
      "Private markets are evolving rapidly — we help you stay ahead. Through curated investment offerings and trusted relationships with established startups, we unlock emerging opportunities powered by our extensive partner network.",
  },
  {
    icon: <IconCpu />,
    title: "Purpose-Built Technology",
    description:
      "Empowering investors, asset managers, and fund administrators to scale seamlessly across the private-market ecosystem.",
  },
  {
    icon: <IconChart />,
    title: "Market Data Intelligence and Insights",
    description:
      "Grow with confidence in evolving private markets with exclusive private companies and funds data and insights to make informed decisions.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="SYS::ALTERNATIVE_INVESTMENTS"
        title="PriMarkA is the Home of Opportunities — the Gateway to Emerging Assets"
        subtitle="The private capital operating system. Curated access to proven private companies. We deploy intelligence. You invest."
        primaryCta={{ label: "Initialize Access", to: "/contact" }}
        secondaryCta={{ label: "Explore Platform", to: "/platform" }}
        showDashboard
      />

      <section className="cockpit-section cockpit-section-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="cockpit-eyebrow">Deploy Intelligence · You Invest</p>
              <h2 className="cockpit-title mt-4">
                Curated access to private market opportunities
              </h2>
              <p className="cockpit-body mt-6">
                Providing eligible private investors with curated access to private market
                opportunities designed to enhance portfolios and drive long-term growth
                across companies.
              </p>
              <p className="cockpit-body mt-4">
                Today, more companies choose to remain private longer—leveraging tailored
                growth strategies and operational flexibility. That growing demand and
                complexity in private markets calls for a new era of alternatives to
                overcome long-standing hurdles for investors.
              </p>
            </div>
            <Panel label="ACCESS::EARLY_ENTRY" bodyClassName="p-6 lg:p-8">
              <p className="font-display text-lg font-medium text-teal-700">
                Get Early Access To Tomorrow&apos;s Market Leaders
              </p>
              <p className="cockpit-body mt-4 text-sm">
                Our platform unifies companies, asset managers, asset owners, and asset
                servicers through a single intelligent private-market ecosystem for
                tomorrow&apos;s alternatives.
              </p>
              <Link to="/contact" className="btn-cockpit-primary mt-6">
                Request Access
              </Link>
            </Panel>
          </div>
        </div>
      </section>

      <section className="cockpit-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="SYS::CAPABILITIES"
            title="Built for the new era of private markets"
            subtitle="Intelligent infrastructure that connects every participant in the private capital ecosystem."
          />
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <FeatureCard key={f.title} {...f} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="cockpit-section cockpit-section-alt">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="cockpit-title">Ready to access tomorrow&apos;s market leaders?</h2>
          <p className="cockpit-body mt-4">
            Initialize your connection to the unified platform — intelligence, capital, and
            opportunity in one operating system.
          </p>
          <Link to="/institutions" className="btn-cockpit-ghost mt-8">
            INS · Institutions →
          </Link>
        </div>
      </section>
    </>
  );
}
