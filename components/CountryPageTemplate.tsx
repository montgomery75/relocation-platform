import type { CountryPageData } from "@/app/data/types";
import CountryHero from "@/components/CountryHero";
import CountryPathways from "@/components/CountryPathways";
import CountryVisaOverview from "@/components/CountryVisaOverview";
import CountryQuestions from "@/components/CountryQuestions";
import CountryCtaSection from "@/components/CountryCtaSection";

type CountryPageTemplateProps = {
  data: CountryPageData;
};

export default function CountryPageTemplate({
  data,
}: CountryPageTemplateProps) {
  return (
    <main className="er-page">
      <div className="er-section">
        <div className="er-muted er-text-sm er-mb-20">
          <a href="/" className="er-inline-link">
            Home
          </a>{" "}
          / {data?.countryName || "Country"}
        </div>

        {data?.hero && (
          <CountryHero
            eyebrow={data.hero.eyebrow}
            title={data.hero.title}
            subtitle={data.hero.subtitle}
            factCheckedDate={data.hero.factCheckedDate}
            sourcesText={data.hero.sourcesText}
            introText={data.hero.introText}
          />
        )}

        {data?.pathways && (
          <CountryPathways
            heading={data.pathways.heading}
            intro={data.pathways.intro}
            pathways={data.pathways.items}
          />
        )}

        {data?.visaOverview && (
          <CountryVisaOverview
            heading={data.visaOverview.heading}
            intro={data.visaOverview.intro}
            guidanceTitle={data.visaOverview.guidanceTitle}
            guidanceText={data.visaOverview.guidanceText}
            items={data.visaOverview.items}
          />
        )}

        <CountryCtaSection
          variant="expanded"
          country={data?.countryName}
          visaAdjective={data?.countryName === "Germany" ? "German" : undefined}
        />

        {data?.questions && (
          <CountryQuestions
            heading={data.questions.heading}
            intro={data.questions.intro}
            items={data.questions.items}
          />
        )}
      </div>
    </main>
  );
}