import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { fetcher } from "@/lib/sanity/client";

export const metadata: Metadata = {
  title:
    "Germany EU Blue Card for Americans 2026: Salary, Requirements & Eligibility | EuropeRelocator",
  description:
    "Germany EU Blue Card for Americans: understand salary thresholds, eligibility, and how to avoid common mistakes. See your personalized visa plan before you apply.",
  openGraph: {
    title:
      "Germany EU Blue Card for Americans 2026 – Requirements, Salary & Eligibility",
    description:
      "Understand if you qualify for the Germany EU Blue Card, avoid common mistakes, and see your personalized visa plan before applying.",
    type: "article",
  },
};

async function getSettingsData() {
  const data = await fetcher([
    `*[_type == "settings"][0]`,
    {},
  ]);
  return data;
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Germany EU Blue Card for Americans 2026",
  author: {
    "@type": "Person",
    name: "Sebastian Mueller",
  },
  description:
    "Germany EU Blue Card for Americans: understand salary thresholds, eligibility, and avoid common mistakes.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://europerelocator.com/germany/visa/eu-blue-card",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can an American get a Germany EU Blue Card?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if the applicant has a qualifying German job offer, meets the salary threshold, and has a matching qualification.",
      },
    },
    {
      "@type": "Question",
      name: "Do you need to speak German first?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not usually for the Blue Card itself, but German is important later for settlement and daily life.",
      },
    },
    {
      "@type": "Question",
      name: "What jobs qualify for the EU Blue Card in Germany?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many professional roles can qualify if they meet the salary threshold and match the applicant’s qualifications. Common examples include IT, engineering, healthcare, and other highly skilled fields.",
      },
    },
    {
      "@type": "Question",
      name: "What if you do not qualify for the EU Blue Card?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You may still qualify for another German residence route, such as the Opportunity Card or another work visa, depending on your background and plans.",
      },
    },
  ],
};

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

export default async function EuBlueCardPage() {
  const settings = await getSettingsData();

  return (
    <>
      <Navbar {...settings} />

      <Script
        id="eu-blue-card-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="eu-blue-card-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
            /{" "}
            <a href="/germany/visa" className="hover:underline">
              Visa
            </a>{" "}
            / EU Blue Card
          </div>

          <section className="pb-6 pt-2" id="top">
            <div className="rounded-[24px] border border-[#d9e3f5] bg-white px-6 py-8 shadow-[0_18px_48px_rgba(22,50,79,0.08)] md:px-10 md:py-10">
              <div className="mb-4 inline-flex rounded-full border border-[#cfe0ff] bg-[#eef4ff] px-4 py-2 text-sm font-semibold text-[#0f4ec9]">
                Verified immigration information • Germany EU Blue Card • 2026 rules
              </div>

              <div className="grid gap-8 lg:grid-cols-[1.55fr_0.95fr]">
                <div>
                  <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f4ec9]">
                    Germany Work Visa Guide
                  </div>

                  <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-slate-900 md:text-5xl">
                    Germany EU Blue Card for Americans
                  </h1>

                  <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 md:text-lg">
                    The EU Blue Card is one of the strongest work-based residence
                    options for highly qualified Americans moving to Germany. In
                    reality, this comes down to three things: a qualifying
                    salary, a matching qualification, and a real job offer. It
                    is also one of the clearest paths to long-term residence in
                    Germany.
                  </p>

                  <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
                    For many applicants, this is one of the most predictable
                    work visa routes — but only if all three pieces clearly fit
                    together.
                  </p>

                  <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                    This page shows you how to tell if you qualify — and what
                    can go wrong.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="#eligibility"
                      className="inline-flex items-center justify-center rounded-xl bg-[#1f6fff] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f4ec9]"
                    >
                      See your personalized visa plan
                    </a>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {[
                      ["#quick-facts", "Quick facts"],
                      ["#eligibility", "Eligibility"],
                      ["#salary", "Salary rules"],
                      ["#recognition", "Qualification"],
                      ["#health-insurance", "Health insurance"],
                      ["#friction", "Common problems"],
                      ["#faq", "FAQ"],
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

                <aside className="rounded-[16px] border border-[#d9e3f5] bg-[linear-gradient(180deg,#f8fbff_0%,#edf4ff_100%)] p-6 shadow-[0_12px_30px_rgba(22,50,79,0.06)]">
                  <div className="text-sm font-semibold text-[#0f4ec9]">
                    Why people choose it
                  </div>

                  <div className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-slate-900">
                    A structured path for qualified professionals
                  </div>

                  <div className="mt-5 space-y-3">
                    <div className="rounded-[16px] border border-[#d9e3f5] bg-white p-4">
                      <div className="text-sm font-semibold text-slate-900">
                        Fast route to settlement
                      </div>
                      <div className="mt-1 text-sm leading-6 text-slate-700">
                        Permanent residence can become possible after 27 months,
                        or 21 months with stronger German.
                      </div>
                    </div>

                    <div className="rounded-[16px] border border-[#d9e3f5] bg-white p-4">
                      <div className="text-sm font-semibold text-slate-900">
                        Strong family pathway
                      </div>
                      <div className="mt-1 text-sm leading-6 text-slate-700">
                        Spouses and children can usually join, and the spouse
                        can generally work in Germany.
                      </div>
                    </div>

                    <div className="rounded-[16px] border border-[#d9e3f5] bg-white p-4">
                      <div className="text-sm font-semibold text-slate-900">
                        Approval follows clear rules
                      </div>
                      <div className="mt-1 text-sm leading-6 text-slate-700">
                        If your case fits the salary, qualification, and job
                        framework, the visa is often more predictable than other
                        routes.
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <section id="quick-facts" className="py-6">
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f4ec9]">
                  Salary
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  What salary is required for the EU Blue Card in Germany?
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  In 2026, most applicants need a gross annual salary of at
                  least €50,700. A reduced threshold of €45,934 can apply to
                  shortage occupations, certain graduates, and some IT
                  specialists.
                </p>
              </Card>

              <Card>
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f4ec9]">
                  Timeline
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  How long does it take to get an EU Blue Card in Germany?
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Processing time varies, but many applicants complete the full
                  process within a few months, depending on appointment
                  availability, document readiness, and whether they apply from
                  abroad or inside Germany.
                </p>
              </Card>

              <Card>
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f4ec9]">
                  Permanent residence
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  How fast can you get permanent residency with the EU Blue Card?
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  EU Blue Card holders in Germany can qualify for permanent
                  residency after 27 months, or after 21 months with sufficient
                  German language skills at the B1 level.
                </p>
              </Card>
            </div>

            <div className="mt-10">
              <SectionHeading
                title="Germany EU Blue Card – Quick facts (2026)"
                intro="These short answers are written in a featured-snippet style so users can understand the visa quickly before reading the full page."
              />
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <Card>
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f4ec9]">
                  What is it?
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  What is the EU Blue Card in Germany?
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  The EU Blue Card is a residence permit for highly qualified
                  non-EU citizens who have a qualifying job offer in Germany and
                  meet minimum salary and qualification rules. For many American
                  professionals, it is one of the strongest long-term work-based
                  pathways into Germany.
                </p>
              </Card>

              <Card>
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f4ec9]">
                  Core rule
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Who qualifies for the EU Blue Card?
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Most applicants need a German job offer of at least six
                  months, a role that matches their qualification, and a salary
                  that meets the current threshold. In some cases, shortage
                  occupations, recent graduates, and certain IT specialists can
                  qualify under more flexible rules.
                </p>
              </Card>

              <Card>
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f4ec9]">
                  Main advantage
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Why is the EU Blue Card attractive?
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  The Germany EU Blue Card combines a clearer work-visa
                  structure with a faster path to settlement than many other
                  residence routes. It is also family-friendly and usually
                  easier to understand than more discretionary immigration
                  categories.
                </p>
              </Card>
            </div>
          </section>

          <section className="py-10">
            <Card className="shadow-[0_18px_48px_rgba(22,50,79,0.08)]">
              <SectionHeading
                label="EU framework + Germany rules"
                title="What part is EU-level, and what part is Germany-specific?"
                intro="Although it is called an EU Blue Card, what matters is how Germany applies the rules in real cases. You do not apply to “the EU.” You apply under the national rules of the country where you will live and work. In Germany, this means the salary thresholds, how your degree is assessed, the application process, and the local permit are all handled nationally."
              />

              <div className="grid gap-5 md:grid-cols-2">
                <Card className="shadow-none">
                  <h3 className="text-xl font-semibold text-slate-900">
                    EU-level framework
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                    <li>Common residence category for highly qualified non-EU professionals</li>
                    <li>Shared legal structure across participating EU countries</li>
                    <li>Mobility logic and family advantages built into the overall concept</li>
                    <li>Broadly recognized as a premium skilled-work route</li>
                  </ul>
                </Card>

                <Card className="shadow-none">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Germany-specific implementation
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                    <li>Germany sets the annual salary thresholds that actually apply in Germany</li>
                    <li>Germany decides how degree comparability and professional recognition work in practice</li>
                    <li>Germany controls appointments, document requirements, and local residence-permit issuance</li>
                    <li>Processing reality still depends on the local authority and route you use</li>
                  </ul>
                </Card>
              </div>
            </Card>
          </section>

          <section id="eligibility" className="py-10">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <Card className="shadow-[0_18px_48px_rgba(22,50,79,0.08)]">
                <SectionHeading
                  label="Eligibility snapshot"
                  title="Do you look like a strong Blue Card candidate?"
                  intro="For most Americans, the Germany EU Blue Card is the best fit when the move is clearly job-driven. It’s not about how much you want to move — it’s about meeting the requirements authorities actually check."
                />
                <ul className="space-y-3 text-sm leading-6 text-slate-700">
                  <li>You have a concrete job offer or signed employment contract in Germany.</li>
                  <li>The contract or offer covers at least six months.</li>
                  <li>Your role is qualified employment and generally matches your degree or equivalent qualification.</li>
                  <li>Your salary meets the official threshold for your category.</li>
                  <li>If your profession is regulated, you can show the required licence or authorization path.</li>
                  <li>You can complete the visa and residence-permit process with valid documents and health insurance.</li>
                </ul>
              </Card>

              <div className="space-y-4">
                <Card className="bg-[#eef4ff]">
                  <div className="text-sm font-semibold text-slate-900">
                    Strong fit
                  </div>
                  <div className="mt-2 text-sm leading-6 text-slate-700">
                    You already have a German employer, qualifying education,
                    and salary clearly above the threshold.
                  </div>
                </Card>

                <Card className="bg-[#f5f8ff]">
                  <div className="text-sm font-semibold text-slate-900">
                    Possible fit with extra review
                  </div>
                  <div className="mt-2 text-sm leading-6 text-slate-700">
                    Your salary is close to the threshold, your degree-job match
                    is not obvious, or your qualification still needs formal
                    recognition.
                  </div>
                </Card>

                <Card>
                  <div className="text-sm font-semibold text-slate-900">
                    Probably not the right visa yet
                  </div>
                  <div className="mt-2 text-sm leading-6 text-slate-700">
                    You do not have a concrete job offer, or the offer does not
                    meet the required salary or qualification logic.
                  </div>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-10">
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <SectionHeading
                  label="Visa Success Plan"
                  title="Why EU Blue Card applications can fail - and how to avoid it"
                  intro="The EU Blue Card looks straightforward on paper, but most delays and rejections happen in the details: unclear salary structure, weak qualification match, missing recognition, or incomplete documents."
                />
                <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
                  EuropeRelocator is not just an information guide. We ask you a
                  few focused questions about your background and your plans,
                  and you quickly see where you stand and what might cause
                  problems.
                </p>
                <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
                  From there, you’ll see exactly what to do next. A practical
                  plan shows what matters for your case and what to prepare
                  before applying.
                </p>

                <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-700">
                  <li><strong>Understand your real eligibility</strong> before applying</li>
                  <li><strong>Identify risks early</strong> (salary, recognition, contract issues)</li>
                  <li><strong>Know what to prepare</strong> before moving forward</li>
                  <li><strong>Go into the next step prepared</strong> instead of guessing</li>
                </ul>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-[520px] rounded-[20px] border border-[#cfe0ff] bg-[#f5f7fb] p-7 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                  <div className="mb-2 text-sm text-slate-600">
                    Get your step-by-step plan
                  </div>
                  <h2 className="text-[26px] font-semibold tracking-tight text-[#1f6fff]">
                    VISA SUCCESS PLAN
                  </h2>

                  <div className="my-5 border-t border-[#cfe0ff]" />

                  <div className="rounded-[16px] border border-[#cfe0ff] bg-white p-4 font-semibold text-slate-900">
                    A structured plan to improve your chances and avoid mistakes.
                  </div>

                  <div className="mt-5 space-y-4">
                    {[
                      ["Eligibility assessment", "Know exactly where you stand before applying"],
                      ["Complexity score & risk insights", "Understand difficulty and potential issues"],
                      ["Step-by-step roadmap", "Clear guidance on what to do and when"],
                      ["Document checklist", "Only what you actually need to prepare"],
                      ["Timeline estimate", "Plan your application with confidence"],
                      ["Critical warnings", "Avoid delays and common rejection reasons"],
                    ].map(([title, text]) => (
                      <div key={title} className="border-t border-[#e3ecf7] pt-3">
                        <div className="font-semibold text-slate-900">✓ {title}</div>
                        <div className="text-sm leading-6 text-slate-600">{text}</div>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#top"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#1f6fff] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#0f4ec9]"
                  >
                    Start your personal visa plan
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="salary" className="py-10">
            <SectionHeading
              title="Salary thresholds and requirements"
              intro="This is often the point where applicants either qualify — or they do not. The Germany EU Blue Card can be generous compared with some other permits, but the salary threshold remains the hardest gate in many real cases."
            />

            <div className="grid gap-5 md:grid-cols-3">
              <Card>
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f4ec9]">
                  Regular threshold
                </div>
                <h3 className="text-3xl font-semibold text-slate-900">€50,700</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  gross annual salary in 2026
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  This is the standard threshold for most Germany EU Blue Card cases.
                </p>
              </Card>

              <Card>
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f4ec9]">
                  Reduced threshold
                </div>
                <h3 className="text-3xl font-semibold text-slate-900">€45,934.20</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  gross annual salary in 2026
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  This lower threshold can apply to shortage occupations, some
                  recent graduates, and certain IT-specialist cases.
                </p>
              </Card>

              <Card>
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f4ec9]">
                  Minimum contract
                </div>
                <h3 className="text-3xl font-semibold text-slate-900">6+ months</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  minimum job-offer duration
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Your employment contract or binding offer generally needs to
                  cover at least six months.
                </p>
              </Card>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <Card>
                <h3 className="text-xl font-semibold text-slate-900">
                  Who can use the lower threshold?
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                  <li>Applicants in recognised shortage occupations</li>
                  <li>Certain recent graduates and newer labour-market entrants</li>
                  <li>Eligible IT specialists using the experience-based pathway</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-slate-900">
                  What people often misunderstand
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                  <li>Salary must usually be documented clearly in the fixed compensation structure</li>
                  <li>Being close to the threshold does not usually solve the problem</li>
                  <li>Strong demand from the employer does not replace the salary rule</li>
                  <li>Some candidates qualify for another German work permit even if the Blue Card does not fit</li>
                </ul>
              </Card>
            </div>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">
              Most people do not fail this visa because of their background —
              they fail because the salary or contract details do not meet the
              exact requirement.
            </p>
          </section>

          <section id="recognition" className="py-10">
            <SectionHeading
              title="Qualification, degree recognition, and the IT route"
              intro="This is where a lot of otherwise strong candidates run into problems. The issue usually isn’t your background or ability. It’s whether your profile fits how Germany assesses your degree for the Blue Card."
            />

            <p className="mb-6 max-w-3xl text-sm leading-6 text-slate-600">
              This is one of the most common points where strong candidates get
              surprised — and it’s completely normal.
            </p>

            <div className="grid gap-5 md:grid-cols-3">
              <Card>
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f4ec9]">
                  Standard route
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Degree matches the job
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  In the standard case, Germany expects the role in Germany to
                  align with your academic qualification or comparable
                  professional route.
                </p>
              </Card>

              <Card>
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f4ec9]">
                  Degree assessment
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Comparability matters
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Many applicants need clear proof that their foreign degree is
                  comparable to a German qualification, or another valid
                  recognition basis.
                </p>
              </Card>

              <Card>
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f4ec9]">
                  Special route
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  IT without a formal degree
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Germany also allows a route for certain IT specialists without
                  a degree if they can show enough recent professional
                  experience and meet the salary threshold.
                </p>
              </Card>
            </div>

            <div className="mt-6 rounded-[20px] border border-[#bfd6ff] bg-[linear-gradient(180deg,#f7faff_0%,#eef4ff_100%)] p-6 shadow-[0_20px_52px_rgba(31,111,255,0.08)]">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f4ec9]">
                Database check
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Check your degree in the anabin database early
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                For many applicants, the key step is checking whether your
                university and degree appear correctly in Germany’s anabin
                database. If they are clearly listed there, things are usually
                much easier. If not, you may need a separate recognition or
                comparability process.
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <li>Check both the university and the specific degree — not just one of them</li>
                <li>If the result is unclear, expect extra work before the visa application is ready</li>
                <li>This is one of the most important checks to do before relying on a Blue Card plan</li>
              </ul>
            </div>

            <div className="mt-6 rounded-[20px] border border-[#d9e3f5] bg-[linear-gradient(180deg,#f9fbff_0%,#eef4ff_100%)] p-6 shadow-[0_12px_30px_rgba(22,50,79,0.06)]">
              <h3 className="text-xl font-semibold text-slate-900">
                Why this causes delays
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Even strong candidates can run into problems when the
                degree-to-role fit is unclear or recognition is missing.
              </p>
            </div>
          </section>

          <section id="health-insurance" className="py-10">
            <Card className="shadow-[0_18px_48px_rgba(22,50,79,0.08)]">
              <SectionHeading
                label="Health insurance"
                title="Health insurance is mandatory — and part of the approval process"
                intro="You need valid health insurance when your visa or residence permit is approved. If you apply from abroad, you usually need temporary coverage for entry. Once your job starts, you move into Germany’s public or private system. If this transition is unclear, it can delay approval."
              />

              <div className="grid gap-5 md:grid-cols-3">
                <Card className="shadow-none">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Applying from abroad
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    If you apply from outside Germany, you usually need
                    short-term health insurance that is accepted for visa
                    issuance and entry into Germany. This bridges the gap until
                    your employment-based insurance starts.
                  </p>
                </Card>

                <Card className="shadow-none">
                  <h3 className="text-xl font-semibold text-slate-900">
                    After your job starts
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    Once you start work in Germany, you usually move into
                    Germany’s public system or an accepted private plan,
                    depending on your income and eligibility.
                  </p>
                </Card>

                <Card className="shadow-none">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Why this matters
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    Insurance problems can delay visa approval,
                    residence-permit issuance, and family planning after
                    arrival.
                  </p>
                </Card>
              </div>

              <div className="mt-6 rounded-[20px] border border-[#d9e6f3] bg-[linear-gradient(180deg,#f7faff_0%,#eef4ff_100%)] p-6 shadow-[0_20px_52px_rgba(31,111,255,0.06)]">
                <h3 className="text-xl font-semibold text-slate-900">
                  Public vs. private health insurance in Germany
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Germany has two main systems: public (statutory) and private
                  insurance. Most employees below a certain income level are
                  automatically placed in the public system through their
                  employer. Higher earners may be able to choose private
                  insurance, but that choice can be harder to reverse later.
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                  <li>
                    <strong>Public insurance (GKV):</strong> the standard option
                    for most employees, with contributions based mainly on income
                  </li>
                  <li>
                    <strong>Private insurance (PKV):</strong> based more on age,
                    health profile, and tariff choice, with different long-term
                    cost dynamics
                  </li>
                  <li>
                    For the Blue Card, what matters first is that your insurance
                    is accepted and correctly timed in the application process
                  </li>
                </ul>
              </div>
            </Card>
          </section>

          <section className="py-10">
            <Card className="shadow-[0_18px_48px_rgba(22,50,79,0.08)]">
              <SectionHeading
                label="Comparison"
                title="EU Blue Card vs Opportunity Card"
                intro="If you do not yet have a qualifying job offer, the Opportunity Card may be the better starting point. You can also browse the Germany visa overview if you want to compare routes first."
              />

              <div className="grid gap-5 md:grid-cols-2">
                <Card className="shadow-none">
                  <h3 className="text-xl font-semibold text-slate-900">
                    EU Blue Card
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                    <li>Requires a job offer with salary threshold</li>
                    <li>Clear path to permanent residence</li>
                    <li>Best for qualified professionals with employment</li>
                  </ul>
                </Card>

                <Card className="shadow-none">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Opportunity Card
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                    <li>No job offer required initially</li>
                    <li>Points-based system</li>
                    <li>Best for job seekers entering the German market</li>
                  </ul>
                </Card>
              </div>
            </Card>
          </section>

          <section className="py-10">
            <Card className="shadow-[0_18px_48px_rgba(22,50,79,0.08)]">
              <SectionHeading
                label="A textbook fit for a Blue Card applicant"
                title="Example: Software engineer from the U.S."
                intro="A typical strong Blue Card case might look like this:"
              />
              <Card className="shadow-none">
                <ul className="space-y-3 text-sm leading-6 text-slate-700">
                  <li>U.S.-based software engineer with a bachelor’s degree in computer science</li>
                  <li>Job offer from a Berlin tech company</li>
                  <li>Salary above the reduced threshold for shortage occupations</li>
                  <li>No major recognition issues (degree listed in anabin)</li>
                </ul>
                <p className="mt-4 text-sm leading-6 text-slate-700">
                  In this scenario, the Blue Card is usually the most direct and
                  predictable route into Germany.
                </p>
              </Card>
            </Card>
          </section>

          <section className="py-6">
            <div className="rounded-[24px] bg-[#1f6fff] px-6 py-8 text-white shadow-[0_20px_52px_rgba(31,111,255,0.22)] md:px-8">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
                Your personal plan
              </div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                We make it simple for you
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-50 md:text-base">
                You don’t have to figure this out on your own. We guide you step
                by step, so you always know what to do next. This turns complex
                requirements into a clear plan you can actually follow.
              </p>
              <div className="mt-5">
                <a
                  href="#top"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#1f6fff] transition hover:bg-slate-100"
                >
                  Start your personal visa plan
                </a>
              </div>
            </div>
          </section>

          <section id="friction" className="py-10">
            <SectionHeading
              title="Common problems and reasons applications fail"
              intro="This is where many applications start to run into problems. Not every issue leads to a rejection, but each can slow the process or trigger additional questions."
            />

            <p className="mb-6 max-w-3xl text-sm leading-6 text-slate-600">
              If one of these applies to your situation, it is usually worth
              looking at your case more closely before moving forward.
            </p>

            <div className="grid gap-5 md:grid-cols-3">
              {[
                [
                  "High impact",
                  "The job does not clearly match the qualification",
                  "If the degree-to-role fit is unclear, applications often face extra questions.",
                ],
                [
                  "Very common",
                  "The salary just misses the threshold",
                  "If the salary is below the threshold, the Blue Card usually won’t work.",
                ],
                [
                  "Case-specific",
                  "Recognition or licensing adds a second layer",
                  "Unclear recognition can turn a simple case into a more complex process.",
                ],
              ].map(([tag, title, text]) => (
                <Card key={title}>
                  <div className="mb-3 inline-flex rounded-full bg-[#fff1f1] px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#c24b4b]">
                    {tag}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{text}</p>
                </Card>
              ))}
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <Card>
                <h3 className="text-xl font-semibold text-slate-900">
                  U.S.-specific reality for Americans
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                  <li>You may have a strong profile on paper but still need Germany-specific document handling</li>
                  <li>Higher U.S. salary expectations do not change the German salary threshold requirement</li>
                  <li>Private health-insurance assumptions from the U.S. do not map cleanly onto German requirements</li>
                  <li>Americans often underestimate the required steps and administrative process after arrival</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-slate-900">
                  Changing jobs early
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Even when the Blue Card is approved, early changes in
                  employment can create extra scrutiny. Stability in the first
                  phase of the move generally reduces complications and
                  additional scrutiny.
                </p>
              </Card>
            </div>
          </section>

          <section className="py-10">
            <Card className="shadow-[0_18px_48px_rgba(22,50,79,0.08)]">
              <SectionHeading
                label="Family reunification"
                title="Can your spouse and children join you?"
                intro="In many cases, yes. The Blue Card is one of the more family-friendly Germany work routes, which is one reason it is so attractive for longer-term moves."
              />

              <div className="grid gap-5 md:grid-cols-2">
                <Card className="shadow-none">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Spouse
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    A spouse can generally join you through family reunification.
                    Housing, insurance, and household planning still need to be
                    prepared carefully.
                  </p>
                </Card>

                <Card className="shadow-none">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Children
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    Minor children can usually join as well, provided the
                    reunification requirements are satisfied and the
                    documentation chain is prepared correctly.
                  </p>
                </Card>
              </div>
            </Card>
          </section>

          <section className="py-10">
            <Card className="shadow-[0_18px_48px_rgba(22,50,79,0.08)]">
              <SectionHeading
                label="Long-term path"
                title="What happens after you arrive?"
              />

              <div className="grid gap-5 md:grid-cols-3">
                <Card className="shadow-none">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Residence permit validity
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    The Blue Card is typically issued for the duration of your
                    employment contract plus a buffer period, up to the route’s
                    maximum.
                  </p>
                </Card>

                <Card className="shadow-none">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Settlement permit
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    In Germany, settlement can become possible after 27 months
                    with A1 German, or after 21 months with B1 German, if the
                    other conditions are met.
                  </p>
                </Card>

                <Card className="shadow-none">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Naturalization pathway
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    The Blue Card is not citizenship, but it can be a clean path
                    to long-term residence and, later, citizenship.
                  </p>
                </Card>
              </div>
            </Card>
          </section>

          <section className="py-10">
            <SectionHeading
              title="Visa dictionary"
              intro="Useful German terms that often appear in Blue Card applications and immigration appointments."
            />

            <div className="grid gap-5 md:grid-cols-3">
              <Card>
                <div className="text-sm font-semibold text-slate-900">
                  Blaue Karte EU
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  German term for the EU Blue Card.
                </p>
              </Card>

              <Card>
                <div className="text-sm font-semibold text-slate-900">
                  Ausländerbehörde
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Local immigration authority where your residence permit is
                  typically issued after arrival.
                </p>
              </Card>

              <Card>
                <div className="text-sm font-semibold text-slate-900">
                  Anmeldung
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Address registration in Germany, often required early after
                  moving into a residence.
                </p>
              </Card>
            </div>
          </section>

          <section id="faq" className="py-10">
            <SectionHeading
              title="Germany EU Blue Card FAQ"
              intro="Short, direct answers to the most common Blue Card questions."
            />

            <div className="grid gap-5 md:grid-cols-2">
              {[
                [
                  "Can an American get a Germany EU Blue Card?",
                  "Yes, if the applicant has a qualifying German job offer, the right salary level, and a matching qualification or another accepted pathway.",
                ],
                [
                  "Do you need to speak German first?",
                  "Not usually as a basic Blue Card requirement. But German matters later for settlement, daily life, and some regulated professions or employers.",
                ],
                [
                  "What jobs qualify for the EU Blue Card in Germany?",
                  "Many professional roles can qualify if they meet the salary threshold and match your qualifications. Common examples include IT, engineering, healthcare, and other highly skilled fields.",
                ],
                [
                  "Is the EU Blue Card better than a normal work visa?",
                  "Often yes for qualified professionals, especially because of the long-term residence benefits and structured family advantages. But it still depends on salary and qualification fit.",
                ],
                [
                  "What if you do not qualify?",
                  "You may still qualify for another German work residence route. A good visa system should show both your best-fit option and your next options, such as the Opportunity Card.",
                ],
                [
                  "Can you apply from inside Germany?",
                  "In some cases, yes. U.S. citizens often have more flexibility than many other nationalities, but the exact route still depends on timing, documents, and local authority practice.",
                ],
              ].map(([q, a]) => (
                <Card key={q}>
                  <h3 className="text-lg font-semibold text-slate-900">{q}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{a}</p>
                </Card>
              ))}
            </div>
          </section>

          <section className="py-6">
            <div className="rounded-[24px] bg-[#1f6fff] px-6 py-8 text-white shadow-[0_20px_52px_rgba(31,111,255,0.22)] md:px-8">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
                Next step
              </div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Know exactly what to do next
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-50 md:text-base">
                We guide you through the right questions, show you where you
                stand, and turn the rules into a step-by-step plan you can
                actually follow.
              </p>
              <div className="mt-5">
                <a
                  href="#top"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#1f6fff] transition hover:bg-slate-100"
                >
                  Start your personal visa plan
                </a>
              </div>
            </div>
          </section>

          <section className="pb-14 pt-10">
            <Card className="shadow-[0_18px_48px_rgba(22,50,79,0.08)]">
              <SectionHeading
                label="Sources & verification"
                title="Page verification notes"
              />

              <Card className="mb-5 shadow-none">
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f4ec9]">
                  Written by
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Sebastian Mueller
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  German-American entrepreneur with 20+ years of experience
                  living and working in both the U.S. and Germany. Founder of
                  EuropeRelocator, focused on building a structured, verified
                  relocation system for Americans moving to Europe.
                </p>
              </Card>

              <div className="space-y-3 text-sm leading-6 text-slate-700">
                <div>
                  Primary source base: official Germany immigration guidance,
                  federal immigration information portals, and EU-level Blue
                  Card framework guidance.
                </div>
                <div>
                  The 2026 salary figures shown here are intentionally treated
                  as current-year reference numbers and should be updated
                  annually in the production version.
                </div>
              </div>
            </Card>
          </section>
        </div>
      </main>

      <Footer {...settings} />
    </>
  );
}