import { useSelector } from "react-redux";
import { bgBlack, bgWhite } from "./GlobalTextColor/bg";
import { teacher } from "./Array/AllArray";


export default function Teacher() {
  const isOpen = useSelector((state: any) => state.user.isOpen);

  return (
    <div>
      <section
        id="faculty"
        className={` ${isOpen ? bgBlack : bgWhite} mx-auto  px-4`}
      >
        <div className="flex flex-col gap-3 text-center">
          <p className="text-xs uppercase tracking-[0.6em] text-[#F38B2E]">
            Educators
          </p>
          <h2 className="text-3xl font-black">Our Faculty</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teacher.map((person) => (
            <article
              key={person.name}
              className="flex flex-col gap-3 rounded-[28px] border border-slate-200/80 bg-white/80 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-slate-900/60"
            >
              <div className="flex items-center gap-3">
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-16 w-16 rounded-full object-cover border-2 border-[#2a9d8f]"
                />
                <div>
                  <h3 className="text-lg font-bold">{person.name}</h3>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    {person.course}
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-200">
                {person.testimonial}
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#F38B2E]">
                Expertise
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-200">
                {person.expertise}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
