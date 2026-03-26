type VisaItem = {
  label?: string;
};

type CountryVisaOverviewProps = {
  heading?: string;
  intro?: string;
  guidanceTitle?: string;
  guidanceText?: string;
  items?: VisaItem[];
};

export default function CountryVisaOverview({
  heading,
  intro,
  guidanceTitle,
  guidanceText,
  items,
}: CountryVisaOverviewProps) {
  // ✅ Clean CMS data
  const validItems =
    items?.filter((item) => item?.label?.trim()) || [];

  const hasGuidance =
    guidanceTitle?.trim() || guidanceText?.trim();

  // ✅ If nothing exists → render nothing
  if (!validItems.length && !hasGuidance) return null;

  return (
    <section className="er-section">
      {(heading || intro) && (
        <div className="er-section-box">
          {heading ? <h2>{heading}</h2> : null}
          {intro ? <p className="er-section-intro">{intro}</p> : null}
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] er-mt-20">
        {/* LEFT: VISA LIST */}
        {validItems.length > 0 && (
          <div className="er-card">
            <ul className="er-clean-list">
              {validItems.map((item, index) => (
                <li key={`${item.label}-${index}`}>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* RIGHT: GUIDANCE */}
        {hasGuidance && (
          <div className="er-card">
            {guidanceTitle ? <h3>{guidanceTitle}</h3> : null}
            {guidanceText ? (
              <p className="er-muted">{guidanceText}</p>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}