import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import Panel from "../components/Panel";

const chapters = [
  {
    num: "I",
    title: "The Structural Wall and the Post-Complacency Era",
    paragraphs: [
      "The private capital ecosystem has historically been an elite engine of immense wealth creation. Driven by banks retreating under severe regulatory restrictions like Basel III and IV, alternative assets have expanded exponentially. By early 2026, the broader private markets stand at a staggering $14+ trillion in assets under management (AUM), with Private Credit alone expanding into a massive $2.1 trillion asset class.",
      "But beneath this soaring growth sits a broken foundation. The industry has hit a structural wall. For decades, multi-billion-dollar funds have quietly operated on what is essentially 1990s infrastructure — a fragmented, \"Frankenstein\" stack of manual emails, isolated spreadsheets, and opaque PDFs.",
      "At the turn of 2026, the global markets are jolted awake by the \"Post-Complacency Era\". A sudden surge in redemption requests catches major funds off-guard, exposing a fragile Liquidity Mirage and forcing prominent fund managers to pull emergency \"gates\" or freeze client withdrawals entirely. Concurrently, corporate defaults hit an alarming 9.2%, and high-profile retail and restaurant bankruptcies expose the lethal dangers of manual, siloed risk monitoring. Compounding this operational crisis is a heavy Complexity Tax: launching a single alternative fund requires assembling an army of separate law firms and legacy administrators, costing over $500,000 and devouring 9 to 12 months before a single dollar can be deployed.",
    ],
  },
  {
    num: "II",
    title: "The Secondary Market Drag",
    paragraphs: [
      "The crisis is most acute in alternative secondaries, where a severe operational drag destroys investor Internal Rates of Return (IRR). Unlike public stock exchanges, transferring a private asset is an agonizing, multi-step bottleneck:",
    ],
    list: [
      "Discovery is trapped in opaque, relationship-driven phone networks with data siloed in static documents.",
      "Matching is blind, relying on stale quarterly Net Asset Value (NAV) metrics that spark massive bid-ask spreads.",
      "Execution faces the dreaded General Partner (GP) Consent Bottleneck, where legally intensive transfers and purchase agreements stall for months.",
      "Clearing lacks an official central registry, forcing operational teams to manually unearth old, physical subscription papers just to verify asset ownership.",
      "Settlement and Liquidity drag on for 30 to 60 days, leaving the market highly inefficient, illiquid, and starved of trust.",
    ],
  },
  {
    num: "III",
    title: "Enter PriMarkA — The Operating System for Private Capital",
    paragraphs: [
      "Amidst this structural gridlock, a veteran team led by Darko Zivkovic — bringing over 30 years of capital markets and enterprise architecture expertise from global pillars like TMX and LSEG — steps in with a grand vision. Their thesis is clear: private credit and alternative assets are no longer just an underwriting game; they are an operational software problem at scale.",
      "They launch PriMarkA, positioned not as another narrow software tool, but as the comprehensive Universal Operating System and Infrastructure Hub for Private Capital. PriMarkA establishes a Unified Target Operating Model (TOM) designed to standardize and integrate technology, data, processes, and people into a single authoritative digital state. It promises to compress the 12-month fund-launch nightmare into a sleek, 30-day automated deployment cycle — allowing fund managers to scale 10x faster.",
      "PriMarkA organizes its comprehensive offering into Five Pillars of services and technology:",
    ],
    list: [
      "Private Capital Funds: Streamlining the creation and scaling of fund structures.",
      "Private Capital Markets: Facilitating frictionless primary issuance and secondary trading.",
      "Private Capital Services (PCS): Providing integrated digital depository, custody, and transfer agency utilities.",
      "Private Capital Intelligence (PCI): Feeding real-time risk modeling, analytics, and business intelligence to the platform.",
      "PriMarkA Technology Platform: The core, underlying API-first infrastructure layer.",
    ],
  },
  {
    num: "IV",
    title: "The Weaponry of Sovereign AI and Blockchain",
    paragraphs: [
      "To back up its bold claims, PriMarkA constructs an elite, institutional-grade technology architecture built on cutting-edge foundations:",
    ],
    list: [
      "Sovereign & Agentic AI: The platform acts as an autonomous fund administration engine. It transforms complex 150-page legal PDFs into executable code. It deploys automated \"AI Deal Agents\" for underwriting and specialized \"AI Analysts\" to handle covenant tracking and instantly alert teams to financial breaks.",
      "Blockchain Rails: Utilizing secure transaction tokenization protocols (prioritizing the institutional ERC-3643 standard), PriMarkA creates an immutable, transparent ledger for asset settlement, eliminating manual verification and multi-week closing delays.",
      "Quantum Encryption & Zero-Trust IAM: Securing high-stakes institutional wealth requires the \"Gold Standard\" of protection. PriMarkA builds context-aware access control systems to isolate hyper-sensitive identity registries from everyday calculation databases.",
      "A Four-Tier Data Privacy Pipeline: To honor strict global compliance, the platform routes unstructured document data through local networks, strips out private identifiers, runs cloud machine learning strictly in volatile memory, maps the information to mathematical graphs, and securely re-identifies it behind firewalls.",
      "API-first infrastructure.",
    ],
  },
  {
    num: "V",
    title: "Disruption through Continuous Innovation",
    paragraphs: [
      "Beyond its technological engine, PriMarkA introduces structural financial engineering to completely disrupt the closed-end, 10-year lock-up model typical of traditional private credit funds. It structures its native vehicle framework as a continuously offered, closed-end Interval Fund registered under the 1940 Act.",
      "This vehicle calculates its Net Asset Value (NAV) daily, accepting continuous investor purchases. Crucially, it engineers a regulated \"release valve\" by orchestrating quarterly repurchase offers for 5% of the fund's total NAV. This brilliant feature systematically manages the traditional duration mismatch of holding long-term 3-to-7-year corporate loans while offering predictable, structured liquidity paths to institutions and wealthy retail investors alike.",
    ],
  },
  {
    num: "VI",
    title: "The Operational Reality and the Ecosystem Core",
    paragraphs: [
      "While the ultimate end-state of PriMarkA is an expansive, multi-modal alternative asset universe, the leadership team executes with a disciplined \"Entry Wedge\" strategy: conquer the highly operationally intensive Private Credit arena first.",
      "To achieve an immediate real-world anchor, PriMarkA models its corporate structure on multi-billion-dollar blue-chip setups like Thoma Bravo. Rather than succumbing to the temptation of building every single back-office function from day one — a mistake that stalls most fintechs — PriMarkA initiates an elegant Institutional-First Partnership strategy. To capture immediate traction and establish absolute security, they look to deep-pocketed asset-servicing giants like CACEIS Bank and elite administrators like SS&C.",
      "PriMarkA maps its front-running value streams directly onto the highly regulated operational frameworks, integrating into the strict three-pillar operational workflow:",
    ],
    list: [
      "Transaction Management (TM): Tracking deal pipelines, managing advanced pre-deal notifications via programmatic B2B API gateways, and fulfilling rigorous look-through Ownership Verification Guidelines (OVG).",
      "Transfer Agency (TA): Driving the complex investor onboarding lifecycle, tracking capital call drawdowns, validating ultimate beneficial owners (UBO), and running algorithmic KYC/AML gatekeeper controls where \"No KYC = No Cash Flow\".",
      "Fund Accounting (FA): Automating daily trial balance aggregation, executing parallel run valuations, and managing query logs before generating audited financial reports for regulatory overseers.",
    ],
    closing: "By building software that solves the painful migration hurdle — ingesting an entire historical fund \"Data Room\" in a single afternoon to build a fully validated digital twin — PriMarkA successfully strips away the highest barrier to entry in alternative fund administration.",
  },
  {
    num: "VII",
    title: "The Master Strategic Vision",
    paragraphs: [
      "The narrative of PriMarkA stretches far beyond North America into a global grid of strategic capital distribution. Major institutions worldwide possess staggering pools of wealth but are bottlenecked by legacy architecture. PriMarkA becomes the vital bridge, providing an agile API digital layer that transforms passive balance sheets into high-velocity private credit engines. It seamlessly routes sovereign and Gulf capital into asset-light feeder ecosystems across North America, connecting international liquidity directly to corporate mid-market borrowers.",
      "To stabilize, modernize, and unify this global private market, PriMarkA enters the investment landscape seeking $10 Million in seed technology funding to refine its core Sovereign AI engine and programmatic infrastructure. Concurrently, it aims to secure a $10 Million AUM warehouse capital commitment to fuel its initial active lending vehicles, demonstrating its massive 10x operational leverage to the world.",
      "Moving forward from its initial beachhead, the platform maps a clear, recurring SaaS and transaction-fee revenue path projecting $100 Million in ARR by 2029. Guided by a strict corporate culture code known as the 10 Commandments for 10x Outcomes — anchored in Clarity, Conviction, and Compliance — PriMarkA is successfully building the institutional system of record and control, rewriting the rails of global private capital for a modern era.",
    ],
  },
];

export default function StoryPage() {
  return (
    <>
      <Hero
        eyebrow="SYS::STORY"
        title="The PriMarkA Story"
        subtitle="A modern chronicle of financial disruption born at a critical inflection point in global capital markets."
        primaryCta={{ label: "Connect", to: "/contact" }}
        compact
      />

      <section className="section-intelligence cockpit-section">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="MEDIA::OVERVIEW"
            title="PriMarkA in Motion"
          />
          <div className="mt-10">
            <div className="relative w-full overflow-hidden rounded-lg border border-velocity-teal/20" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/zIAhOpK7RXU"
                title="PriMarkA — The Universal OS for Private Capital"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-intelligence cockpit-section">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="CHRONICLE::ORIGIN"
            title="Architecting Private Capital Business Value Delivery from the Ground Up"
            subtitle="By Darko Zivkovic"
          />
          <div className="mt-12 space-y-6">
            {chapters.map((ch) => (
              <Panel key={ch.num} label={`CHAPTER::${ch.num}`} bodyClassName="p-8 lg:p-10">
                <h3 className="font-display text-lg font-semibold text-white">
                  {ch.title}
                </h3>
                {ch.paragraphs.map((p, i) => (
                  <p key={i} className="cockpit-body mt-4">
                    {p}
                  </p>
                ))}
                {ch.list && (
                  <ol className="mt-4 space-y-2 list-decimal list-inside">
                    {ch.list.map((item, i) => (
                      <li key={i} className="cockpit-body text-sm">
                        {item}
                      </li>
                    ))}
                  </ol>
                )}
                {"closing" in ch && ch.closing && (
                  <p className="cockpit-body mt-4">{ch.closing}</p>
                )}
              </Panel>
            ))}
          </div>
        </div>
      </section>

      <section className="section-vision cockpit-section">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <SectionHeading
            centered
            eyebrow="JOIN::MISSION"
            title="Join the Mission"
            subtitle="We are seeking partners to join us in stabilizing and modernizing the Private Markets with One Unified Platform, One Mission — The Universal Operating System for Private Capital."
          />
          <Link to="/contact" className="btn-cockpit-primary mt-10">
            Connect with Us
          </Link>
        </div>
      </section>
    </>
  );
}
