import CountryHero from '@/components/CountryHero'
import CountryPathways from '@/components/CountryPathways'
import CountryVisaOverview from '@/components/CountryVisaOverview'
import CountryQuestions from '@/components/CountryQuestions'

type CountryPageTemplateProps = {
  data: {
    countryName: string
    hero: {
      eyebrow: string
      title: string
      subtitle: string
      factCheckedDate: string
      sourcesText: string
      introText: string
    }
    pathways: {
      heading: string
      intro: string
      items: {
        title: string
        description: string
      }[]
    }
    visaOverview: {
      heading: string
      intro: string
      guidanceTitle: string
      guidanceText: string
      items: {
        label: string
      }[]
    }
    questions: {
      heading: string
      intro: string
      items: {
        question: string
        shortAnswer: string
        longAnswer: string
        source: string
      }[]
    }
  }
}

export default function CountryPageTemplate({
  data,
}: CountryPageTemplateProps) {
  return (
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
        <div style={{ color: '#5f6c85', marginBottom: '16px', fontSize: '14px' }}>
          Home / {data.countryName}
        </div>

        <CountryHero
          eyebrow={data.hero.eyebrow}
          title={data.hero.title}
          subtitle={data.hero.subtitle}
          factCheckedDate={data.hero.factCheckedDate}
          sourcesText={data.hero.sourcesText}
          introText={data.hero.introText}
        />

        <CountryPathways
          heading={data.pathways.heading}
          intro={data.pathways.intro}
          pathways={data.pathways.items}
        />

        <CountryVisaOverview
          heading={data.visaOverview.heading}
          intro={data.visaOverview.intro}
          guidanceTitle={data.visaOverview.guidanceTitle}
          guidanceText={data.visaOverview.guidanceText}
          items={data.visaOverview.items}
        />

        <CountryQuestions
          heading={data.questions.heading}
          intro={data.questions.intro}
          items={data.questions.items}
        />
      </div>
    </main>
  )
}