type CountryCTAProps = {
  primaryLabel: string
  secondaryLabel: string
  tertiaryLabel: string
}

export default function CountryCTA({
  primaryLabel,
  secondaryLabel,
  tertiaryLabel,
}: CountryCTAProps) {
  return (
    <div
      style={{
        border: '1px solid #d9e3f5',
        borderRadius: '18px',
        padding: '18px',
        background: '#ffffff',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-10px',
          left: '18px',
          width: '46px',
          height: '22px',
          borderRadius: '6px',
          overflow: 'hidden',
          boxShadow: '0 6px 14px rgba(0,0,0,0.12)',
        }}
      >
        <div style={{ height: '33.33%', background: '#000' }} />
        <div style={{ height: '33.33%', background: '#dd0000' }} />
        <div style={{ height: '33.33%', background: '#ffce00' }} />
      </div>

      <div
        style={{
          display: 'flex',
          gap: '14px',
          flexWrap: 'wrap',
        }}
      >
        <a
          href="#"
          style={{
            background: '#1f5eff',
            color: '#fff',
            padding: '14px 22px',
            borderRadius: '14px',
            textDecoration: 'none',
            fontWeight: 700,
          }}
        >
          {primaryLabel}
        </a>

        <a
          href="#"
          style={{
            background: '#fff',
            color: '#162033',
            padding: '14px 22px',
            borderRadius: '14px',
            textDecoration: 'none',
            fontWeight: 700,
            border: '1px solid #d9e3f5',
          }}
        >
          {secondaryLabel}
        </a>

        <a
          href="#"
          style={{
            background: '#fff',
            color: '#162033',
            padding: '14px 22px',
            borderRadius: '14px',
            textDecoration: 'none',
            fontWeight: 700,
            border: '1px solid #d9e3f5',
          }}
        >
          {tertiaryLabel}
        </a>
      </div>
    </div>
  )
}