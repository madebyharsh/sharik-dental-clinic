import type { Metadata } from 'next';
import './globals.css';
import StickyCTA from '@/components/StickyCTA';

export const metadata: Metadata = {
  title: 'Family Dental Care',
  description: 'Expert dental care in Azamgarh by Dr. Mohd Sharik — BDS, MIDA. Services include Root Canal, Implants, Smile Designing & more.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{
          padding: '1rem 1.5rem',
          background: '#0077b6',
          color: '#fff',
          textAlign: 'center',
          fontSize: '1.05rem',
          fontWeight: '700',
          letterSpacing: '0.03em',
          boxShadow: '0 2px 12px rgba(0,119,182,0.18)',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}>
          🦷 Family Dental Care
        </header>

        <main style={{ paddingBottom: '4.5rem' }}>
          {children}
        </main>

        <footer style={{
          padding: '2rem 1.25rem 5.5rem',
          background: '#0f172a',
          color: '#64748b',
          textAlign: 'center',
          fontSize: '0.85rem',
          lineHeight: '2',
        }}>
          <p style={{ color: '#e2e8f0', fontWeight: 600, marginBottom: '0.25rem' }}>
            Family Dental Care
          </p>
          <p>Beside Islamia Hospital, Badi Arjenti, Mubarakpur, Azamgarh</p>
          <p>
            <a href="tel:+918400005628" style={{ color: '#38bdf8', fontWeight: 500 }}>
              +91 84000 05628
            </a>
          </p>
          <p style={{ marginTop: '0.75rem', fontSize: '0.78rem', color: '#475569' }}>
            © {new Date().getFullYear()} Family Dental Care. All rights reserved.
          </p>
        </footer>

        <StickyCTA />
      </body>
    </html>
  );
}