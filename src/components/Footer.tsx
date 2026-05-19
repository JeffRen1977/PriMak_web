import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-900/50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-500/15 text-lg font-bold text-gold-400 ring-1 ring-gold-500/30">
                P
              </span>
              <span className="text-xl font-semibold text-white">
                Pri<span className="text-gold-400">Mark</span>A
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              The unified platform for a better private capital — connecting companies,
              asset managers, asset owners, and asset servicers through one intelligent
              private-market ecosystem.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
              Explore
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-white">Investments</Link></li>
              <li><Link to="/institutions" className="hover:text-white">Institutions</Link></li>
              <li><Link to="/platform" className="hover:text-white">Platform</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <a href="mailto:info@primarka.com" className="hover:text-white">
                  info@primarka.com
                </a>
              </li>
              <li><Link to="/contact" className="hover:text-white">Contact form</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} PriMarkA. All rights reserved.</p>
          <p>Opening the doors to the private market.</p>
        </div>
      </div>
    </footer>
  );
}
