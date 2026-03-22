import {defineArrayMember, defineField, defineType} from 'sanity'

const visaTag = defineType({
  name: 'visaTag',
  title: 'Visa Tag',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Target slug',
      type: 'string',
      description: 'Optional visa page slug or filter key, e.g. eu-blue-card',
    }),
  ],
  preview: {
    select: {title: 'label', subtitle: 'slug'},
    prepare({title, subtitle}) {
      return {
        title,
        subtitle: subtitle ? `/${subtitle}` : 'No target slug',
      }
    },
  },
})

const linkItem = defineType({
  name: 'linkItem',
  title: 'Link Item',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Href',
      type: 'string',
      description: 'URL, route, or page anchor such as #requirements',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'label', subtitle: 'href'},
  },
})

const heroBlock = defineType({
  name: 'articleHubHero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string'}),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 4}),
    defineField({
      name: 'verificationLabel',
      title: 'Verification label',
      type: 'string',
      initialValue: 'Verified immigration information',
    }),
    defineField({name: 'factCheckedDate', title: 'Fact checked date', type: 'string'}),
    defineField({
      name: 'sourcesMonitored',
      title: 'Sources monitored',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({name: 'ctaTitle', title: 'CTA title', type: 'string'}),
    defineField({name: 'ctaDescription', title: 'CTA description', type: 'text', rows: 3}),
    defineField({
      name: 'ctaLinks',
      title: 'CTA links',
      type: 'array',
      of: [{type: 'linkItem'}],
      validation: (Rule) => Rule.max(3),
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'eyebrow'},
  },
})

const quickFactItem = defineType({
  name: 'quickFactItem',
  title: 'Quick Fact Item',
  type: 'object',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortAnswer',
      title: 'Short answer',
      type: 'text',
      rows: 2,
      description: 'Very short snippet-style answer.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'longAnswer',
      title: 'Long answer',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'question', subtitle: 'shortAnswer'},
  },
})

const quickFactsBlock = defineType({
  name: 'quickFactsBlock',
  title: 'Quick Facts',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Section label',
      type: 'string',
      initialValue: 'Quick Facts',
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'quickFactItem'}],
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Quick Facts'}
    },
  },
})

const quickNavBlock = defineType({
  name: 'quickNavBlock',
  title: 'Quick Navigation',
  type: 'object',
  fields: [
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{type: 'linkItem'}],
      validation: (Rule) => Rule.required().min(1).max(8),
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Quick Navigation'}
    },
  },
})

const visaOverviewCard = defineType({
  name: 'visaOverviewCard',
  title: 'Visa Overview Card',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Visa title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'bestFor', title: 'Best for', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 4}),
    defineField({
      name: 'bullets',
      title: 'Bullet points',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.max(5),
    }),
    defineField({name: 'primaryCtaLabel', title: 'Primary CTA label', type: 'string'}),
    defineField({name: 'primaryCtaHref', title: 'Primary CTA href', type: 'string'}),
    defineField({name: 'secondaryCtaLabel', title: 'Secondary CTA label', type: 'string'}),
    defineField({name: 'secondaryCtaHref', title: 'Secondary CTA href', type: 'string'}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'bestFor'},
  },
})

const visaOverviewBlock = defineType({
  name: 'visaOverviewBlock',
  title: 'Visa Overview',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'intro', title: 'Intro', type: 'text', rows: 3}),
    defineField({
      name: 'cards',
      title: 'Visa cards',
      type: 'array',
      of: [{type: 'visaOverviewCard'}],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {title: 'title'},
  },
})

const infoBoxBlock = defineType({
  name: 'infoBoxBlock',
  title: 'Info Box',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'body', title: 'Body', type: 'text', rows: 4}),
    defineField({name: 'examplesLabel', title: 'Examples label', type: 'string'}),
    defineField({name: 'bullets', title: 'Bullets', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'followupText', title: 'Follow-up text', type: 'text', rows: 3}),
    defineField({name: 'note', title: 'Note', type: 'string'}),
  ],
  preview: {
    select: {title: 'title'},
  },
})

const personaItem = defineType({
  name: 'personaItem',
  title: 'Persona Item',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'tags', title: 'Tags', type: 'array', of: [{type: 'visaTag'}]}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 5}),
  ],
  preview: {
    select: {title: 'title'},
  },
})

const personasBlock = defineType({
  name: 'personasBlock',
  title: 'Personas',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'intro', title: 'Intro', type: 'text', rows: 3}),
    defineField({
      name: 'items',
      title: 'Persona items',
      type: 'array',
      of: [{type: 'personaItem'}],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {title: 'title'},
  },
})

const decisionSummaryBlock = defineType({
  name: 'decisionSummaryBlock',
  title: 'Decision Summary',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'summary', title: 'Summary', type: 'text', rows: 3}),
    defineField({name: 'ctaLabel', title: 'CTA label', type: 'string'}),
    defineField({name: 'ctaHref', title: 'CTA href', type: 'string'}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'summary'},
    prepare({title, subtitle}) {
      return {title: title || 'Decision Summary', subtitle}
    },
  },
})

const glossaryItem = defineType({
  name: 'glossaryItem',
  title: 'Glossary Item',
  type: 'object',
  fields: [
    defineField({name: 'term', title: 'Term', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'tags', title: 'Related visa tags', type: 'array', of: [{type: 'visaTag'}]}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 4}),
  ],
  preview: {
    select: {title: 'term'},
  },
})

const glossaryBlock = defineType({
  name: 'glossaryBlock',
  title: 'Glossary',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'intro', title: 'Intro', type: 'text', rows: 3}),
    defineField({
      name: 'items',
      title: 'Glossary items',
      type: 'array',
      of: [{type: 'glossaryItem'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({name: 'ctaLabel', title: 'CTA label', type: 'string'}),
    defineField({name: 'ctaHref', title: 'CTA href', type: 'string'}),
  ],
  preview: {
    select: {title: 'title'},
  },
})

const groupedInfoItem = defineType({
  name: 'groupedInfoItem',
  title: 'Grouped Info Item',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Box title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'tags', title: 'Tags', type: 'array', of: [{type: 'visaTag'}]}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 4}),
  ],
  preview: {
    select: {title: 'title'},
  },
})

const groupedInfoBlock = defineType({
  name: 'groupedInfoBlock',
  title: 'Grouped Info Block',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'intro', title: 'Intro', type: 'text', rows: 3}),
    defineField({
      name: 'items',
      title: 'Boxes',
      type: 'array',
      of: [{type: 'groupedInfoItem'}],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {title: 'title'},
  },
})

const ctaBlock = defineType({
  name: 'ctaBlock',
  title: 'CTA Block',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 4}),
    defineField({name: 'buttonLabel', title: 'Button label', type: 'string'}),
    defineField({name: 'buttonHref', title: 'Button href', type: 'string'}),
    defineField({
      name: 'style',
      title: 'Style',
      type: 'string',
      options: {
        list: [
          {title: 'Soft panel', value: 'softPanel'},
          {title: 'Standard card', value: 'card'},
        ],
      },
      initialValue: 'softPanel',
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'buttonLabel'},
  },
})

const relatedGuideItem = defineType({
  name: 'relatedGuideItem',
  title: 'Related Guide Item',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string'}),
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
    defineField({name: 'href', title: 'Href', type: 'string'}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'eyebrow'},
  },
})

const relatedGuidesBlock = defineType({
  name: 'relatedGuidesBlock',
  title: 'Related Guides',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'intro', title: 'Intro', type: 'text', rows: 3}),
    defineField({
      name: 'items',
      title: 'Guide items',
      type: 'array',
      of: [{type: 'relatedGuideItem'}],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {title: 'title'},
  },
})

const faqItem = defineType({
  name: 'faqItem',
  title: 'FAQ Item',
  type: 'object',
  fields: [
    defineField({name: 'question', title: 'Question', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'answer', title: 'Answer', type: 'text', rows: 4, validation: (Rule) => Rule.required()}),
  ],
  preview: {
    select: {title: 'question'},
  },
})

const faqBlock = defineType({
  name: 'faqBlock',
  title: 'FAQ',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', initialValue: 'FAQ'}),
    defineField({name: 'items', title: 'Items', type: 'array', of: [{type: 'faqItem'}], validation: (Rule) => Rule.required().min(1)}),
  ],
  preview: {
    select: {title: 'title'},
  },
})

const sourcesBlock = defineType({
  name: 'sourcesBlock',
  title: 'Sources',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', initialValue: 'Sources & verification'}),
    defineField({name: 'items', title: 'Source items', type: 'array', of: [{type: 'string'}], validation: (Rule) => Rule.required().min(1)}),
  ],
  preview: {
    select: {title: 'title'},
  },
})

export const articleHubPage = defineType({
  name: 'articleHubPage',
  title: 'Article Hub Page',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Internal title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 200},
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'seoTitle', title: 'SEO title', type: 'string'}),
    defineField({name: 'seoDescription', title: 'SEO description', type: 'text', rows: 3}),
    defineField({name: 'country', title: 'Country', type: 'string'}),
    defineField({name: 'pageType', title: 'Page type', type: 'string'}),
    defineField({
      name: 'content',
      title: 'Content blocks',
      type: 'array',
      of: [
        defineArrayMember({type: 'articleHubHero'}),
        defineArrayMember({type: 'quickFactsBlock'}),
        defineArrayMember({type: 'quickNavBlock'}),
        defineArrayMember({type: 'visaOverviewBlock'}),
        defineArrayMember({type: 'infoBoxBlock'}),
        defineArrayMember({type: 'personasBlock'}),
        defineArrayMember({type: 'decisionSummaryBlock'}),
        defineArrayMember({type: 'glossaryBlock'}),
        defineArrayMember({type: 'groupedInfoBlock'}),
        defineArrayMember({type: 'ctaBlock'}),
        defineArrayMember({type: 'relatedGuidesBlock'}),
        defineArrayMember({type: 'faqBlock'}),
        defineArrayMember({type: 'sourcesBlock'}),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'slug.current'},
    prepare({title, subtitle}) {
      return {title, subtitle: subtitle ? `/${subtitle}` : 'No slug'}
    },
  },
})

export const articleHubSchemaTypes = [
  visaTag,
  linkItem,
  heroBlock,
  quickFactItem,
  quickFactsBlock,
  quickNavBlock,
  visaOverviewCard,
  visaOverviewBlock,
  infoBoxBlock,
  personaItem,
  personasBlock,
  decisionSummaryBlock,
  glossaryItem,
  glossaryBlock,
  groupedInfoItem,
  groupedInfoBlock,
  ctaBlock,
  relatedGuideItem,
  relatedGuidesBlock,
  faqItem,
  faqBlock,
  sourcesBlock,
  articleHubPage,
]