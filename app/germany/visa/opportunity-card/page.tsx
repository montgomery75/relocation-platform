import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { fetcher } from "@/lib/sanity/client";

export const metadata: Metadata = {
  title:
    "German Opportunity Card for Americans (Chancenkarte) 2026: Requirements, Points, Eligibility & How to Apply | EuropeRelocator",
  description:
    "German Opportunity Card for Americans (2026): learn who qualifies, how the points system works, how to apply, how much funding you need, and whether this is the right visa path for you.",
  alternates: {
    canonical: "https://www.europerelocator.com/germany/visa/opportunity-card",
  },
  openGraph: {
    title:
      "German Opportunity Card for Americans 2026: Requirements, Points, Eligibility & How to Apply",
    description:
      "Learn who qualifies for the German Opportunity Card, how the Chancenkarte points system works, how to apply, and what to do next.",
    url: "https://www.europerelocator.com/germany/visa/opportunity-card",
    siteName: "EuropeRelocator",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "German Opportunity Card for Americans 2026: Requirements, Points, Eligibility & How to Apply",
    description:
      "Learn who qualifies for the German Opportunity Card, how the Chancenkarte points system works, how to apply, and what to do next.",
  },
};

async function getSettingsData() {
  const data = await fetcher([`*[_type == "settings"][0]`, {}]);
  return data;
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "German Opportunity Card for Americans (Chancenkarte) 2026: Requirements, Points, Eligibility & How to Apply",
  description:
    "German Opportunity Card for Americans: understand who qualifies, how the points system works, how to apply, and what happens after you find a job.",
  author: {
    "@type": "Person",
    name: "Sebastian Mueller",
  },
  publisher: {
    "@type": "Organization",
    name: "EuropeRelocator",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.europerelocator.com/germany/visa/opportunity-card",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Chancenkarte?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Chancenkarte is the German term for the Opportunity Card. It is a residence permit that allows qualified non-EU citizens to come to Germany without having a job offer yet and search for qualified employment locally.",
      },
    },
    {
      "@type": "Question",
      name: "Can Americans apply for the German Opportunity Card after arrival?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Often yes. U.S. citizens can usually enter Germany without first obtaining a national visa sticker, but they still need address registration, a local immigration appointment, and a complete application file.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need German for the German Opportunity Card?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not always. In the points path, German A1 or English B2 can be enough as a baseline. But if you rely on English, you should still expect to prove it formally.",
      },
    },
    {
      "@type": "Question",
      name: "Can I work full-time on the German Opportunity Card?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The Opportunity Card is mainly a job-search permit. It usually allows up to 20 hours per week of part-time work and short trial jobs, but not unrestricted full-time employment.",
      },
    },
    {
      "@type": "Question",
      name: "Is the German Opportunity Card better than the EU Blue Card?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not automatically. The Opportunity Card is useful when you do not yet have the right job offer. If you already have a strong qualified job offer, a direct work-based permit like the EU Blue Card is often the better route.",
      },
    },
  ],
};

export default async function GermanOpportunityCardPage() {
  const settings = await getSettingsData();

  const quickFacts = [
    {
      q: "What is the German Opportunity Card (Chancenkarte)?",
      a: "The German Opportunity Card is a residence permit that allows qualified non-EU citizens to live in Germany for up to 12 months without having a job offer yet and search for qualified employment locally. It can be granted either through a fully recognized qualification or through a points-based route.",
    },
    {
      q: "Do Americans need a job offer for the German Opportunity Card?",
      a: "No. Americans can apply for the German Opportunity Card without a job offer. But they still need to meet the qualification rules, prove enough funding, and provide language proof if they apply through the points system.",
    },
    {
      q: "How many points do you need for the German Opportunity Card?",
      a: "If you apply through the points system, you need at least 6 points. If your qualification is already fully recognized in Germany, the points system does not apply at all.",
    },
    {
      q: "How long is the German Opportunity Card valid?",
      a: "The German Opportunity Card is usually issued for up to 12 months. If you cannot prove funding for the full period, it can be issued for a shorter time and later extended up to the 12-month limit.",
    },
    {
      q: "Can you work in Germany with the German Opportunity Card?",
      a: "Yes, but only in a limited way. Opportunity Card holders can usually work up to 20 hours per week and do job trials of up to 2 weeks per employer. Unrestricted full-time work requires a different residence permit.",
    },
    {
      q: "Do you need German language skills for the German Opportunity Card?",
      a: "Not always. If you apply through the points system, German at A1 or English at B2 can be enough as a baseline. If your qualification is already fully recognized in Germany, language proof is generally not required for the card itself.",
    },
    {
      q: "How much money do you need for the German Opportunity Card?",
      a: "For 2026, applicants generally need to prove at least €1,091 per month to cover cost of living. This is usually shown through a blocked account, a Declaration of Commitment, or in some cases a qualifying part-time contract.",
    },
    {
      q: "Can your family come on the German Opportunity Card?",
      a: "Not automatically. Spouses usually need their own residence title unless you later switch into a stronger work-based permit. Children can be possible in some cases if their living costs are clearly covered.",
    },
  ];

  const routeCards = [
    {
      title: "Fully Recognized Qualification",
      badge: "No points system",
      text: "You are in this path if your foreign degree or professional qualification is already fully recognized in Germany, or if you hold a German qualification. In this case, you do not need to reach 6 points.",
      bullets: [
        "No points calculation required",
        "Recognition is the core filter",
        "Language proof is generally not required for the card itself",
        "Funding and documentation still matter",
      ],
    },
    {
      title: "Path 2: Points System",
      badge: "Minimum 6 points",
      text: "You are in this path if your qualification is not fully recognized in Germany or you cannot clearly prove that it is. In that case, you must qualify through the points system and document each relevant factor.",
      bullets: [
        "At least 6 points required",
        "Language proof required",
        "Qualification type still matters",
        "Weak proof can sink an otherwise strong case",
      ],
    },
  ];

  const fitChecks = [
    "Which path applies to you: recognition path or points path",
    "Whether your degree or qualification can be proven the right way",
    "Whether your work experience is documented well enough",
    "Whether your language certificate is valid and useful",
    "Whether your funding plan is realistic for Germany",
    "Whether you can realistically transition into a work-based residence permit once you find a job",
  ];

  const requirementCards = [
    {
      title: "Qualification path",
      text: "The first question is not points. It is whether you qualify through full recognition or whether you must use the points system.",
    },
    {
      title: "Language proof",
      text: "If you are in the points path, you need at least German A1 or English B2. In practice, authorities usually expect formal proof, not just a claim.",
    },
    {
      title: "Points",
      text: "If you are in the points path, you need at least 6 points from factors like experience, age, language, partial recognition, or previous connection to Germany.",
    },
    {
      title: "Financial proof",
      text: "For 2026, you generally need to prove at least €1,091 per month through a blocked account, a sponsor in Germany, or in some cases a suitable part-time contract.",
    },
    {
      title: "Health insurance",
      text: "You need valid health insurance for entry and for your stay in Germany. Many applicants start with private coverage and later move into the German system once employed.",
    },
    {
      title: "Work limits",
      text: "The Opportunity Card is not full work permission. You can usually work up to 20 hours per week and do short job trials while looking for a qualified job.",
    },
  ];

  const documentationCards = [
    {
      title: "Clearly valid qualification pathway",
      good: "Anabin result, ZAB Statement of Comparability, or other clean recognition proof that matches your degree and institution.",
      weak: "Only uploading a diploma and assuming the authority will figure it out for you.",
    },
    {
      title: "Documented experience — not just a résumé or LinkedIn profile",
      good: "Employer letters showing job title, dates, hours, duties, and the kind of work you actually did.",
      weak: "A generic HR letter, LinkedIn profile, or a résumé with no supporting evidence.",
    },
    {
      title: "Valid language certificates where required",
      good: "Recognized test certificates that clearly show the required level for the points path.",
      weak: "Claiming native English or conversational German without formal proof.",
    },
    {
      title: "Realistic financial support",
      good: "A fully funded blocked account, a valid Declaration of Commitment from someone living in Germany, or a part-time contract that really covers the required amount.",
      weak: "Assuming you will find work quickly and treating that as proof of funding.",
    },
  ];

  const pointRows = [
    {
      title: "Professional experience",
      detail:
        "5 years within the last 7 years can bring 3 points. At least 2 years within the last 5 years can bring 2 points.",
    },
    {
      title: "Partial recognition",
      detail:
        "If a German recognition authority has issued a formal assessment showing that your qualification is partially recognized, this can contribute 4 points under the system.",
    },
    {
      title: "German language",
      detail:
        "German at A2 can bring 1 point, B1 can bring 2 points, and B2 or above can bring 3 points.",
    },
    {
      title: "English language",
      detail:
        "English at C1 or above can bring 1 additional point. This is separate from the baseline rule that English B2 can satisfy the minimum language requirement.",
    },
    {
      title: "Age",
      detail:
        "Under 35 can bring 2 points. Between 35 and 40 can bring 1 point.",
    },
    {
      title: "Connection to Germany",
      detail:
        "Previous lawful stays, studies, or other concrete ties to Germany can matter for additional points depending on the specific case.",
    },
  ];

  const fundingOptions = [
    {
      title: "Blocked account (Sperrkonto)",
      text: "This is the most common route. For 2026, the funding benchmark is generally €1,091 per month.",
    },
    {
      title: "Declaration of Commitment",
      text: "This is a formal financial guarantee from someone living in Germany. A U.S.-based parent alone does not normally solve this because the guarantee needs to work under German law.",
    },
    {
      title: "Part-time contract",
      text: "A job offer of up to 20 hours per week can help cover your living costs. If it does not fully reach the required amount, the remaining gap can still need to be covered.",
    },
  ];

  const insuranceCards = [
    {
      title: "Public insurance",
      text: "Public insurance is often more stable long term, especially if you later move into normal employment and family coverage matters.",
    },
    {
      title: "Private insurance",
      text: "Private insurance is often easier at the entry stage, but it can create cost and flexibility issues later depending on your employment path and long-term plans.",
    },
  ];

  const allowedWork = [
    "Search for qualified employment in Germany",
    "Work in one or more part-time jobs totaling up to 20 hours per week",
    "Do job trials of up to 2 weeks per employer",
    "In some cases, use the card to move toward recognition-related qualification measures",
  ];

  const mistakes = [
    "Assuming the Opportunity Card is only a points visa and missing the recognition path entirely",
    "Assuming a U.S. degree is automatically enough without checking recognition properly",
    "Treating a résumé as proof of work experience instead of building real evidence",
    "Using the wrong language assumption, especially around native English and formal certificates",
    "Underestimating the funding requirement or the practical burden of a blocked account",
    "Entering Germany first and assuming the local process will be simple or fast",
  ];

  const transitionExamples = [
    {
      title: "Example 1: switch to the EU Blue Card",
      text: (
        <>
          You find a qualified job in Germany and the salary reaches the Blue Card threshold. That’s when the Opportunity Card can become a bridge into the{" "}
          <Link
            href="/germany/visa/eu-blue-card"
            className="text-blue-700 underline-offset-4 hover:underline"
          >
            EU Blue Card
          </Link>{" "}
          route.
        </>
      ),
    },
    {
      title: "Example 2: switch to a qualified professional work visa",
      text: "You find a suitable qualified job, but the salary does not reach Blue Card level. Then a standard work visa for qualified professionals may be the better next step.",
    },
    {
      title: "Example 3: experienced worker route",
      text: "Your case is driven more by practical experience than by classic recognition logic. If the facts fit, a visa for professionally experienced workers can become the next step.",
    },
    {
      title: "Example 4: not ready yet",
      text: "You have real traction in Germany but are not yet in a clean full-employment position. In some cases, an extension or a recognition-related step can still make strategic sense.",
    },
  ];

  const familyCards = [
    {
      title: "Spouse",
      text: "The Opportunity Card is not a strong spouse-reunification route at the search stage. A spouse often needs their own residence title unless you later switch into a stronger work-based status.",
    },
    {
      title: "Children",
      text: "Children can be possible in some cases, but the practical question becomes whether you can clearly cover their living costs as well.",
    },
    {
      title: "Long-term path",
      text: "The Opportunity Card is only the entry phase. Your long-term path depends on what you transition into after you secure employment. In most cases, this means switching into a work-based residence permit, and from there potentially moving toward permanent residence and later citizenship.",
    },
  ];

  const dictionary = [
    {
      term: "Chancenkarte",
      def: "The German term for the Opportunity Card.",
    },
    {
      term: "Ausländerbehörde",
      def: "The local immigration authority that usually handles residence-permit matters after arrival.",
    },
    {
      term: "Anmeldung",
      def: "Local address registration in Germany, often needed early after moving into accommodation.",
    },
    {
      term: "Anabin",
      def: "A database often used to check whether a foreign university and degree are recognized for German purposes.",
    },
    {
      term: "ZAB Statement of Comparability",
      def: "An official degree evaluation often used when Anabin alone is not enough or is unclear.",
    },
    {
      term: "Sperrkonto",
      def: "A blocked account used to prove living-cost funding.",
    },
    {
      term: "Verpflichtungserklärung",
      def: "A Declaration of Commitment, meaning a formal financial guarantee from someone living in Germany.",
    },
    {
      term: "Nebenbeschäftigung",
      def: "Secondary or part-time employment.",
    },
  ];

  const faqs = [
    {
      q: "What is the Chancenkarte?",
      a: "The Chancenkarte is the German term for the Opportunity Card. It is a residence permit that allows qualified non-EU citizens to come to Germany without having a job offer yet and search for qualified employment locally.",
    },
    {
      q: "Can Americans apply for the German Opportunity Card after arrival?",
      a: "Often yes, because U.S. citizens can usually enter Germany without first obtaining a national visa sticker. But that does not remove the need for address registration, a local immigration appointment, and a complete application file.",
    },
    {
      q: "Do I need German for the German Opportunity Card?",
      a: "Not always. In the points path, German A1 or English B2 can be enough as a baseline. But if you rely on English, you should still expect to prove it formally, and German often matters much more once you start looking for real jobs.",
    },
    {
      q: "Can I work full-time on the German Opportunity Card?",
      a: "No. The Opportunity Card is mainly a job-search permit. It usually allows up to 20 hours per week of part-time work and short trial jobs, but not unrestricted full-time employment.",
    },
    {
      q: "Is the German Opportunity Card better than the EU Blue Card?",
      a: "Not automatically. The Opportunity Card is useful when you do not yet have the right job offer. If you already have a strong qualified job offer, a direct work-based permit like the EU Blue Card is often the better route.",
    },
  ];

  return (
    <>
      <Navbar {...settings} />

      <Script
        id="german-opportunity-card-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="german-opportunity-card-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-slate-50 px-5 py-10 text-slate-900">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-sm text-slate-500">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/germany" className="hover:underline">
              Germany
            </Link>{" "}
            /{" "}
            <Link href="/germany/visa" className="hover:underline">
              Visa
            </Link>{" "}
            / Opportunity Card
          </div>

          <section className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm lg:p-12">
            <div className="mb-6 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              German Visa Guide
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
              <div>
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 lg:text-5xl">
                  German Opportunity Card for Americans
                  <span className="block text-blue-700">
                    Chancenkarte 2026: Requirements, Points, Eligibility &amp; How to Apply
                  </span>
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                  The German Opportunity Card lets you move to Germany without a job offer yet and search for qualified work locally. But everything depends on one key question first: do you qualify through a fully recognized qualification, or through the points system?
                </p>

                <div className="mt-6 flex flex-wrap gap-2 text-sm">
                  {["Quick facts", "Two paths", "Points system", "Funding", "Application", "FAQs"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-100 px-3 py-1.5"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="#two-paths"
                    className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                  >
                    Check your Opportunity Card path
                  </Link>
                  <Link
                    href="#requirements"
                    className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                  >
                    Check if this visa fits you
                  </Link>
                </div>
              </div>

              <aside className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                <div className="text-sm font-semibold text-emerald-800">
                  ✔ Verified immigration information
                </div>
                <p className="mt-3 text-sm leading-6 text-emerald-900">
                  Last fact-checked: March 28, 2026
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-900">
                  Sources monitored: BAMF • Make it in Germany - by the Federal Republic of Germany • German missions • Federal Foreign Office
                </p>
                <div className="mt-5 rounded-2xl border border-emerald-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">Who this page is for</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Americans who want to move to Germany but do not have a qualified job offer yet and need to know whether the Opportunity Card is the right route.
                  </p>
                </div>
              </aside>
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight">
              German Opportunity Card quick facts
            </h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {quickFacts.map((item) => (
                <article
                  key={item.q}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                >
                  <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.a}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold tracking-tight">
              German Opportunity Card (Chancenkarte) requirements for Americans
            </h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              For Americans, the German Opportunity Card requirements are mostly the same as for other non-EU citizens. The real difference is procedural. U.S. citizens often have more flexibility on where they apply, but not on the legal requirements themselves. What actually matters is which qualification path applies, whether you can document it cleanly, and whether your funding plan is realistic.
            </p>
          </section>

          <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold tracking-tight">
              Who qualifies for the German Opportunity Card?
            </h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              To qualify for the German Opportunity Card, you must either have a fully recognized qualification in Germany or reach at least 6 points through the points system. In both cases, you must also prove sufficient funding, valid health insurance, and a realistic path toward qualified employment in Germany.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-base font-semibold text-slate-900">Qualification route</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  If your degree or professional qualification is already fully recognized in Germany, you can qualify without using the points system.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-base font-semibold text-slate-900">Points route</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  If your qualification is not fully recognized, you need at least 6 points and strong supporting documentation across the categories that apply to you.
                </p>
              </div>
            </div>
          </section>

          <section
            id="two-paths"
            className="mt-10 rounded-3xl border border-blue-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              You need to make a decision before you apply
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              German Opportunity Card: fully recognized qualification or points system
            </h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              This is the most important concept you need to understand. You don’t combine these paths. You’re in one or the other. If your qualification is already fully recognized in Germany, you don’t need the points system. If it is not, or you cannot prove it clearly, then the points system becomes central.
            </p>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {routeCards.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                >
                  <div className="mb-3 inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    {item.badge}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-semibold text-amber-900">Why this matters</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Many people don’t get rejected because they are weak candidates. They get rejected because they assume they are in the recognition path, but their case is actually judged through the points path.
              </p>
            </div>

            <div className="mt-6 rounded-3xl border border-blue-200 bg-blue-50 p-5 shadow-sm sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-blue-700">
                    Not sure which path applies to you?
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Most applicants guess wrong and build the wrong application because of it.
                  </p>
                </div>
                <Link
                  href="#eligibility"
                  className="w-full rounded-2xl bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white sm:w-auto sm:whitespace-nowrap"
                >
                  Check your Opportunity Card path
                </Link>
              </div>
            </div>
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-semibold tracking-tight">
                How to check if your degree is fully recognized
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                There’s no safe way to guess this. Recognition is document-based. A U.S. degree or a well-known university does not automatically answer the question.
              </p>

              <div className="mt-6 space-y-5">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-base font-semibold text-slate-900">
                    Step 1: check Anabin
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Search your university and degree in the Anabin database. If the institution and degree classification line up cleanly, that is often the first strong indicator.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-base font-semibold text-slate-900">
                    Step 2: use a ZAB Statement of Comparability if needed
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    If Anabin is unclear, incomplete, or just not strong enough for confidence, a ZAB Statement of Comparability is often the safer and more bulletproof route.
                  </p>
                </div>
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <h3 className="text-base font-semibold text-slate-900">Reality check</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    The person reviewing your case cares less about your degree’s reputation and more about whether your recognition proof is the right proof in the right form.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-semibold tracking-tight">
                German Opportunity Card language rules for Americans
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                Here’s the simple version: if you are in the points path, you need proof of at least one language baseline. That usually means German A1 or English B2.
              </p>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-base font-semibold text-slate-900">
                  So does every English-speaking American automatically check the box?
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Not automatically. English can be enough in the points path, but the issue is proof. In practice, you’ll usually need a formal language certificate — not just a U.S. passport or a general claim that English is your native language.
                </p>
              </div>
              <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 p-5">
                <h3 className="text-base font-semibold text-slate-900">
                  Tip for your job search
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  English may be enough to clear the legal minimum, but German often matters much more once you are actually competing in the German job market and trying to build a long-term life there.
                </p>
              </div>
            </article>
          </section>

          <section
            id="requirements"
            className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-3xl font-semibold tracking-tight">
              German Opportunity Card requirements
            </h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              The Opportunity Card is not about “looking promising.” It’s about meeting a specific legal path and documenting it in a way the person reviewing your file can actually follow.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {requirementCards.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold tracking-tight">
              What a bulletproof Opportunity Card application looks like
            </h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              Most Opportunity Card problems are not about raw eligibility. They come from weak documentation. A strong application is one where the qualification path, language proof, experience record, and funding story all line up clearly.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {documentationCards.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                >
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                    <p className="text-sm font-semibold text-emerald-900">Strong version</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{item.good}</p>
                  </div>
                  <div className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 p-4">
                    <p className="text-sm font-semibold text-rose-900">Weak version</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{item.weak}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-blue-200 bg-blue-50 p-5 shadow-sm sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-blue-700">
                    You don't need to do this alone
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    We can help you to prepare a clean application.
                  </p>
                </div>
                <Link
                  href="#final-cta"
                  className="w-full rounded-2xl bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white sm:w-auto sm:whitespace-nowrap"
                >
                  See your German Opportunity Card eligibility & next steps
                </Link>
              </div>
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold tracking-tight">
              German Opportunity Card points system explained
            </h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              If you are in the points path, you need at least 6 points. You do not need to hit every category. You need to reach at least 6 points with combinations that you can clearly prove. The points only help if you can actually prove them, which is why this section matters less as a math exercise and more as a documentation exercise.
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-lg font-semibold text-slate-900">
                How does the German Opportunity Card points system work?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                The German Opportunity Card points system allows applicants without full recognition to qualify by reaching at least 6 points. Points are awarded for factors such as work experience, language skills, age, and partial recognition. However, points only count if they are supported by strong documentation.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {pointRows.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.detail}</p>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                <h3 className="text-base font-semibold text-slate-900">
                  Example points calculation
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  A 33-year-old American with 5 years of documented experience and English at C1 could look like this:
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                  <li>• 5 years of experience = 3 points</li>
                  <li>• English at C1 = 1 point</li>
                  <li>• Under 35 = 2 points</li>
                  <li>• Total = 6 points</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <h3 className="text-base font-semibold text-slate-900">
                  Critical warning
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  This does not mean the case is automatically strong. If the experience letters are weak, the language proof is informal, or the qualification path is unclear, the numbers alone won’t protect the application.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold tracking-tight">
              German Opportunity Card funding requirements (2026)
            </h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              This is one of the biggest hidden barriers in the process. For 2026, applicants generally need to prove at least €1,091 per month to cover cost of living while job searching in Germany. This is not optional — it’s a requirement. If your funding plan does not hold, the application usually does not move forward.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {fundingOptions.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-semibold text-amber-900">
                Common misunderstanding
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                “I’ll probably find a job quickly” is not financial proof. A realistic Opportunity Card case usually needs a real funding structure before the authority will feel comfortable with the application.
              </p>
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
                  Do you look like a strong Opportunity Card candidate?
                </h2>
                <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                  For Americans, the Opportunity Card often looks easier than it really is. Authorities don’t just look at potential. They look at proof: which path applies to you, whether your qualification evidence is strong enough, whether your language certificate works, and whether your funding plan is realistic for life in Germany.
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

                <div className="relative rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white shadow-md">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
                    Visa plan
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">See where you stand</h3>

                  <div className="relative mt-5 rounded-2xl border border-blue-300 bg-blue-500/40 p-5">
                    <div className="absolute -top-2 right-0 rounded-bl-2xl bg-white px-3 py-1 text-xs font-semibold text-blue-700">
                      Example
                    </div>

                    <div>
                      <p className="mb-1 text-xs text-blue-100">Route fit</p>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-blue-300/40">
                        <div className="h-2 w-[74%] rounded-full bg-white" />
                      </div>
                      <div className="mt-1 text-xs text-blue-100">
                        Recognition path vs points path
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="mb-1 text-xs text-blue-100">Risk level</p>
                      <div className="text-lg">★ ★ ★ ☆ ☆</div>
                      <div className="mt-1 text-xs text-blue-100">
                        Moderate documentation complexity
                      </div>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2 text-sm text-white">
                    <li>✔ Path identification</li>
                    <li>✔ Points estimate</li>
                    <li>✔ Funding check</li>
                    <li>✔ Best next visa after a job offer</li>
                  </ul>

                  <Link
                    href="#final-cta"
                    className="mt-5 inline-block rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-blue-700"
                  >
                    See your German Opportunity Card eligibility & next steps
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-semibold tracking-tight">
                Health insurance for the German Opportunity Card
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                You need valid health insurance for entry and for your intended stay in Germany. This isn’t just a paperwork detail. It’s part of being realistically prepared to live in Germany.
              </p>
              <div className="mt-6 grid gap-4">
                {insuranceCards.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <h3 className="text-base font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-blue-100 bg-blue-50 p-8 shadow-sm">
              <h2 className="text-3xl font-semibold tracking-tight">
                Public vs private health insurance in Germany
              </h2>
              <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-900">Be aware</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  If you enter the private health insurance system and later have a higher income, switching back into the public system is often not possible. This decision can have long-term consequences.
                </p>
              </div>
              <p className="mt-4 leading-8 text-slate-700">
                Many Americans initially lean toward private insurance because it can look simpler at the entry stage. But this is not always the best long-term move.
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                <li>
                  • <span className="font-semibold">Public insurance</span> is often more stable long term and can be especially valuable if family coverage and long-term stability become important factors.
                </li>
                <li>
                  • <span className="font-semibold">Private insurance</span> can be easier to set up early, but it can also become more rigid or expensive later depending on your income and future status.
                </li>
                <li>
                  • Many applicants begin with private entry-stage coverage and later move into the public system after starting the right kind of employment.
                </li>
              </ul>
            </article>
          </section>

          <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold tracking-tight">
              What you can do on the German Opportunity Card
            </h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              The Opportunity Card is a job-search permit, not full work permission. That difference matters more than most people expect.
            </p>
            <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-base font-semibold text-slate-900">Usually allowed</h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                  {allowedWork.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
              <article className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
                <h3 className="text-base font-semibold text-slate-900">
                  What it does not give you
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  It does not give you normal unrestricted full-time work rights. Once you find the right job, the next step is usually switching into a different residence permit that matches that employment.
                </p>
              </article>
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold tracking-tight">
              Can Americans apply for the Chancenkarte from the U.S. or in Germany?
            </h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              Americans can often apply from the U.S. through the consular visa process or after entering Germany without a visa sticker. The legal requirements stay the same. But the experience can feel very different depending on where you start.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-base font-semibold text-slate-900">
                  Applying from the U.S.
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  More structured process through the embassy or consulate before moving. Often reduces uncertainty after arrival in Germany.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-base font-semibold text-slate-900">
                  Applying after arrival in Germany
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  More flexibility for Americans, but requires handling Anmeldung, appointments with the Ausländerbehörde, and a complete application while already in Germany.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-semibold tracking-tight">
                German Opportunity Card application process &amp; timeline
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                Don’t think of this as “apply and wait.” It’s a chain: route check, document build, funding, insurance, application, arrival, job search, and then conversion.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-full bg-slate-100 px-3 py-2">Check your path</span>
                <span>→</span>
                <span className="rounded-full bg-slate-100 px-3 py-2">Build documents</span>
                <span>→</span>
                <span className="rounded-full bg-slate-100 px-3 py-2">Funding + insurance</span>
                <span>→</span>
                <span className="rounded-full bg-slate-100 px-3 py-2">Digital application</span>
                <span>→</span>
                <span className="rounded-full bg-slate-100 px-3 py-2">Appointment</span>
                <span>→</span>
                <span className="rounded-full bg-slate-100 px-3 py-2">Job search in Germany</span>
              </div>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-semibold tracking-tight">
                How to apply — step by step
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-6 text-slate-700">
                <div>
                  <span className="font-semibold text-slate-900">Step 1:</span>{" "}
                  Decide whether you are in the recognition path or the points path.
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Step 2:</span>{" "}
                  Prepare your qualification proof, work-experience evidence, language documents, funding proof, and insurance.
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Step 3:</span>{" "}
                  Use the digital application route where required or available.
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Step 4:</span>{" "}
                  Attend the in-person appointment for originals and biometrics.
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Step 5:</span>{" "}
                  After arrival, handle Anmeldung and any local residence steps if you are applying in Germany.
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p className="text-sm font-semibold text-amber-900">Where cases slow down</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Incomplete uploads, weak recognition proof, slow embassy or local authority appointments, and a funding plan that does not fully hold together.
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Reality: many delays are not caused by processing time, but by incomplete or unclear applications.
                </p>
              </div>
            </article>
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-rose-200 bg-rose-50 p-6 shadow-sm sm:p-8">
              <p className="text-xs font-semibold text-rose-700">
                🚫 Frequent failure points
              </p>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Common mistakes and rejection risks
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                {mistakes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl border border-blue-200 bg-blue-50 p-6 shadow-sm sm:p-8">
              <p className="text-xs font-semibold text-blue-700">💡 Key insight</p>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Most Opportunity Card problems are documentation problems
              </h2>
              <p className="mt-4 leading-8 text-slate-700">
                A candidate can look strong on paper and still create a weak case if the person reviewing the file cannot clearly follow the story from qualification to language to funding to the intended next step in Germany.
              </p>
            </article>

            <div className="mt-6 rounded-3xl border border-white/60 bg-white p-5 shadow-sm lg:col-span-2">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-blue-700">
                    Get clear personalized instructions
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Learn how to prepare your documents the right way.
                  </p>
                </div>
                <Link
                  href="#final-cta"
                  className="w-full rounded-2xl bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white sm:w-auto sm:whitespace-nowrap"
                >
                  See your German Opportunity Card eligibility & next steps
                </Link>
              </div>
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="absolute right-0 top-0 rounded-bl-2xl bg-[#556b2f] px-3 py-1 text-sm font-semibold text-white">
                Real candidate example
              </div>
              <h2 className="pr-40 text-3xl font-semibold tracking-tight">
                Example: a profile that can qualify through the points system
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                A typical successful Opportunity Card profile could look like this: a 32-year-old American software engineer with a bachelor’s degree, strong documented work history, English at C1, and enough savings to cover cost of living in Germany while job searching.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                In a case like this, the applicant could reach the points minimum through age, work experience, and English. The likely next step after securing the right qualified job would often be a work-based residence permit such as the{" "}
                <Link
                  href="/germany/visa/eu-blue-card"
                  className="text-blue-700 underline-offset-4 hover:underline"
                >
                  EU Blue Card
                </Link>
                , if the salary later fits the threshold.
              </p>
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold tracking-tight">
              What happens after you find a job?
            </h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              This is where the Opportunity Card really proves its value. It’s not meant to be your final status. It’s a bridge into a stronger work-based residence permit once the right job appears.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {transitionExamples.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="text-base font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <div className="mt-2 text-sm leading-6 text-slate-700">{item.text}</div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-semibold tracking-tight">
                German Opportunity Card vs EU Blue Card
              </h2>
              <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
                <table className="min-w-full border-collapse text-left text-sm">
                  <thead className="bg-slate-100 text-slate-900">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Feature</th>
                      <th className="px-4 py-3 font-semibold">Opportunity Card</th>
                      <th className="px-4 py-3 font-semibold">EU Blue Card</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white text-slate-700">
                    <tr className="border-t border-slate-200">
                      <td className="px-4 py-3">Job offer required</td>
                      <td className="px-4 py-3">No</td>
                      <td className="px-4 py-3">Yes</td>
                    </tr>
                    <tr className="border-t border-slate-200">
                      <td className="px-4 py-3">Salary threshold</td>
                      <td className="px-4 py-3">No main threshold</td>
                      <td className="px-4 py-3">Yes</td>
                    </tr>
                    <tr className="border-t border-slate-200">
                      <td className="px-4 py-3">Main purpose</td>
                      <td className="px-4 py-3">Job search in Germany</td>
                      <td className="px-4 py-3">Direct qualified employment</td>
                    </tr>
                    <tr className="border-t border-slate-200">
                      <td className="px-4 py-3">Work rights</td>
                      <td className="px-4 py-3">Limited</td>
                      <td className="px-4 py-3">Full for the approved role</td>
                    </tr>
                    <tr className="border-t border-slate-200">
                      <td className="px-4 py-3">Best for</td>
                      <td className="px-4 py-3">People without the right job yet</td>
                      <td className="px-4 py-3">People with the right job already</td>
                    </tr>
                    <tr className="border-t border-slate-200">
                      <td className="px-4 py-3">Entry difficulty</td>
                      <td className="px-4 py-3">Medium to high documentation burden</td>
                      <td className="px-4 py-3">High because job offer and salary must already fit</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="absolute right-0 top-0 rounded-bl-2xl bg-[#556b2f] px-3 py-1 text-sm font-semibold text-white">
                Practical reality
              </div>
              <h2 className="pr-40 text-3xl font-semibold tracking-tight">
                Which route usually makes more sense?
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                If you already have a strong qualified job offer, the Opportunity Card is often not the best visa strategy. In that case, a direct work-based permit like the{" "}
                <Link
                  href="/germany/visa/eu-blue-card"
                  className="text-blue-700 underline-offset-4 hover:underline"
                >
                  EU Blue Card
                </Link>{" "}
                or a qualified professional work visa is often cleaner.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                The Opportunity Card makes the most sense when your professional profile is solid, but you haven’t secured the right German job yet.
              </p>
            </article>
          </section>

          <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold tracking-tight">
              German Opportunity Card family rules &amp; long-term path
            </h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {familyCards.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight">
                Application overview
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                The application is not just a list of files. It needs to tell a clear, consistent story that actually makes sense when someone reviews it. Your qualification path, experience proof, language, insurance, and funding all need to support the same conclusion: that you are a realistic candidate to move to Germany, search for work, and transition into the correct next permit.
              </p>
            </article>

            <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="absolute right-0 top-0 rounded-bl-2xl bg-[#556b2f] px-3 py-1 text-sm font-semibold text-white">
                Important German words
              </div>
              <h2 className="pr-40 text-2xl font-semibold tracking-tight">
                Visa dictionary
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-6 text-slate-700">
                {dictionary.map((item) => (
                  <div key={item.term}>
                    <span className="font-semibold text-slate-900">{item.term}:</span>{" "}
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

                <p className="mt-10 text-sm text-slate-600">Get your step-by-step plan</p>
                <h3 className="mt-1 text-2xl font-semibold text-blue-700">
                  VISA SUCCESS PLAN
                </h3>

                <div className="my-4 h-px w-full bg-blue-200" />

                <div className="rounded-2xl border border-blue-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    A structured plan to understand where you stand before you take any official step.
                  </p>
                </div>

                <ul className="mt-5 space-y-4 text-sm text-slate-800">
                  <li>
                    ✔ <span className="font-semibold">Qualification-path assessment</span>
                    <div className="text-slate-600">
                      Know whether you are in the recognition path or the points path
                    </div>
                  </li>
                  <li>
                    ✔ <span className="font-semibold">Points estimate</span>
                    <div className="text-slate-600">
                      See whether your case likely reaches the 6-point minimum
                    </div>
                  </li>
                  <li className="border-t border-blue-200 pt-4">
                    ✔ <span className="font-semibold">Funding review</span>
                    <div className="text-slate-600">
                      Understand whether your blocked account or sponsor setup is realistic
                    </div>
                  </li>
                  <li className="border-t border-blue-200 pt-4">
                    ✔ <span className="font-semibold">Document checklist</span>
                    <div className="text-slate-600">
                      Only the evidence that actually strengthens your case
                    </div>
                  </li>
                  <li className="border-t border-blue-200 pt-4">
                    ✔ <span className="font-semibold">Best next visa after a job offer</span>
                    <div className="text-slate-600">
                      See whether the likely endpoint is the{" "}
                      <Link
                        href="/germany/visa/eu-blue-card"
                        className="text-blue-700 underline-offset-4 hover:underline"
                      >
                        EU Blue Card
                      </Link>{" "}
                      or a different German permit
                    </div>
                  </li>
                  <li className="border-t border-blue-200 pt-4">
                    ✔ <span className="font-semibold">Critical warnings</span>
                    <div className="text-slate-600">
                      Avoid the mistakes that usually delay or weaken cases
                    </div>
                  </li>
                </ul>

                <Link
                  href="#final-cta"
                  className="mt-6 inline-block w-full rounded-2xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  See your German Opportunity Card eligibility & next steps
                </Link>
              </div>
            </div>
          </section>

          <section id="faq" className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold tracking-tight">
              German Opportunity Card FAQ
            </h2>
            <div className="mt-6 space-y-5">
              {faqs.map((item) => (
                <article
                  key={item.q}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
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
              <p className="mt-2 text-lg font-semibold text-slate-900">Sebastian Mueller</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                German-American entrepreneur with 20+ years of experience living and working in both the U.S. and Germany. Founder of EuropeRelocator.
              </p>
            </div>

            <p className="mt-6 text-sm leading-6 text-slate-600">
              Primary source base: official Germany immigration guidance, federal immigration information portals, and German mission guidance for visa and residence matters.
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
              Know exactly what to do — before you take any official step.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-blue-50">
              Get a personalized German Opportunity Card plan that shows which path applies to you, whether your documentation is strong enough, and what the best next visa is after a job offer.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="#eligibility"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                See your German Opportunity Card eligibility & next steps
              </Link>
              <Link
                href="/germany/visa"
                className="rounded-2xl border border-blue-300 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Compare German visa options
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer {...settings} />
    </>
  );
}