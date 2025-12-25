import PageShell from "../common/PageShell";

export default function HomeSubTwo() {
  return (
    <PageShell
      subtitle="Home"
      title="Home Variant"
      description="An alternate welcome space highlighting community stories and student work."
    >
      <p className="text-left text-sm text-slate-500 dark:text-slate-300">
        This variation of our home experience focuses on real families, vibrant
        student work, and academic news so you can explore what makes Blooming
        Children Academy feel like home.
      </p>
    </PageShell>
  );
}
