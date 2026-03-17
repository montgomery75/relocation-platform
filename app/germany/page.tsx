'use client'

import CountryPageTemplate from '@/components/CountryPageTemplate'
import { germanyData } from '@/app/data/germany'

export default function GermanyPage() {
  return <CountryPageTemplate data={germanyData} />
}