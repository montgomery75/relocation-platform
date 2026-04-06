import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { fetcher } from "@/lib/sanity/client";

export const metadata: Metadata = {
  title:
    "Germany Freelance Visa for Americans (2026): Requirements, Documents & Eligibility | EuropeRelocator",
  description:
    "Complete guide to the Germany Freelance Visa for Americans. Learn requirements, documents, eligibility, and how to avoid common mistakes before applying.",
  alternates: {
    canonical: "https://www.europerelocator.com/germany/visa/freelance",
  },
  openGraph: {
    title:
      "Germany Freelance Visa for Americans (2026) – Requirements, Documents & Eligibility",
    description:
      "Requirements, documents, and eligibility explained. Avoid common mistakes and understand if the freelance visa is right for you.",
    url: "https://www.europerelocator.com/germany/visa/freelance",
    siteName: "EuropeRelocator",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Germany Freelance Visa for Americans (2026)",
    description:
      "Requirements, documents, and eligibility explained. Avoid common mistakes before applying.",
  },
};

async function getSettingsData() {
  const data = await fetcher([`*[_type == "settings"][0]`, {}]);
  return data;
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Germany Freelance Visa for Americans (2026)",
  author: {
    "@type": "Person",
    name: "Sebastian Mueller",
  },
  description:
    "Complete guide to the Germany Freelance Visa for Americans. Learn requirements, documents, eligibility, and how to avoid common mistakes before applying.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.europerelocator.com/germany/visa/freelance",
  },
};

export default async function FreelanceVisaPage() {
  const settings = await getSettingsData();

  const quickFacts = [
    {
      q: "What is the Germany Freelance Visa?",
      snippet:
        "The Germany Freelance Visa lets non-EU nationals live in Germany while working independently in a liberal profession. It is designed for expertise-based freelance work, not for every type of self-employment or business activity.",
    },
    {
      q: "Who is this route for?",
      snippet:
        "This route is for professionals whose work qualifies as a liberal profession under German rules. It does not cover all self-employed activities, especially cases that are classified as commercial business rather than freelance work.",
    },
    {
      q: "Do Americans need to apply before entering Germany?",
      snippet:
        "No. Americans can usually enter Germany without a visa and apply locally. However, they still need official residence approval before starting freelance work, so entering Germany does not itself grant work permission.",
    },
    {
      q: "Do I need German clients?",
      snippet:
        "Not always. German clients can strengthen the application, but foreign clients may also work if the case clearly shows that the freelance activity is viable and fits the German system.",
    },
    {
      q: "Can this lead to permanent residence?",
      snippet:
        "Yes. The freelance visa can support a path to permanent residence if the activity remains viable and long-term requirements continue to be met. The path is usually less structured than the EU Blue Card route.",
    },
  ];

  const checks = [
    "Your work actually fits the freelance / liberal-profession route",
    "Your activity looks economically viable, not vague or speculative",
    "You can support yourself financially in Germany",
    "Your clients, contracts, or expected work are credible",
    "Any profession-specific permission or licence is in place",
    "Your documents are complete and internally consistent",
  ];

  const requirements = [
    {
      title: "Freelance fit",
      body: "Your work needs to fit the freelance / liberal-profession route. This is one of the first things authorities will look at.",
    },
    {
      title: "Client proof",
      body: "You usually need evidence that your activity is real — such as letters of intent, contracts, project work, or expected clients.",
    },
    {
      title: "Financial viability",
      body: "There is no clean salary threshold like the Blue Card, but your case must show that your work can realistically support you.",
    },
    {
      title: "Professional permissions",
      body: "Some professions require a licence, recognition, or other permission. If this applies, it can become a decisive approval issue.",
    },
    {
      title: "Health insurance",
      body: "You need an insurance setup that works for the application process and your actual stay in Germany.",
    },
    {
      title: "Clean application file",
      body: "Even good candidates get delayed when the business story, income expectations, and supporting documents do not line up clearly.",
    },
  ];

  const proofCards = [
    "Activity description and business concept",
    "Letters of intent, contracts, or expected clients",
    "Income projections and livelihood logic",
    "Health insurance and housing readiness",
    "Licence, recognition, or profession-specific approvals",
    "Identity and application documents that all match",
  ];

  const frictionPoints = [
    "The work looks more like a business / Gewerbe than freelance activity",
    "The client or income case is too weak or too generic",
    "The application explains what you do, but not why it is viable in Germany",
    "A regulated profession issue appears too late",
    "The file is inconsistent across forms, contracts, and supporting documents",
  ];

  const faq = [
    {
      q: "How to get a freelance visa in Germany?",
      a: "You apply either in Germany or from abroad by submitting proof of freelance activity, financial viability, and required documents. The key is showing that your work qualifies and can support you.",
    },
    {
      q: "Is the Germany freelance visa hard to get?",
      a: "It can be. Approval depends on classification, proof of income, and a coherent application. Many cases fail due to weak documentation or incorrect visa assumptions.",
    },
    {
      q: "Can Americans freelance in Germany?",
      a: "Yes. Americans can apply for the freelance visa and usually do so from within Germany, but they must receive residence approval before working.",
    },
    {
      q: "What is Freiberufler in Germany?",
      a: "Freiberufler refers to liberal professions such as consultants, creatives, and similar expertise-based work. This classification determines eligibility for the freelance visa.",
    },
    {
      q: "Do I need a business plan for the Germany freelance visa?",
      a: "Not always formally, but you must present a clear concept showing what you do, who your clients are, and how you will earn income.",
    },
    {
      q: "What is the difference between freelance and self-employment in Germany?",
      a: "Germany distinguishes between freelance work and commercial self-employment. Freelancers work in liberal professions, while business owners run commercial activities.",
    },
    {
      q: "Do I need clients before applying?",
      a: "Usually yes. Authorities expect proof such as contracts or letters of intent showing that your freelance activity is real and viable.",
    },
    {
      q: "Is there a minimum income requirement?",
      a: "No fixed threshold exists. You must show that your freelance work can realistically support your life in Germany.",
    },
    {
      q: "Can I work remotely from Germany on a freelance visa?",
      a: "Sometimes. Remote work alone does not qualify — your setup must still meet German freelance classification and viability requirements.",
    },
    {
      q: "What is Scheinselbstständigkeit?",
      a: "Scheinselbstständigkeit means fake freelancing — a setup that looks independent but functions like employment, often due to reliance on one client.",
    },
  ];

  const personas = [
    {
      title: "Strong fit",
      subtitle: "Independent consultant or creative professional",
      body: "You already work in a clearly freelance field, have a portfolio or established track record, can show expected clients or contracts, and your case tells a clean story about how your work will support you in Germany.",
    },
    {
      title: "Possible fit, but needs review",
      subtitle: "Remote contractor with mixed freelance and business signals",
      body: "Your work may qualify, but the classification is not immediately obvious. These cases often need a closer look at how the activity is structured, what your documents show, and whether the profile looks more like freelance work or commercial self-employment.",
    },
    {
      title: "Often the wrong route",
      subtitle: "Business founder or unclear self-employment case",
      body: "If your plan is really to build a broader business, hire staff, or operate a commercial activity, the freelance route may not be the right path. This is where many people start with the wrong visa assumption.",
    },
  ];

  const planFeatures = [
    ["Eligibility assessment", "Know exactly where you stand before applying"],
    [
      "Complexity score & risk insights",
      "Understand difficulty and potential issues",
    ],
    ["Step-by-step roadmap", "Clear guidance on what to do and when"],
    ["Document checklist", "Only what you actually need to prepare"],
    ["Timeline estimate", "Plan your application with confidence"],
    ["Critical warnings", "Avoid delays and common rejection reasons"],
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <Navbar {...settings} />

      <Script
        id="freelance-visa-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="freelance-visa-faq-schema"
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
            / Freelance Visa
          </div>

          <section className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm lg:p-12">
            <div className="mb-6 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              German Visa Guide
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
              <div>
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 lg:text-5xl">
                  Germany Freelance Visa: Requirements, Eligibility &amp;
                  <span className="block text-blue-700">
                    2026 Guide for Americans
                  </span>
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                  The Germany Freelance Visa is one of the most misunderstood
                  residence paths for Americans moving to Germany. This guide
                  shows who this route is really for, where freelance
                  applications usually fail, and what to check before taking any
                  official step.
                </p>

                <div className="mt-6 flex flex-wrap gap-2 text-sm">
                  <a
                    href="#requirements"
                    className="rounded-full bg-slate-100 px-3 py-1.5 hover:bg-slate-200"
                  >
                    Requirements
                  </a>
                  <a
                    href="#clients-proof"
                    className="rounded-full bg-slate-100 px-3 py-1.5 hover:bg-slate-200"
                  >
                    Clients &amp; proof
                  </a>
                  <a
                    href="#timeline"
                    className="rounded-full bg-slate-100 px-3 py-1.5 hover:bg-slate-200"
                  >
                    Timeline
                  </a>
                  <a
                    href="#mistakes"
                    className="rounded-full bg-slate-100 px-3 py-1.5 hover:bg-slate-200"
                  >
                    Mistakes
                  </a>
                  <a
                    href="#permanent-residence"
                    className="rounded-full bg-slate-100 px-3 py-1.5 hover:bg-slate-200"
                  >
                    Permanent residence
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
                  Last fact-checked: April 2026
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
                    Americans who want to know whether the German freelance
                    route is the right visa path for their professional profile.
                  </p>
                </div>
              </aside>
            </div>
          </section>

          <section className="mt-10">
            <div className="mb-5">
              <h2 className="text-2xl font-semibold tracking-tight">
                Germany Freelance Visa quick facts
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
                  <p className="mt-3 leading-7 text-slate-700">
                    {item.snippet}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-blue-200 bg-white p-8 shadow-sm">
            <div className="mb-5">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                Candidate profiles
              </div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                Who looks like a strong Freelance Visa candidate?
              </h2>
              <p className="mt-3 max-w-4xl leading-8 text-slate-600">
                This section helps users picture where they stand before going
                deeper into documents and legal detail. It is not a legal test,
                but it reflects the kind of profile that usually looks more
                convincing under the freelance route.
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {personas.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="text-sm font-semibold text-blue-700">
                    {item.title}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">
                    {item.subtitle}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">{item.body}</p>
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
                  Do you look like a strong Freelance Visa candidate?
                </h2>
                <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                  For Americans, the freelance route can be powerful — but only
                  if the work actually fits Germany’s freelance logic and the
                  application clearly shows economic viability. Most problems are
                  not about the idea of freelancing itself. They come from weak
                  classification, weak proof, or weak preparation.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    What authorities check
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                    {checks.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
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
                          style={{ width: "65%" }}
                        />
                      </div>
                      <div className="mt-1 text-xs text-blue-100">
                        ~65% match
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
                    <li>✔ Route-fit check</li>
                    <li>✔ Client-proof assessment</li>
                    <li>✔ Licensing and risk review</li>
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

          <section className="mt-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 shadow-sm">
            <div className="mb-6">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
                Critical decision
              </div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                Freelance vs. Gewerbe — choose the right path
              </h2>
              <p className="mt-3 max-w-4xl leading-8 text-slate-700">
                This is the most important decision for this visa. Many
                applications fail because the activity is classified
                incorrectly. Germany strictly distinguishes between freelance
                (Freiberufler) and commercial business (Gewerbe) — and the visa
                path depends on that classification.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <article className="rounded-3xl border border-blue-200 bg-white p-7 shadow-sm">
                <div className="text-sm font-semibold text-blue-700">
                  Freelance (Freiberufler)
                </div>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">
                  Liberal profession
                </h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
                  <li>• Individual expertise-based work</li>
                  <li>• Often consultants, creatives, writers, developers</li>
                  <li>• No classic business structure required</li>
                  <li>• Focus on personal service, not scaling a company</li>
                  <li>
                    • Typical examples include consulting, design, writing,
                    development, teaching, and other expertise-based independent
                    work
                  </li>
                  <li>
                    • If you work mainly for one client, your case can raise
                    fake-freelancing concerns
                  </li>
                  <li>• This is the route this visa page refers to</li>
                </ul>
              </article>

              <article className="rounded-3xl border border-rose-200 bg-white p-7 shadow-sm">
                <div className="text-sm font-semibold text-rose-700">
                  Gewerbe (business)
                </div>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">
                  Commercial activity
                </h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
                  <li>• Business operations, products, or scalable services</li>
                  <li>• Often involves hiring, systems, or growth plans</li>
                  <li>• Requires different registration and approvals</li>
                  <li>• Different visa logic and expectations</li>
                  <li>• Often the correct route for founders — not freelancers</li>
                </ul>
                <div className="mt-5 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm leading-6 text-slate-700">
                  If your activity is really Gewerbe, the next step is not to
                  force it into the freelance category. You should evaluate the
                  German self-employment or business route instead and prepare
                  for different approval logic, registrations, and evidence
                  requirements.
                </div>
              </article>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-300 bg-white p-5 text-sm leading-6 text-slate-700">
              If your activity is misclassified, your application can be
              rejected even if everything else looks strong. This is one of the
              most common — and most avoidable — mistakes.
            </div>
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight">
                Is this actually the right route?
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                This is the most important decision on the page. Many people
                search for a “Germany freelance visa” when their case really
                looks more like employment, a business founder route, or a
                commercial self-employment setup. If this classification is
                wrong, the rest of the application can go in the wrong
                direction.
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
                Many Americans start with generic freelance-visa content and
                assume that remote work, self-employment, or independent
                contracting automatically fits the German freelance route. In
                reality, Germany looks at local classification, proof of
                economic viability, insurance, documentation quality, and the
                actual structure of the work.
              </p>
            </article>
          </section>

          <section
            id="requirements"
            className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-3xl font-semibold tracking-tight">
              Germany Freelance Visa requirements
            </h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              There is no single salary threshold that decides everything.
              Instead, authorities look at whether your case makes sense as a
              real freelance profile in Germany and whether your file supports
              that case clearly.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {requirements.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="text-base font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="clients-proof"
            className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-3xl font-semibold tracking-tight">
              Germany Freelance Visa documents and proof
            </h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              This section deserves its own treatment on the freelance page. The
              issue is not just whether you have documents — it is whether your
              documents collectively prove that the freelance activity is real,
              coherent, and financially plausible.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {proofCards.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold tracking-tight">
              Where should you apply — in Germany or from the U.S.?
            </h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              Americans often have two practical paths: enter Germany and apply
              locally, or apply from the U.S. before moving. Applying in Germany
              can feel faster and more flexible, but it can also create pressure
              if you are waiting on local appointments and cannot fully rely on
              the freelance activity yet. Applying from the U.S. is often
              slower, but it can be more predictable for people who want more
              certainty before relocating.
            </p>
          </section>

          <section id="timeline" className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight">
                Germany Freelance Visa processing time and timeline
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                The real timeline depends on where you apply, how complete the
                file is, whether route classification is clear, and how quickly
                local appointments move after arrival. Most delays happen
                between these steps — especially when the freelance
                classification is unclear, the client case is too weak, or
                supporting documents do not tell one consistent story.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-full bg-slate-100 px-3 py-2">
                  Check fit
                </span>
                <span>→</span>
                <span className="rounded-full bg-slate-100 px-3 py-2">
                  Build proof
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
                  Handle post-arrival steps in Germany
                </span>
              </div>
            </article>

            <article
              id="mistakes"
              className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h2 className="text-2xl font-semibold tracking-tight">
                Where delays usually happen
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                Delays often happen between steps — especially when the
                freelance classification is unclear, the client case is too
                weak, or supporting documents do not tell one consistent story.
              </p>
            </article>
          </section>

          <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold tracking-tight">
              What happens after arrival in Germany?
            </h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              The visa decision is only part of the move. After arrival, many
              Americans still need to handle local setup steps such as address
              registration, health insurance coordination, tax-office
              registration, and the residence-permit stage itself. This is one
              reason the freelance route feels more complex in practice than it
              first appears.
            </p>
          </section>

          <section className="mt-10 rounded-3xl border border-rose-200 bg-rose-50 p-8 shadow-sm">
            <p className="text-xs font-semibold text-rose-700">
              🚫 Frequent rejection reasons
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              What can delay or weaken a Freelance Visa application?
            </h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-700">
              Most freelance visa problems are not about the idea of freelancing
              itself. In many cases, the issue is weak route classification,
              weak proof, or an application file that does not clearly show why
              the freelance plan is viable.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {frictionPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-rose-200 bg-white p-5 text-sm leading-6 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-slate-700">
              Most freelance visa problems are not about the idea of
              freelancing itself — they come from weak route classification,
              weak proof, or weak application preparation.
            </div>
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div
                className="absolute right-0 top-0 rounded-bl-2xl px-3 py-1 text-sm font-semibold text-white"
                style={{ backgroundColor: "#556b2f" }}
              >
                Long-term planning
              </div>
              <h2
                id="permanent-residence"
                className="pr-40 text-2xl font-semibold tracking-tight"
              >
                Family reunification and long-term path
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                This route should not be treated as a short paperwork exercise
                only. Users also want to know whether the permit can be
                extended, whether family can join, and what the
                permanent-residence path looks like over time.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight">
                U.S.-specific practical reality
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <li>• Visa-free entry does not replace residence approval</li>
                <li>
                  • A strong U.S. résumé alone does not prove German route fit
                </li>
                <li>
                  • Insurance and local process details matter earlier than many
                  expect
                </li>
                <li>
                  • Many Americans underestimate how much proof-based
                  preparation is needed
                </li>
              </ul>
            </article>
          </section>

          <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold tracking-tight">
              Germany Freelance Visa vs other visa options
            </h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              The freelance visa is only one of several ways to move to Germany.
              Compared to the EU Blue Card, it does not require a job offer but
              has less predictable approval criteria. Compared to the
              Opportunity Card, it is not a job-seeking visa but requires an
              already viable freelance activity.
            </p>
          </section>

          <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold tracking-tight">
              Who should NOT apply for the Germany Freelance Visa
            </h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              This route is often the wrong choice for business founders,
              unclear self-employment cases, or profiles that do not clearly fit
              freelance classification. If your activity looks like a commercial
              business (Gewerbe), another visa route is usually more
              appropriate.
            </p>
          </section>

          <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold tracking-tight">
              Application overview
            </h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              A strong freelance application is not just a document upload
              exercise. The file needs to show one coherent story: what you do,
              why it fits the route, how it will support you, and why the
              supporting documents are enough to make that case credibly.
            </p>
          </section>

          <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Important German words
            </div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Visa dictionary
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="font-semibold text-slate-900">Freiberufler</div>
                <div className="mt-2 text-sm leading-7 text-slate-600">
                  The German concept usually used for freelance or
                  liberal-profession work.
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="font-semibold text-slate-900">
                  Ausländerbehörde
                </div>
                <div className="mt-2 text-sm leading-7 text-slate-600">
                  The local immigration authority that usually handles the
                  residence-permit stage in Germany.
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="font-semibold text-slate-900">Anmeldung</div>
                <div className="mt-2 text-sm leading-7 text-slate-600">
                  Local address registration after moving into a residence in
                  Germany.
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="font-semibold text-slate-900">Gewerbe</div>
                <div className="mt-2 text-sm leading-7 text-slate-600">
                  Commercial business activity, which is not the same as the
                  freelance route.
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="text-sm font-semibold text-blue-700">$29.00</div>
            <div className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              Visa Success Plan
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              A structured plan to improve your chances and avoid mistakes
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {planFeatures.map(([title, body]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 p-5"
                >
                  <div className="font-semibold text-slate-900">✔ {title}</div>
                  <div className="mt-2 text-sm leading-7 text-slate-600">
                    {body}
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-6 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
              See your personalized visa plan
            </button>
          </section>

          <section
            id="faq"
            className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-3xl font-semibold tracking-tight">
              Germany Freelance Visa FAQ
            </h2>
            <div className="mt-6 space-y-4">
              {faq.map((item) => (
                <div
                  key={item.q}
                  className="rounded-2xl border border-slate-200 p-5"
                >
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                    {item.q}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="final-cta"
            className="mt-10 rounded-3xl bg-blue-600 px-6 py-7 text-white shadow-sm md:px-8 md:py-9"
          >
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              You only need to be prepared — before you take any official step.
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-blue-50">
              See where your freelance case looks strong, where it looks risky,
              and what to fix before the real German process begins.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-blue-700 shadow-sm">
                See your personalized visa plan
              </button>
              <button className="rounded-full border border-blue-300 px-5 py-3 text-sm font-semibold text-white">
                Check Visa Match
              </button>
            </div>
          </section>
        </div>
      </main>

      <Footer {...settings} />
    </>
  );
}