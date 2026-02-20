import Image from "next/image";

export default function Home() {
  return (
    <main className="container animate-fade-in" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <div className="glass-panel" style={{ padding: '4rem 2rem', maxWidth: '800px', width: '100%' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem', background: 'var(--accent-glow)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Host Events That <br /> Empower Students
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'hsl(var(--fg-secondary))', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          The all-in-one platform for campus organizers. Automate registrations, track attendance with QR codes, and issue certificates with a single click.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button className="variant-btn-primary">Create Event</button>
          <button className="glass-panel" style={{ padding: '0.75rem 1.5rem', fontWeight: '600', borderRadius: 'var(--radius-md)' }}>Browse Events</button>
        </div>
      </div>

      <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', width: '100%' }}>
        <div className="glass-panel" style={{ padding: '2rem', textAlign: 'left' }}>
          <div style={{ width: '40px', height: '40px', background: 'var(--accent-glow)', borderRadius: '8px', marginBottom: '1rem' }} />
          <h3 style={{ marginBottom: '0.5rem' }}>AI Powered</h3>
          <p style={{ color: 'hsl(var(--fg-secondary))', fontSize: '0.9rem' }}>Generate professional descriptions and schedules instantly using Gemini integration.</p>
        </div>
        <div className="glass-panel" style={{ padding: '2rem', textAlign: 'left' }}>
          <div style={{ width: '40px', height: '40px', background: 'var(--accent-glow)', borderRadius: '8px', marginBottom: '1rem' }} />
          <h3 style={{ marginBottom: '0.5rem' }}>QR Check-in</h3>
          <p style={{ color: 'hsl(var(--fg-secondary))', fontSize: '0.9rem' }}>Scan student QR codes for seamless attendance tracking and real-time analytics.</p>
        </div>
        <div className="glass-panel" style={{ padding: '2rem', textAlign: 'left' }}>
          <div style={{ width: '40px', height: '40px', background: 'var(--accent-glow)', borderRadius: '8px', marginBottom: '1rem' }} />
          <h3 style={{ marginBottom: '0.5rem' }}>Auto-Certificates</h3>
          <p style={{ color: 'hsl(var(--fg-secondary))', fontSize: '0.9rem' }}>Instantly issue branded PDF certificates to all verified participants.</p>
        </div>
      </div>
    </main>
  );
}
