import type { CountryPageData } from "@/app/data/types";
import CountryHero from "@/components/CountryHero";
import CountryPathways from "@/components/CountryPathways";
import CountryVisaOverview from "@/components/CountryVisaOverview";
import CountryQuestions from "@/components/CountryQuestions";

type CountryPageTemplateProps = {
  data: CountryPageData;
};

export default function CountryPageTemplate({
  data,
}: CountryPageTemplateProps) {
  return (
    <main className="min-h-screen bg-[#f8fbff] px-5 py-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-4 text-sm text-[#5f6c85]">
          Home / {data?.countryName || "Country"}
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