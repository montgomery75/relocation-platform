import { NextResponse } from 'next/server'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

export async function GET() {
  const data = await client.fetch(
    `*[_type == "countryPage" && countryName == "Germany"][0]{
      countryName,
      "title": hero.title
    }`
  )

  return NextResponse.json(data)
}