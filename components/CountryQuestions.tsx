type QuestionItem = {
  question: string;
  shortAnswer: string;
  longAnswer: string;
  source: string;
};

type CountryQuestionsProps = {
  heading: string;
  intro: string;
  items: QuestionItem[];
};

export default function CountryQuestions({
  heading,
  intro,
  items,
}: CountryQuestionsProps) {
  return (
    <section className="mt-[30px]">
      <div className="mb-6 max-w-[760px]">
        <h2 className="mt-0 text-3xl font-bold tracking-tight text-gray-900">
          {heading}
        </h2>
        <p className="mb-0 text-base leading-7 text-[#5f6c85]">{intro}</p>
      </div>

      <div className="grid gap-5">
        {items.map((item) => (
          <div
            key={item.question}
            className="rounded-[18px] border border-[#d9e3f5] bg-white p-6"
          >
            <h3 className="mt-0 text-xl font-semibold text-[#1f5eff]">
              {item.question}
            </h3>

            <p className="mt-3">
              <strong>{item.shortAnswer}</strong>
            </p>

            <p className="mt-3 text-[#162033]">{item.longAnswer}</p>

            <div className="mt-4 text-sm text-[#5f6c85]">
              Source: {item.source}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}