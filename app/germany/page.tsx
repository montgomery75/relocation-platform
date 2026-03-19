import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CountryPageTemplate from "@/components/CountryPageTemplate";
import CountryCtaSection from "@/components/CountryCtaSection";
import { fetcher } from "@/lib/sanity/client";
import { buildCountryMetadata } from "@/lib/seo/countryMetadata";

export const metadata: Metadata = buildCountryMetadata("Germany");

async function getGermanyPageData() {
  const data = await fetcher([
    `*[_type == "countryPage" && countryName == "Germany"][0]{
      countryName,
      hero,
      pathways,
      visaOverview,
      questions
    }`,
    {},
  ]);

  return data;
}

async function getSettingsData() {
  const data = await fetcher([
    `*[_type == "settings"][0]`,
    {},
  ]);

  return data;
}

function SourcesVerificationSection() {
  const sources = [
    "German Federal Foreign Office",
    "Make it in Germany",
    "German missions in the United States",
    "Federal Office for Migration and Refugees (BAMF)",
  ];

  return (
    <section className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Sources &amp; Verification
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600">
            EuropeRelocator content is reviewed against official government and
            institutional sources. We aim to keep this page structured,
            practical, and up to date.
          </p>
          <p className="mt-3 text-sm text-gray-500">
            Last fact-checked: March 2026
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-800">
            Monitored sources
          </h3>

          <ul className="mt-4 space-y-3">
            {sources.map((source) => (
              <li key={source} className="flex items-start gap-3 text-gray-700">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                <span>{source}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default async function GermanyPage() {
  const [data, settings] = await Promise.all([
    getGermanyPageData(),
    getSettingsData(),
  ]);

  return (
    <>
      <Navbar {...settings} />

      {!data ? (
        <main className="mx-auto max-w-6xl px-6 py-24">
          <h1 className="text-3xl font-bold text-gray-900">
            Germany page not found
          </h1>
          <p className="mt-4 text-gray-600">
            No Germany country page was returned from Sanity.
          </p>
        </main>
      ) : (
        <>
          <CountryPageTemplate data={data} />

          <CountryCtaSection
            variant="expanded"
            country="Germany"
            visaAdjective="German"
          />

          <SourcesVerificationSection />
        </>
      )}

      <Footer {...settings} />
    </>
  );
}