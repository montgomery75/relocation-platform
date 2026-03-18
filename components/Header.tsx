export function Header() {
  return (
    <header
      style={{
        width: '100%',
        borderBottom: '1px solid #e5e7eb',
        background: '#ffffff',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ fontWeight: 700, fontSize: '18px' }}>
          EuropeRelocator
        </div>

        <nav style={{ display: 'flex', gap: '24px', fontSize: '14px' }}>
          <a href="/" style={{ color: '#1f2937', textDecoration: 'none' }}>
            Home
          </a>
          <a href="/germany" style={{ color: '#1f2937', textDecoration: 'none' }}>
            Germany
          </a>
          <a href="/italy" style={{ color: '#1f2937', textDecoration: 'none' }}>
            Italy
          </a>
        </nav>
      </div>
    </header>
  )
}