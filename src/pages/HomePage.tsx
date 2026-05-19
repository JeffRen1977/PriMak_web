import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import SectionHeading from "../components/SectionHeading";
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
        eyebrow="Alternative Investments"
        title="PriMarkA is the Home of Opportunities — the Gateway to Emerging Assets"
        subtitle="A unified investment platform for better private capital with curated access to proven private companies. We deploy intelligence. You invest."
        primaryCta={{ label: "Get Early Access", to: "/contact" }}
        secondaryCta={{ label: "Explore Platform", to: "/platform" }}
      />

      <section className="border-y border-white/5 bg-navy-900/30 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
                We Deploy Intelligence. You Invest.
              </p>
              <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
                Curated access to private market opportunities
              </h2>
              <p className="mt-6 leading-relaxed text-slate-400">
                Providing eligible private investors with curated access to private market
                opportunities designed to enhance portfolios and drive long-term growth
                across companies.
              </p>
              <p className="mt-4 leading-relaxed text-slate-400">
                Today, more companies choose to remain private longer—leveraging tailored
                growth strategies and operational flexibility. That growing demand and
                complexity in private markets calls for a new era of alternatives to
                overcome long-standing hurdles for investors.
              </p>
            </div>
            <div className="rounded-2xl border border-gold-500/20 bg-gradient-to-br from-navy-800/80 to-navy-900/80 p-8 lg:p-10">
              <p className="text-lg font-medium text-gold-300">
                Get Early Access To Tomorrow&apos;s Market Leaders
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Our platform unifies companies, asset managers, asset owners, and asset
                servicers through a single intelligent private-market ecosystem for
                tomorrow&apos;s alternatives.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex rounded-lg bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-950 hover:bg-gold-400"
              >
                Request Early Access
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Why PriMarkA"
            title="Built for the new era of private markets"
            subtitle="Intelligent infrastructure that connects every participant in the private capital ecosystem."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900/40 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl text-white">
            Ready to access tomorrow&apos;s market leaders?
          </h2>
          <p className="mt-4 text-slate-400">
            Join the unified platform connecting intelligence, capital, and opportunity.
          </p>
          <Link
            to="/institutions"
            className="mt-8 inline-flex rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-white hover:border-gold-500/40"
          >
            For Institutions →
          </Link>
        </div>
      </section>
    </>
  );
}
