import type { CountryPageData } from './types'
export const italyData: CountryPageData = {  countryName: 'Italy',

  hero: {
    eyebrow: 'Italy Guide for Americans',
    title: 'Move to Italy from the USA',
    subtitle:
      'Understand your visa options, see if you qualify, and get a clear next-step plan.',
    factCheckedDate: 'March 16, 2026',
    sourcesText:
      'Italian government guidance • Italian consular guidance • official visa information',
    introText:
      'Italy offers several legal pathways for Americans, but the right one depends on your goals, income profile, and residence plan.',
  },

  pathways: {
    heading: 'How moving to Italy works',
    intro:
      'There is no single move-to-Italy visa. Your best route depends on why you are moving.',
    items: [
      {
        title: 'Elective Residence & Retirement',
        description:
          'For people with sufficient passive income who want to live in Italy without local employment.',
      },
      {
        title: 'Work, Self-Employment & Digital Routes',
        description:
          'For people moving through employment, self-employment, or location-flexible work if the route fits.',
      },
      {
        title: 'Study & Family',
        description:
          'Move through education or by joining a spouse or family member in Italy.',
      },
    ],
  },

  visaOverview: {
    heading: 'Italy visa options for Americans',
    intro:
      'Italy offers multiple residence pathways depending on your situation.',
    guidanceTitle: 'How to choose the right visa',
    guidanceText:
      'The best visa depends on your income, work situation, family status, and long-term residence plans. The biggest mistake is choosing a route that sounds attractive but does not match your legal profile.',
    items: [
      { label: 'Elective Residence Visa' },
      { label: 'Work visa' },
      { label: 'Self-employment visa' },
      { label: 'Digital nomad / remote work route' },
      { label: 'Student visa' },
      { label: 'Family reunification visa' },
    ],
  },

  questions: {
    heading: 'Key questions about moving to Italy',
    intro:
      'Clear answers to the questions most Americans ask first when planning a move to Italy.',
    items: [
      {
        question: 'Can Americans move to Italy?',
        shortAnswer:
          'Yes. Americans can move to Italy if they qualify under a lawful residence pathway such as elective residence, work, self-employment, study, family reunification, or other qualifying routes.',
        longAnswer:
          'Italy is especially attractive to Americans because of lifestyle, family ties, retirement interest, and long-term residence appeal. But the right route depends heavily on whether you will work, rely on passive income, study, or join family.',
        source: 'Official Italian visa guidance',
      },
      {
        question: 'Do Americans need a visa for Italy?',
        shortAnswer:
          'For long-term relocation, the key question is not short tourist access but which residence pathway matches your purpose of stay.',
        longAnswer:
          'Short visits and long-term relocation are different processes. If you want to live in Italy, you usually need a visa and follow-up residence process tied to the reason for your move.',
        source: 'Italian consular guidance',
      },
    ],
  },
}