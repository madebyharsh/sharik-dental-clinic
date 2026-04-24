import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Family Dental Care',
  description: 'Expert dental care in Azamgarh by Dr. Mohd Sharik — BDS, MIDA. Services include Root Canal, Implants, Smile Designing & more.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '1rem', background: '#0077b6', color: '#fff', textAlign: 'center' }}>
          <strong>Family Dental Care</strong>
        </header>

        <main>{children}</main>

        <footer style={{ padding: '1.5rem', background: '#1a1a2e', color: '#aaa', textAlign: 'center', fontSize: '0.875rem' }}>
          © {new Date().getFullYear()} Family Dental Care — Mubarakpur, Azamgarh
        </footer>
      </body>
    </html>
  );
}