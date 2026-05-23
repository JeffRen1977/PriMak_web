import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import Panel from "../components/Panel";

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="SYS::COMPANY"
        title="Opening the doors to the private market"
        subtitle="Digitize. Transparent. Accessible. Grow."
        primaryCta={{ label: "Connect", to: "/contact" }}
        compact
      />

      <section className="cockpit-section cockpit-section-alt">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="cockpit-body text-lg">
            PriMarkA Financial Group Inc. is an intelligence-native investment manager and
            technology platform — offering end-to-end private capital solutions for any
            business at any stage. Transforming how private capital is serviced and
            distributed, and helping alternative investment managers achieve greater speed,
            control, and scalable performance.
          </p>
        </div>
      </section>

      <section className="cockpit-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Panel label="MISSION::CORE" bodyClassName="p-8 lg:p-10">
              <SectionHeading eyebrow="Our Mission" title="To be the unified platform for a better private capital" />
              <p className="cockpit-body mt-6">
                The company&apos;s mission is to bring transparency, visibility, and broad
                accessibility to private asset investing — delivering an institutional-grade
                experience with the speed and reliability of modern infrastructure.
              </p>
              <p className="cockpit-body mt-4">
                With PriMarkA&apos;s unified investment platform, companies, institutions,
                and individual investors gain a seamless, fully digital investment journey
                that helps secure their future. We strive to automate onboarding, portfolio
                oversight, payments, custody, and reporting from end to end.
              </p>
            </Panel>

            <Panel label="VISION::FORWARD" bodyClassName="p-8 lg:p-10">
              <SectionHeading eyebrow="Our Vision" title="Digital-first engine of global private capital" />
              <p className="cockpit-body mt-6">
                Grounded in today&apos;s market, we&apos;re building the future of private
                investment technology infrastructure and offering convenient access to
                investment opportunities all in one place.
              </p>
              <p className="cockpit-body mt-4">
                Through digitized alternative-asset and fund capabilities, we advance
                frontier markets to provide liquidity, efficiency, and compliance,
                establishing a global network that seamlessly connects participants and
                catalyses their growth.
              </p>
            </Panel>
          </div>
        </div>
      </section>

      <section className="cockpit-section cockpit-section-alt">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <SectionHeading
            centered
            eyebrow="Culture"
            title="A culture of innovation"
            subtitle="Solving complex challenges requires real intelligence. PriMarkA is built by people's imagination — embracing innovation and creating trust and growth for all our clients in everything they do."
          />
          <Link to="/contact" className="btn-cockpit-ghost mt-10">
            Join the OS
          </Link>
        </div>
      </section>
    </>
  );
}
