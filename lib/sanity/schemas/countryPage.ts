import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'countryPage',
  title: 'Country Page',
  type: 'document',
  fields: [
    defineField({
      name: 'countryName',
      title: 'Country Name',
      type: 'string',
    }),

    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'eyebrow', type: 'string' },
        { name: 'title', type: 'string' },
        { name: 'subtitle', type: 'text' },
        { name: 'factCheckedDate', type: 'string' },
        { name: 'sourcesText', type: 'string' },
        { name: 'introText', type: 'text' },
      ],
    }),

    defineField({
      name: 'pathways',
      title: 'Pathways',
      type: 'object',
      fields: [
        { name: 'heading', type: 'string' },
        { name: 'intro', type: 'text' },
        {
          name: 'items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', type: 'string' },
                { name: 'description', type: 'text' },
              ],
            },
          ],
        },
      ],
    }),

    defineField({
      name: 'visaOverview',
      title: 'Visa Overview',
      type: 'object',
      fields: [
        { name: 'heading', type: 'string' },
        { name: 'intro', type: 'text' },
        { name: 'guidanceTitle', type: 'string' },
        { name: 'guidanceText', type: 'text' },
        {
          name: 'items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [{ name: 'label', type: 'string' }],
            },
          ],
        },
      ],
    }),

    defineField({
      name: 'questions',
      title: 'Questions',
      type: 'object',
      fields: [
        { name: 'heading', type: 'string' },
        { name: 'intro', type: 'text' },
        {
          name: 'items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'question', type: 'string' },
                { name: 'shortAnswer', type: 'text' },
                { name: 'longAnswer', type: 'text' },
                { name: 'source', type: 'string' },
              ],
            },
          ],
        },
      ],
    }),
  ],
})