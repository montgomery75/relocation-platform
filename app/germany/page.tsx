import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CountryPageTemplate from "@/components/CountryPageTemplate";
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
    <section className="er-section">
      <div className="er-page">
        <div className="er-section-box">
          <h2>Sources &amp; Verification</h2>

          <p className="er-section-intro er-max-760">
            EuropeRelocator content is reviewed against official government and
            institutional sources. We aim to keep this page structured,
            practical, and up to date.
          </p>

          <p className="er-muted er-text-sm er-mb-20">
            Last fact-checked: March 2026
          </p>

          <div className="er-card">
            <h3
              style={{
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "12px",
              }}
            >
              Monitored sources
            </h3>

            <div className="er-source-list">
              {sources.map((source) => (
                <div key={source}>{source}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GermanyPageNotFound() {
  return (
    <main className="er-page">
      <section className="er-section">
        <div className="er-section-box">
          <span className="er-small-label">Content status</span>
          <h1>Germany page not found</h1>
          <p className="er-section-intro">
            No Germany country page was returned from Sanity.
          </p>
        </div>
      </section>
    </main>
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
        <GermanyPageNotFound />
      ) : (
        <>
          <CountryPageTemplate data={data} />
          <SourcesVerificationSection />
        </>
      )}

      <Footer {...settings} />
    </>
  );
}