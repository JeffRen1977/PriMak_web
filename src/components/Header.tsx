import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

const navLinks = [
  { to: "/", label: "Investments", end: true },
  { to: "/institutions", label: "Institutions" },
  { to: "/platform", label: "Platform" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 lg:px-8">
        <Logo height={40} />

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-navy-900/8 text-navy-900"
                    : "text-slate-600 hover:bg-slate-100 hover:text-navy-900"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/contact"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-navy-900 transition hover:border-teal-500 hover:bg-slate-50"
          >
            Get in Touch
          </Link>
          <Link
            to="/contact"
            className="rounded-lg bg-gradient-to-r from-cyan-500 to-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:from-cyan-400 hover:to-teal-500"
          >
            Early Access
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200 px-6 py-4 md:hidden">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-3 text-sm font-medium ${
                  isActive ? "bg-slate-100 text-navy-900" : "text-slate-600"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-lg bg-gradient-to-r from-cyan-500 to-teal-600 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Early Access
          </Link>
        </nav>
      )}
    </header>
  );
}
