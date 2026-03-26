type Pathway = {
  title: string;
  description: string;
};

type CountryPathwaysProps = {
  heading?: string;
  intro?: string;
  pathways?: Pathway[];
};

export default function CountryPathways({
  heading,
  intro,
  pathways,
}: CountryPathwaysProps) {
  const validPathways =
    pathways?.filter(
      (pathway) => pathway?.title?.trim() || pathway?.description?.trim()
    ) || [];

  if (!validPathways.length) return null;

  return (
    <section className="er-section">
      {(heading || intro) && (
        <div className="er-section-box">
          {heading ? <h2>{heading}</h2> : null}
          {intro ? <p className="er-section-intro">{intro}</p> : null}
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2 er-mt-20">
        {validPathways.map((pathway, index) => (
          <div key={`${pathway.title}-${index}`} className="er-card">
            {pathway.title ? <h3>{pathway.title}</h3> : null}
            {pathway.description ? (
              <p className="er-muted">{pathway.description}</p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}