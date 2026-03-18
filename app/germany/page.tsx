import CountryPageTemplate from '@/components/CountryPageTemplate'
import { fetcher } from '@/lib/sanity/client'

async function getGermanyData() {
  const data = await fetcher([
    `*[_type == "countryPage" && countryName == "Germany"][0]{
      countryName,
      hero,
      pathways,
      visaOverview,
      questions
    }`,
    {},
  ])

  return data
}

export default async function GermanyPage() {
  const data = await getGermanyData()

  return <CountryPageTemplate data={data} />
}