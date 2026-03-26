type QuestionItem = {
  question?: string;
  shortAnswer?: string;
  longAnswer?: string;
};

type CountryQuestionsProps = {
  heading?: string;
  intro?: string;
  items?: QuestionItem[];
};

export default function CountryQuestions({
  heading,
  intro,
  items,
}: CountryQuestionsProps) {
  // ✅ FILTER EMPTY ITEMS
  const validItems =
    items?.filter(
      (item) =>
        item?.question?.trim() ||
        item?.shortAnswer?.trim() ||
        item?.longAnswer?.trim()
    ) || [];

  // ✅ IF NOTHING VALID → RENDER NOTHING (this removes empty box)
  if (!validItems.length) return null;

  return (
    <section className="er-section">
      <div className="er-section-box">
        {heading && <h2>{heading}</h2>}
        {intro && <p className="er-section-intro">{intro}</p>}
      </div>

      <div className="er-stack-20 er-mt-20">
        {validItems.map((item, i) => (
          <div key={i} className="er-faq-item">
            {item.question && <h3>{item.question}</h3>}

            {item.shortAnswer && (
              <p className="er-mt-14">
                <strong>{item.shortAnswer}</strong>
              </p>
            )}

            {item.longAnswer && (
              <p className="er-muted er-mt-14">{item.longAnswer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}