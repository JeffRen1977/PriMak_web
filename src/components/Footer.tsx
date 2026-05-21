import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo height={48} />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
              PriMarkA Financial Group Inc. — the unified platform for a better private
              capital, connecting companies, asset managers, asset owners, and asset
              servicers through one intelligent private-market ecosystem.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-teal-600">
              Explore
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><Link to="/" className="hover:text-navy-900">Investments</Link></li>
              <li><Link to="/institutions" className="hover:text-navy-900">Institutions</Link></li>
              <li><Link to="/platform" className="hover:text-navy-900">Platform</Link></li>
              <li><Link to="/about" className="hover:text-navy-900">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-teal-600">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <a href="mailto:info@primarka.com" className="hover:text-navy-900">
                  info@primarka.com
                </a>
              </li>
              <li><Link to="/contact" className="hover:text-navy-900">Contact form</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} PriMarkA Financial Group Inc. All rights reserved.</p>
          <p>Opening the doors to the private market.</p>
        </div>
      </div>
    </footer>
  );
}
