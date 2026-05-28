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
        subtitle="Digitize. Transparent. Accessible. At institutional scale."
        primaryCta={{ label: "Connect", to: "/contact" }}
        compact
      />

      <section className="section-intelligence cockpit-section">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="cockpit-body text-lg">
            PriMarkA Financial Group Inc. is an intelligence-native technology platform —
            the universal operating system for private capital. We transform how private
            capital is serviced, distributed, and governed — helping asset managers, asset
            owners, and asset servicers achieve greater speed, control, and scalable
            performance across the full lifecycle.
          </p>
        </div>
      </section>

      <section className="section-vision cockpit-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Panel label="MISSION::CORE" bodyClassName="p-8 lg:p-10">
              <SectionHeading
                eyebrow="Our Mission"
                title="The Universal OS for Private Capital"
              />
              <p className="cockpit-body mt-6">
                To deliver institutional-grade infrastructure that unifies every participant
                in the private capital ecosystem — bringing transparency, velocity, and
                systematic certainty to onboarding, settlement, monitoring, and reporting.
              </p>
              <p className="cockpit-body mt-4">
                We automate the operational backbone so asset managers, asset owners, and
                asset servicers can focus on conviction, not complexity.
              </p>
            </Panel>

            <Panel label="VISION::FORWARD" bodyClassName="p-8 lg:p-10">
              <SectionHeading
                eyebrow="Our Vision"
                title="Digital-first engine of global private capital"
              />
              <p className="cockpit-body mt-6">
                A world where private capital operates on sovereign, high-velocity
                infrastructure — where every transaction, covenant, and compliance event is
                visible, auditable, and actionable in real time.
              </p>
              <p className="cockpit-body mt-4">
                Through digitized fund capabilities and agentic intelligence, we advance
                frontier markets to provide liquidity, efficiency, and compliance —
                establishing a global network that connects participants and catalyses growth.
              </p>
            </Panel>
          </div>
        </div>
      </section>

      <section className="section-intelligence cockpit-section">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <SectionHeading
            centered
            eyebrow="Culture · Ends & Means"
            title="Conviction through systematic engineering"
            subtitle="We align ends and means — combining financial domain expertise, agentic intelligence, and institutional-grade engineering to solve complex private-market infrastructure at scale. Real intelligence. Real alignment. Real velocity."
          />
          <Link to="/contact" className="btn-cockpit-primary mt-10">
            Join the OS
          </Link>
        </div>
      </section>
    </>
  );
}
