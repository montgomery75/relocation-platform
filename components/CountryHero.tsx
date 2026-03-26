import CountryCtaSection from "@/components/CountryCtaSection";

type CountryHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  factCheckedDate: string;
  sourcesText: string;
  introText: string;
};

export default function CountryHero({
  eyebrow,
  title,
  subtitle,
  factCheckedDate,
  sourcesText,
  introText,
}: CountryHeroProps) {
  return (
    <section className="er-hero">
      <div className="er-eyebrow">{eyebrow}</div>

      <h1>{title}</h1>

      <p className="er-lead">{subtitle}</p>

      <div className="er-card er-mb-20">
        <div className="er-verification-bar">Verified immigration information</div>
        <div className="er-source-list">
          <div>
            <strong>Last fact-checked:</strong> {factCheckedDate}
          </div>
          <div>
            <strong>Sources monitored:</strong> {sourcesText}
          </div>
        </div>
      </div>

      <p className="er-text-sm er-max-760">{introText}</p>

      <div className="er-mt-20">
        <CountryCtaSection
          variant="compact"
          country="Germany"
          visaAdjective="German"
        />
      </div>
    </section>
  );
}