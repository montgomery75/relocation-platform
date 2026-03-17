type Pathway = {
  title: string
  description: string
}

type CountryPathwaysProps = {
  heading: string
  intro: string
  pathways: Pathway[]
}

export default function CountryPathways({
  heading,
  intro,
  pathways,
}: CountryPathwaysProps) {
  return (
    <section
      style={{
        marginTop: '30px',
        display: 'grid',
        gap: '18px',
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
        <h2 style={{ marginTop: 0 }}>{heading}</h2>
        <p style={{ color: '#5f6c85', marginBottom: 0 }}>{intro}</p>
      </div>

      <div
        style={{
          display: 'grid',
          gap: '16px',
        }}
      >
        {pathways.map((pathway) => (
          <div
            key={pathway.title}
            style={{
              border: '1px solid #d9e3f5',
              borderRadius: '16px',
              padding: '18px',
              background: '#fff',
            }}
          >
            <h3>{pathway.title}</h3>
            <p style={{ color: '#5f6c85', marginBottom: 0 }}>
              {pathway.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}