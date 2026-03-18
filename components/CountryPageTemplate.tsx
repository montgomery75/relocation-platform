import type { CountryPageData } from '@/app/data/types'
import Navbar from '@/components/navbar'
import CountryHero from '@/components/CountryHero'
import CountryPathways from '@/components/CountryPathways'
import CountryVisaOverview from '@/components/CountryVisaOverview'
import CountryQuestions from '@/components/CountryQuestions'

type CountryPageTemplateProps = {
  data: CountryPageData
}

export default function CountryPageTemplate({
  data,
}: CountryPageTemplateProps) {
  return (
    <>
      <Navbar />

      <main
        style={{
          fontFamily: 'Inter, Arial, sans-serif',
          background: '#f8fbff',
          minHeight: '100vh',
          padding: '40px 20px',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              color: '#5f6c85',
              marginBottom: '16px',
              fontSize: '14px',
            }}
          >
            Home / {data?.countryName || 'Country'}
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
    </>
  )
}