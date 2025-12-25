import PageShell from "../common/PageShell";

export default function AboutUs() {
  return (
    <PageShell
      subtitle="About"
      title="About Us"
      description="Learn how Blooming Children Academy cultivates curious learners through values-driven education."
    >
      <p className="text-left text-sm text-slate-500 dark:text-slate-300">
        Our campus is more than classrooms; it is a community where every
        student has the chance to create, question, and contribute. We blend
        academic rigor with a spirit of discovery so each child builds both
        knowledge and character.
      </p>
    </PageShell>
  );
}
