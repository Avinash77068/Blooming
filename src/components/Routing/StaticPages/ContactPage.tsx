import PageShell from "../common/PageShell";
import Contact from "../../Contact";

export default function ContactPage() {
  return (
    <PageShell
      subtitle="Contact"
      title="Get in Touch"
      description="Reach out to the academy for admissions, events, or general inquiries."
    >
      <Contact />
    </PageShell>
  );
}
