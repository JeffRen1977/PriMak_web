import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative border-t border-velocity-teal/10 bg-sovereign-navy">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <section className="lg:col-span-2">
            <Logo height={44} />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-institutional-silver/70">
              Institutional-grade infrastructure unifying asset managers, asset owners, and
              asset servicers across the full private capital lifecycle — onboarding through
              settlement, monitoring, and reporting.
            </p>
          </section>

          <nav aria-label="Footer navigation">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-velocity-teal/70">
              Modules
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-institutional-silver/60">
              <li><Link to="/" className="transition hover:text-velocity-teal">OVR · Overview</Link></li>
              <li><Link to="/institutions" className="transition hover:text-velocity-teal">INS · Institutions</Link></li>
              <li><Link to="/platform" className="transition hover:text-velocity-teal">PLT · Platform</Link></li>
              <li><Link to="/about" className="transition hover:text-velocity-teal">ABT · About</Link></li>
            </ul>
          </nav>

          <section>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-velocity-teal/70">
              Uplink
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-institutional-silver/60">
              <li>
                <a href="mailto:info@primarka.com" className="transition hover:text-velocity-teal">
                  info@primarka.com
                </a>
              </li>
              <li><Link to="/contact" className="transition hover:text-velocity-teal">CNT · Contact</Link></li>
            </ul>
          </section>
        </div>

        <p className="trust-seal mt-12 border-t border-velocity-teal/10 pt-8">
          PriMarkA Financial Group | The Universal OS for Private Capital | Institutional-Grade Infrastructure
        </p>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-wider text-institutional-silver/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} PriMarkA Financial Group Inc.</p>
          <p className="flex items-center gap-2">
            <span className="signal-dot h-1.5 w-1.5 rounded-full bg-velocity-teal" />
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}
