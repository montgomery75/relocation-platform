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

export default async function ArticleTemplatePage() {
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
            / Article Template
          </div>

          <section className="pb-6 pt-2" id="top">
            <div className="er-hero">
              <div className="er-verification-bar">
                Flexible article template • EuropeRelocator editorial system
              </div>

              <div className="er-hero-grid">
                <div>
                  <div className="er-eyebrow">Shared content template</div>

                  <h1>A flexible article template for structured editorial pages</h1>

                  <p className="er-lead">
                    This page shows what a real EuropeRelocator article template
                    can look like when it follows the same visual system as the
                    Germany EU Blue Card page: editorial first, conversion-aware,
                    and modular enough for About, Author, and guide-style pages.
                  </p>

                  <p className="er-text-sm er-muted er-max-760 er-mb-18">
                    Use this for pages that need more freedom than a visa article,
                    but should still feel like part of the same product and brand.
                  </p>

                  <div className="er-hero-actions">
                    <Link href="/visa-success-plan" className="er-btn er-btn-primary">
                      Get your personalized visa plan
                    </Link>
                  </div>

                  <div className="er-quick-nav">
                    {[
                      ["#intro", "Intro"],
                      ["#summary", "Summary"],
                      ["#callout", "Callout"],
                      ["#cta", "CTA"],
                      ["#faq", "FAQ"],
                    ].map(([href, label]) => (
                      <a key={href} href={href} className="er-chip">
                        {label}
                      </a>
                    ))}
                  </div>
                </div>

                <aside className="er-hero-side">
                  <div className="er-score-label">Best used for</div>
                  <div className="er-score-title">
                    Pages that need flexibility without breaking the design system
                  </div>

                  <div className="er-score-list">
                    <div className="er-score-item">
                      <strong>Page types</strong>
                      <span>About Us, Author, city guide, moving guide</span>
                    </div>

                    <div className="er-score-item">
                      <strong>Structure</strong>
                      <span>Editorial layout with modular trust and CTA blocks</span>
                    </div>

                    <div className="er-score-item">
                      <strong>Goal</strong>
                      <span>Keep unique pages consistent with the visa content system</span>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <section className="er-section">
            <div className="er-hero">
              <div className="er-eyebrow">EuropeRelocator System</div>

              <h2>More Clarity and Less Risk</h2>

              <p className="er-section-intro er-max-760">
                Our system helps you move from uncertainty to a clearer relocation
                plan — first by finding the right country, then the right visa,
                and finally by showing you how to move forward with fewer mistakes.
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

          <section id="intro" className="er-section">
            <div className="er-section-box">
              <SectionHeading
                label="Core content"
                title="Rich editorial content should still feel structured"
                intro="This template is designed for pages that need more flexibility than a visa article, but should still use the same logic: clear explanation, trust signals, and the right CTA at the right time."
              />

              <div className="er-grid-2">
                <div>
                  <p className="er-mb-18">
                    On EuropeRelocator, some pages are highly structured
                    decision pages, like visa articles. Others are broader
                    editorial pages, such as author pages, relocation guides,
                    and topic explainers.
                  </p>

                  <p className="er-mb-18">
                    This template is for those pages. It gives you room for more
                    narrative and brand voice, without drifting away from the
                    design, trust language, and product logic users already know.
                  </p>

                  <p className="er-mb-0">
                    The result should still feel unmistakably like part of the
                    same system.
                  </p>
                </div>

                <div className="er-note-box">
                  <h3>When to use this template</h3>
                  <ul className="er-clean-list er-mt-16">
                    <li>About pages and founder pages</li>
                    <li>Country or city guides that are not visa-specific</li>
                    <li>Practical moving guides and resource pages</li>
                    <li>Pages where editorial explanation matters more than scoring</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="summary" className="er-section">
            <div className="er-section-box">
              <SectionHeading
                label="Summary cards"
                title="A compact way to frame the page"
                intro="This block is useful near the top of longer pages when you want readers to understand the purpose quickly."
              />

              <div className="er-grid-3">
                <div className="er-card">
                  <div className="er-small-label">Use case</div>
                  <h3>About page</h3>
                  <p className="er-muted er-text-sm">
                    Explain who you help, how the service works, and why the
                    business exists.
                  </p>
                </div>

                <div className="er-card">
                  <div className="er-small-label">Use case</div>
                  <h3>Author page</h3>
                  <p className="er-muted er-text-sm">
                    Show expertise, lived experience, and topic credibility in
                    a structured way.
                  </p>
                </div>

                <div className="er-card">
                  <div className="er-small-label">Use case</div>
                  <h3>Guide page</h3>
                  <p className="er-muted er-text-sm">
                    Highlight the key questions, decisions, or common mistakes
                    users should understand first.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="callout" className="er-section">
            <div className="er-local-box">
              <div className="er-small-label">Callout</div>
              <h2>A strong article template still needs room for context</h2>
              <p className="er-section-intro er-max-760">
                Not every page is about pass-or-fail eligibility. Sometimes the
                value is helping users understand the landscape, the tradeoffs,
                and what they are likely to get wrong before they take the next step.
              </p>
            </div>
          </section>

          <section className="er-section">
            <div className="er-section-box">
              <SectionHeading
                label="Steps"
                title="A process section should feel practical"
                intro='This is useful for “how it works,” planning pages, or any page where the user needs a clear sequence.'
              />

              <div className="er-grid-3">
                {[
                  [
                    "01",
                    "Understand the situation",
                    "Clarify what the page helps the user decide or prepare.",
                  ],
                  [
                    "02",
                    "Turn it into actions",
                    "Break the topic into concrete steps with real-world explanations.",
                  ],
                  [
                    "03",
                    "Show the next move",
                    "End with a CTA, plan, or related page that makes the next step obvious.",
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

          <section id="cta" className="er-section">
            <div className="er-section-box">
              <SectionHeading
                label="Flexible CTA"
                title="Time to check if you qualify"
                intro="This CTA block can sit naturally inside the article flow when the reader is ready to move from information to action."
              />

              <div className="er-cta">
                <div>
                  <h3>Understand your case before you take the next official step</h3>
                  <p>
                    See your eligibility, approval chances, likely risks, and
                    the next steps that matter most for your situation.
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

          <section className="er-section">
            <div className="er-grid-3">
              <div className="er-card">
                <div className="er-small-label">Free Tool</div>
                <div className="er-chip er-chip-country er-mb-12">Your Country</div>
                <h3>Not sure where to move?</h3>
                <p className="er-muted er-text-sm er-mb-12">
                  Answer a few simple questions about your goals, lifestyle, and
                  financial situation.
                </p>
                <p className="er-muted er-text-sm er-mb-20">
                  You’ll get a clear recommendation with your best country option
                  and alternatives — based on real relocation criteria.
                </p>
                <Link href="/countries" className="er-btn er-btn-primary">
                  Start country match
                </Link>
              </div>

              <div className="er-card">
                <div className="er-small-label">Free Tool</div>
                <div className="er-chip er-chip-visa er-mb-12">Your Visa</div>
                <h3>Not sure which visa works?</h3>
                <p className="er-muted er-text-sm er-mb-12">
                  Tell us about your background, work, and plans in Europe.
                </p>
                <p className="er-muted er-text-sm er-mb-20">
                  We show you visa options that fit your situation — including
                  how well each one matches your profile.
                </p>
                <Link href="/visa-match" className="er-btn er-btn-primary">
                  Start visa match
                </Link>
              </div>

              <div className="er-info-box">
                <div className="er-small-label">$29 — one time fee</div>
                <div className="er-chip er-chip-success er-mb-12">Your Success Plan</div>
                <h3>Ready to move forward?</h3>
                <p className="er-muted er-text-sm er-mb-12">
                  Based on your visa, we analyze your eligibility and highlight
                  potential risks.
                </p>
                <p className="er-muted er-text-sm er-mb-20">
                  Get a complete step-by-step plan, required documents, and a
                  clear timeline — so you avoid delays and mistakes.
                </p>
                <Link href="/visa-success-plan" className="er-btn er-btn-primary">
                  Get your personalized visa plan
                </Link>
              </div>
            </div>
          </section>

          <section id="faq" className="er-section">
            <div className="er-section-box">
              <SectionHeading
                label="FAQ"
                title="Common questions about this template style"
                intro="This is an example FAQ section for broader editorial pages."
              />

              <div className="er-grid-2">
                {[
                  [
                    "When should I use this template instead of a visa article layout?",
                    "Use it when the page is more explanatory, editorial, or brand-oriented and does not need the full visa decision architecture.",
                  ],
                  [
                    "Can this page still convert well without visa-specific scoring?",
                    "Yes. It should still guide the user toward the right next step through strong CTA placement and a clear content structure.",
                  ],
                  [
                    "Does this page still need trust signals?",
                    "Yes. Even on broader pages, users should recognize the same verification, structure, and tone they see on visa content.",
                  ],
                  [
                    "Should every article use every module?",
                    "No. This page shows a flexible composition, but real pages should only use the sections that serve the topic.",
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

          <section className="er-section">
            <div className="er-highlight-cta">
              <div>
                <div className="er-small-label">Next step</div>
                <h2>Let us help you through the process</h2>
                <p className="er-mb-0">
                  This final CTA block can be reused on article pages when you
                  want to move readers from explanation into action.
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