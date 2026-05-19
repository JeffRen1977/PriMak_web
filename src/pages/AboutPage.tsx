import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="Our Company"
        title="Opening the doors to the private market"
        subtitle="Digitize. Transparent. Accessible. Grow."
        primaryCta={{ label: "Contact Us", to: "/contact" }}
        compact
      />

      <section className="border-y border-white/5 bg-navy-900/30 py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-slate-300">
            PriMarkA is an intelligence-native investment manager and technology platform
            of its kind — offering end-to-end private capital solutions for any business
            at any stage. Transforming how private capital is serviced and distributed,
            and helping alternative investment managers achieve greater speed, control,
            and scalable performance.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="rounded-2xl border border-gold-500/20 bg-navy-900/50 p-10">
              <SectionHeading eyebrow="Our Mission" title="To be the unified platform for a better private capital" />
              <p className="mt-6 leading-relaxed text-slate-400">
                The company&apos;s mission is to bring transparency, visibility, and broad
                accessibility to private asset investing — delivering an institutional-grade
                experience with the speed and reliability of modern infrastructure.
              </p>
              <p className="mt-4 leading-relaxed text-slate-400">
                With PriMarkA&apos;s unified investment platform, companies, institutions,
                and individual investors gain a seamless, fully digital investment journey
                that helps secure their future. We strive to automate onboarding, portfolio
                oversight, payments, custody, and reporting from end to end.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-navy-900/50 p-10">
              <SectionHeading eyebrow="Our Vision" title="Digital-first engine of global private capital" />
              <p className="mt-6 leading-relaxed text-slate-400">
                Grounded in today&apos;s market, we&apos;re building the future of private
                investment technology infrastructure and offering convenient access to
                investment opportunities all in one place.
              </p>
              <p className="mt-4 leading-relaxed text-slate-400">
                Through digitized alternative-asset and fund capabilities, we advance
                frontier markets to provide liquidity, efficiency, and compliance,
                establishing a global network that seamlessly connects participants and
                catalyses their growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-navy-900/40 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <SectionHeading
            centered
            eyebrow="Culture"
            title="A culture of innovation"
            subtitle="Solving complex challenges requires real intelligence. PriMarkA is built by people's imagination — embracing innovation and creating trust and growth for all our clients in everything they do."
          />
          <Link
            to="/contact"
            className="mt-10 inline-flex rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-white hover:border-gold-500/40"
          >
            Join Us on This Journey
          </Link>
        </div>
      </section>
    </>
  );
}
