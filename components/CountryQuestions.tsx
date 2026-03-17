type QuestionItem = {
  question: string
  shortAnswer: string
  longAnswer: string
  source: string
}

type CountryQuestionsProps = {
  heading: string
  intro: string
  items: QuestionItem[]
}

export default function CountryQuestions({
  heading,
  intro,
  items,
}: CountryQuestionsProps) {
  return (
    <section
      style={{
        marginTop: '30px',
      }}
    >
      <div
        style={{
          maxWidth: '760px',
          marginBottom: '24px',
        }}
      >
        <h2 style={{ marginTop: 0 }}>{heading}</h2>
        <p style={{ color: '#5f6c85', marginBottom: 0 }}>{intro}</p>
      </div>

      <div
        style={{
          display: 'grid',
          gap: '18px',
        }}
      >
        {items.map((item) => (
          <div
            key={item.question}
            style={{
              background: '#ffffff',
              border: '1px solid #d9e3f5',
              borderRadius: '18px',
              padding: '24px',
            }}
          >
            <h3 style={{ marginTop: 0 }}>{item.question}</h3>
            <p>
              <strong>{item.shortAnswer}</strong>
            </p>
            <p style={{ color: '#162033' }}>{item.longAnswer}</p>
            <div style={{ color: '#5f6c85', fontSize: '14px' }}>
              Source: {item.source}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}