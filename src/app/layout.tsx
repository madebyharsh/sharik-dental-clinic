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
          padding: '1rem 1.25rem',
          background: '#0077b6',
          color: '#fff',
          textAlign: 'center',
          fontSize: '1.1rem',
          fontWeight: '700',
          letterSpacing: '0.02em',
        }}>
          🦷 Family Dental Care
        </header>

        <main style={{ paddingBottom: '5rem' }}>
          {children}
        </main>

        <footer style={{
          padding: '1.5rem 1.25rem 6rem',
          background: '#1a1a2e',
          color: '#7a8a9a',
          textAlign: 'center',
          fontSize: '0.85rem',
          lineHeight: '1.8',
        }}>
          <p>© {new Date().getFullYear()} Family Dental Care</p>
          <p>Beside Islamia Hospital, Badi Arjenti, Mubarakpur, Azamgarh</p>
          <p style={{ marginTop: '0.25rem', color: '#4a9abf' }}>+91 84000 05628</p>
        </footer>

        <StickyCTA />
      </body>
    </html>
  );
}