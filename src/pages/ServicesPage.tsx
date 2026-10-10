import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import Panel from "../components/Panel";
import {
  IconBolt,
  IconChart,
  IconCpu,
  IconGlobe,
  IconShield,
} from "../components/icons";

const horizontalServices = [
  {
    icon: <IconChart />,
    title: "Strategy Definition and Plan",
    items: [
      "Target Operating Model Design and Transformation",
      "M&A",
      "Stakeholder and Change Leadership and Management",
      "Corporate Scaling and Financing",
    ],
  },
  {
    icon: <IconGlobe />,
    title: "Enterprise Architecture and Governance",
    items: [
      "Enterprise / Business / Information / Solution Architecture and Governance",
      "Business-Technology Roadmaps",
    ],
  },
  {
    icon: <IconBolt />,
    title: "Delivery and Operations Leadership",
    items: [
      "Product, Service, Budget, Program, Project and Operations Leadership",
      "Management and Delivery",
    ],
  },
  {
    icon: <IconShield />,
    title: "Technology Platforms and Security",
    items: [
      "AI, IoT, Blockchain, Information and Operations Technology Platforms",
      "Integration, Standardization and Automation",
      "Cybersecurity, Risk, IAM, Privacy (AML, GDPR, KYC)",
    ],
  },
  {
    icon: <IconCpu />,
    title: "Research and Innovation Leadership",
    items: [
      "Edge AI acceleration",
      "Computational photography",
      "Autonomous driving perception / chip design",
      "Spatial vision for AR",
      "Innovation Lab and IP protection",
    ],
  },
];

const flagshipProducts = [
  {
    code: "PCF",
    title: "Private Capital Funds",
    subtitle: "Fund Launch Navigator",
  },
  {
    code: "PCM",
    title: "Private Capital Markets",
    subtitle:
      "PriXA — where \"X\" depends on asset class (Cred for Credit, Eq for Equity, RE for Real Estate, Infr for Infrastructure, Nat for Natural Resources, Carb for Carbon Credits, Sec for Secondaries)",
  },
  {
    code: "PCS",
    title: "Private Capital Services",
    subtitle: "PriMarT — Trust, Transfer, Depository and Payment Services",
  },
  {
    code: "PCI",
    title: "Private Capital Intelligence",
    subtitle: "PriMarDI — Data and Intelligence",
  },
  {
    code: "HUB",
    title: "PriMarkA Tech Platform",
    subtitle:
      "PriMarkA Hub — resilient, high-speed, API-first, AI-powered, blockchain-enabled, quantum-secured Private Capital Technology Platform, data and infrastructure products and services",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="SYS::SERVICES"
        title="Universal Toolbox. Proven Track. Global Reach."
        subtitle="PriMarkA bridges private and public capital market architecture and operations, Sovereign enterprise AI, Industrial Operations and Information Technology Telemetry, and systematic quantitative Risk Governance into an end-to-end institutional operating platform and services."
        primaryCta={{ label: "Connect", to: "/contact" }}
        compact
      />

      <section className="section-intelligence cockpit-section">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="cockpit-body text-lg">
            Our toolbox is universal and has a proven track with clients in public and
            private capital markets, banking, manufacturing, telecommunication,
            agriculture, science, research, education, government agencies and regulators.
            Our reach is global.
          </p>
        </div>
      </section>

      <section className="section-vision cockpit-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Horizontal Services"
            title="Five service categories across industries and geographies"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {horizontalServices.map((s, i) => (
              <Panel key={s.title} label={`SVC::0${i + 1}`} bodyClassName="p-6">
                <div className="mb-4 text-velocity-teal">{s.icon}</div>
                <h3 className="font-display text-base font-semibold text-white">
                  {s.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="cockpit-body flex items-start gap-2 text-sm"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-velocity-teal/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      <section className="section-intelligence cockpit-section">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="cockpit-body text-lg">
            We connect those services into specialized context to solve specific industry
            and business challenges — providing additional atomic or customized portfolios
            of XaaS, or vertical solutions for targeted industries.
          </p>
        </div>
      </section>

      <section className="section-vision cockpit-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Flagship Portfolio"
            title="Private Capital OS and Services"
            subtitle="Our flagship portfolio delivers end-to-end private capital infrastructure."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {flagshipProducts.map((p) => (
              <Panel key={p.code} label={`${p.code}::MODULE`} bodyClassName="p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-velocity-teal">
                  {p.code}
                </p>
                <h3 className="mt-2 font-display text-base font-semibold text-white">
                  {p.title}
                </h3>
                <p className="cockpit-body mt-3 text-sm">{p.subtitle}</p>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      <section className="section-intelligence cockpit-section">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="cockpit-title">Ready to explore our services?</h2>
          <p className="cockpit-body mt-4">
            Connect with our team to discuss how PriMarkA can accelerate your
            institutional operations.
          </p>
          <Link to="/contact" className="btn-cockpit-primary mt-8">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
