import { useState, type FormEvent } from "react";
import Hero from "../components/Hero";

const investorTypes = [
  "Individual Investor",
  "Financial Advisor",
  "Institutional Investor",
  "Consultant",
  "Limited Partner",
  "Regulator or Government Agency",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Hero
        eyebrow="Contact & Support Center"
        title="Thank you for your interest in PriMarkA's offering"
        subtitle="Please complete this form for your PriMarkA inquiries. General inquiries: info@primarka.com"
        compact
      />

      <section className="pb-24">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          {submitted ? (
            <div className="rounded-2xl border border-gold-500/30 bg-navy-900/60 p-10 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white">Thank you for reaching out</h2>
              <p className="mt-2 text-sm text-slate-400">
                We&apos;ve received your inquiry and will respond shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl border border-white/10 bg-navy-900/50 p-8 lg:p-10"
            >
              <h2 className="text-lg font-semibold text-white">Contact Us</h2>

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm text-slate-300">
                    First Name <span className="text-gold-400">*</span>
                  </span>
                  <input
                    required
                    type="text"
                    name="firstName"
                    className="mt-2 w-full rounded-lg border border-white/10 bg-navy-950/80 px-4 py-2.5 text-sm text-white outline-none transition focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30"
                  />
                </label>
                <label className="block">
                  <span className="text-sm text-slate-300">
                    Last Name <span className="text-gold-400">*</span>
                  </span>
                  <input
                    required
                    type="text"
                    name="lastName"
                    className="mt-2 w-full rounded-lg border border-white/10 bg-navy-950/80 px-4 py-2.5 text-sm text-white outline-none transition focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-sm text-slate-300">Company Name</span>
                <input
                  type="text"
                  name="company"
                  className="mt-2 w-full rounded-lg border border-white/10 bg-navy-950/80 px-4 py-2.5 text-sm text-white outline-none transition focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30"
                />
              </label>

              <label className="block">
                <span className="text-sm text-slate-300">Job Title</span>
                <input
                  type="text"
                  name="jobTitle"
                  className="mt-2 w-full rounded-lg border border-white/10 bg-navy-950/80 px-4 py-2.5 text-sm text-white outline-none transition focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30"
                />
              </label>

              <label className="block">
                <span className="text-sm text-slate-300">
                  Country <span className="text-gold-400">*</span>
                </span>
                <input
                  required
                  type="text"
                  name="country"
                  className="mt-2 w-full rounded-lg border border-white/10 bg-navy-950/80 px-4 py-2.5 text-sm text-white outline-none transition focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30"
                />
              </label>

              <label className="block">
                <span className="text-sm text-slate-300">
                  Email Address <span className="text-gold-400">*</span>
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full rounded-lg border border-white/10 bg-navy-950/80 px-4 py-2.5 text-sm text-white outline-none transition focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30"
                />
              </label>

              <label className="block">
                <span className="text-sm text-slate-300">
                  Investor Type <span className="text-gold-400">*</span>
                </span>
                <select
                  required
                  name="investorType"
                  defaultValue=""
                  className="mt-2 w-full rounded-lg border border-white/10 bg-navy-950/80 px-4 py-2.5 text-sm text-white outline-none transition focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30"
                >
                  <option value="" disabled>
                    Select investor type
                  </option>
                  {investorTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-sm text-slate-300">
                  Message <span className="text-gold-400">*</span>
                </span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2 w-full resize-y rounded-lg border border-white/10 bg-navy-950/80 px-4 py-2.5 text-sm text-white outline-none transition focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30"
                />
              </label>

              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="subscribe"
                  className="mt-1 rounded border-white/20 bg-navy-950 text-gold-500 focus:ring-gold-500/30"
                />
                <span className="text-xs leading-relaxed text-slate-400">
                  Subscribe if you would like to receive marketing communications from
                  PriMarkA. By submitting this request, you consent to receive email from
                  PriMarkA. For information on our privacy practices see our Privacy Policy.
                </span>
              </label>

              <button
                type="submit"
                className="w-full rounded-lg bg-gold-500 py-3 text-sm font-semibold text-navy-950 transition hover:bg-gold-400 sm:w-auto sm:px-10"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
