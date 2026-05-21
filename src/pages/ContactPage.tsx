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

const inputClass =
  "mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-navy-900 outline-none transition focus:border-teal-500 focus:ring-1 focus:ring-teal-500/30";

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

      <section className="bg-white pb-24">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          {submitted ? (
            <div className="rounded-2xl border border-teal-500/30 bg-slate-50 p-10 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal-500/10 text-teal-600">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-navy-900">Thank you for reaching out</h2>
              <p className="mt-2 text-sm text-slate-600">
                We&apos;ve received your inquiry and will respond shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10"
            >
              <h2 className="text-lg font-semibold text-navy-900">Contact Us</h2>

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm text-slate-700">
                    First Name <span className="text-teal-600">*</span>
                  </span>
                  <input required type="text" name="firstName" className={inputClass} />
                </label>
                <label className="block">
                  <span className="text-sm text-slate-700">
                    Last Name <span className="text-teal-600">*</span>
                  </span>
                  <input required type="text" name="lastName" className={inputClass} />
                </label>
              </div>

              <label className="block">
                <span className="text-sm text-slate-700">Company Name</span>
                <input type="text" name="company" className={inputClass} />
              </label>

              <label className="block">
                <span className="text-sm text-slate-700">Job Title</span>
                <input type="text" name="jobTitle" className={inputClass} />
              </label>

              <label className="block">
                <span className="text-sm text-slate-700">
                  Country <span className="text-teal-600">*</span>
                </span>
                <input required type="text" name="country" className={inputClass} />
              </label>

              <label className="block">
                <span className="text-sm text-slate-700">
                  Email Address <span className="text-teal-600">*</span>
                </span>
                <input required type="email" name="email" className={inputClass} />
              </label>

              <label className="block">
                <span className="text-sm text-slate-700">
                  Investor Type <span className="text-teal-600">*</span>
                </span>
                <select required name="investorType" defaultValue="" className={inputClass}>
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
                <span className="text-sm text-slate-700">
                  Message <span className="text-teal-600">*</span>
                </span>
                <textarea required name="message" rows={5} className={inputClass} />
              </label>

              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="subscribe"
                  className="mt-1 rounded border-slate-300 text-teal-600 focus:ring-teal-500/30"
                />
                <span className="text-xs leading-relaxed text-slate-600">
                  Subscribe if you would like to receive marketing communications from
                  PriMarkA. By submitting this request, you consent to receive email from
                  PriMarkA. For information on our privacy practices see our Privacy Policy.
                </span>
              </label>

              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-teal-600 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-cyan-400 hover:to-teal-500 sm:w-auto sm:px-10"
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
