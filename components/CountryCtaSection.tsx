import Link from "next/link";

type CountryCtaSectionProps = {
  variant: "compact" | "expanded";
  country?: string;
  visaAdjective?: string;
  className?: string;
};

type CtaItem = {
  key: "primary" | "secondary" | "tertiary";
  title: string;
  description: string;
  href: string;
  buttonStyle: "primary" | "secondary";
};

function getVisaAdjective(country?: string, visaAdjective?: string) {
  if (visaAdjective) return visaAdjective;

  if (country === "Germany") return "German";
  if (country === "Italy") return "Italian";

  return country;
}

function getCountrySlug(country?: string) {
  return country ? country.toLowerCase() : "";
}

function getCtaItems(country?: string, visaAdjective?: string): CtaItem[] {
  const hasCountry = Boolean(country);
  const slug = getCountrySlug(country);
  const adjective = getVisaAdjective(country, visaAdjective);

  return [
    {
      key: "primary",
      title: "Get your personalized visa plan",
      description: hasCountry
        ? `Compare ${country} with other European countries based on your profile and goals.`
        : "Compare European countries based on your profile and relocation goals.",
      href: hasCountry ? `/${slug}/country-match` : "/country-match-tool",
      buttonStyle: "primary",
    },
    {
      key: "secondary",
      title: hasCountry ? `View all ${adjective} visas` : "View all visa options",
      description: hasCountry
        ? `See all ${adjective} visas and find out what they offer and require from you.`
        : "See all the visas and find out what they offer and require from you.",
      href: hasCountry ? `/${slug}/visa` : "/visa-options",
      buttonStyle: "secondary",
    },
    {
      key: "tertiary",
      title: "Get your personalized visa plan",
      description: hasCountry
        ? `This personal score tells you how likely you qualify for a specific ${adjective} visa and how difficult the application would be.`
        : "This personal score tells you how likely you qualify for a specific visa and how difficult the application would be.",
      href: hasCountry ? `/${slug}/eligibility-complexity` : "/eligibility-score",
      buttonStyle: "primary",
    },
  ];
}

function getButtonClassName(buttonStyle: "primary" | "secondary") {
  return buttonStyle === "primary"
    ? "er-btn er-btn-primary"
    : "er-btn er-btn-secondary";
}

function CompactCtaRow({ items }: { items: CtaItem[] }) {
  return (
    <div className="er-soft-box er-mt-20">
      <div className="grid gap-4 md:grid-cols-2">
        {/* LEFT: PRIMARY */}
        <Link
          href={items[0].href}
          className={getButtonClassName(items[0].buttonStyle)}
        >
          {items[0].title}
        </Link>

        {/* RIGHT: SECONDARY */}
        <Link
          href={items[1].href}
          className={getButtonClassName(items[1].buttonStyle)}
        >
          {items[1].title}
        </Link>
      </div>
    </div>
  );
}

function ExpandedCtaCards({ items }: { items: CtaItem[] }) {
  return (
    <div className="er-page">
      <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#eef2f7_100%)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 lg:mb-16">
            <div className="mb-5 inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] font-semibold tracking-[0.08em] text-slate-700 shadow-sm">
              EuropeRelocator System
            </div>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
              More Clarity and Less Risk
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-800 sm:mt-6 sm:text-lg sm:leading-8 lg:text-xl">
              Our verified system helps you move forward with a personalized
              plan before you take any official step.
            </p>
          </div>

          <div className="grid gap-5 md:gap-6 lg:grid-cols-[1fr_1fr_1.16fr] lg:items-stretch">
            <div className="group flex h-full flex-col rounded-[28px] border border-slate-300 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md sm:rounded-[32px] sm:p-8">
              <div className="mb-5 flex items-center justify-between sm:mb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-slate-50 text-sm font-semibold text-slate-700 shadow-sm">
                  01
                </div>
                <div className="rounded-full bg-blue-100 px-4 py-1.5 text-[13px] font-semibold text-blue-700">
                  Free
                </div>
              </div>

              <p className="text-sm text-slate-500">Find your best country</p>
              <h3 className="mt-1 text-[26px] font-semibold tracking-[-0.02em] text-blue-700">
                COUNTRY MATCH
              </h3>

              <div className="mt-5 border-t border-slate-200 pt-5 sm:mt-6 sm:pt-6">
                <div className="rounded-xl border border-slate-200 bg-slate-100 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                  <p className="font-serif text-base font-semibold leading-7 text-slate-800">
                    Start with the right destination based on your profile.
                  </p>
                </div>

                <ul className="mt-5 divide-y divide-slate-200 sm:mt-6">
                  <li className="flex gap-3 py-3">
                    <span className="pt-0.5 text-slate-500">&gt;</span>
                    <div>
                      <div className="font-semibold text-slate-950">
                        Compare countries
                      </div>
                      <div className="text-sm text-slate-600">
                        See which destinations fit your situation
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-3 py-3">
                    <span className="pt-0.5 text-slate-500">&gt;</span>
                    <div>
                      <div className="font-semibold text-slate-950">
                        See visa pathways
                      </div>
                      <div className="text-sm text-slate-600">
                        Understand available options per country
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-3 py-3">
                    <span className="pt-0.5 text-slate-500">&gt;</span>
                    <div>
                      <div className="font-semibold text-slate-950">
                        Focus your search
                      </div>
                      <div className="text-sm text-slate-600">
                        Only explore realistic opportunities
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <button className="mt-7 min-h-[48px] rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 group-hover:border-slate-400 sm:mt-8">
                Start country match
              </button>
            </div>

            <div className="group flex h-full flex-col rounded-[28px] border border-slate-300 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md sm:rounded-[32px] sm:p-8">
              <div className="mb-5 flex items-center justify-between sm:mb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-slate-50 text-sm font-semibold text-slate-700 shadow-sm">
                  02
                </div>
                <div className="rounded-full bg-blue-100 px-4 py-1.5 text-[13px] font-semibold text-blue-700">
                  Free
                </div>
              </div>

              <p className="text-sm text-slate-500">Identify your visa path</p>
              <h3 className="mt-1 text-[26px] font-semibold tracking-[-0.02em] text-blue-700">
                VISA MATCH
              </h3>

              <div className="mt-5 border-t border-slate-200 pt-5 sm:mt-6 sm:pt-6">
                <div className="rounded-xl border border-slate-200 bg-slate-100 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                  <p className="font-serif text-base font-semibold leading-7 text-slate-800">
                    Find the visa that actually works for your situation.
                  </p>
                </div>

                <ul className="mt-5 divide-y divide-slate-200 sm:mt-6">
                  <li className="flex gap-3 py-3">
                    <span className="pt-0.5 text-slate-500">&gt;</span>
                    <div>
                      <div className="font-semibold text-slate-950">
                        See eligible visas
                      </div>
                      <div className="text-sm text-slate-600">
                        Based on your profile and situation
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-3 py-3">
                    <span className="pt-0.5 text-slate-500">&gt;</span>
                    <div>
                      <div className="font-semibold text-slate-950">
                        Understand requirements
                      </div>
                      <div className="text-sm text-slate-600">
                        Know what each visa requires upfront
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-3 py-3">
                    <span className="pt-0.5 text-slate-500">&gt;</span>
                    <div>
                      <div className="font-semibold text-slate-950">
                        Avoid wrong paths
                      </div>
                      <div className="text-sm text-slate-600">
                        Save time by focusing on the right option
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <button className="mt-7 min-h-[48px] rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 group-hover:border-slate-400 sm:mt-8">
                Check visa options
              </button>
            </div>

            <div className="group relative flex h-full flex-col rounded-[28px] border border-blue-300 bg-gradient-to-b from-white to-blue-50 p-6 shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg sm:rounded-[32px] sm:p-8 lg:scale-[1.015]">
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
              <div className="mb-5 flex items-center justify-between sm:mb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-300 bg-white text-sm font-semibold text-blue-700 shadow-sm">
                  03
                </div>
                <div className="rounded-full bg-blue-600 px-4 py-1.5 text-[13px] font-semibold text-white shadow-sm">
                  $29.00
                </div>
              </div>

              <p className="text-sm text-slate-500">Get your step-by-step plan</p>
              <h3 className="mt-1 text-[26px] font-semibold tracking-[-0.02em] text-blue-700">
                VISA SUCCESS PLAN
              </h3>

              <div className="mt-5 border-t border-blue-200 pt-5 sm:mt-6 sm:pt-6">
                <div className="rounded-xl border border-blue-200 bg-white px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                  <p className="font-serif text-base font-semibold leading-7 text-slate-900">
                    A structured plan to improve your chances and avoid mistakes.
                  </p>
                </div>

                <ul className="mt-5 divide-y divide-blue-200 sm:mt-6">
                  <li className="flex items-start gap-3 py-3">
                    <span className="pt-0.5 font-bold text-blue-600">✓</span>
                    <div>
                      <div className="font-semibold text-slate-950">
                        Eligibility assessment
                      </div>
                      <div className="text-sm text-slate-700">
                        Know exactly where you stand before applying
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 py-3">
                    <span className="pt-0.5 font-bold text-blue-600">✓</span>
                    <div>
                      <div className="font-semibold text-slate-950">
                        Complexity score &amp; risk insights
                      </div>
                      <div className="text-sm text-slate-700">
                        Understand difficulty and potential issues
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 py-3">
                    <span className="pt-0.5 font-bold text-blue-600">✓</span>
                    <div>
                      <div className="font-semibold text-slate-950">
                        Step-by-step roadmap
                      </div>
                      <div className="text-sm text-slate-700">
                        Clear guidance on what to do and when
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 py-3">
                    <span className="pt-0.5 font-bold text-blue-600">✓</span>
                    <div>
                      <div className="font-semibold text-slate-950">
                        Document checklist
                      </div>
                      <div className="text-sm text-slate-700">
                        Only what you actually need to prepare
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 py-3">
                    <span className="pt-0.5 font-bold text-blue-600">✓</span>
                    <div>
                      <div className="font-semibold text-slate-950">
                        Timeline estimate
                      </div>
                      <div className="text-sm text-slate-700">
                        Plan your application with confidence
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 py-3">
                    <span className="pt-0.5 font-bold text-blue-600">✓</span>
                    <div>
                      <div className="font-semibold text-slate-950">
                        Critical warnings
                      </div>
                      <div className="text-sm text-slate-700">
                        Avoid delays and common rejection reasons
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <button className="mt-7 min-h-[48px] rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 sm:mt-8">
                See your personalized visa plan
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function CountryCtaSection({
  variant,
  country,
  visaAdjective,
  className,
}: CountryCtaSectionProps) {
  const items = getCtaItems(country, visaAdjective);

  return (
    <div className={className}>
      {variant === "compact" ? (
        <CompactCtaRow items={items} />
      ) : (
        <ExpandedCtaCards items={items} />
      )}
    </div>
  );
}