export type CountryPageData = {
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