import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-os-surface">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <section className="lg:col-span-2">
            <Logo height={44} />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500">
              PriMarkA Financial Group Inc. — Private Capital Operating System. Unified
              infrastructure connecting companies, asset managers, asset owners, and asset
              servicers through one intelligent ecosystem.
            </p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-slate-600">
              SYS::PRIVATE_CAPITAL_OS · v2.4.1
            </p>
          </section>

          <nav aria-label="Footer navigation">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-cyan-500/70">
              Modules
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-500">
              <li><Link to="/" className="transition hover:text-teal-700">INV · Investments</Link></li>
              <li><Link to="/institutions" className="transition hover:text-teal-700">INS · Institutions</Link></li>
              <li><Link to="/platform" className="transition hover:text-teal-700">PLT · Platform</Link></li>
              <li><Link to="/about" className="transition hover:text-teal-700">ABT · About</Link></li>
            </ul>
          </nav>

          <section>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-cyan-500/70">
              Uplink
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-500">
              <li>
                <a href="mailto:info@primarka.com" className="transition hover:text-teal-700">
                  info@primarka.com
                </a>
              </li>
              <li><Link to="/contact" className="transition hover:text-teal-700">CNT · Contact form</Link></li>
            </ul>
          </section>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 font-mono text-[10px] uppercase tracking-wider text-slate-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} PriMarkA Financial Group Inc.</p>
          <p className="flex items-center gap-2">
            <span className="signal-dot h-1.5 w-1.5 rounded-full bg-signal" />
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}
