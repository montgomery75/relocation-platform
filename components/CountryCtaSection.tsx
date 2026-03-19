import Link from "next/link";

type CountryCtaSectionProps = {
  variant: "compact" | "expanded";
  country?: string;
  visaAdjective?: string;
  className?: string;
};

type CtaItem = {
  key: "primary" | "secondary" | "tertiary";
  title: string;
  description: string;
  href: string;
  buttonStyle: "primary" | "secondary";
};

function getVisaAdjective(country?: string, visaAdjective?: string) {
  if (visaAdjective) return visaAdjective;

  if (country === "Germany") return "German";
  if (country === "Italy") return "Italian";

  return country;
}

function getCountrySlug(country?: string) {
  return country ? country.toLowerCase() : "";
}

function getCtaItems(country?: string, visaAdjective?: string): CtaItem[] {
  const hasCountry = Boolean(country);
  const slug = getCountrySlug(country);
  const adjective = getVisaAdjective(country, visaAdjective);

  return [
    {
      key: "primary",
      title: hasCountry
        ? `Check if ${country} fits you`
        : "Check what country fits you",
      description: hasCountry
        ? `Compare ${country} with other European countries based on your profile and goals.`
        : "Compare European countries based on your profile and relocation goals.",
      href: hasCountry ? `/${slug}/country-match` : "/country-match-tool",
      buttonStyle: "primary",
    },
    {
      key: "secondary",
      title: hasCountry ? `View all ${adjective} visas` : "View all visa options",
      description: hasCountry
        ? `See all ${adjective} visas and find out what they offer and require from you.`
        : "See all the visas and find out what they offer and require from you.",
      href: hasCountry ? `/${slug}/visas` : "/visa-options",
      buttonStyle: "secondary",
    },
    {
      key: "tertiary",
      title: "Check your eligibility score",
      description: hasCountry
        ? `This personal score tells you how likely you qualify for a specific ${adjective} visa and how difficult the application would be.`
        : "This personal score tells you how likely you qualify for a specific visa and how difficult the application would be.",
      href: hasCountry ? `/${slug}/eligibility-complexity` : "/eligibility-score",
      buttonStyle: "secondary",
    },
  ];
}

/* === UNIFIED BUTTON STYLE === */
function getButtonClassName(buttonStyle: "primary" | "secondary") {
  const base =
    "inline-flex w-full min-h-[80px] items-center justify-center rounded-[1.5rem] px-6 text-center text-lg font-semibold transition";

  if (buttonStyle === "primary") {
    return `${base} bg-blue-600 text-white hover:bg-blue-700`;
  }

  return `${base} border border-gray-300 bg-white text-gray-900 hover:bg-gray-100`;
}

/* === COMPACT CTA (TOP) === */
function CompactCtaRow({ items }: { items: CtaItem[] }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="rounded-[2rem] border border-gray-200 bg-gray-50 px-6 py-6">
          <div className="grid gap-4 md:grid-cols-3">
            {items.map((item) => (
              <Link key={item.key} href={item.href} className={getButtonClassName(item.buttonStyle)}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* === EXPANDED CTA (BOTTOM) === */
function ExpandedCtaCards({ items }: { items: CtaItem[] }) {
  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.key}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-8"
            >
              <p className="text-base leading-8 text-gray-600">
                {item.description}
              </p>

              <div className="mt-8">
                {/* NOW SAME SIZE + RADIUS AS TOP CTA */}
                <Link href={item.href} className={getButtonClassName(item.buttonStyle)}>
                  {item.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CountryCtaSection({
  variant,
  country,
  visaAdjective,
  className,
}: CountryCtaSectionProps) {
  const items = getCtaItems(country, visaAdjective);

  return (
    <div className={className}>
      {variant === "compact" ? (
        <CompactCtaRow items={items} />
      ) : (
        <ExpandedCtaCards items={items} />
      )}
    </div>
  );
}