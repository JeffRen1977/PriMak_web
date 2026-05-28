import { useState, type FormEvent } from "react";
import Hero from "../components/Hero";
import Panel from "../components/Panel";

const investorTypes = [
  "Asset Manager / GP",
  "Asset Owner / LP",
  "Asset Servicer",
  "Financial Advisor",
  "Institutional Investor",
  "Consultant",
  "Regulator or Government Agency",
  "Other",
];

const inputClass =
  "mt-2 w-full border border-slate-300 bg-white px-4 py-2.5 font-mono text-xs text-sovereign-navy outline-none transition focus:border-velocity-teal focus:ring-1 focus:ring-velocity-teal/30";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Hero
        eyebrow="SYS::CONTACT"
        title="Connect to the Universal OS for Private Capital"
        subtitle="Complete the uplink form for institutional inquiries. General channel: info@primarka.com"
        compact
      />

      <section className="section-intelligence cockpit-section pb-24">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          {submitted ? (
            <Panel label="STATUS::TRANSMITTED" bodyClassName="p-10 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center border border-velocity-teal/30 bg-velocity-teal/10 text-velocity-teal">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-display text-xl font-semibold text-white">Transmission received</h2>
              <p className="cockpit-body mt-2 text-sm">
                Your inquiry has been logged. Our team will respond shortly.
              </p>
            </Panel>
          ) : (
            <Panel label="UPLINK::CONTACT_FORM" bodyClassName="p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="font-mono text-xs uppercase tracking-widest text-velocity-teal">
                  Contact Us
                </h2>

                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-institutional-silver/70">
                      First Name <span className="text-velocity-teal">*</span>
                    </span>
                    <input required type="text" name="firstName" className={inputClass} />
                  </label>
                  <label className="block">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-institutional-silver/70">
                      Last Name <span className="text-velocity-teal">*</span>
                    </span>
                    <input required type="text" name="lastName" className={inputClass} />
                  </label>
                </div>

                <label className="block">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-institutional-silver/70">
                    Organization
                  </span>
                  <input type="text" name="company" className={inputClass} />
                </label>

                <label className="block">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-institutional-silver/70">
                    Role / Title
                  </span>
                  <input type="text" name="jobTitle" className={inputClass} />
                </label>

                <label className="block">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-institutional-silver/70">
                    Country <span className="text-velocity-teal">*</span>
                  </span>
                  <input required type="text" name="country" className={inputClass} />
                </label>

                <label className="block">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-institutional-silver/70">
                    Email <span className="text-velocity-teal">*</span>
                  </span>
                  <input required type="email" name="email" className={inputClass} />
                </label>

                <label className="block">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-institutional-silver/70">
                    Stakeholder Type <span className="text-velocity-teal">*</span>
                  </span>
                  <select required name="investorType" defaultValue="" className={inputClass}>
                    <option value="" disabled>
                      Select type
                    </option>
                    {investorTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-institutional-silver/70">
                    Message <span className="text-velocity-teal">*</span>
                  </span>
                  <textarea required name="message" rows={5} className={inputClass} />
                </label>

                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="subscribe"
                    className="mt-1 border-slate-300 text-velocity-teal focus:ring-velocity-teal/30"
                  />
                  <span className="text-xs leading-relaxed text-institutional-silver/60">
                    Subscribe to receive communications from PriMarkA. By submitting, you
                    consent to receive email from PriMarkA. See our Privacy Policy for details.
                  </span>
                </label>

                <button type="submit" className="btn-cockpit-primary w-full sm:w-auto">
                  Transmit
                </button>
              </form>
            </Panel>
          )}
        </div>
      </section>
    </>
  );
}
