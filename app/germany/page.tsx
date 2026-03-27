import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { fetcher } from "@/lib/sanity/client";
import { buildCountryMetadata } from "@/lib/seo/countryMetadata";

export const metadata: Metadata = buildCountryMetadata("Germany");

async function getSettingsData() {
  const data = await fetcher([
    `*[_type == "settings"][0]`,
    {},
  ]);
  return data;
}

export default async function GermanyPage() {
  const settings = await getSettingsData();

  const pathways = [
    {
      title: "Move through a job offer",
      text: "For many Americans, the clearest path starts with qualified employment in Germany and a work-based residence permit.",
    },
    {
      title: "Move first, then search for work",
      text: "Some people enter Germany through a job-seeking route and then transition into a longer-term work permit once they have the right offer.",
    },
    {
      title: "Freelance or self-employed route",
      text: "Germany can also work for certain freelancers and self-employed professionals, but the approval logic is different and usually less standardized.",
    },
    {
      title: "Study or family route",
      text: "For some people, the realistic move is based on study, family reunification, or another non-work residence pathway.",
    },
  ];

  const visaCards = [
    {
      title: "EU Blue Card",
      text: "A strong work-based residence option for highly qualified professionals with a qualifying salary and matching role.",
      href: "/germany/visa/eu-blue-card",
    },
    {
      title: "Opportunity Card",
      text: "A route for people who want to move to Germany first and search for qualified work under Germany’s points-based system.",
      href: "/germany/visa",
    },
    {
      title: "Freelance Visa",
      text: "A possible route for freelancers and self-employed professionals who can show a viable activity in Germany.",
      href: "/germany/visa",
    },
    {
      title: "Student Visa",
      text: "A relevant path for people entering Germany through a university or other academic route.",
      href: "/germany/visa",
    },
  ];

  const questions = [
    {
      question: "Can Americans move to Germany without applying from the U.S. first?",
      answer:
        "In many cases, yes. U.S. citizens often have more flexibility than other nationalities, but the exact process still depends on the visa route and your timing.",
    },
    {
      question: "What is the easiest Germany visa route for Americans?",
      answer:
        "There is no single easiest route for everyone. The best option depends on your job situation, qualifications, income, family status, and whether you already have a concrete plan in Germany.",
    },
    {
      question: "Do you need to speak German before moving?",
      answer:
        "Not always. Some visa routes do not require German at the start, but language can still affect everyday life, long-term settlement, and how smoothly your move works in practice.",
    },
  ];

  const sources = [
    "German Federal Foreign Office",
    "Make it in Germany",
    "German missions in the United States",
    "Federal Office for Migration and Refugees (BAMF)",
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
            / Germany
          </div>

          {/* HERO */}
          <section className="pb-6 pt-2">
            <div className="rounded-[24px] border border-[#d9e3f5] bg-white px-6 py-8 shadow-[0_18px_48px_rgba(22,50,79,0.08)] md:px-10 md:py-10">
              <div className="grid gap-8 lg:grid-cols-[1.65fr_0.95fr]">
                <div>
                  <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f4ec9]">
                    Germany relocation guide
                  </div>

                  <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-slate-900 md:text-5xl">
                    Moving to Germany as an American
                  </h1>

                  <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 md:text-lg">
                    Germany is one of the most realistic European destinations
                    for Americans who want a structured path through work,
                    study, family, or long-term relocation planning.
                  </p>

                  <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
                    This page helps you understand the main pathways, what
                    authorities actually check, and which Germany visa route may
                    fit your case best.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href="/germany/visa" className="er-btn er-btn-primary">
                      Explore Germany visa options
                    </a>
                    <a
                      href="/germany/visa/eu-blue-card"
                      className="er-btn er-btn-secondary"
                    >
                      See EU Blue Card example
                    </a>
                  </div>
                </div>

                <aside className="rounded-[16px] border border-[#d9e3f5] bg-[linear-gradient(180deg,#f8fbff_0%,#edf4ff_100%)] p-6 shadow-[0_12px_30px_rgba(22,50,79,0.06)]">
                  <div className="text-sm font-semibold text-[#0f4ec9]">
                    Verified immigration information
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    This page is designed as a structured overview of how
                    Americans typically move to Germany and which pathways are
                    most realistic.
                  </p>

                  <div className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                    <div>
                      <span className="font-semibold text-slate-900">
                        Main focus:
                      </span>{" "}
                      Visa pathways, practical fit, and what to check early
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900">
                        Best for:
                      </span>{" "}
                      Americans comparing realistic Germany routes
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900">
                        Use this page for:
                      </span>{" "}
                      Understanding the big picture before choosing a visa
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          {/* QUICK FACTS */}
          <section className="pb-4">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-[16px] border border-[#d9e3f5] bg-white p-5 shadow-[0_10px_30px_rgba(22,50,79,0.06)]">
                <div className="text-base font-semibold text-slate-900">
                  Germany offers multiple realistic pathways
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  The right route depends on your job situation,
                  qualifications, family status, and long-term goals.
                </p>
              </div>

              <div className="rounded-[16px] border border-[#d9e3f5] bg-white p-5 shadow-[0_10px_30px_rgba(22,50,79,0.06)]">
                <div className="text-base font-semibold text-slate-900">
                  Work-based routes are often the clearest
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  For many Americans, the strongest Germany option starts with
                  qualified employment and a matching residence permit.
                </p>
              </div>

              <div className="rounded-[16px] border border-[#d9e3f5] bg-white p-5 shadow-[0_10px_30px_rgba(22,50,79,0.06)]">
                <div className="text-base font-semibold text-slate-900">
                  Preparation matters more than people expect
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Delays often come from weak planning, missing documents, or
                  misunderstanding which route actually fits.
                </p>
              </div>
            </div>
          </section>

          {/* PATHWAYS */}
          <section className="py-10">
            <div className="mb-6 max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                How moving to Germany works
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-700">
                Most successful moves start with the right pathway — not with
                paperwork. The first question is which legal route makes sense
                for your situation.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {pathways.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)]"
                >
                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* VISA OVERVIEW */}
          <section className="py-10">
            <div className="mb-6 max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Germany visa options for Americans
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-700">
                These are the main visa and residence routes most relevant for
                Americans planning a move to Germany.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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
                    Explore route →
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)]">
              <h3 className="text-xl font-semibold text-slate-900">
                What to do first
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Start by comparing the route that best matches your situation.
                Don’t begin with document collection before you are clear on the
                legal path you are actually trying to use.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="py-6">
            <div className="rounded-[24px] bg-[#1f6fff] px-6 py-8 text-white shadow-[0_20px_52px_rgba(31,111,255,0.22)] md:px-8">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Know exactly what to do before you apply
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-50 md:text-base">
                The right value is not just learning about Germany visas. It is
                understanding which route fits you, how hard it will be, and
                what to do next.
              </p>
              <div className="mt-5">
                <a href="/germany/visa" className="er-btn er-btn-secondary">
                  Explore Germany visa options
                </a>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-10">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Key questions about moving to Germany
            </h2>

            <div className="mt-6 space-y-4">
              {questions.map((item) => (
                <div
                  key={item.question}
                  className="rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)]"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SOURCES */}
          <section className="pb-14 pt-10">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Sources &amp; Verification
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
              EuropeRelocator content is reviewed against official government
              and institutional sources. We aim to keep this page structured,
              practical, and up to date.
            </p>
            <p className="mt-3 text-sm text-slate-500">
              Last fact-checked: March 2026
            </p>

            <div className="mt-6 rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)]">
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-900">
                Monitored sources
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                {sources.map((source) => (
                  <li key={source}>{source}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </main>

      <Footer {...settings} />
    </>
  );
}