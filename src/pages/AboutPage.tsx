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
            owners, asset servicers, and asset consumers/borrowers achieve greater speed,
            control, and scalable performance across the full lifecycle.
          </p>
        </div>
      </section>

      <section className="section-vision cockpit-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Panel label="MISSION::CORE" bodyClassName="p-8 lg:p-10">
              <SectionHeading
                eyebrow="Our Mission"
                title="Unified Platform for Private Capital"
              />
              <p className="cockpit-body mt-6">
                Deliver a Unified Platform that fuels Private Capital through
                institutional-grade offering — bringing transparency, velocity, and
                systematic certainty to onboarding, settlement, monitoring, and reporting.
              </p>
              <p className="cockpit-body mt-4">
                We automate the operational backbone so asset managers, asset owners,
                asset servicers, and asset consumers/borrowers can focus on conviction,
                not complexity.
              </p>
            </Panel>

            <Panel label="VISION::FORWARD" bodyClassName="p-8 lg:p-10">
              <SectionHeading
                eyebrow="Our Vision"
                title="The Universal Operating System for Private Capital"
              />
              <p className="cockpit-body mt-6">
                Establish PriMarkA as the Universal Operating System for Private Capital —
                a frictionless Private Capital Hub that bridges the global liquidity gap and
                becomes a high-velocity, transparent, digital-first engine of global wealth.
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="TEAM::PARTNERS"
            title="PriMarkA Partners"
            subtitle="A multi-disciplinary powerhouse combining capital market enterprise architecture, fund structuring and systematic risk governance, industrial OT/IoT collateral telemetry, and on-device edge AI hardware acceleration."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[
              {
                name: "Darko Zivkovic",
                titles: "CEO, CIO, CPO",
                domain: "Product and Service Leadership and Management, M&A, Business & Enterprise Architecture",
                expertise: "Business & Enterprise architecture, Product and Service leadership, Operating model and M&A specialist for stock exchanges, regulatory bodies (LSEG, TMX, CSA, CIRO).",
                focus: "Product and Services owner, Platform business architecture, TOM designer, Change leader, Tokenization, blockchain, quantum and sovereign AI enabler.",
              },
              {
                name: "Dr. Jianfeng (Jeff) Ren",
                titles: "CRIO, Head of Engineering",
                domain: "Edge AI Acceleration & Computer Vision",
                expertise: "Dual Ph.D. EE, computational vision, edge hardware quantization, and spatial/autonomous AI algorithms (Google, Qualcomm).",
                focus: "On-device and sovereign AI acceleration, spatial perception models, and automated asset inspection engines. Research, Innovation and IP protection.",
              },
              {
                name: "Hasni Guettaf",
                titles: "COO, CTO, CISO",
                domain: "Industrial AI and IoT, Information and Operation Technologies, Quantum & Cyber Resilience",
                expertise: "AI, Quantum encryption, Smart Manufacturing / IIoT (CESMII & 4.0 Solutions), Unified Namespace (UNS), edge OT/IT convergence, and IEC 62443 industrial cybersecurity.",
                focus: "Real-time asset monitoring, physical collateral telemetry, Industrial IoT data pipeline, Platform architecture, Technology innovation, deployment and support.",
              },
              {
                name: "Guy-François Yebele-Nkumu",
                titles: "CMO, COS, CGRO",
                domain: "Fund Structuring & Systematic Risk, Business Development",
                expertise: "Alternative asset management, Multi-asset systematic trading, Cross-border M&A, Regulatory governance and compliance.",
                focus: "Fund structuring, prime brokerage integration, and institutional risk/compliance frameworks, marketing, talent scouting.",
              },
            ].map((p) => (
              <Panel key={p.name} label={`PARTNER::${p.name.replace(/^Dr\.\s*/, "").split(" ")[0].toUpperCase()}`} bodyClassName="p-8">
                <h3 className="font-display text-lg font-semibold text-white">
                  {p.name}
                  <span className="text-cyan-400">, {p.titles}</span>
                </h3>
                <p className="cockpit-body mt-1 text-sm italic text-slate-300">{p.domain}</p>
                <p className="cockpit-body mt-4 text-sm">
                  <span className="font-semibold text-cyan-400">Core Expertise: </span>
                  {p.expertise}
                </p>
                <p className="cockpit-body mt-3 text-sm">
                  <span className="font-semibold text-cyan-400">PriMarkA Focus: </span>
                  {p.focus}
                </p>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      <section className="section-vision cockpit-section">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <SectionHeading
            centered
            eyebrow="Culture · Ends & Means"
            title="Conviction through systematic engineering"
            subtitle="We align ends and means — combining financial domain expertise, agentic intelligence, and institutional-grade engineering to solve complex private-market infrastructure at scale. Real intelligence. Real alignment. Real velocity."
          />
        </div>
      </section>

      <section className="section-vision cockpit-section">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Culture · 10C for 10X"
            title="The 10 Commandments"
            subtitle="Our cultural operating principles — the foundation that drives 10X performance across everything we build."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              { num: "I", title: "Conviction", desc: "Lead with unwavering belief in our mission and the value we create." },
              { num: "II", title: "Clarity", desc: "Communicate with precision — eliminate ambiguity in every interaction." },
              { num: "III", title: "Courage", desc: "Challenge the status quo and take bold, calculated action." },
              { num: "IV", title: "Commitment", desc: "Deliver on promises with relentless execution and accountability." },
              { num: "V", title: "Collaboration", desc: "Build together — across teams, roles, and geographies." },
              { num: "VI", title: "Craftsmanship", desc: "Engineer with institutional-grade quality in everything we ship." },
              { num: "VII", title: "Curiosity", desc: "Stay hungry for knowledge — question, learn, and innovate continuously." },
              { num: "VIII", title: "Candor", desc: "Speak truth with respect — radical honesty accelerates progress." },
              { num: "IX", title: "Customer Centricity", desc: "Every decision starts and ends with the institutional client." },
              { num: "X", title: "Compounding", desc: "Think long-term — small, consistent improvements create exponential results." },
            ].map((c) => (
              <Panel key={c.num} label={`COMMANDMENT::${c.num}`} bodyClassName="p-6">
                <h3 className="font-display text-base font-semibold text-white">{c.title}</h3>
                <p className="cockpit-body mt-2 text-sm">{c.desc}</p>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      <section className="section-intelligence cockpit-section">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Link to="/contact" className="btn-cockpit-primary mt-10">
            Join the OS
          </Link>
        </div>
      </section>
    </>
  );
}
