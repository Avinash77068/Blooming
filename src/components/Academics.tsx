import { academicPrograms } from "./Array/AllArray";
import { useSelector } from "react-redux";
import { bgBlack, bgWhite } from "./GlobalTextColor/bg";
import { ACADEMICS } from "./GlobalTextColor/string";

export default function Academics() {
  const isOpen = useSelector((state: any) => state.user.isOpen);

  return (
    <section
      id={ACADEMICS.SECTION_ID}
      className={`mx-auto ${isOpen ? bgBlack : bgWhite} py-12 space-y-8 px-4`}
    >
      {/* Header */}
      <div className="flex flex-col gap-2 text-center">
        <p className="text-xs uppercase tracking-[0.6em] text-[#F38B2E]">
          {ACADEMICS.BADGE}
        </p>

        <h2 className="text-3xl font-black">{ACADEMICS.TITLE}</h2>

        <p className="text-sm text-slate-700 dark:text-slate-600">
          {ACADEMICS.DESCRIPTION}
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {academicPrograms.map((program) => (
          <article
            key={program.title}
            className="rounded-[32px] border border-slate-200/70 bg-white/60 p-6 shadow-lg dark:border-white/10 dark:bg-white/5"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.6em] text-slate-400">
              {program.badge}
            </div>

            <h3 className="mt-3 text-xl font-black">{program.title}</h3>

            <p className="mt-3 text-sm text-slate-600">{program.payload}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
