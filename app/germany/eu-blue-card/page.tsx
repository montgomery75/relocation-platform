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
  const data = await fetcher([`*[_type == "settings"][0]`, {}]);
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
      name: "Can Americans apply for the EU Blue Card in Germany?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Americans can qualify if they meet the Blue Card rules. In many cases, U.S. citizens can enter Germany without first getting a visa and then apply locally, but they still need to meet the full legal requirements for the Blue Card itself.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need German language skills for the EU Blue Card?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not always for initial approval. Many Blue Card jobs, especially in international companies, do not require German at the start. But German can matter for daily life and for the faster settlement-permit path: A1 can qualify you after 27 months, while B1 can reduce the period to 21 months if the other requirements are met.",
      },
    },
    {
      "@type": "Question",
      name: "Can IT specialists qualify without a university degree?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sometimes, yes. Germany allows a special Blue Card route for certain IT specialists without a formal degree if they have enough qualifying experience, meet the salary threshold, and satisfy the other route conditions.",
      },
    },
    {
      "@type": "Question",
      name: "Is the EU Blue Card better than a normal work visa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Often yes for qualified professionals because it offers a more structured route with stronger long-term residence benefits. But it is not automatically better in every case if the salary threshold or qualification fit is the main obstacle.",
      },
    },
  ],
};

export default async function EuBlueCardPage() {
  const settings = await getSettingsData();

  const quickFacts = [
    {
      q: "What is the EU Blue Card in Germany?",
      a: "The EU Blue Card in Germany is a work-based residence permit for highly qualified non-EU professionals with a qualifying job offer. For many Americans, it is one of the strongest work-based routes because it combines a clear approval structure with a faster long-term path than many standard work-permit routes.",
    },
    {
      q: "What salary is required for the EU Blue Card in Germany in 2026?",
      a: "In 2026, the EU Blue Card salary requirement in Germany is typically at least €50,700 gross per year. A lower threshold of €45,934.20 can apply to shortage occupations, certain recent graduates, and some IT specialists if the other conditions are met.",
    },
    {
      q: "Who qualifies for the EU Blue Card?",
      a: "To qualify for the EU Blue Card in Germany, most applicants need a German job offer of at least six months, a role that matches their qualification, and a salary that meets the current threshold. In some cases, shortage occupations, recent graduates, and certain IT specialists can qualify under more flexible rules.",
    },
    {
      q: "How long does it take to get permanent residence with the EU Blue Card?",
      a: "EU Blue Card holders in Germany can usually qualify for a settlement permit after 27 months with German at A1 level, or after 21 months with German at B1 level, if the other legal requirements are met. This is one of the main long-term advantages of the Blue Card.",
    },
  ];

  const fitChecks = [
    "Your job offer runs for at least six months",
    "The role is a qualified position in Germany",
    "The job is connected to your qualification or accepted experience route",
    "Your salary reaches the correct 2026 threshold",
    "Your degree or qualification route is recognized or accepted",
    "Your documents are complete and internally consistent",
  ];

  const requirementCards = [
    {
      title: "Job offer",
      text: "You need a concrete German job offer or signed employment contract. For Blue Card purposes, the employment period must normally be at least six months.",
    },
    {
      title: "Salary threshold",
      text: "For 2026, most applicants need at least €50,700 gross per year. A lower threshold of €45,934.20 can apply to shortage occupations, for certain recent graduates, and for some IT specialists.",
    },
    {
      title: "Qualification",
      text: "In the standard route, you usually need a recognized university degree or another accepted qualification pathway. The role should also make sense in relation to your background.",
    },
    {
      title: "Role fit",
      text: "Authorities do not only look at salary. They also look at whether the job itself matches your qualification profile in a credible way.",
    },
    {
      title: "Health insurance",
      text: "You need valid health insurance for the visa and residence process. This often requires planning both your entry-phase coverage and your post-arrival insurance setup in Germany.",
    },
    {
      title: "Clean application file",
      text: "Even strong candidates run into avoidable delays when contracts, degree records, insurance, or employer documents are incomplete or inconsistent.",
    },
  ];

  const shortageJobs = [
    "Many STEM professions",
    "IT and information and communications technology roles",
    "Architecture, spatial planning, and transport planning professions",
    "Medical doctors, dentists, pharmacists, and some nursing professions",
    "Teachers, educators, and selected management roles in shortage areas",
  ];

  const mistakes = [
    "Using the wrong salary figure or confusing gross and net pay",
    "Assuming any foreign degree automatically qualifies without checking recognition",
    "Overlooking that the role itself should fit the applicant’s qualification profile",
    "Treating health insurance as a minor detail instead of part of approval readiness",
    "Relying on generic EU-level advice instead of Germany-specific rules and process reality",
  ];

  const rejectionReasons = [
    "The offered salary does not meet the correct threshold",
    "The degree or qualification route is not accepted in the required form",
    "The role does not convincingly match the applicant’s background",
    "The application file is incomplete, inconsistent, or weakly documented",
    "Insurance, contract wording, or employer documentation creates avoidable red flags",
  ];

  const usReality = [
    "Americans can often enter Germany without a visa and apply locally, but that does not remove the Blue Card requirements.",
    "A strong U.S. résumé does not replace Germany-specific salary, degree, and documentation rules.",
    "U.S. assumptions about private health insurance often do not map neatly to the German process.",
    "Many Americans underestimate the number of local administrative steps after arrival.",
  ];

  const dictionary = [
    {
      term: "Blaue Karte EU",
      def: "The German term for the EU Blue Card.",
    },
    {
      term: "Ausländerbehörde",
      def: "The local immigration authority that usually handles the residence-permit stage after arrival.",
    },
    {
      term: "Anmeldung",
      def: "Local address registration in Germany, often needed early after moving into a residence.",
    },
    {
      term: "Anabin",
      def: "A recognition database often used during degree-comparability checks.",
    },
  ];

  const faqs = [
    {
      q: "Can Americans apply for the EU Blue Card in Germany?",
      a: "Yes. Americans can qualify if they meet the Blue Card rules. In many cases, U.S. citizens can enter Germany without first getting a visa and then apply locally, but they still need to meet the full legal requirements for the Blue Card itself.",
    },
    {
      q: "Do I need German language skills for the EU Blue Card?",
      a: "Not always for initial approval. Many Blue Card jobs, especially in international companies, do not require German at the start. But German can matter for daily life and for the faster settlement-permit path: A1 can qualify you after 27 months, while B1 can reduce the period to 21 months if the other requirements are met.",
    },
    {
      q: "Can IT specialists qualify without a university degree?",
      a: "Sometimes, yes. Germany allows a special Blue Card route for certain IT specialists without a formal degree if they have enough qualifying experience, meet the salary threshold, and satisfy the other route conditions.",
    },
    {
      q: "Is the EU Blue Card better than a normal work visa?",
      a: "Often yes for qualified professionals because it offers a more structured route with stronger long-term residence benefits. But it is not automatically better in every case if the salary threshold or qualification fit is the main obstacle.",
    },
  ];

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

      <main className="min-h-screen bg-slate-50 px-5 py-10 text-slate-900">
        <div className="mx-auto max-w-6xl">
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

          <section className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm lg:p-12">
            <div className="mb-6 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              German Visa Guide
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
              <div>
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 lg:text-5xl">
                  EU Blue Card Germany: Requirements, Salary &amp; Eligibility
                  <span className="block text-blue-700">
                    2026 Guide for Americans
                  </span>
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                  The EU Blue Card is one of the strongest work-based residence
                  paths for highly qualified professionals moving to Germany.
                  This guide shows who qualifies, where applications usually
                  fail, and what to check before taking any official step.
                </p>

                <div className="mt-6 flex flex-wrap gap-2 text-sm">
                  <a
                    href="#salary"
                    className="rounded-full bg-slate-100 px-3 py-1.5 hover:bg-slate-200"
                  >
                    Salary
                  </a>
                  <a
                    href="#requirements"
                    className="rounded-full bg-slate-100 px-3 py-1.5 hover:bg-slate-200"
                  >
                    Requirements
                  </a>
                  <a
                    href="#timeline"
                    className="rounded-full bg-slate-100 px-3 py-1.5 hover:bg-slate-200"
                  >
                    Timeline
                  </a>
                  <a
                    href="#rejections"
                    className="rounded-full bg-slate-100 px-3 py-1.5 hover:bg-slate-200"
                  >
                    Rejections
                  </a>
                  <a
                    href="#insurance"
                    className="rounded-full bg-slate-100 px-3 py-1.5 hover:bg-slate-200"
                  >
                    Health insurance
                  </a>
                  <a
                    href="#faq"
                    className="rounded-full bg-slate-100 px-3 py-1.5 hover:bg-slate-200"
                  >
                    FAQs
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#eligibility"
                    className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                  >
                    Get your personalized visa plan
                  </a>
                  <a
                    href="#requirements"
                    className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                  >
                    Check Visa Match
                  </a>
                </div>
              </div>

              <aside className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                <div className="text-sm font-semibold text-emerald-800">
                  ✔ Verified immigration information
                </div>
                <p className="mt-3 text-sm leading-6 text-emerald-900">
                  Last fact-checked: March 30, 2026
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-900">
                  Sources monitored: BAMF — Federal Office for Migration and
                  Refugees • Make it in Germany – by the Federal Republic of
                  Germany • German missions • Federal Foreign Office
                </p>
                <div className="mt-5 rounded-2xl border border-emerald-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Who this page is for
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Americans who want to know whether the EU Blue Card is the
                    right German visa path for their professional profile.
                  </p>
                </div>
              </aside>
            </div>
          </section>

          <section className="mt-10">
            <div className="mb-5">
              <h2 className="text-2xl font-semibold tracking-tight">
                Germany EU Blue Card quick facts
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {quickFacts.map((item) => (
                <article
                  key={item.q}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.q}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.a}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="eligibility"
            className="mt-10 rounded-3xl border border-blue-200 bg-white p-8 shadow-sm"
          >
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                  Eligibility snapshot
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  Do you look like a strong Blue Card candidate?
                </h2>
                <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                  For Americans, the EU Blue Card is often the strongest German
                  visa option when the move is clearly job-driven. In most
                  cases, your salary, your degree, and how well your job
                  matches your background decide the outcome.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    What authorities check
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                    {fitChecks.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="relative mt-5 rounded-2xl border border-blue-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Permanent residence shortcut
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Blue Card holders can generally qualify for a settlement
                    permit after 27 months with A1 German, or after 21 months
                    with B1 German, if the other requirements are met.
                  </p>
                </div>

                <div className="relative rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white shadow-md">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
                    Visa plan
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">
                    See where you stand
                  </h3>

                  <div className="relative mt-5 rounded-2xl border border-blue-300 bg-blue-500/40 p-5">
                    <div className="absolute -top-2 right-0 rounded-bl-2xl bg-white px-3 py-1 text-xs font-semibold text-blue-700">
                      Example
                    </div>

                    <div>
                      <p className="mb-1 text-xs text-blue-100">Eligibility</p>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-blue-300/40">
                        <div
                          className="h-2 rounded-full bg-white"
                          style={{ width: "70%" }}
                        />
                      </div>
                      <div className="mt-1 text-xs text-blue-100">
                        ~70% match
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="mb-1 text-xs text-blue-100">Complexity</p>
                      <div className="text-lg">★ ★ ★ ☆ ☆</div>
                      <div className="mt-1 text-xs text-blue-100">
                        Moderate complexity
                      </div>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2 text-sm text-white">
                    <li>✔ Salary threshold check</li>
                    <li>✔ Degree recognition</li>
                    <li>✔ Application risk factors</li>
                  </ul>

                  <a
                    href="#final-cta"
                    className="mt-5 inline-block rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-blue-700"
                  >
                    Get your visa plan
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight">
                What part is EU-level, and what part is Germany-specific?
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                The EU Blue Card is based on a broader European framework, but
                you do not apply to the EU directly. You apply under German
                immigration law, and Germany decides how the Blue Card works in
                practice within that framework.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                In real cases, that means Germany controls the salary
                thresholds, the qualification logic, the document process, and
                how the local immigration authority handles your permit after
                arrival.
              </p>
            </article>

            <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div
                className="absolute right-0 top-0 rounded-bl-2xl px-3 py-1 text-sm font-semibold text-white"
                style={{ backgroundColor: "#556b2f" }}
              >
                Know the local standards
              </div>
              <h2 className="pr-40 text-2xl font-semibold tracking-tight">
                Why this matters for Americans
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                Many Americans start with broad EU Blue Card research and
                assume the rules work the same everywhere. They do not. If your
                destination is Germany, you need Germany-specific guidance on
                salary, degree recognition, health insurance, and the local
                process after arrival.
              </p>
            </article>
          </section>

          <section
            id="salary"
            className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-3xl font-semibold tracking-tight">
              EU Blue Card Germany salary requirements (2026)
            </h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              The salary threshold is the most important pass-or-fail filter for
              EU Blue Card approval. For 2026, most applicants need a gross
              annual salary of at least €50,700. A reduced threshold of
              €45,934.20 can apply to shortage occupations, some new entrants
              to the labour market, and certain IT specialists.
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-900">
                  Standard threshold
                </p>
                <p className="mt-1 text-xs text-emerald-600">
                  ✔ Strong fit if above
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  €50,700 gross per year for most professions in 2026.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-900">
                  Reduced threshold
                </p>
                <p className="mt-1 text-xs text-yellow-600">
                  ⚠ Borderline zone
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  €45,934.20 gross per year for shortage occupations, certain
                  recent graduates, and some IT specialists.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-900">
                  Important detail
                </p>
                <p className="mt-1 text-xs text-rose-600">
                  ✖ Common mistake
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  The relevant figure is gross annual salary, not net pay and
                  not a rough monthly estimate.
                </p>
              </div>
            </div>
            <p className="mt-6 leading-8 text-slate-600">
              This is where many applications fail. People compare the wrong
              number, use an outdated threshold, or assume bonuses will close a
              gap that authorities do not accept.
            </p>
          </section>

          <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold tracking-tight">
              When does the lower threshold apply?
            </h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              Germany allows a lower Blue Card salary threshold in specific
              cases. This matters if your salary is close to the threshold and
              you want to know whether a more flexible rule might apply.
            </p>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Common categories where the reduced threshold may matter
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                {shortageJobs.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                A reduced threshold can also apply to some recent graduates
                entering the labour market and to certain IT specialists under
                the special experience-based route.
              </p>
              <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  Important procedural detail
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  If you are using the lower salary threshold for a shortage
                  occupation, Federal Employment Agency approval is generally
                  required. The same usually applies in the visa procedure for
                  recent graduates using the reduced threshold.
                </p>
              </div>
            </div>
          </section>

          <section
            id="requirements"
            className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-3xl font-semibold tracking-tight">
              EU Blue Card Germany requirements
            </h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              Being skilled is not enough. You need to meet a specific
              combination of salary, qualification, job-offer, and
              documentation requirements.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {requirementCards.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="text-base font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">
              EU Blue Card Germany requirements checklist
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>✔ Job offer (≥ 6 months)</li>
              <li>✔ Salary meets threshold</li>
              <li>✔ Recognized degree or accepted route</li>
              <li>✔ Role matches qualification</li>
              <li>✔ Valid health insurance</li>
            </ul>
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl border border-blue-100 bg-blue-50 p-7 shadow-sm">
              <p className="text-xs font-semibold text-blue-700">
                ⚠ Common issue
              </p>
              <h2 className="text-2xl font-semibold tracking-tight">
                Degree recognition
              </h2>
              <p className="mt-4 leading-8 text-slate-700">
                Even a valid degree can cause problems if it is not recognized
                the way German authorities expect. This is where many
                applicants get stuck, often needing tools like Anabin to confirm
                recognition.
              </p>
            </article>

            <article
              id="insurance"
              className="rounded-3xl border border-blue-100 bg-blue-50 p-7 shadow-sm"
            >
              <p className="text-xs font-semibold text-blue-700">
                🔍 Often misunderstood
              </p>
              <h2 className="text-2xl font-semibold tracking-tight">
                Health insurance (what Americans usually get wrong)
              </h2>
              <p className="mt-4 leading-8 text-slate-700">
                For EU Blue Card applications in Germany, health insurance must
                meet specific requirements. It is one of the most common
                friction points for applicants.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>• Not all U.S. or travel policies are accepted</li>
                <li>
                  • You often need temporary entry coverage + German system
                  transition
                </li>
                <li>
                  • Public vs. private insurance affects long-term flexibility
                </li>
              </ul>
              <div className="mt-5 rounded-2xl border border-blue-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">
                  Local knowledge
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Many Americans choose private insurance early because it seems
                  easier. But depending on your salary and long-term plans, this
                  can limit flexibility later. This is one of the most common
                  strategic mistakes.
                </p>
              </div>
            </article>

            <article className="rounded-3xl border border-blue-100 bg-blue-50 p-7 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight">
                IT specialists without a degree
              </h2>
              <p className="mt-4 leading-8 text-slate-700">
                Germany has a special Blue Card route for certain IT
                professionals without a formal degree. This is highly relevant
                because it broadens the page beyond the classic
                university-degree path and creates strong long-tail search
                coverage.
              </p>
            </article>
          </section>

          <section id="timeline" className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight">
                Processing time and timeline
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                The real timeline depends on where you apply, how complete your
                documents are, whether recognition questions need clarification,
                and how quickly you can move through the local steps after
                arrival. Most delays happen between these steps—for example when
                documents are incomplete, recognition needs clarification, or
                appointments take time.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-full bg-slate-100 px-3 py-2">
                  Check fit
                </span>
                <span>→</span>
                <span className="rounded-full bg-slate-100 px-3 py-2">
                  Confirm salary
                </span>
                <span>→</span>
                <span className="rounded-full bg-slate-100 px-3 py-2">
                  Prepare documents
                </span>
                <span>→</span>
                <span className="rounded-full bg-slate-100 px-3 py-2">
                  Apply
                </span>
                <span>→</span>
                <span className="rounded-full bg-slate-100 px-3 py-2">
                  Settle in Germany
                </span>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight">
                What can delay or weaken an EU Blue Card application?
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                {mistakes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          </section>

          <section
            id="rejections"
            className="mt-10 rounded-3xl border border-rose-200 bg-rose-50 p-8 shadow-sm"
          >
            <p className="text-xs font-semibold text-rose-700">
              🚫 Frequent rejection reasons
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Why EU Blue Card applications get rejected
            </h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-700">
              Most EU Blue Card rejections are preventable. Rejection does not
              always mean the applicant was a bad fit. In many cases, it means
              one key requirement was misunderstood, weakly documented, or not
              presented clearly enough.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {rejectionReasons.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-rose-200 bg-white p-5 text-sm leading-6 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-blue-200 bg-blue-50 p-6">
            <div className="mb-3 rounded-xl bg-white p-3 text-sm text-slate-700">
              💡 Most Blue Card problems are not about eligibility — they are
              about how the application is prepared.
            </div>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-blue-700">
                  Make sure you're doing it right!
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Follow your personal step-by-step visa plan to avoid common
                  mistakes.
                </p>
              </div>
              <a
                href="#final-cta"
                className="whitespace-nowrap rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
              >
                Get your Personalized Visa Plan
              </a>
            </div>
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div
                className="absolute right-0 top-0 rounded-bl-2xl px-3 py-1 text-sm font-semibold text-white"
                style={{ backgroundColor: "#556b2f" }}
              >
                Real live example
              </div>
              <h2 className="pr-40 text-3xl font-semibold tracking-tight">
                Example: who actually qualifies?
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                A typical Blue Card profile looks like this: a U.S. software
                engineer with a recognized degree, a full-time German job offer,
                and a salary above the threshold. In this case, approval is
                usually straightforward if the documents are clean and
                consistent.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                Where it gets complicated is when one piece is
                borderline—salary slightly below the threshold, unclear degree
                recognition, or a role that does not clearly match the
                applicant’s background. That is where many applications get
                delayed or require a different German pathway.
              </p>
            </article>

            <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-semibold tracking-tight">
                EU Blue Card vs. regular German work visa
              </h2>
              <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
                <table className="min-w-full border-collapse text-left text-sm">
                  <thead className="bg-slate-100 text-slate-900">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Feature</th>
                      <th className="px-4 py-3 font-semibold">EU Blue Card</th>
                      <th className="px-4 py-3 font-semibold">
                        Regular work visa
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white text-slate-700">
                    <tr className="border-t border-slate-200">
                      <td className="px-4 py-3">Salary threshold</td>
                      <td className="px-4 py-3">
                        Usually higher and more explicit
                      </td>
                      <td className="px-4 py-3">Often more flexible</td>
                    </tr>
                    <tr className="border-t border-slate-200">
                      <td className="px-4 py-3">Best for</td>
                      <td className="px-4 py-3">
                        Highly qualified professionals
                      </td>
                      <td className="px-4 py-3">
                        Broader employment situations
                      </td>
                    </tr>
                    <tr className="border-t border-slate-200">
                      <td className="px-4 py-3">Citizenship path</td>
                      <td className="px-4 py-3">
                        Often faster path toward citizenship eligibility
                      </td>
                      <td className="px-4 py-3">
                        Still possible, but depends more on route details
                      </td>
                    </tr>
                    <tr className="border-t border-slate-200">
                      <td className="px-4 py-3">Main challenge</td>
                      <td className="px-4 py-3">
                        Threshold and qualification fit
                      </td>
                      <td className="px-4 py-3">
                        Can be less straightforward strategically
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </section>

          <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold tracking-tight">
              U.S.-specific reality for Americans
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {usReality.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="relative mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div
              className="absolute right-0 top-0 rounded-bl-2xl px-3 py-1 text-sm font-semibold text-white"
              style={{ backgroundColor: "#556b2f" }}
            >
              Are you single or with family?
            </div>
            <h2 className="pr-48 text-3xl font-semibold tracking-tight">
              Family reunification and long-term path
            </h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-base font-semibold text-slate-900">
                  Spouse and family benefits
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  One reason the Blue Card is attractive is that family
                  reunification is generally more straightforward than in many
                  other routes. That matters for users planning a real move, not
                  just a work permit on paper.
                </p>
              </article>
              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-base font-semibold text-slate-900">
                  Permanent residence
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  In Germany, a settlement permit can become possible after 27
                  months with A1 German, or after 21 months with B1 German, if
                  the other legal requirements are met.
                </p>
              </article>
              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-base font-semibold text-slate-900">
                  After arrival
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  The Blue Card is not the end of the process. Registration,
                  housing, insurance, and local immigration steps still matter
                  once you get to Germany.
                </p>
              </article>
            </div>
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="text-base font-semibold text-slate-900">
                Settlement permit detail people often miss
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                For the settlement permit, language level is only one part of
                the picture. Applicants also normally need to prove basic
                knowledge of the legal and social system in Germany, usually via
                the “Leben in Deutschland” test, alongside the other residence,
                employment, and pension-contribution requirements.
              </p>
            </div>
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight">
                Application overview
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                How to apply for the EU Blue Card in Germany starts with
                building a strong application. It is not just a list of
                documents. Your documents need to clearly show that your job,
                salary, and qualification fit together. That means aligning
                contract details, salary proof, qualification evidence, identity
                documents, and insurance in a way that reduces friction instead
                of creating it.
              </p>
            </article>

            <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div
                className="absolute right-0 top-0 rounded-bl-2xl px-3 py-1 text-sm font-semibold text-white"
                style={{ backgroundColor: "#556b2f" }}
              >
                Important German words
              </div>
              <h2 className="pr-40 text-2xl font-semibold tracking-tight">
                Visa dictionary
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-6 text-slate-700">
                {dictionary.map((item) => (
                  <div key={item.term}>
                    <span className="font-semibold text-slate-900">
                      {item.term}:
                    </span>{" "}
                    {item.def}
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="mt-10">
            <div className="mx-auto max-w-md">
              <div className="relative rounded-3xl border border-blue-200 bg-blue-50 p-6 shadow-sm">
                <div className="absolute right-5 top-5 rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                  $29.00
                </div>

                <p className="mt-10 text-sm text-slate-600">
                  Get your step-by-step plan
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-blue-700">
                  VISA SUCCESS PLAN
                </h3>

                <div className="my-4 h-px w-full bg-blue-200" />

                <div className="rounded-2xl border border-blue-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    A structured plan to improve your chances and avoid
                    mistakes.
                  </p>
                </div>

                <ul className="mt-5 space-y-4 text-sm text-slate-800">
                  <li>
                    ✔{" "}
                    <span className="font-semibold">
                      Eligibility assessment
                    </span>
                    <div className="text-slate-600">
                      Know exactly where you stand before applying
                    </div>
                  </li>
                  <li>
                    ✔{" "}
                    <span className="font-semibold">
                      Complexity score &amp; risk insights
                    </span>
                    <div className="text-slate-600">
                      Understand difficulty and potential issues
                    </div>
                  </li>
                  <li className="border-t border-blue-200 pt-4">
                    ✔ <span className="font-semibold">Step-by-step roadmap</span>
                    <div className="text-slate-600">
                      Clear guidance on what to do and when
                    </div>
                  </li>
                  <li className="border-t border-blue-200 pt-4">
                    ✔ <span className="font-semibold">Document checklist</span>
                    <div className="text-slate-600">
                      Only what you actually need to prepare
                    </div>
                  </li>
                  <li className="border-t border-blue-200 pt-4">
                    ✔ <span className="font-semibold">Timeline estimate</span>
                    <div className="text-slate-600">
                      Plan your application with confidence
                    </div>
                  </li>
                  <li className="border-t border-blue-200 pt-4">
                    ✔ <span className="font-semibold">Critical warnings</span>
                    <div className="text-slate-600">
                      Avoid delays and common rejection reasons
                    </div>
                  </li>
                </ul>

                <a
                  href="#final-cta"
                  className="mt-6 inline-block w-full rounded-2xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  See your personalized visa plan
                </a>
              </div>
            </div>
          </section>

          <section
            id="faq"
            className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-3xl font-semibold tracking-tight">
              Germany EU Blue Card FAQ
            </h2>
            <div className="mt-6 space-y-5">
              {faqs.map((item) => (
                <article
                  key={item.q}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.q}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.a}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Sources &amp; Verification
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Page verification notes
            </h2>

            <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                Written by
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                Sebastian Mueller
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                German-American entrepreneur with 20+ years of experience living
                and working in both the U.S. and Germany. Founder of
                EuropeRelocator.
              </p>
            </div>

            <p className="mt-6 text-sm leading-6 text-slate-600">
              Primary source base: official Germany immigration guidance,
              federal immigration information portals, and EU-level Blue Card
              framework guidance.
            </p>
          </section>

          <section
            id="final-cta"
            className="mt-10 rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white shadow-sm lg:p-10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
              Next step
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight lg:text-4xl">
              We help you to be prepared — before you take any official step.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-blue-50">
              Get a personalized visa plan that shows where you stand, what
              could delay your case, and what to do next if the EU Blue Card is
              a strong fit — or if another German pathway makes more sense.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                See your personalized visa plan
              </a>
              <a
                href="#"
                className="rounded-2xl border border-blue-300 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Compare German visa options
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer {...settings} />
    </>
  );
}
