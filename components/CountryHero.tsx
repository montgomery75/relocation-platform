import CountryCTA from '@/components/CountryCTA'

type CountryHeroProps = {
  eyebrow: string
  title: string
  subtitle: string
  factCheckedDate: string
  sourcesText: string
  introText: string
}

export default function CountryHero({
  eyebrow,
  title,
  subtitle,
  factCheckedDate,
  sourcesText,
  introText,
}: CountryHeroProps) {
  return (
    <section
      style={{
        background: '#ffffff',
        border: '1px solid #d9e3f5',
        borderRadius: '24px',
        padding: '40px',
        boxShadow: '0 14px 40px rgba(22, 32, 51, 0.08)',
      }}
    >
      <div
        style={{
          display: 'inline-block',
          background: 'rgba(31,94,255,0.09)',
          color: '#1546c5',
          padding: '8px 14px',
          borderRadius: '999px',
          fontWeight: 700,
          fontSize: '14px',
          marginBottom: '18px',
        }}
      >
        {eyebrow}
      </div>

      <h1
        style={{
          fontSize: '48px',
          lineHeight: 1.1,
          margin: '0 0 16px 0',
          color: '#162033',
        }}
      >
        {title}
      </h1>

      <p
        style={{
          fontSize: '20px',
          lineHeight: 1.5,
          color: '#5f6c85',
          maxWidth: '700px',
          margin: '0 0 24px 0',
        }}
      >
        {subtitle}
      </p>

      <div
        style={{
          background: '#eff8f2',
          border: '1px solid #cfe6d6',
          borderRadius: '18px',
          padding: '18px 20px',
          marginBottom: '24px',
        }}
      >
        <div style={{ fontWeight: 800, color: '#21633b', marginBottom: '6px' }}>
          ✔ Verified immigration information
        </div>
        <div style={{ color: '#5f6c85', fontSize: '15px', marginBottom: '4px' }}>
          Last fact-checked: {factCheckedDate}
        </div>
        <div style={{ color: '#5f6c85', fontSize: '15px' }}>
          Sources monitored: {sourcesText}
        </div>
      </div>

      <p
        style={{
          fontSize: '17px',
          lineHeight: 1.6,
          color: '#162033',
          maxWidth: '760px',
          margin: '0 0 28px 0',
        }}
      >
        {introText}
      </p>

      <CountryCTA
        primaryLabel="Check if Germany fits you"
        secondaryLabel="View all visa options"
        tertiaryLabel="Get your eligibility score"
      />
    </section>
  )
}