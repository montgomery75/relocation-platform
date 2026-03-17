'use client'

import CountryPageTemplate from '@/components/CountryPageTemplate'
import { italyData } from '@/app/data/italy'

export default function ItalyPage() {
  return <CountryPageTemplate data={italyData} />
}