export default function ArticlePage() {
  return (
    <>
      <style>{`
        :root {
          --bg: #f4f7fb;
          --surface: #ffffff;
          --surface-alt: #f8fbff;
          --text: #16324f;
          --muted: #5f7187;
          --line: #d9e3f5;
          --blue: #2563eb;
          --blue-dark: #1d4ed8;
          --orange: #f59e0b;
          --shadow: 0 14px 40px rgba(22, 50, 79, 0.08);
          --radius-xl: 24px;
          --radius-lg: 18px;
          --radius-md: 14px;
          --max: 1160px;
        }

        * { box-sizing: border-box; }

        .article-page {
          margin: 0;
          font-family: Inter, Arial, sans-serif;
          background: var(--bg);
          color: var(--text);
          line-height: 1.6;
          min-height: 100vh;
        }

        .article-page a {
          color: inherit;
          text-decoration: none;
        }

        .container {
          width: min(var(--max), calc(100% - 32px));
          margin: 0 auto;
        }

        .site-header {
          position: sticky;
          top: 0;
          z-index: 10;
          backdrop-filter: blur(10px);
          background: rgba(244, 247, 251, 0.88);
          border-bottom: 1px solid rgba(217, 227, 245, 0.8);
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 78px;
          gap: 20px;
        }

        .brand {
          font-size: 1.1rem;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .brand span { color: var(--blue); }

        .nav {
          display: flex;
          gap: 18px;
          color: var(--muted);
          font-size: 0.96rem;
        }

        .nav-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 18px;
          border-radius: 999px;
          background: var(--blue);
          color: white;
          font-weight: 700;
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.24);
        }

        .page-main { padding: 32px 0 64px; }

        .stack {
          display: grid;
          gap: 24px;
        }

        .hero {
          background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          border: 1px solid var(--line);
          border-radius: var(--radius-xl);
          padding: 38px;
          box-shadow: var(--shadow);
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 12px;
          border-radius: 999px;
          background: #eaf2ff;
          color: var(--blue-dark);
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.01em;
          margin-bottom: 14px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.35fr 0.85fr;
          gap: 28px;
          align-items: start;
        }

        h1, h2, h3 {
          margin: 0 0 12px;
          line-height: 1.14;
          letter-spacing: -0.03em;
        }

        h1 { font-size: clamp(2.2rem, 4vw, 3.6rem); }
        h2 { font-size: clamp(1.45rem, 2.5vw, 2.15rem); }
        h3 { font-size: 1.15rem; }

        p { margin: 0 0 14px; color: var(--muted); }

        .lead {
          font-size: 1.08rem;
          color: var(--text);
          max-width: 760px;
        }

        .meta-card,
        .widget {
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow);
        }

        .meta-card { padding: 22px; }
        .meta-row { display: grid; gap: 10px; margin-bottom: 16px; }
        .meta-label {
          font-size: 0.82rem;
          font-weight: 800;
          color: var(--blue-dark);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        .meta-value {
          color: var(--text);
          font-weight: 600;
        }

        .button-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 18px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0 18px;
          border-radius: 14px;
          font-weight: 800;
          border: 1px solid transparent;
        }

        .btn-primary {
          background: var(--blue);
          color: white;
        }

        .btn-secondary {
          background: white;
          color: var(--text);
          border-color: var(--line);
        }

        .widget {
          padding: 28px;
          position: relative;
          overflow: hidden;
        }

        .widget-header { margin-bottom: 18px; }

        .widget-kicker {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--blue-dark);
          font-weight: 800;
          margin-bottom: 8px;
        }

        .widget-label {
          position: absolute;
          top: -1px;
          right: -1px;
          padding: 8px 16px;
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          border-top-right-radius: var(--radius-lg);
          border-bottom-left-radius: 12px;
        }

        .label-expert { background: #eaf2ff; color: var(--blue-dark); }
        .label-local { background: #ecfdf5; color: #047857; }
        .label-tip { background: #fff7ed; color: #c2410c; }
        .label-insight { background: #f5f3ff; color: #5b21b6; }

        .rich-text {
          max-width: 760px;
        }

        .rich-text ul {
          margin: 0;
          padding-left: 20px;
          color: var(--muted);
        }

        .rich-text li + li { margin-top: 8px; }

        .facts-grid,
        .resource-list,
        .faq-list {
          display: grid;
          gap: 16px;
        }

        .facts-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .fact-card,
        .resource-item,
        .faq-item,
        .step,
        .compare-col {
          border: 1px solid var(--line);
          border-radius: var(--radius-md);
          background: var(--surface-alt);
          padding: 18px;
        }

        .fact-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          color: var(--blue-dark);
          font-weight: 800;
          letter-spacing: 0.03em;
          margin-bottom: 8px;
        }

        .callout {
          padding: 22px;
          border-radius: var(--radius-lg);
          border: 1px solid #cfe0ff;
          background: #eef5ff;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .step-number {
          width: 40px;
          height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: #eaf2ff;
          color: var(--blue-dark);
          font-weight: 900;
          margin-bottom: 14px;
        }

        .checklist {
          display: grid;
          gap: 12px;
        }

        .check-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 14px 16px;
          border-radius: 14px;
          border: 1px solid var(--line);
          background: #fbfdff;
        }

        .check-icon {
          width: 24px;
          height: 24px;
          border-radius: 999px;
          background: #eaf2ff;
          color: var(--blue-dark);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          font-weight: 900;
          flex: 0 0 auto;
          margin-top: 2px;
        }

        .compare {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .author-box {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 20px;
          align-items: start;
        }

        .avatar {
          width: 120px;
          height: 120px;
          border-radius: 24px;
          background: linear-gradient(135deg, #dbeafe, #fde68a);
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 12px;
        }

        .tag {
          padding: 8px 12px;
          border-radius: 999px;
          background: #f3f7fd;
          border: 1px solid var(--line);
          color: var(--text);
          font-size: 0.88rem;
          font-weight: 700;
        }

        blockquote {
          margin: 0;
          padding: 22px;
          border-radius: var(--radius-lg);
          background: #fff;
          border: 1px solid var(--line);
          color: var(--text);
          font-size: 1.08rem;
        }

        .resource-item strong,
        .faq-item strong {
          display: block;
          color: var(--text);
          margin-bottom: 6px;
        }

        .verification-box {
          display: grid;
          gap: 12px;
          padding: 24px;
          border-radius: var(--radius-lg);
          border: 1px solid #cfe0ff;
          background: linear-gradient(180deg, #f7fbff 0%, #edf5ff 100%);
        }

        .verification-title {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text);
          font-weight: 800;
          font-size: 1.02rem;
        }

        .verification-check {
          width: 28px;
          height: 28px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: #eaf2ff;
          color: var(--blue-dark);
          font-weight: 900;
          flex: 0 0 auto;
        }

        .verification-meta {
          display: grid;
          gap: 8px;
        }

        .verification-row {
          color: var(--muted);
        }

        .verification-row strong {
          color: var(--text);
        }

        .highlight-box,
        .cta {
          background: linear-gradient(135deg, #16324f 0%, #1d4ed8 100%);
          color: white;
          padding: 32px;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow);
        }

        .highlight-box p,
        .cta p {
          color: rgba(255,255,255,0.86);
        }

        .highlight-box .btn-primary,
        .cta .btn-primary {
          background: white;
          color: var(--blue-dark);
        }

        .highlight-box .btn-secondary,
        .cta .btn-secondary {
          background: transparent;
          color: white;
          border-color: rgba(255,255,255,0.24);
        }

        .site-footer {
          margin-top: 32px;
          padding: 28px 0 18px;
          color: var(--muted);
          font-size: 0.94rem;
        }

        .footer-card {
          padding: 24px;
          background: white;
          border-radius: var(--radius-lg);
          border: 1px solid var(--line);
        }

        @media (max-width: 960px) {
          .hero-grid,
          .facts-grid,
          .steps,
          .compare,
          .author-box {
            grid-template-columns: 1fr;
          }

          .nav {
            display: none;
          }
        }
      `}</style>

      <div className="article-page">
        <header className="site-header">
          <div className="container header-inner">
            <div className="brand"><span>Europe</span>Relocator</div>
            <nav className="nav">
              <a href="#">How It Works</a>
              <a href="#">Countries</a>
              <a href="#">Resources</a>
              <a href="#">About</a>
            </nav>
            <a className="nav-cta" href="#">Start Free</a>
          </div>
        </header>

        <main className="page-main">
          <div className="container stack">
            <section className="hero">
              <div className="eyebrow">Flex Article Reference</div>
              <div className="hero-grid">
                <div>
                  <h1>A flexible article template for About, Author, and Guide pages</h1>
                  <p className="lead">
                    This reference page shows how one shared EuropeRelocator article system can support simple brand pages, expert author pages, and more editorial guides — while keeping the same overall design language.
                  </p>
                  <div className="button-row">
                    <a className="btn btn-primary" href="#">Primary CTA</a>
                    <a className="btn btn-secondary" href="#">Secondary CTA</a>
                  </div>
                </div>
                <aside className="meta-card">
                  <div className="meta-row">
                    <div className="meta-label">Best used for</div>
                    <div className="meta-value">About Us, Author, Living Abroad Guide</div>
                  </div>
                  <div className="meta-row">
                    <div className="meta-label">Shared elements</div>
                    <div className="meta-value">Header, hero, CTA language, footer, card styles</div>
                  </div>
                  <div className="meta-row">
                    <div className="meta-label">CMS goal</div>
                    <div className="meta-value">Modular widgets with controlled settings</div>
                  </div>
                </aside>
              </div>
            </section>

            <section className="widget">
              <div className="widget-header">
                <div className="widget-kicker">Widget 1</div>
                <h2>Rich text block</h2>
              </div>
              <div className="rich-text">
                <p>
                  This is the core editorial block. It should handle standard article text, intros, short brand explanations, and longer guide content. In the CMS, this will likely map to a flexible rich text editor with only a controlled set of formatting options.
                </p>
                <p>
                  The goal is not unlimited design freedom. The goal is a clean page that feels consistent with the rest of EuropeRelocator.
                </p>
                <ul>
                  <li>Use for basic content sections</li>
                  <li>Support headings, paragraphs, lists, and links</li>
                  <li>Keep spacing and typography standardized</li>
                </ul>
              </div>
            </section>

            <section className="widget">
              <div className="widget-label label-expert">Expert Tip</div>
              <div className="widget-header">
                <div className="widget-kicker">Widget 2</div>
                <h2>Quick facts / summary cards</h2>
                <p>A reusable summary block for editorial pages, overview sections, or short brand intros.</p>
              </div>
              <div className="facts-grid">
                <div className="fact-card">
                  <div className="fact-label">Use case</div>
                  <strong>About page</strong>
                  <p>Explain who you help, what the company does, and how the platform is different.</p>
                </div>
                <div className="fact-card">
                  <div className="fact-label">Use case</div>
                  <strong>Author page</strong>
                  <p>Summarize expertise, topic areas, and why the author is qualified to write the content.</p>
                </div>
                <div className="fact-card">
                  <div className="fact-label">Use case</div>
                  <strong>Guide page</strong>
                  <p>Highlight key takeaways, biggest mistakes, or the main decisions readers need to make.</p>
                </div>
              </div>
            </section>

            <section className="widget">
              <div className="widget-label label-local">Local Knowledge</div>
              <div className="widget-header">
                <div className="widget-kicker">Widget 3</div>
                <h2>Callout box</h2>
              </div>
              <div className="callout">
                <h3>Expert note</h3>
                <p>
                  This box can be reused for expert tips, local advice, important warnings, or explanations of what people often get wrong.
                </p>
              </div>
            </section>

            <section className="widget">
              <div className="widget-header">
                <div className="widget-kicker">Widget 4</div>
                <h2>Steps / process block</h2>
                <p>Useful for process pages, planning guides, and “how it works” content.</p>
              </div>
              <div className="steps">
                <div className="step">
                  <div className="step-number">01</div>
                  <h3>Understand the decision</h3>
                  <p>Clarify what the page helps the reader decide or do.</p>
                </div>
                <div className="step">
                  <div className="step-number">02</div>
                  <h3>Break it into actions</h3>
                  <p>Present steps in a clear order with practical explanations.</p>
                </div>
                <div className="step">
                  <div className="step-number">03</div>
                  <h3>Offer the next step</h3>
                  <p>End with a CTA, checklist, or related guide.</p>
                </div>
              </div>
            </section>

            <section className="widget">
              <div className="widget-label label-tip">Local&apos;s Tip</div>
              <div className="widget-header">
                <div className="widget-kicker">Widget 5</div>
                <h2>Checklist block</h2>
              </div>
              <div className="checklist">
                <div className="check-item"><div className="check-icon">✓</div><div><strong>Short, practical items</strong><p>Use this for preparation steps, common checks, or “before you move” tasks.</p></div></div>
                <div className="check-item"><div className="check-icon">✓</div><div><strong>Good for guide pages</strong><p>Especially useful when readers want clear next actions instead of long narrative text.</p></div></div>
                <div className="check-item"><div className="check-icon">✓</div><div><strong>Could be grouped later</strong><p>In a future version, items could optionally be organized by category.</p></div></div>
              </div>
            </section>

            <section className="widget">
              <div className="widget-label label-insight">Expert Insight</div>
              <div className="widget-header">
                <div className="widget-kicker">Widget 6</div>
                <h2>Comparison block</h2>
              </div>
              <div className="compare">
                <div className="compare-col">
                  <h3>Simple editorial version</h3>
                  <p>Good for side-by-side explanations like DIY vs expert help, temporary vs long-term move, or two planning paths.</p>
                </div>
                <div className="compare-col">
                  <h3>Structured guidance version</h3>
                  <p>Can later support bullets, labels, and optional CTA links if needed.</p>
                </div>
              </div>
            </section>

            <section className="widget">
              <div className="widget-header">
                <div className="widget-kicker">Widget 7</div>
                <h2>Author / expert box</h2>
              </div>
              <div className="author-box">
                <div className="avatar"></div>
                <div>
                  <h3>Sebastian Mueller</h3>
                  <p>
                    Founder of EuropeRelocator. German-American entrepreneur with personal and professional experience across the U.S. and Germany.
                  </p>
                  <div className="tags">
                    <span className="tag">Germany relocation</span>
                    <span className="tag">U.S. to Europe planning</span>
                    <span className="tag">Practical bureaucracy guidance</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="widget">
              <div className="widget-label label-expert">Expert Tip</div>
              <div className="widget-header">
                <div className="widget-kicker">Widget 8</div>
                <h2>Quote / testimonial block</h2>
              </div>
              <blockquote>
                “The flex article should feel like one coherent system — not a random collection of CMS blocks.”
              </blockquote>
            </section>

            <section className="widget">
              <div className="widget-header">
                <div className="widget-kicker">Widget 9</div>
                <h2>Verified information box</h2>
                <p>An optional trust widget for immigration, residency, tax, and process pages. All three content rows are editable in the CMS.</p>
              </div>
              <div className="verification-box">
                <div className="verification-title">
                  <span className="verification-check">✓</span>
                  <span>Verified immigration information</span>
                </div>
                <div className="verification-meta">
                  <div className="verification-row"><strong>Last fact-checked:</strong> March 16, 2026</div>
                  <div className="verification-row"><strong>Sources monitored:</strong> German Federal Foreign Office • Make-it-in-Germany by the Federal Republic of Germany • German missions</div>
                </div>
              </div>
            </section>

            <section className="widget">
              <div className="widget-header">
                <div className="widget-kicker">Widget 10</div>
                <h2>Resource links block</h2>
              </div>
              <div className="resource-list">
                <div className="resource-item">
                  <strong>Country guide example</strong>
                  <p>Link to a broader Germany guide, healthcare overview, or housing article.</p>
                </div>
                <div className="resource-item">
                  <strong>Internal tool link</strong>
                  <p>Connect educational content to the Country Match Tool or future eligibility workflows.</p>
                </div>
                <div className="resource-item">
                  <strong>Authority resource</strong>
                  <p>Optionally include curated links to official sources or verification pages.</p>
                </div>
              </div>
            </section>

            <section className="widget">
              <div className="widget-label label-local">Local Knowledge</div>
              <div className="widget-header">
                <div className="widget-kicker">Widget 11</div>
                <h2>FAQ block</h2>
              </div>
              <div className="faq-list">
                <div className="faq-item">
                  <strong>Can this template be used for very different page types?</strong>
                  <p>Yes. The structure stays consistent, while the widgets make the page flexible enough for simple brand pages and more editorial guides.</p>
                </div>
                <div className="faq-item">
                  <strong>Should every page use every widget?</strong>
                  <p>No. This reference page shows the library. Real pages would only use the blocks that serve their purpose.</p>
                </div>
                <div className="faq-item">
                  <strong>Will this later map to CMS modules?</strong>
                  <p>Yes. After the reference page is finalized, each widget can become a CMS block with controlled settings.</p>
                </div>
              </div>
            </section>

            <section className="widget">
              <div className="widget-header">
                <div className="widget-kicker">Widget 12</div>
                <h2>Highlight box</h2>
                <p>An optional high-visibility block using the same visual language as the main bottom CTA. Headline, text, and one or two CTA buttons should all be editable in the CMS.</p>
              </div>
              <div className="highlight-box">
                <h2>This box really stands out when you need it</h2>
                <p>
                  Use this as a featured content highlight, mid-page CTA, or premium emphasis block on guide, author, or about pages.
                </p>
                <div className="button-row">
                  <a className="btn btn-primary" href="#">You need to check this out</a>
                  <a className="btn btn-secondary" href="#">Secondary CTA</a>
                </div>
              </div>
            </section>

            <section className="cta">
              <h2>Know exactly what to do — before you take any official step.</h2>
              <p>
                This final CTA block can be reused across flex article pages, with customized wording depending on whether the page is informational, brand-driven, or conversion-focused.
              </p>
              <div className="button-row">
                <a className="btn btn-primary" href="#">See your personalized visa plan</a>
                <a className="btn btn-secondary" href="#">Explore Germany guides</a>
              </div>
            </section>

            <footer className="site-footer">
              <div className="footer-card">
                EuropeRelocator footer placeholder — shared footer stays uniform across templates.
              </div>
            </footer>
          </div>
        </main>
      </div>
    </>
  )
}