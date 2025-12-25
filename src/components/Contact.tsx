import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { CONTACT } from "./GlobalTextColor/string";

export default function Contact() {
  return (
    <section id={CONTACT.SECTION_ID} className="mx-auto max-w-6xl px-4">
      {/* Header */}
      <div className="flex flex-col gap-3 text-center">
        <p className="text-xs uppercase tracking-[0.6em] text-[#FCEA2B]">
          {CONTACT.BADGE}
        </p>
        <h2 className="text-3xl font-black">{CONTACT.TITLE}</h2>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Info Card */}
        <div className="space-y-6 rounded-[32px] border border-slate-200/80 bg-white/80 p-6 shadow-xl dark:border-white/10 dark:bg-slate-900/60">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.5em] text-[#2a9d8f]">
              {CONTACT.ADDRESS_LABEL}
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-200">
              {CONTACT.ADDRESS_TEXT}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-[#2a9d8f]" />
            <p className="text-sm font-semibold text-slate-800 dark:text-white">
              {CONTACT.PHONE}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-[#F38B2E]" />
            <p className="text-sm text-slate-800 dark:text-white">
              {CONTACT.EMAIL}
            </p>
          </div>

          <div
            className="h-48 w-full rounded-[18px] bg-gradient-to-r from-[#2a9d8f]/40 to-[#1d3557]/70"
            aria-label="Map placeholder"
          />
        </div>

        {/* Form */}
        <form className="space-y-5 rounded-[32px] border border-slate-200/80 bg-white/80 p-6 shadow-xl dark:border-white/10 dark:bg-slate-900/60">
          <div>
            <label className="text-xs uppercase tracking-[0.6em] text-slate-500">
              {CONTACT.FORM.FULL_NAME_LABEL}
            </label>
            <input
              type="text"
              placeholder={CONTACT.FORM.FULL_NAME_PLACEHOLDER}
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#FCEA2B]"
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-[0.6em] text-slate-500">
              {CONTACT.FORM.EMAIL_LABEL}
            </label>
            <input
              type="email"
              placeholder={CONTACT.FORM.EMAIL_PLACEHOLDER}
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#2a9d8f]"
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-[0.6em] text-slate-500">
              {CONTACT.FORM.MESSAGE_LABEL}
            </label>
            <textarea
              rows={3}
              placeholder={CONTACT.FORM.MESSAGE_PLACEHOLDER}
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#f38b2e]"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-2xl bg-gradient-to-r from-[#1d9a90] to-[#0f172a] px-6 py-3 text-sm font-bold uppercase tracking-[0.4em] text-white"
          >
            {CONTACT.FORM.SUBMIT}
          </button>
        </form>
      </div>
    </section>
  );
}
