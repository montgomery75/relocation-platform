type VisaItem = {
  label: string
}

type CountryVisaOverviewProps = {
  heading: string
  intro: string
  guidanceTitle: string
  guidanceText: string
  items: VisaItem[]
}

export default function CountryVisaOverview({
  heading,
  intro,
  guidanceTitle,
  guidanceText,
  items,
}: CountryVisaOverviewProps) {
  return (
    <section
      style={{
        marginTop: '30px',
        display: 'grid',
        gap: '24px',
      }}
    >
      <div
        style={{
          maxWidth: '760px',
        }}
      >
        <h2 style={{ marginTop: 0 }}>{heading}</h2>
        <p style={{ color: '#5f6c85', marginBottom: 0 }}>{intro}</p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '24px',
          alignItems: 'start',
        }}
      >
        <div
          style={{
            background: '#ffffff',
            border: '1px solid #d9e3f5',
            borderRadius: '18px',
            padding: '24px',
          }}
        >
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gap: '12px',
            }}
          >
            {items.map((item) => (
              <li
                key={item.label}
                style={{
                  paddingLeft: '24px',
                  position: 'relative',
                  color: '#162033',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    color: '#1f5eff',
                    fontWeight: 900,
                  }}
                >
                  •
                </span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div
          style={{
            background: '#ffffff',
            border: '1px solid #d9e3f5',
            borderRadius: '18px',
            padding: '24px',
          }}
        >
          <h3 style={{ marginTop: 0 }}>{guidanceTitle}</h3>
          <p style={{ color: '#5f6c85', marginBottom: 0 }}>{guidanceText}</p>
        </div>
      </div>
    </section>
  )
}