import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { fetcher } from "@/lib/sanity/client";

async function getSettingsData() {
  const data = await fetcher([`*[_type == "settings"][0]`, {}]);
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
      {label ? <div className="er-small-label">{label}</div> : null}
      <h2>{title}</h2>
      {intro ? <p className="er-section-intro">{intro}</p> : null}
    </div>
  );
}

export default async function ArticlePage() {
  const settings = await getSettingsData();

  return (
    <>
      <Navbar {...settings} />

      <main className="bg-[#f8fbff] min-h-screen text-slate-900">
        <div className="er-page">
          <div className="mb-4 text-sm text-[#5f6c85]">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/design-templates" className="hover:underline">
              Design Templates
            </Link>{" "}
            / Article Page
          </div>

          <section className="pb-6 pt-2">
            <div className="er-hero">
              <div className="er-verification-bar">Flexible article reference • CMS-ready content system</div>

              <div className="er-hero-grid">
                <div>
                  <div className="er-eyebrow">Flexible article template</div>

                  <h1>A flexible article template for About, Author, and Guide pages</h1>

                  <p className="er-lead">
                    This reference page shows how one shared EuropeRelocator article
                    system can support simple brand pages, expert author pages, and
                    broader editorial guides — while keeping the same overall design
                    language as the Germany visa content.
                  </p>

                  <div className="er-hero-actions">
                    <Link href="#" className="er-btn er-btn-primary">
                      Primary CTA
                    </Link>
                    <Link href="#" className="er-btn er-btn-secondary">
                      Secondary CTA
                    </Link>
                  </div>
                </div>

                <aside className="er-hero-side">
                  <div className="er-score-label">Best used for</div>
                  <div className="er-score-title">
                    A shared page system for structured editorial content
                  </div>

                  <div className="er-score-list">
                    <div className="er-score-item">
                      <strong>Page types</strong>
                      <span>About Us, Author, Living Abroad Guide</span>
                    </div>

                    <div className="er-score-item">
                      <strong>Shared elements</strong>
                      <span>Hero, cards, CTA logic, footer, trust styling</span>
                    </div>

                    <div className="er-score-item">
                      <strong>CMS goal</strong>
                      <span>Modular sections with controlled settings</span>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          {/* BIG PROMOTION TEASER */}
          <section className="er-section">
            <div className="er-hero">
              <div className="er-eyebrow">EuropeRelocator System</div>

              <h2>More Clarity and Less Risk</h2>

              <p className="er-section-intro er-max-760">
                Our verified system helps Americans move forward with a clearer plan
                before taking any official immigration step.
              </p>

              <div className="er-grid-3">
                <div className="er-card er-widget-card">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="er-step-badge">01</div>
                    <div className="er-chip">Free</div>
                  </div>

                  <p className="er-text-sm er-muted er-mb-8">Find your best country</p>
                  <h3 className="er-mb-18">COUNTRY MATCH</h3>

                  <div className="er-soft-box er-mb-20">
                    <p className="er-mb-0 font-semibold">
                      See which European country is the best fit for you.
                    </p>
                  </div>

                  <ul className="er-clean-list er-mb-20">
                    <li>
                      <strong>Compare options</strong>
                      <br />
                      Based on your goals, finances, and situation
                    </li>
                    <li>
                      <strong>Get clarity faster</strong>
                      <br />
                      Focus on countries that make sense for you
                    </li>
                    <li>
                      <strong>Avoid wrong paths</strong>
                      <br />
                      Save time before diving into visa details
                    </li>
                  </ul>

                  <Link href="/countries" className="er-btn er-btn-primary">
                    Find Country
                  </Link>
                </div>

                <div className="er-card er-widget-card">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="er-step-badge">02</div>
                    <div className="er-chip">Free</div>
                  </div>

                  <p className="er-text-sm er-muted er-mb-8">Identify your visa path</p>
                  <h3 className="er-mb-18">VISA MATCH</h3>

                  <div className="er-soft-box er-mb-20">
                    <p className="er-mb-0 font-semibold">
                      Find the visa that actually works for your situation.
                    </p>
                  </div>

                  <ul className="er-clean-list er-mb-20">
                    <li>
                      <strong>See eligible visas</strong>
                      <br />
                      Based on your profile and situation
                    </li>
                    <li>
                      <strong>Understand requirements</strong>
                      <br />
                      Know what each visa requires upfront
                    </li>
                    <li>
                      <strong>Avoid wrong paths</strong>
                      <br />
                      Save time by focusing on the right option
                    </li>
                  </ul>

                  <Link href="/visa-match" className="er-btn er-btn-secondary">
                    Find Visa
                  </Link>
                </div>

                <div className="er-info-box">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="er-step-badge">03</div>
                    <div className="er-chip">$29 one time</div>
                  </div>

                  <p className="er-text-sm er-muted er-mb-8">Move forward with confidence</p>
                  <h3 className="er-mb-18">VISA SUCCESS PLAN</h3>

                  <div className="er-soft-box er-mb-20">
                    <p className="er-mb-0 font-semibold">
                      Know if you qualify and what to do next.
                    </p>
                  </div>

                  <ul className="er-clean-list er-mb-20">
                    <li>
                      <strong>Check if you qualify</strong>
                      <br />
                      See whether your case meets the core requirements
                    </li>
                    <li>
                      <strong>Understand approval chances</strong>
                      <br />
                      Spot risks before you take official steps
                    </li>
                    <li>
                      <strong>Get your roadmap</strong>
                      <br />
                      Follow a clearer next-step plan with less confusion
                    </li>
                  </ul>

                  <Link href="/visa-success-plan" className="er-btn er-btn-primary">
                    Get your personalized visa plan
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* 3-STEP FLOW */}
          <section className="er-section">
            <div className="er-section-box">
              <SectionHeading
                label="New widget"
                title="3-Step Flow"
                intro="A tighter, more article-native version of the product flow that can replace the old core tools block."
              />

              <div className="er-grid-3">
                <div className="er-card">
                  <div className="er-small-label er-mb-10">Free Tool</div>

                  <div className="flex items-center gap-2 er-mb-12">
                    <div className="er-step-badge !min-w-[30px] !h-[30px] !mb-0 !text-[12px]">1</div>
                    <span className="text-sm font-semibold text-slate-900">Country Check</span>
                  </div>

                  <h3 className="er-mb-10">Best Country</h3>
                  <p className="er-muted er-text-sm er-mb-20">
                    Which European country fits your preferences, goals and profile.
                  </p>

                  <Link href="/countries" className="er-btn er-btn-primary">
                    Find Country
                  </Link>
                </div>

                <div className="er-card">
                  <div className="er-small-label er-mb-10">Free Tool</div>

                  <div className="flex items-center gap-2 er-mb-12">
                    <div className="er-step-badge !min-w-[30px] !h-[30px] !mb-0 !text-[12px]">2</div>
                    <span className="text-sm font-semibold text-slate-900">Visa Check</span>
                  </div>

                  <h3 className="er-mb-10">Best Visa</h3>
                  <p className="er-muted er-text-sm er-mb-20">
                    Find the visas that actually work for you. Get a ranking on how
                    suitable they are for you.
                  </p>

                  <Link href="/visa-match" className="er-btn er-btn-primary">
                    Find Visa
                  </Link>
                </div>

                <div className="er-info-box">
                  <div className="er-small-label er-mb-10">$29 — one time fee</div>

                  <div className="flex items-center gap-2 er-mb-12">
                    <div className="er-step-badge !min-w-[30px] !h-[30px] !mb-0 !text-[12px]">3</div>
                    <span className="text-sm font-semibold text-slate-900">
                      Visa Success Plan
                    </span>
                  </div>

                  <h3 className="er-mb-10">Your Visa Plan</h3>

                  <ul className="er-clean-list er-mb-20">
                    <li>Check if you qualify</li>
                    <li>Understand your approval chances</li>
                    <li>Know exactly what to do next</li>
                  </ul>

                  <Link href="/visa-success-plan" className="er-btn er-btn-primary">
                    Get your personalized visa plan
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* WIDGET 1 */}
          <section className="er-section">
            <div className="er-section-box">
              <SectionHeading label="Widget 1" title="Rich text block" />
              <div className="er-max-760">
                <p className="er-mb-18">
                  This is the core editorial block. It should handle standard
                  article text, intros, short brand explanations, and longer guide
                  content. In the CMS, this will likely map to a flexible rich text
                  editor with a controlled set of formatting options.
                </p>
                <p className="er-mb-18">
                  The goal is not unlimited design freedom. The goal is a clean
                  page that feels consistent with the rest of EuropeRelocator.
                </p>
                <ul className="er-clean-list">
                  <li>Use for basic content sections</li>
                  <li>Support headings, paragraphs, lists, and links</li>
                  <li>Keep spacing and typography standardized</li>
                </ul>
              </div>
            </div>
          </section>

          {/* WIDGET 2 */}
          <section className="er-section">
            <div className="er-section-box">
              <SectionHeading
                label="Widget 2"
                title="Quick facts / summary cards"
                intro="A reusable summary block for editorial pages, overview sections, or short brand intros."
              />

              <div className="er-grid-3">
                <div className="er-card">
                  <div className="er-small-label">Use case</div>
                  <h3>About page</h3>
                  <p className="er-muted er-text-sm">
                    Explain who you help, what the company does, and how the platform
                    is different.
                  </p>
                </div>

                <div className="er-card">
                  <div className="er-small-label">Use case</div>
                  <h3>Author page</h3>
                  <p className="er-muted er-text-sm">
                    Summarize expertise, topic areas, and why the author is qualified
                    to write the content.
                  </p>
                </div>

                <div className="er-card">
                  <div className="er-small-label">Use case</div>
                  <h3>Guide page</h3>
                  <p className="er-muted er-text-sm">
                    Highlight key takeaways, biggest mistakes, or the main decisions
                    readers need to make.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* WIDGET 3 */}
          <section className="er-section">
            <div className="er-local-box">
              <div className="er-small-label">Widget 3</div>
              <h2>Callout box</h2>
              <p className="er-section-intro er-max-760">
                This box can be reused for expert tips, local advice, important
                warnings, or explanations of what people often get wrong.
              </p>
            </div>
          </section>

          {/* WIDGET 4 */}
          <section className="er-section">
            <div className="er-section-box">
              <SectionHeading
                label="Widget 4"
                title="Steps / process block"
                intro='Useful for process pages, planning guides, and "how it works" content.'
              />

              <div className="er-grid-3">
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
                  <div key={step} className="er-card">
                    <div className="er-step-badge">{step}</div>
                    <h3>{title}</h3>
                    <p className="er-muted er-text-sm">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WIDGET 5 */}
          <section className="er-section">
            <div className="er-section-box">
              <SectionHeading label="Widget 5" title="Checklist block" />

              <div className="er-stack-16">
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
                  <div key={title} className="er-card">
                    <h3>{title}</h3>
                    <p className="er-muted er-text-sm">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WIDGET 6 */}
          <section className="er-section">
            <div className="er-section-box">
              <SectionHeading label="Widget 6" title="Comparison block" />

              <div className="er-grid-2">
                <div className="er-card">
                  <h3>Simple editorial version</h3>
                  <p className="er-muted er-text-sm">
                    Good for side-by-side explanations like DIY vs expert help,
                    temporary vs long-term move, or two planning paths.
                  </p>
                </div>

                <div className="er-card">
                  <h3>Structured guidance version</h3>
                  <p className="er-muted er-text-sm">
                    Can later support bullets, labels, and optional CTA links if
                    needed.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* WIDGET 7 */}
          <section className="er-section">
            <div className="er-section-box">
              <SectionHeading label="Widget 7" title="Author / expert box" />

              <div className="er-grid-2">
                <div className="er-placeholder-card">
                  Replace this placeholder with a real author photo later.
                </div>

                <div className="er-card">
                  <h3>Sebastian Mueller</h3>
                  <p className="er-muted er-text-sm">
                    Founder of EuropeRelocator. German-American entrepreneur with
                    personal and professional experience across the U.S. and Germany.
                  </p>

                  <div className="er-quick-nav er-mt-16">
                    {[
                      "Germany relocation",
                      "U.S. to Europe planning",
                      "Practical bureaucracy guidance",
                    ].map((chip) => (
                      <span key={chip} className="er-chip">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* WIDGET 8 */}
          <section className="er-section">
            <div className="er-critical-box">
              <div className="er-small-label">Widget 8</div>
              <h2>Quote / testimonial block</h2>
              <p className="er-section-intro er-max-760">
                “The flex article should feel like one coherent system — not a random
                collection of CMS blocks.”
              </p>
            </div>
          </section>

          {/* WIDGET 9 */}
          <section className="er-section">
            <div className="er-section-box">
              <SectionHeading
                label="Widget 9"
                title="Verified information box"
                intro="An optional trust widget for immigration, residency, tax, and process pages. All three content rows are editable in the CMS."
              />

              <div className="er-card">
                <div className="er-verification-bar">Verified immigration information</div>

                <div className="er-source-list">
                  <div>
                    <strong>Last fact-checked:</strong> March 16, 2026
                  </div>
                  <div>
                    <strong>Sources monitored:</strong> German Federal Foreign Office
                    • Make-it-in-Germany by the Federal Republic of Germany • German
                    missions
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* WIDGET 10 */}
          <section className="er-section">
            <div className="er-section-box">
              <SectionHeading label="Widget 10" title="Resource links block" />

              <div className="er-stack-16">
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
                  <div key={title} className="er-card">
                    <h3>{title}</h3>
                    <p className="er-muted er-text-sm">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WIDGET 11 */}
          <section className="er-section">
            <div className="er-section-box">
              <SectionHeading label="Widget 11" title="FAQ block" />

              <div className="er-grid-3">
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
                  <div key={q} className="er-card">
                    <h3>{q}</h3>
                    <p className="er-muted er-text-sm">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WIDGET 12 */}
          <section className="er-section">
            <div className="er-section-box">
              <SectionHeading
                label="Widget 12"
                title="Highlight box"
                intro="An optional high-visibility block. Headline, text, and one or two CTA buttons should all be editable in the CMS."
              />

              <div className="er-highlight-cta">
                <div>
                  <h3>This box really stands out when you need it</h3>
                  <p className="er-mb-0">
                    Use this as a featured content highlight, mid-page CTA, or
                    premium emphasis block on guide, author, or about pages.
                  </p>
                </div>

                <div className="er-cta-actions">
                  <Link href="#" className="er-btn er-btn-primary">
                    You need to check this out
                  </Link>
                  <Link href="#" className="er-btn er-btn-secondary">
                    Secondary CTA
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* FLEXIBLE TEXT CTA */}
          <section className="er-section">
            <div className="er-section-box">
              <SectionHeading
                label="New widget"
                title="Flexible text CTA"
                intro="Reusable article CTA block with a flexible headline and one consistent primary action."
              />

              <div className="er-cta">
                <div>
                  <h3>Time to check if you qualify</h3>
                  <p>
                    Understand your eligibility, approval chances, and exact next
                    steps before starting your application.
                  </p>
                </div>

                <div className="er-cta-actions">
                  <Link href="/visa-success-plan" className="er-btn er-btn-primary">
                    Get your personalized visa plan
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* PROMO CARDS */}
          <section className="er-section">
            <div className="er-grid-3">
              <div className="er-card">
                <div className="er-small-label">Free Tool</div>
                <div className="er-chip er-mb-12" style={{ background: "var(--amber-soft)", borderColor: "var(--amber-line)" }}>
                  Your Country
                </div>
                <h3>Not sure where to move?</h3>
                <p className="er-muted er-text-sm er-mb-12">
                  Answer a few simple questions about your goals, lifestyle, and
                  financial situation.
                </p>
                <p className="er-muted er-text-sm er-mb-20">
                  You’ll get a clear recommendation with your best country option and
                  alternatives — based on real relocation criteria.
                </p>
                <Link href="/countries" className="er-btn er-btn-primary">
                  Start country match
                </Link>
              </div>

              <div className="er-card">
                <div className="er-small-label">Free Tool</div>
                <div className="er-chip er-mb-12" style={{ background: "#f2ebff", borderColor: "#dbc9ff", color: "#6d42c7" }}>
                  Your Visa
                </div>
                <h3>Not sure which visa works?</h3>
                <p className="er-muted er-text-sm er-mb-12">
                  Tell us about your background, work, and plans in Europe.
                </p>
                <p className="er-muted er-text-sm er-mb-20">
                  We show you visa options that fit your situation — including how
                  well each one matches your profile.
                </p>
                <Link href="/visa-match" className="er-btn er-btn-primary">
                  Start visa match
                </Link>
              </div>

              <div className="er-info-box">
                <div className="er-small-label">$29 — one time fee</div>
                <div className="er-chip er-mb-12" style={{ background: "var(--green-soft)", borderColor: "#bfe7d2", color: "var(--green)" }}>
                  Your Success Plan
                </div>
                <h3>Ready to move forward?</h3>
                <p className="er-muted er-text-sm er-mb-12">
                  Based on your visa, we analyze your eligibility and highlight
                  potential risks.
                </p>
                <p className="er-muted er-text-sm er-mb-20">
                  Get a complete step-by-step plan, required documents, and a clear
                  timeline — so you avoid delays and mistakes.
                </p>
                <Link href="/visa-success-plan" className="er-btn er-btn-primary">
                  Get your personalized visa plan
                </Link>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="er-section">
            <div className="er-highlight-cta">
              <div>
                <div className="er-small-label">Next step</div>
                <h2>Let us help you through the process</h2>
                <p className="er-mb-0">
                  Reuse this final CTA area across article pages when you want to move
                  readers from information into action.
                </p>
              </div>

              <div className="er-cta-actions">
                <Link href="/visa-success-plan" className="er-btn er-btn-primary">
                  Get your personalized visa plan
                </Link>
                <Link href="/germany/visa" className="er-btn er-btn-secondary">
                  Explore Germany guides
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer {...settings} />
    </>
  );
}