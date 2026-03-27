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

function CornerBadgeCard({
  badge,
  badgeClassName,
  children,
  className = "",
}: {
  badge: string;
  badgeClassName?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[20px] border border-[#d9e3f5] bg-white p-6 shadow-[0_10px_30px_rgba(22,50,79,0.06)] ${className}`}
    >
      <div
        className={`absolute right-0 top-0 rounded-bl-[16px] rounded-tr-[20px] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white ${badgeClassName || "bg-[#1f6fff]"}`}
      >
        {badge}
      </div>
      {children}
    </div>
  );
}

export default async function ArticlePage() {
  const settings = await getSettingsData();

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
            <a href="/design-templates" className="hover:underline">
              Design Templates
            </a>{" "}
            / Article Page
          </div>

          <section className="pb-6 pt-2">
            <div className="rounded-[24px] border border-[#d9e3f5] bg-white px-6 py-8 shadow-[0_18px_48px_rgba(22,50,79,0.08)] md:px-10 md:py-10">
              <div className="mb-4 inline-flex rounded-full border border-[#cfe0ff] bg-[#eef4ff] px-4 py-2 text-sm font-semibold text-[#0f4ec9]">
                Flex Article Reference
              </div>

              <div className="grid gap-8 lg:grid-cols-[1.55fr_0.95fr]">
                <div>
                  <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f4ec9]">
                    Flexible article template
                  </div>

                  <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-slate-900 md:text-5xl">
                    A flexible article template for About, Author, and Guide
                    pages
                  </h1>

                  <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 md:text-lg">
                    This reference page shows how one shared EuropeRelocator
                    article system can support simple brand pages, expert author
                    pages, and more editorial guides — while keeping the same
                    overall design language.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      className="inline-flex items-center justify-center rounded-xl bg-[#1f6fff] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f4ec9]"
                      href="#"
                    >
                      Primary CTA
                    </a>
                    <a
                      className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-gray-100"
                      href="#"
                    >
                      Secondary CTA
                    </a>
                  </div>
                </div>

                <aside className="rounded-[16px] border border-[#d9e3f5] bg-[linear-gradient(180deg,#f8fbff_0%,#edf4ff_100%)] p-6 shadow-[0_12px_30px_rgba(22,50,79,0.06)]">
                  <div className="text-sm font-semibold text-[#0f4ec9]">
                    Best used for
                  </div>

                  <div className="mt-5 space-y-3">
                    <div className="rounded-[16px] border border-[#d9e3f5] bg-white p-4">
                      <div className="text-sm font-semibold text-slate-900">
                        Page types
                      </div>
                      <div className="mt-1 text-sm leading-6 text-slate-700">
                        About Us, Author, Living Abroad Guide
                      </div>
                    </div>

                    <div className="rounded-[16px] border border-[#d9e3f5] bg-white p-4">
                      <div className="text-sm font-semibold text-slate-900">
                        Shared elements
                      </div>
                      <div className="mt-1 text-sm leading-6 text-slate-700">
                        Header, hero, CTA language, footer, card styles
                      </div>
                    </div>

                    <div className="rounded-[16px] border border-[#d9e3f5] bg-white p-4">
                      <div className="text-sm font-semibold text-slate-900">
                        CMS goal
                      </div>
                      <div className="mt-1 text-sm leading-6 text-slate-700">
                        Modular widgets with controlled settings
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <section className="py-10">
            <Card className="shadow-[0_18px_48px_rgba(22,50,79,0.08)]">
              <SectionHeading label="Widget 1" title="Rich text block" />
              <div className="max-w-3xl text-base leading-7 text-slate-700">
                This is the core editorial block. It should handle standard
                article text, intros, short brand explanations, and longer guide
                content. In the CMS, this will likely map to a flexible rich
                text editor with only a controlled set of formatting options.
              </div>

              <div className="mt-5 max-w-3xl">
                <p className="text-base leading-7 text-slate-700">
                  The goal is not unlimited design freedom. The goal is a clean
                  page that feels consistent with the rest of EuropeRelocator.
                </p>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                  <li>Use for basic content sections</li>
                  <li>Support headings, paragraphs, lists, and links</li>
                  <li>Keep spacing and typography standardized</li>
                </ul>
              </div>
            </Card>
          </section>

          <section className="py-10">
            <Card className="shadow-[0_18px_48px_rgba(22,50,79,0.08)]">
              <SectionHeading
                label="Widget 2"
                title="Quick facts / summary cards"
                intro="A reusable summary block for editorial pages, overview sections, or short brand intros."
              />

              <div className="grid gap-5 md:grid-cols-3">
                <Card className="shadow-none">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f4ec9]">
                    Use case
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    About page
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    Explain who you help, what the company does, and how the
                    platform is different.
                  </p>
                </Card>

                <Card className="shadow-none">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f4ec9]">
                    Use case
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Author page
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    Summarize expertise, topic areas, and why the author is
                    qualified to write the content.
                  </p>
                </Card>

                <Card className="shadow-none">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f4ec9]">
                    Use case
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Guide page
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    Highlight key takeaways, biggest mistakes, or the main
                    decisions readers need to make.
                  </p>
                </Card>
              </div>
            </Card>
          </section>

          <section className="py-10">
            <CornerBadgeCard
              badge="Local knowledge"
              badgeClassName="bg-slate-700"
              className="border-[#d9e6f3] bg-[linear-gradient(180deg,#f7faff_0%,#eef4ff_100%)] shadow-[0_20px_52px_rgba(31,111,255,0.06)]"
            >
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f4ec9]">
                Widget 3
              </div>
              <h2 className="mt-8 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Callout box
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
                This box can be reused for expert tips, local advice, important
                warnings, or explanations of what people often get wrong.
              </p>
            </CornerBadgeCard>
          </section>

          <section className="py-10">
            <Card className="shadow-[0_18px_48px_rgba(22,50,79,0.08)]">
              <SectionHeading
                label="Widget 4"
                title="Steps / process block"
                intro='Useful for process pages, planning guides, and "how it works" content.'
              />

              <div className="grid gap-5 md:grid-cols-3">
                {[
                  [
                    "01",
                    "Understand the decision",
                    "Clarify what the page helps the reader decide or do.",
                  ],
                  [
                    "02",
                    "Break it into actions",
                    "Present steps in a clear order with practical explanations.",
                  ],
                  [
                    "03",
                    "Offer the next step",
                    "End with a CTA, checklist, or related guide.",
                  ],
                ].map(([step, title, text]) => (
                  <Card key={step} className="shadow-none">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#cfe0ff] bg-[#eef4ff] text-sm font-semibold text-[#0f4ec9]">
                      {step}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-700">
                      {text}
                    </p>
                  </Card>
                ))}
              </div>
            </Card>
          </section>

          <section className="py-10">
            <Card className="shadow-[0_18px_48px_rgba(22,50,79,0.08)]">
              <SectionHeading label="Widget 5" title="Checklist block" />

              <div className="space-y-4">
                {[
                  [
                    "✓ Short, practical items",
                    'Use this for preparation steps, common checks, or "before you move" tasks.',
                  ],
                  [
                    "✓ Good for guide pages",
                    "Especially useful when readers want clear next actions instead of long narrative text.",
                  ],
                  [
                    "✓ Could be grouped later",
                    "In a future version, items could optionally be organized by category.",
                  ],
                ].map(([title, text]) => (
                  <Card key={title} className="shadow-none">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-700">
                      {text}
                    </p>
                  </Card>
                ))}
              </div>
            </Card>
          </section>

          <section className="py-10">
            <Card className="shadow-[0_18px_48px_rgba(22,50,79,0.08)]">
              <SectionHeading label="Widget 6" title="Comparison block" />

              <div className="grid gap-5 md:grid-cols-2">
                <Card className="shadow-none">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Simple editorial version
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    Good for side-by-side explanations like DIY vs expert help,
                    temporary vs long-term move, or two planning paths.
                  </p>
                </Card>

                <Card className="shadow-none">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Structured guidance version
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    Can later support bullets, labels, and optional CTA links if
                    needed.
                  </p>
                </Card>
              </div>
            </Card>
          </section>

          <section className="py-10">
            <Card className="shadow-[0_18px_48px_rgba(22,50,79,0.08)]">
              <SectionHeading label="Widget 7" title="Author / expert box" />

              <div className="grid gap-5 md:grid-cols-2">
                <div className="flex min-h-[180px] items-center justify-center rounded-[20px] border border-dashed border-[#c9d9ec] bg-[linear-gradient(180deg,#fbfdff_0%,#f4f8fd_100%)] p-6 text-center text-sm leading-6 text-slate-600">
                  Replace this placeholder with a real author photo later.
                </div>

                <Card className="shadow-none">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Sebastian Mueller
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    Founder of EuropeRelocator. German-American entrepreneur
                    with personal and professional experience across the U.S.
                    and Germany.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {[
                      "Germany relocation",
                      "U.S. to Europe planning",
                      "Practical bureaucracy guidance",
                    ].map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-[#d9e3f5] bg-white px-4 py-2 text-sm font-medium text-slate-700"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            </Card>
          </section>

          <section className="py-10">
            <CornerBadgeCard
              badge="Critical advice"
              className="border-[#bfd6ff] bg-[linear-gradient(180deg,#f7faff_0%,#eef4ff_100%)] shadow-[0_20px_52px_rgba(31,111,255,0.08)]"
            >
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f4ec9]">
                Widget 8
              </div>
              <h2 className="mt-8 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Quote / testimonial block
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
                “The flex article should feel like one coherent system — not a
                random collection of CMS blocks.”
              </p>
            </CornerBadgeCard>
          </section>

          <section className="py-10">
            <Card className="shadow-[0_18px_48px_rgba(22,50,79,0.08)]">
              <SectionHeading
                label="Widget 9"
                title="Verified information box"
                intro="An optional trust widget for immigration, residency, tax, and process pages. All three content rows are editable in the CMS."
              />

              <Card className="shadow-none">
                <div className="mb-4 inline-flex rounded-full border border-[#cfe0ff] bg-[#eef4ff] px-4 py-2 text-sm font-semibold text-[#0f4ec9]">
                  Verified immigration information
                </div>

                <div className="space-y-3 text-sm leading-6 text-slate-700">
                  <div>
                    <strong>Last fact-checked:</strong> March 16, 2026
                  </div>
                  <div>
                    <strong>Sources monitored:</strong> German Federal Foreign
                    Office • Make-it-in-Germany by the Federal Republic of
                    Germany • German missions
                  </div>
                </div>
              </Card>
            </Card>
          </section>

          <section className="py-10">
            <Card className="shadow-[0_18px_48px_rgba(22,50,79,0.08)]">
              <SectionHeading label="Widget 10" title="Resource links block" />

              <div className="space-y-4">
                {[
                  [
                    "Country guide example",
                    "Link to a broader Germany guide, healthcare overview, or housing article.",
                  ],
                  [
                    "Internal tool link",
                    "Connect educational content to the Country Match Tool or future eligibility workflows.",
                  ],
                  [
                    "Authority resource",
                    "Optionally include curated links to official sources or verification pages.",
                  ],
                ].map(([title, text]) => (
                  <Card key={title} className="shadow-none">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-700">
                      {text}
                    </p>
                  </Card>
                ))}
              </div>
            </Card>
          </section>

          <section className="py-10">
            <Card className="shadow-[0_18px_48px_rgba(22,50,79,0.08)]">
              <SectionHeading label="Widget 11" title="FAQ block" />

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {[
                  [
                    "Can this template be used for very different page types?",
                    "Yes. The structure stays consistent, while the widgets make the page flexible enough for simple brand pages and more editorial guides.",
                  ],
                  [
                    "Should every page use every widget?",
                    "No. This reference page shows the library. Real pages would only use the blocks that serve their purpose.",
                  ],
                  [
                    "Will this later map to CMS modules?",
                    "Yes. After the reference page is finalized, each widget can become a CMS block with controlled settings.",
                  ],
                ].map(([q, a]) => (
                  <Card key={q} className="shadow-none">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {q}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-700">{a}</p>
                  </Card>
                ))}
              </div>
            </Card>
          </section>

          <section className="py-10">
            <Card className="shadow-[0_18px_48px_rgba(22,50,79,0.08)]">
              <SectionHeading
                label="Widget 12"
                title="Highlight box"
                intro="An optional high-visibility block. Headline, text, and one or two CTA buttons should all be editable in the CMS."
              />

              <Card className="shadow-none">
                <h3 className="text-xl font-semibold text-slate-900">
                  This box really stands out when you need it
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Use this as a featured content highlight, mid-page CTA, or
                  premium emphasis block on guide, author, or about pages.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    className="inline-flex items-center justify-center rounded-xl bg-[#1f6fff] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f4ec9]"
                    href="#"
                  >
                    You need to check this out
                  </a>
                  <a
                    className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-gray-100"
                    href="#"
                  >
                    Secondary CTA
                  </a>
                </div>
              </Card>
            </Card>
          </section>

          <section className="pb-14 pt-6">
            <div className="rounded-[24px] bg-[#1f6fff] px-6 py-8 text-white shadow-[0_20px_52px_rgba(31,111,255,0.22)] md:px-8">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
                Next step
              </div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Know exactly what to do — before you take any official step.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-50 md:text-base">
                This final CTA block can be reused across flex article pages,
                with customized wording depending on whether the page is
                informational, brand-driven, or conversion-focused.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#1f6fff] transition hover:bg-slate-100"
                  href="#"
                >
                  See your personalized visa plan
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-xl border border-blue-200 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
                  href="#"
                >
                  Explore Germany guides
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer {...settings} />
    </>
  );
}