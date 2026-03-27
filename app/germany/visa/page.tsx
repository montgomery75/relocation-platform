import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { fetcher } from "@/lib/sanity/client";

export const metadata: Metadata = {
  title: "Germany Visas for Americans | EuropeRelocator",
  description:
    "Understand the main Germany visa and residence pathways for Americans, including the EU Blue Card, Opportunity Card, freelance visa, student visa, and family reunification.",
};

async function getSettingsData() {
  const data = await fetcher([
    `*[_type == "settings"][0]`,
    {},
  ]);
  return data;
}

function SectionHeading({
  label,
  title,
  intro,
}: {
  label?: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mb-6 max-w-4xl">
      {label ? (
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f4ec9]">
          {label}
        </div>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)] ${className}`}
    >
      {children}
    </div>
  );
}

export default async function GermanyVisaPage() {
  const settings = await getSettingsData();

  const visaCards = [
    {
      title: "EU Blue Card",
      text: "For qualified professionals with a recognized degree or comparable qualification and a qualifying job offer.",
      href: "/germany/visa/eu-blue-card",
    },
    {
      title: "Opportunity Card",
      text: "For people who want to move to Germany first and look for qualified work through a points-based pathway.",
      href: "/germany/opportunity-card",
    },
    {
      title: "Freelance Visa",
      text: "For self-employed professionals and freelancers with a viable business model or relevant client base.",
      href: "/germany/freelance-visa",
    },
    {
      title: "Student Visa",
      text: "For applicants admitted to a German university or certain preparatory academic pathways.",
      href: "/germany/student-visa",
    },
    {
      title: "Family Reunification",
      text: "For spouses, children, and certain family members joining someone already legally living in Germany.",
      href: "/germany/family-reunification",
    },
  ];

  const quickDecisions = [
    "I have a job offer from Germany",
    "I want to move first and look for work",
    "I want to freelance or be self-employed",
    "I want to study in Germany",
    "My spouse or family member already lives there",
  ];

  const faqItems = [
    {
      q: "Can Americans move to Germany without a visa first?",
      a: "In many cases, yes. U.S. citizens can generally enter Germany without a visa for a short stay and then apply locally for an eligible residence permit. The correct route still depends on your purpose of stay and whether you meet the permit requirements.",
    },
    {
      q: "What is the best Germany visa for skilled professionals?",
      a: "For many qualified professionals, the EU Blue Card is one of the strongest options because it is structured, employment-based, and can support a long-term path to permanent residence. The right choice still depends on salary, qualifications, and the exact job offer.",
    },
    {
      q: "Is the Opportunity Card the same as a work visa?",
      a: "No. The Opportunity Card is primarily a job-seeking route. It can help you enter Germany to look for qualifying work, but it is not the same as already holding an employment-based residence permit such as the EU Blue Card.",
    },
    {
      q: "What usually causes delays in Germany visa applications?",
      a: "The most common problems are incomplete documents, unclear proof of funds, qualification recognition issues, health insurance mistakes, and choosing the wrong pathway. Many applicants are delayed not because they are ineligible, but because their case is not prepared clearly.",
    },
  ];

  const glossary = [
    ["Aufenthaltstitel", "Residence title or residence permit."],
    ["Ausländerbehörde", "Local immigration office responsible for residence permits."],
    ["Anmeldung", "Address registration after moving into a residence in Germany."],
    ["Krankenversicherung", "Health insurance."],
    ["Chancenkarte", "The German name for the Opportunity Card."],
  ];

  const sources = [
    "BAMF — Federal Office for Migration and Refugees",
    "Make it in Germany – by the Federal Republic of Germany",
  ];

  return (
    <>
      <Navbar {...settings} />

      <main className="bg-[#f8fbff] min-h-screen px-5 py-10 text-slate-900">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-4 text-sm text-[#5f6c85]">
            <a href="/" className="hover:underline">
              Home
            </a>{" "}
            /{" "}
            <a href="/germany" className="hover:underline">
              Germany
            </a>{" "}
            / Visa
          </div>

          {/* HERO */}
          <section className="pb-6 pt-2">
            <div className="rounded-[24px] border border-[#d9e3f5] bg-white px-6 py-8 shadow-[0_18px_48px_rgba(22,50,79,0.08)] md:px-10 md:py-10">
              <div className="grid gap-8 lg:grid-cols-[1.55fr_0.95fr]">
                <div>
                  <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f4ec9]">
                    Germany Visa Guide
                  </div>

                  <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-slate-900 md:text-5xl">
                    Germany Visas for Americans
                  </h1>

                  <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 md:text-lg">
                    Understand the main Germany visa and residence pathways based on
                    your situation — whether you have a job offer, want to look for
                    work, plan to freelance, study, or join family.
                  </p>

                  <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
                    This page is designed as a structured decision page, not just a
                    general blog article.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="#visa-overview"
                      className="inline-flex items-center justify-center rounded-xl bg-[#1f6fff] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f4ec9]"
                    >
                      Explore visa options
                    </a>
                    <a
                      href="#decision-guide"
                      className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-gray-100"
                    >
                      Find your likely path
                    </a>
                  </div>
                </div>

                <aside className="rounded-[16px] border border-[#d9e3f5] bg-[linear-gradient(180deg,#f8fbff_0%,#edf4ff_100%)] p-6 shadow-[0_12px_30px_rgba(22,50,79,0.06)]">
                  <div className="text-sm font-semibold text-[#0f4ec9]">
                    Verified immigration information
                  </div>

                  <div className="mt-4 space-y-4 text-sm leading-6 text-slate-700">
                    <div>
                      This page is structured around official immigration sources
                      and practical application logic.
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900">Core sources:</span>{" "}
                      BAMF — Federal Office for Migration and Refugees
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900">Additional source:</span>{" "}
                      Make it in Germany – by the Federal Republic of Germany
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900">Focus:</span>{" "}
                      Help users identify the right pathway before taking any
                      official step.
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          {/* QUICK FACTS */}
          <section className="pb-4">
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <div className="text-base font-semibold text-slate-900">
                  Americans can often apply from inside Germany
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  U.S. citizens can usually enter Germany without a visa and then
                  apply locally for an eligible residence permit, depending on the
                  pathway.
                </p>
              </Card>

              <Card>
                <div className="text-base font-semibold text-slate-900">
                  Germany has multiple realistic visa routes
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  The best path depends on whether you have a job offer, want to
                  look for work, plan to freelance, study, or join family.
                </p>
              </Card>

              <Card>
                <div className="text-base font-semibold text-slate-900">
                  Preparation is often the hardest part
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Many delays come from missing documents, weak application
                  logic, or choosing the wrong route too early.
                </p>
              </Card>
            </div>
          </section>

          {/* QUICK NAV */}
          <section className="pb-6">
            <div className="flex flex-wrap gap-3">
              {[
                ["#visa-overview", "Visa Overview"],
                ["#decision-guide", "Decision Guide"],
                ["#requirements", "Requirements"],
                ["#glossary", "Glossary"],
                ["#long-term", "Long-term Path"],
                ["#faq", "FAQ"],
                ["#sources", "Sources"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-full border border-[#d9e3f5] bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  {label}
                </a>
              ))}
            </div>
          </section>

          {/* VISA OVERVIEW */}
          <section id="visa-overview" className="py-10">
            <SectionHeading
              title="German Visas — Overview"
              intro="These are the main residence pathways most relevant for Americans moving to Germany. The right route depends on your purpose, qualifications, finances, and timing."
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {visaCards.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  className="rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(22,50,79,0.08)]"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {card.text}
                  </p>
                  <div className="mt-4 text-sm font-semibold text-[#0f4ec9]">
                    Read summary →
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* NICHE VISAS */}
          <section className="py-10">
            <Card className="shadow-[0_18px_48px_rgba(22,50,79,0.08)]">
              <SectionHeading
                title="Other (Less Common) Germany Visa Options"
                intro="Germany also has narrower or more specialized residence pathways. These can matter in edge cases, but they are not the main focus of this page because they apply to a much smaller share of Americans."
              />
              <p className="max-w-3xl text-base leading-7 text-slate-700">
                Later, this can link to a dedicated guide covering niche Germany
                visa pathways in more detail.
              </p>
            </Card>
          </section>

          {/* QUICK DECISION GUIDE */}
          <section id="decision-guide" className="py-10">
            <SectionHeading
              title="Quick decision guide"
              intro="Start with the question that best matches your situation."
            />

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {quickDecisions.map((item) => (
                <Card key={item} className="text-center">
                  <div className="text-sm font-semibold leading-6 text-slate-900">
                    {item}
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="py-6">
            <div className="rounded-[24px] bg-[#1f6fff] px-6 py-8 text-white shadow-[0_20px_52px_rgba(31,111,255,0.22)] md:px-8">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Know exactly what to do—before you take any official step.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-50 md:text-base">
                A proper visa decision flow should help users understand likely
                eligibility, likely complexity, and the next logical step.
              </p>
              <div className="mt-5">
                <a
                  href="#requirements"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#1f6fff] transition hover:bg-slate-100"
                >
                  See your personalized visa plan
                </a>
              </div>
            </div>
          </section>

          {/* PATHWAY SUMMARIES */}
          <section className="py-10">
            <div className="space-y-8">
              {[
                [
                  "EU Blue Card",
                  "One of the most structured employment-based pathways for qualified professionals. Best suited for applicants with a qualifying job offer and the right academic or professional background.",
                ],
                [
                  "Opportunity Card",
                  "A route for people who want to come to Germany to search for work. Opportunity Card (Chancenkarte) is especially relevant for people without a job offer yet but with a profile that may qualify under Germany’s points-based system.",
                ],
                [
                  "Freelance Visa",
                  "Relevant for self-employed professionals who can show economic viability, clients, and a credible business case for operating in Germany.",
                ],
                [
                  "Student Visa",
                  "Built for applicants entering Germany through higher education, often with very different financial and documentation logic than employment-based pathways.",
                ],
                [
                  "Family Reunification",
                  "Usually relevant where a spouse, parent, or child already has a legal residence basis in Germany. The requirements depend heavily on the sponsor’s status and the family relationship.",
                ],
              ].map(([title, text]) => (
                <div key={title}>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                    {title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* REQUIREMENTS */}
          <section id="requirements" className="py-10">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                  Job requirements
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
                  Some pathways require a qualifying job offer, some do not.
                  Where employment is required, the job itself, your
                  qualifications, and the relationship between the two can all
                  matter.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                  Financial requirements
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
                  Germany often wants to see that you can support yourself. The
                  evidence varies by pathway and may include salary, savings,
                  client income, blocked funds, or sponsor support.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                  Health insurance requirements
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
                  Health insurance is not a minor detail. It is often a core
                  application requirement. The exact standard can depend on
                  whether you are entering as an employee, student, freelancer,
                  or job seeker, and whether public or private coverage is
                  appropriate for your situation.
                </p>
              </div>
            </div>
          </section>

          {/* GLOSSARY */}
          <section id="glossary" className="py-10">
            <SectionHeading title="Germany visa glossary" />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {glossary.map(([term, definition]) => (
                <Card key={term}>
                  <div className="text-sm font-semibold text-slate-900">{term}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {definition}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          {/* LONG-TERM PATH */}
          <section id="long-term" className="py-10">
            <SectionHeading
              title="Long-term path to permanent residence and citizenship"
              intro="Choosing the right visa is not just about entry. Different pathways can affect how straightforward your long-term settlement path is, including permanent residence and, later, citizenship."
            />
          </section>

          {/* FINAL CTA */}
          <section className="py-6">
            <div className="rounded-[24px] bg-[#1f6fff] px-6 py-8 text-white shadow-[0_20px_52px_rgba(31,111,255,0.22)] md:px-8">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Not sure which Germany visa fits your case?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-50 md:text-base">
                The value is not just listing visa categories. It is helping
                users avoid delays, avoid rejection, and understand exactly what
                to do next.
              </p>
              <div className="mt-5">
                <a
                  href="#faq"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#1f6fff] transition hover:bg-slate-100"
                >
                  Preview your visa plan
                </a>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="py-10">
            <SectionHeading title="FAQ" />
            <div className="grid gap-5 md:grid-cols-2">
              {faqItems.map((item) => (
                <Card key={item.q}>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.q}
                  </h3>
                  <p className="mt-3 tex
::contentReference[oaicite:2]{index=2}
t-sm leading-6 text-slate-700">
                    {item.a}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          {/* SOURCES */}
          <section id="sources" className="pb-14 pt-10">
            <SectionHeading title="Sources" />
            <Card>
              <ul className="space-y-3 text-sm leading-6 text-slate-700">
                {sources.map((source) => (
                  <li key={source}>{source}</li>
                ))}
              </ul>
            </Card>
          </section>
        </div>
      </main>

      <Footer {...settings} />
    </>
  );
}