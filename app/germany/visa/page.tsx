import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { fetcher } from "@/lib/sanity/client";

async function getSettingsData() {
  const data = await fetcher([
    `*[_type == "settings"][0]`,
    {},
  ]);

  return data;
}

export default async function GermanyVisaPage() {
  const settings = await getSettingsData();

  const quickFacts = [
    {
      title: "Americans can often apply from inside Germany",
      text: "U.S. citizens can usually enter Germany without a visa and then apply locally for an eligible residence permit, depending on the pathway.",
    },
    {
      title: "Germany has multiple realistic visa routes",
      text: "The best path depends on whether you have a job offer, want to look for work, plan to freelance, study, or join family.",
    },
    {
      title: "Preparation is often the hardest part",
      text: "Many delays come from missing documents, weak application logic, or choosing the wrong route too early.",
    },
  ];

  const overviewCards = [
    {
      title: "EU Blue Card",
      text: "For qualified professionals with a recognized degree or comparable qualification and a qualifying job offer.",
      id: "eu-blue-card",
    },
    {
      title: "Opportunity Card",
      text: "For people who want to move to Germany first and look for qualified work through a points-based pathway.",
      id: "opportunity-card",
    },
    {
      title: "Freelance Visa",
      text: "For self-employed professionals and freelancers with a viable business model or relevant client base.",
      id: "freelance-visa",
    },
    {
      title: "Student Visa",
      text: "For applicants admitted to a German university or certain preparatory academic pathways.",
      id: "student-visa",
    },
    {
      title: "Family Reunification",
      text: "For spouses, children, and certain family members joining someone already legally living in Germany.",
      id: "family-reunification",
    },
  ];

  const personas = [
    "I have a job offer from Germany",
    "I want to move first and look for work",
    "I want to freelance or be self-employed",
    "I want to study in Germany",
    "My spouse or family member already lives there",
  ];

  const glossary = [
    {
      term: "Aufenthaltstitel",
      definition: "Residence title or residence permit.",
    },
    {
      term: "Ausländerbehörde",
      definition: "Local immigration office responsible for residence permits.",
    },
    {
      term: "Anmeldung",
      definition: "Address registration after moving into a residence in Germany.",
    },
    {
      term: "Krankenversicherung",
      definition: "Health insurance.",
    },
    {
      term: "Chancenkarte",
      definition: "The German name for the Opportunity Card.",
    },
  ];

  const faq = [
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

  return (
    <>
      <Navbar {...settings} />

      <main className="bg-[#f7f9fc] text-slate-900">
        <section className="pb-3 pt-8">
          <div className="mx-auto max-w-6xl px-5">
            <div className="text-sm text-[#5f6c85]">
              <a href="/" className="hover:text-[#0f4ec9]">
                Home
              </a>{" "}
              /{" "}
              <a href="/germany" className="hover:text-[#0f4ec9]">
                Germany
              </a>{" "}
              / Visa
            </div>
          </div>
        </section>

        <section className="pb-6 pt-3">
          <div className="mx-auto max-w-6xl px-5">
            <div className="rounded-[24px] border border-[#d9e3f5] bg-white px-6 py-8 shadow-[0_18px_48px_rgba(22,50,79,0.08)] md:px-10 md:py-10">
              <div className="grid gap-8 lg:grid-cols-[1.65fr_0.95fr]">
                <div>
                  <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f4ec9]">
                    Germany Visa Guide
                  </div>

                  <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-slate-900 md:text-5xl">
                    Germany Visas for Americans
                  </h1>

                  <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 md:text-lg">
                    Understand the main Germany visa and residence pathways based
                    on your situation — whether you have a job offer, want to look
                    for work, plan to freelance, study, or join family.
                  </p>

                  <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
                    This page is designed as a structured decision page, not just
                    a general blog article.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href="#visa-overview" className="er-btn er-btn-primary">
                      Explore visa options
                    </a>
                    <a href="#decision-guide" className="er-btn er-btn-secondary">
                      Find your likely path
                    </a>
                  </div>
                </div>

                <aside className="rounded-[16px] border border-[#d9e3f5] bg-[linear-gradient(180deg,#f8fbff_0%,#edf4ff_100%)] p-6 shadow-[0_12px_30px_rgba(22,50,79,0.06)]">
                  <div className="text-sm font-semibold text-[#0f4ec9]">
                    Verified immigration information
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    This page is structured around official immigration sources
                    and practical application logic.
                  </p>

                  <div className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                    <div>
                      <span className="font-semibold text-slate-900">
                        Core sources:
                      </span>{" "}
                      BAMF — Federal Office for Migration and Refugees
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900">
                        Additional source:
                      </span>{" "}
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
          </div>
        </section>

        <section className="pb-4">
          <div className="mx-auto grid max-w-6xl gap-4 px-5 md:grid-cols-3">
            {quickFacts.map((fact) => (
              <div
                key={fact.title}
                className="rounded-[16px] border border-[#d9e3f5] bg-white p-5 shadow-[0_10px_30px_rgba(22,50,79,0.06)]"
              >
                <div className="text-base font-semibold text-slate-900">
                  {fact.title}
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {fact.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-4">
          <div className="mx-auto max-w-6xl px-5">
            <div className="flex flex-wrap gap-3">
              {[
                ["#visa-overview", "Visa Overview"],
                ["#decision-guide", "Decision Guide"],
                ["#requirements", "Requirements"],
                ["#glossary", "Glossary"],
                ["#long-term-path", "Long-term Path"],
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
          </div>
        </section>

        <section id="visa-overview" className="py-8">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                German Visas — Overview
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
                These are the main residence pathways most relevant for Americans
                moving to Germany. The right route depends on your purpose,
                qualifications, finances, and timing.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {overviewCards.map((card) => (
                <a
                  key={card.title}
                  href={`#${card.id}`}
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
          </div>
        </section>

        <section className="py-2">
          <div className="mx-auto max-w-6xl px-5">
            <div className="rounded-[16px] border border-[#f2dfaa] bg-[#fff8e8] p-6">
              <h2 className="text-lg font-semibold text-slate-900">
                Other (Less Common) Germany Visa Options
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Germany also has narrower or more specialized residence pathways.
                These can matter in edge cases, but they are not the main focus of
                this page because they apply to a much smaller share of Americans.
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Later, this can link to a dedicated guide covering niche Germany
                visa pathways in more detail.
              </p>
            </div>
          </div>
        </section>

        <section id="decision-guide" className="py-10">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 lg:grid-cols-[0.95fr_1.15fr]">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Quick decision guide
              </h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-slate-700">
                Start with the question that best matches your situation.
              </p>
            </div>

            <div className="rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)]">
              <div className="space-y-3">
                {personas.map((persona) => (
                  <div
                    key={persona}
                    className="rounded-[16px] bg-[#f7f9fc] px-4 py-3 text-sm text-slate-700"
                  >
                    {persona}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[16px] bg-[#1f6fff] p-6 text-white shadow-[0_20px_52px_rgba(31,111,255,0.18)]">
                <h3 className="text-xl font-semibold leading-tight">
                  Know exactly what to do—before you take any official step.
                </h3>
                <p className="mt-3 text-sm leading-6 text-blue-50">
                  A proper visa decision flow should help users understand likely
                  eligibility, likely complexity, and the next logical step.
                </p>
                <div className="mt-5">
                  <a href="#" className="er-btn er-btn-secondary">
                    See your personalized visa plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid gap-6 lg:grid-cols-2">
              <article
                id="eu-blue-card"
                className="rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)]"
              >
                <h2 className="text-xl font-semibold text-slate-900">
                  EU Blue Card
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  One of the most structured employment-based pathways for
                  qualified professionals. Best suited for applicants with a
                  qualifying job offer and the right academic or professional
                  background.
                </p>
              </article>

              <article
                id="opportunity-card"
                className="rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)]"
              >
                <h2 className="text-xl font-semibold text-slate-900">
                  Opportunity Card
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  A route for people who want to come to Germany to search for
                  work. Opportunity Card (Chancenkarte) is especially relevant for
                  people without a job offer yet but with a profile that may
                  qualify under Germany’s points-based system.
                </p>
              </article>

              <article
                id="freelance-visa"
                className="rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)]"
              >
                <h2 className="text-xl font-semibold text-slate-900">
                  Freelance Visa
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Relevant for self-employed professionals who can show economic
                  viability, clients, and a credible business case for operating
                  in Germany.
                </p>
              </article>

              <article
                id="student-visa"
                className="rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)]"
              >
                <h2 className="text-xl font-semibold text-slate-900">
                  Student Visa
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Built for applicants entering Germany through higher education,
                  often with very different financial and documentation logic than
                  employment-based pathways.
                </p>
              </article>

              <article
                id="family-reunification"
                className="rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)] lg:col-span-2"
              >
                <h2 className="text-xl font-semibold text-slate-900">
                  Family Reunification
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Usually relevant where a spouse, parent, or child already has a
                  legal residence basis in Germany. The requirements depend
                  heavily on the sponsor’s status and the family relationship.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="requirements" className="py-10">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)]">
                <h2 className="text-xl font-semibold text-slate-900">
                  Job requirements
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Some pathways require a qualifying job offer, some do not. Where
                  employment is required, the job itself, your qualifications, and
                  the relationship between the two can all matter.
                </p>
              </div>

              <div className="rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)]">
                <h2 className="text-xl font-semibold text-slate-900">
                  Financial requirements
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Germany often wants to see that you can support yourself. The
                  evidence varies by pathway and may include salary, savings,
                  client income, blocked funds, or sponsor support.
                </p>
              </div>

              <div className="rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)] lg:col-span-2">
                <h2 className="text-xl font-semibold text-slate-900">
                  Health insurance requirements
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Health insurance is not a minor detail. It is often a core
                  application requirement. The exact standard can depend on
                  whether you are entering as an employee, student, freelancer, or
                  job seeker, and whether public or private coverage is
                  appropriate for your situation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="glossary" className="py-10">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Germany visa glossary
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {glossary.map((item) => (
                <div
                  key={item.term}
                  className="rounded-[16px] border border-[#d9e3f5] bg-white p-5 shadow-[0_10px_30px_rgba(22,50,79,0.06)]"
                >
                  <div className="font-semibold text-slate-900">{item.term}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {item.definition}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="long-term-path" className="py-10">
          <div className="mx-auto max-w-6xl px-5">
            <div className="rounded-[24px] border border-[#d9e3f5] bg-white px-6 py-8 shadow-[0_18px_48px_rgba(22,50,79,0.08)] md:px-8">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Long-term path to permanent residence and citizenship
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
                Choosing the right visa is not just about entry. Different
                pathways can affect how straightforward your long-term settlement
                path is, including permanent residence and, later, citizenship.
              </p>
            </div>
          </div>
        </section>

        <section className="py-6">
          <div className="mx-auto max-w-6xl px-5">
            <div className="rounded-[24px] bg-[#1f6fff] px-6 py-8 text-white shadow-[0_20px_52px_rgba(31,111,255,0.22)] md:px-8">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Not sure which Germany visa fits your case?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-50 md:text-base">
                The value is not just listing visa categories. It is helping users
                avoid delays, avoid rejection, and understand exactly what to do
                next.
              </p>
              <div className="mt-5">
                <a href="#" className="er-btn er-btn-secondary">
                  Preview your visa plan
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-10">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              FAQ
            </h2>

            <div className="mt-6 space-y-4">
              {faq.map((item) => (
                <div
                  key={item.q}
                  className="rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)]"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.q}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sources" className="pb-14 pt-10">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Sources
            </h2>

            <div className="mt-6 rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)]">
              <ul className="space-y-3 text-sm leading-6 text-slate-700">
                <li>BAMF — Federal Office for Migration and Refugees</li>
                <li>Make it in Germany – by the Federal Republic of Germany</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer {...settings} />
    </>
  );
}