type VisaItem = {
  label: string;
};

type CountryVisaOverviewProps = {
  heading: string;
  intro: string;
  guidanceTitle: string;
  guidanceText: string;
  items: VisaItem[];
};

export default function CountryVisaOverview({
  heading,
  intro,
  guidanceTitle,
  guidanceText,
  items,
}: CountryVisaOverviewProps) {
  return (
    <section className="mt-[30px] grid gap-6">
      <div className="max-w-[760px]">
        <h2 className="mt-0 text-3xl font-bold tracking-tight text-gray-900">
          {heading}
        </h2>
        <p className="mb-0 text-base leading-7 text-[#5f6c85]">{intro}</p>
      </div>

      <div className="grid gap-6 items-start md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[18px] border border-[#d9e3f5] bg-white p-6">
          <ul className="m-0 grid list-none gap-3 p-0">
            {items.map((item) => (
              <li
                key={item.label}
                className="relative pl-6 text-[#162033]"
              >
                <span className="absolute left-0 top-0 font-black text-[#1f5eff]">
                  •
                </span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[18px] border border-[#d9e3f5] bg-white p-6">
          <h3 className="mt-0 text-2xl font-semibold tracking-tight text-gray-900">
            {guidanceTitle}
          </h3>
          <p className="mb-0 text-base leading-7 text-[#5f6c85]">
            {guidanceText}
          </p>
        </div>
      </div>
    </section>
  );
}