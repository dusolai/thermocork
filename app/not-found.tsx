export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', color: 'var(--white)', textAlign: 'center', padding: 24 }}>
      <div style={{ fontSize: 72, marginBottom: 16 }}>🌿</div>
      <h1 style={{ fontSize: 48, fontWeight: 800, marginBottom: 8 }}>404</h1>
      <p style={{ color: 'var(--white2)', marginBottom: 32 }}>Página no encontrada · Page not found</p>
      <a href="/" style={{ background: 'linear-gradient(135deg,#C9A045,#C4956A)', color: '#0A0806', padding: '14px 32px', borderRadius: 30, fontWeight: 700, textDecoration: 'none', fontSize: 14, letterSpacing: 1, textTransform: 'uppercase' }}>
        ← Volver a inicio
      </a>
    </div>
  )
}
