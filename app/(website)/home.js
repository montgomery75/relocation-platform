import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";

export default function HomePage({ posts = [], homepage }) {
  const featuredPosts = posts.slice(0, 3);

  return (
    <Container>
      <main className="bg-[#f7f9fc] text-slate-900">
        {/* HERO */}
        <section className="pb-6 pt-6">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-[24px] border border-[#d9e3f5] bg-white px-6 py-8 shadow-[0_18px_48px_rgba(22,50,79,0.08)] md:px-10 md:py-10">
              <div className="mx-auto max-w-4xl text-center">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f4ec9]">
                  Verified &amp; AI-driven relocation service
                </div>

                <h1 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-slate-900 md:text-5xl">
                  {homepage?.headline ||
                    "Move to Germany from the US in confidence"}
                </h1>

                <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-700 md:text-lg">
                  {homepage?.subheadline ||
                    "Discover which European countries and residency paths actually fit your situation — then build a clear relocation plan step by step."}
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Link
                    href={homepage?.ctaLink || "/countries"}
                    className="er-btn er-btn-primary"
                  >
                    {homepage?.ctaText || "Find Your Best-Fit Country"}
                  </Link>

                  <Link
                    href="/how-it-works"
                    className="er-btn er-btn-secondary"
                  >
                    See How It Works
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="pb-4">
          <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Verified relocation guidance",
              "AI-powered country & visa matching",
              "Structured relocation planning system",
              "Built for Americans relocating to Europe",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[16px] border border-[#d9e3f5] bg-white p-5 shadow-[0_10px_30px_rgba(22,50,79,0.06)]"
              >
                <div className="text-sm font-medium text-slate-700">{item}</div>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                How it works
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
                A simple process to turn relocation uncertainty into a clear
                plan.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)]">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1f6fff] text-sm font-bold text-white">
                  1
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Answer a few questions
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Tell us about your citizenship, work situation, income,
                  retirement plans, family status, and timeline.
                </p>
              </div>

              <div className="rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)]">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1f6fff] text-sm font-bold text-white">
                  2
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Get matched with suitable countries
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Discover which European countries and residence pathways best
                  match your situation.
                </p>
              </div>

              <div className="rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)]">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1f6fff] text-sm font-bold text-white">
                  3
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Build your relocation plan
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Understand requirements, documents, complexity, and next
                  steps to move forward more confidently.
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-start">
              <Link
                href={homepage?.ctaLink || "/countries"}
                className="er-btn er-btn-primary"
              >
                {homepage?.ctaText || "Find Your Best-Fit Country"}
              </Link>
            </div>
          </div>
        </section>

        {/* CORE TOOLS */}
        <section className="py-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Core platform tools
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
                The platform is designed to do more than provide content. It
                helps users move through a structured decision process.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)]">
                <div className="mb-3 text-2xl">🌍</div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Country Match Tool
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Find the European countries that fit your personal profile,
                  financial situation, and relocation goals.
                </p>
              </div>

              <div className="rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)]">
                <div className="mb-3 text-2xl">📋</div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Visa Eligibility Checker
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Identify possible residence permits and visa pathways based on
                  your situation.
                </p>
              </div>

              <div className="rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)]">
                <div className="mb-3 text-2xl">⚙️</div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Relocation Complexity Check
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Understand how complex your move may be based on bureaucracy,
                  paperwork, income structure, family status, and timeline.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY DIFFERENT */}
        <section className="py-10">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f4ec9]">
                Why EuropeRelocator
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Most relocation information online is fragmented
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-700">
                People jump between government websites, expat forums, blog
                posts, and lawyer pages — often with conflicting or outdated
                information.
              </p>
              <p className="mt-3 text-base leading-7 text-slate-700">
                EuropeRelocator brings relocation planning into one structured
                system.
              </p>
            </div>

            <div className="rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)]">
              <ul className="er-clean-list">
                <li>Verified relocation guidance</li>
                <li>AI-supported matching and analysis</li>
                <li>Structured relocation workflow</li>
                <li>Country and visa comparison</li>
                <li>Document preparation guidance</li>
                <li>Clearer next steps</li>
              </ul>

              <p className="mt-6 text-base font-semibold text-slate-900">
                The result: clarity instead of confusion.
              </p>
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="py-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Who EuropeRelocator is for
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
                EuropeRelocator is built for Americans exploring a move to
                Europe from different life stages and situations.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)]">
                <h3 className="text-lg font-semibold text-slate-900">
                  Americans retiring in Europe
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Understand residency options and practical requirements before
                  committing to a country.
                </p>
              </div>

              <div className="rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)]">
                <h3 className="text-lg font-semibold text-slate-900">
                  Dual citizens returning to Europe
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Plan relocation logistics and administrative setup more
                  efficiently.
                </p>
              </div>

              <div className="rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)]">
                <h3 className="text-lg font-semibold text-slate-900">
                  Remote workers and self-employed professionals
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Explore residence options that work with remote income and
                  more flexible living arrangements.
                </p>
              </div>

              <div className="rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)]">
                <h3 className="text-lg font-semibold text-slate-900">
                  Couples with mixed citizenship
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Understand residency possibilities and legal pathways for both
                  partners.
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-start">
              <Link
                href={homepage?.ctaLink || "/countries"}
                className="er-btn er-btn-primary"
              >
                {homepage?.ctaText || "Find Your Best-Fit Country"}
              </Link>
            </div>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="py-10">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-[24px] border border-[#d9e3f5] bg-white px-6 py-8 shadow-[0_18px_48px_rgba(22,50,79,0.08)] md:px-8">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                What you get
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
                The platform turns scattered information into a clear relocation
                strategy.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-[16px] border border-[#d9e3f5] bg-[#f7f9fc] p-5 text-sm leading-6 text-slate-700">
                  A shortlist of matching European countries
                </div>
                <div className="rounded-[16px] border border-[#d9e3f5] bg-[#f7f9fc] p-5 text-sm leading-6 text-slate-700">
                  Realistic residence and visa pathways
                </div>
                <div className="rounded-[16px] border border-[#d9e3f5] bg-[#f7f9fc] p-5 text-sm leading-6 text-slate-700">
                  A clearer relocation strategy
                </div>
                <div className="rounded-[16px] border border-[#d9e3f5] bg-[#f7f9fc] p-5 text-sm leading-6 text-slate-700">
                  Personalized requirements and document overview
                </div>
                <div className="rounded-[16px] border border-[#d9e3f5] bg-[#f7f9fc] p-5 text-sm leading-6 text-slate-700 md:col-span-2">
                  A structured relocation planning process with clearer next
                  steps
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 OPTION MODULE */}
        <section className="py-10">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-[24px] border border-[#d9e3f5] bg-white px-6 py-8 shadow-[0_18px_48px_rgba(22,50,79,0.08)] md:px-8">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f4ec9]">
                EuropeRelocator System
              </div>

              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                More Clarity and Less Risk
              </h2>

              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
                Our verified system helps you to move forward with a
                personalized plan before you take any official step.
              </p>

              <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_1fr_1.16fr] lg:items-stretch">
                <div className="rounded-[28px] border border-slate-300 bg-white p-6 shadow-sm sm:rounded-[32px] sm:p-8">
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

                  <button className="mt-7 min-h-[48px] rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 sm:mt-8">
                    Start country match
                  </button>
                </div>

                <div className="rounded-[28px] border border-slate-300 bg-white p-6 shadow-sm sm:rounded-[32px] sm:p-8">
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

                  <button className="mt-7 min-h-[48px] rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 sm:mt-8">
                    Check visa options
                  </button>
                </div>

                <div className="rounded-[28px] border border-blue-300 bg-gradient-to-b from-white to-blue-50 p-6 shadow-md sm:rounded-[32px] sm:p-8">
                  <div className="mb-5 flex items-center justify-between sm:mb-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-300 bg-white text-sm font-semibold text-blue-700 shadow-sm">
                      03
                    </div>
                    <div className="rounded-full bg-blue-600 px-4 py-1.5 text-[13px] font-semibold text-white shadow-sm">
                      $29.00
                    </div>
                  </div>

                  <p className="text-sm text-slate-500">
                    Get your step-by-step plan
                  </p>
                  <h3 className="mt-1 text-[26px] font-semibold tracking-[-0.02em] text-blue-700">
                    VISA SUCCESS PLAN
                  </h3>

                  <div className="mt-5 border-t border-blue-200 pt-5 sm:mt-6 sm:pt-6">
                    <div className="rounded-xl border border-blue-200 bg-white px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                      <p className="font-serif text-base font-semibold leading-7 text-slate-900">
                        A structured plan to improve your chances and avoid
                        mistakes.
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
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Frequently asked questions
            </h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)]">
                <h3 className="text-lg font-semibold text-slate-900">
                  Is this only for Germany?
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Germany is one of the main focus countries, but the platform
                  is designed to evaluate multiple European countries to help
                  users identify the best fit.
                </p>
              </div>

              <div className="rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)]">
                <h3 className="text-lg font-semibold text-slate-900">
                  Can this help if I’m retired?
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Yes. Many users explore relocation options after retirement,
                  and the platform helps identify countries where residency may
                  be possible.
                </p>
              </div>

              <div className="rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)]">
                <h3 className="text-lg font-semibold text-slate-900">
                  Does this replace an immigration lawyer?
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  No. The platform helps users understand their options and
                  prepare structured information. Some users may still choose to
                  work with immigration professionals.
                </p>
              </div>

              <div className="rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)]">
                <h3 className="text-lg font-semibold text-slate-900">
                  Do I need to create an account immediately?
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  No. Users can begin with the Country Match Tool and only
                  create a profile if they want to receive their full report.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OPTIONAL RESOURCES / ARTICLES */}
        {featuredPosts.length > 0 && (
          <section className="py-10">
            <div className="mx-auto max-w-6xl">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                  Relocation Guides and Resources
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
                  Explore practical articles to support your relocation
                  planning.
                </p>
              </div>

              <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {featuredPosts.map((post) => (
                  <PostList key={post._id} post={post} aspect="square" />
                ))}
              </div>

              <div className="mt-6 flex justify-start">
                <Link href="/archive" className="er-btn er-btn-secondary">
                  View All Articles
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* FINAL CTA */}
        <section className="pb-14 pt-10">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-[24px] bg-[#1f6fff] px-6 py-8 text-white shadow-[0_20px_52px_rgba(31,111,255,0.22)] md:px-8">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Start with the countries that actually fit you
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-50 md:text-base">
                Discover which European countries match your situation and
                relocation goals.
              </p>

              <div className="mt-5">
                <Link
                  href={homepage?.ctaLink || "/countries"}
                  className="er-btn er-btn-secondary"
                >
                  {homepage?.ctaText || "Find Your Best-Fit Country"}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Container>
  );
}