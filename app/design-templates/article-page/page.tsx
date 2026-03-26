export default function ArticlePage() {
  return (
    <main className="er-page">
      <div className="er-section">
        <section className="er-hero">
          <div className="er-verification-bar">Flex Article Reference</div>

          <div className="er-hero-grid">
            <div>
              <div className="er-eyebrow">Flexible article template</div>
              <h1>A flexible article template for About, Author, and Guide pages</h1>
              <p className="er-lead">
                This reference page shows how one shared EuropeRelocator article
                system can support simple brand pages, expert author pages, and
                more editorial guides — while keeping the same overall design
                language.
              </p>

              <div className="er-hero-actions">
                <a className="er-btn er-btn-primary" href="#">
                  Primary CTA
                </a>
                <a className="er-btn er-btn-secondary" href="#">
                  Secondary CTA
                </a>
              </div>
            </div>

            <aside className="er-hero-side">
              <div className="er-score-label">Best used for</div>
              <div className="er-score-list">
                <div className="er-score-item">
                  <strong>Page types</strong>
                  <span>About Us, Author, Living Abroad Guide</span>
                </div>
                <div className="er-score-item">
                  <strong>Shared elements</strong>
                  <span>Header, hero, CTA language, footer, card styles</span>
                </div>
                <div className="er-score-item">
                  <strong>CMS goal</strong>
                  <span>Modular widgets with controlled settings</span>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>

      <section className="er-section">
        <div className="er-section-box">
          <span className="er-small-label">Widget 1</span>
          <h2>Rich text block</h2>

          <div className="er-section-intro er-max-760">
            This is the core editorial block. It should handle standard article
            text, intros, short brand explanations, and longer guide content. In
            the CMS, this will likely map to a flexible rich text editor with
            only a controlled set of formatting options.
          </div>

          <div className="er-max-760">
            <p className="er-muted">
              The goal is not unlimited design freedom. The goal is a clean page
              that feels consistent with the rest of EuropeRelocator.
            </p>

            <ul className="er-clean-list er-mt-16">
              <li>Use for basic content sections</li>
              <li>Support headings, paragraphs, lists, and links</li>
              <li>Keep spacing and typography standardized</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="er-section">
        <div className="er-section-box">
          <span className="er-small-label">Widget 2</span>
          <h2>Quick facts / summary cards</h2>
          <p className="er-section-intro">
            A reusable summary block for editorial pages, overview sections, or
            short brand intros.
          </p>

          <div className="er-grid-3">
            <div className="er-card">
              <span className="er-small-label">Use case</span>
              <h3>About page</h3>
              <p className="er-muted">
                Explain who you help, what the company does, and how the
                platform is different.
              </p>
            </div>
            <div className="er-card">
              <span className="er-small-label">Use case</span>
              <h3>Author page</h3>
              <p className="er-muted">
                Summarize expertise, topic areas, and why the author is
                qualified to write the content.
              </p>
            </div>
            <div className="er-card">
              <span className="er-small-label">Use case</span>
              <h3>Guide page</h3>
              <p className="er-muted">
                Highlight key takeaways, biggest mistakes, or the main decisions
                readers need to make.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="er-section">
        <div className="er-local-box">
          <span className="er-small-label">Widget 3</span>
          <h2 className="er-mt-10">Callout box</h2>
          <p className="er-muted">
            This box can be reused for expert tips, local advice, important
            warnings, or explanations of what people often get wrong.
          </p>
        </div>
      </section>

      <section className="er-section">
        <div className="er-section-box">
          <span className="er-small-label">Widget 4</span>
          <h2>Steps / process block</h2>
          <p className="er-section-intro">
            Useful for process pages, planning guides, and “how it works”
            content.
          </p>

          <div className="er-grid-3">
            <div className="er-card">
              <div className="er-step-badge">01</div>
              <h3>Understand the decision</h3>
              <p className="er-muted">
                Clarify what the page helps the reader decide or do.
              </p>
            </div>
            <div className="er-card">
              <div className="er-step-badge">02</div>
              <h3>Break it into actions</h3>
              <p className="er-muted">
                Present steps in a clear order with practical explanations.
              </p>
            </div>
            <div className="er-card">
              <div className="er-step-badge">03</div>
              <h3>Offer the next step</h3>
              <p className="er-muted">
                End with a CTA, checklist, or related guide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="er-section">
        <div className="er-section-box">
          <span className="er-small-label">Widget 5</span>
          <h2>Checklist block</h2>

          <div className="er-status-stack">
            <div className="er-card">
              <h3>✓ Short, practical items</h3>
              <p className="er-muted">
                Use this for preparation steps, common checks, or “before you
                move” tasks.
              </p>
            </div>
            <div className="er-card">
              <h3>✓ Good for guide pages</h3>
              <p className="er-muted">
                Especially useful when readers want clear next actions instead
                of long narrative text.
              </p>
            </div>
            <div className="er-card">
              <h3>✓ Could be grouped later</h3>
              <p className="er-muted">
                In a future version, items could optionally be organized by
                category.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="er-section">
        <div className="er-section-box">
          <span className="er-small-label">Widget 6</span>
          <h2>Comparison block</h2>

          <div className="er-compare-grid">
            <div className="er-compare">
              <h3>Simple editorial version</h3>
              <p className="er-muted">
                Good for side-by-side explanations like DIY vs expert help,
                temporary vs long-term move, or two planning paths.
              </p>
            </div>
            <div className="er-compare">
              <h3>Structured guidance version</h3>
              <p className="er-muted">
                Can later support bullets, labels, and optional CTA links if
                needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="er-section">
        <div className="er-section-box">
          <span className="er-small-label">Widget 7</span>
          <h2>Author / expert box</h2>

          <div className="er-grid-2">
            <div className="er-placeholder-card">
              <p className="er-muted">
                Replace this placeholder with a real author photo later.
              </p>
            </div>

            <div className="er-card">
              <h3>Sebastian Mueller</h3>
              <p className="er-muted">
                Founder of EuropeRelocator. German-American entrepreneur with
                personal and professional experience across the U.S. and
                Germany.
              </p>

              <div className="er-quick-nav">
                <span className="er-chip">Germany relocation</span>
                <span className="er-chip">U.S. to Europe planning</span>
                <span className="er-chip">Practical bureaucracy guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="er-section">
        <div className="er-critical-box">
          <span className="er-small-label">Widget 8</span>
          <h2 className="er-mt-10">Quote / testimonial block</h2>
          <p className="er-muted">
            “The flex article should feel like one coherent system — not a
            random collection of CMS blocks.”
          </p>
        </div>
      </section>

      <section className="er-section">
        <div className="er-section-box">
          <span className="er-small-label">Widget 9</span>
          <h2>Verified information box</h2>
          <p className="er-section-intro">
            An optional trust widget for immigration, residency, tax, and
            process pages. All three content rows are editable in the CMS.
          </p>

          <div className="er-card">
            <div className="er-verification-bar">
              Verified immigration information
            </div>
            <div className="er-source-list">
              <div>
                <strong>Last fact-checked:</strong> March 16, 2026
              </div>
              <div>
                <strong>Sources monitored:</strong> German Federal Foreign
                Office • Make-it-in-Germany by the Federal Republic of Germany •
                German missions
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="er-section">
        <div className="er-section-box">
          <span className="er-small-label">Widget 10</span>
          <h2>Resource links block</h2>

          <div className="er-status-stack">
            <div className="er-card">
              <h3>Country guide example</h3>
              <p className="er-muted">
                Link to a broader Germany guide, healthcare overview, or housing
                article.
              </p>
            </div>
            <div className="er-card">
              <h3>Internal tool link</h3>
              <p className="er-muted">
                Connect educational content to the Country Match Tool or future
                eligibility workflows.
              </p>
            </div>
            <div className="er-card">
              <h3>Authority resource</h3>
              <p className="er-muted">
                Optionally include curated links to official sources or
                verification pages.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="er-section">
        <div className="er-section-box">
          <span className="er-small-label">Widget 11</span>
          <h2>FAQ block</h2>

          <div className="er-faq-grid">
            <article className="er-faq-item">
              <h3>Can this template be used for very different page types?</h3>
              <p className="er-muted">
                Yes. The structure stays consistent, while the widgets make the
                page flexible enough for simple brand pages and more editorial
                guides.
              </p>
            </article>
            <article className="er-faq-item">
              <h3>Should every page use every widget?</h3>
              <p className="er-muted">
                No. This reference page shows the library. Real pages would only
                use the blocks that serve their purpose.
              </p>
            </article>
            <article className="er-faq-item">
              <h3>Will this later map to CMS modules?</h3>
              <p className="er-muted">
                Yes. After the reference page is finalized, each widget can
                become a CMS block with controlled settings.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="er-section">
        <div className="er-section-box">
          <span className="er-small-label">Widget 12</span>
          <h2>Highlight box</h2>
          <p className="er-section-intro">
            An optional high-visibility block. Headline, text, and one or two
            CTA buttons should all be editable in the CMS.
          </p>

          <div className="er-card">
            <h3>This box really stands out when you need it</h3>
            <p className="er-muted">
              Use this as a featured content highlight, mid-page CTA, or premium
              emphasis block on guide, author, or about pages.
            </p>
            <div className="er-hero-actions">
              <a className="er-btn er-btn-primary" href="#">
                You need to check this out
              </a>
              <a className="er-btn er-btn-secondary" href="#">
                Secondary CTA
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="er-section">
        <div className="er-highlight-cta">
          <div>
            <span className="er-small-label">Next step</span>
            <h3>Know exactly what to do — before you take any official step.</h3>
            <p>
              This final CTA block can be reused across flex article pages, with
              customized wording depending on whether the page is informational,
              brand-driven, or conversion-focused.
            </p>
          </div>
          <div className="er-cta-actions">
            <a className="er-btn er-btn-primary" href="#">
              See your personalized visa plan
            </a>
            <a className="er-btn er-btn-secondary" href="#">
              Explore Germany guides
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}