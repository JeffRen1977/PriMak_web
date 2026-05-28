import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

const navLinks = [
  { to: "/", label: "Overview", code: "OVR", end: true },
  { to: "/institutions", label: "Institutions", code: "INS" },
  { to: "/platform", label: "Platform", code: "PLT" },
  { to: "/about", label: "About", code: "ABT" },
  { to: "/contact", label: "Contact", code: "CNT" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-velocity-teal/10 bg-deep-space/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2.5 lg:px-8">
        <Logo height={38} />

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Main navigation">
          {navLinks.map(({ to, label, code, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `cockpit-nav-link ${isActive ? "cockpit-nav-link-active" : ""}`
              }
            >
              <span className="text-velocity-teal/50">{code}</span> · {label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <span className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-institutional-silver/50 lg:flex">
            <span className="signal-dot h-1.5 w-1.5 rounded-full bg-velocity-teal" />
            OS v2.4 · Secure
          </span>
          <Link to="/contact" className="btn-cockpit-ghost py-2">
            Connect
          </Link>
          <Link to="/contact" className="btn-cockpit-primary py-2">
            Early Access
          </Link>
        </div>

        <button
          type="button"
          className="border border-velocity-teal/20 p-2 text-velocity-teal md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-velocity-teal/10 bg-deep-space px-6 py-4 md:hidden" aria-label="Mobile navigation">
          {navLinks.map(({ to, label, code, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-3 font-mono text-xs uppercase tracking-wider ${
                  isActive ? "text-velocity-teal" : "text-institutional-silver/70"
                }`
              }
            >
              {code} · {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="btn-cockpit-primary mt-3 block w-full text-center"
          >
            Early Access
          </Link>
        </nav>
      )}
    </header>
  );
}
