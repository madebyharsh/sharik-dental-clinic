import type { Metadata } from 'next';
import './globals.css';
import StickyCTA from '@/components/StickyCTA';

export const metadata: Metadata = {
  metadataBase: new URL('https://familydentalcare.in'),
  title: {
    default: 'Family Dental Care — Dr. Mohd Sharik | Azamgarh',
    template: '%s | Family Dental Care',
  },
  description:
    'Expert dental care in Mubarakpur, Azamgarh by Dr. Mohd Sharik (BDS, MIDA). Services include Tooth Cleaning, Root Canal, Dental Implants, Smile Designing & more. Book now.',
  keywords: [
    'dental clinic Azamgarh',
    'dentist Mubarakpur',
    'root canal Azamgarh',
    'dental implant Azamgarh',
    'smile designing',
    'Dr Mohd Sharik',
    'Family Dental Care',
    'best dentist Azamgarh',
  ],
  authors: [{ name: 'Dr. Mohd Sharik' }],
  creator: 'Family Dental Care',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://familydentalcare.in',
    siteName: 'Family Dental Care',
    title: 'Family Dental Care — Dr. Mohd Sharik | Azamgarh',
    description:
      'Trusted dental clinic in Mubarakpur, Azamgarh. Root Canal, Implants, Smile Designing & more by Dr. Mohd Sharik (BDS, MIDA).',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Family Dental Care — Dr. Mohd Sharik, Azamgarh',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Family Dental Care — Dr. Mohd Sharik | Azamgarh',
    description:
      'Expert dental care in Azamgarh. Book your appointment with Dr. Mohd Sharik today.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://familydentalcare.in',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0077b6" />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Azamgarh" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Dentist',
              name: 'Family Dental Care',
              description:
                'Expert dental clinic in Mubarakpur, Azamgarh offering Root Canal, Implants, Smile Designing and more.',
              url: 'https://familydentalcare.in',
              telephone: '+918400005628',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Beside Islamia Hospital, Badi Arjenti',
                addressLocality: 'Mubarakpur',
                addressRegion: 'Uttar Pradesh',
                addressCountry: 'IN',
              },
              openingHours: 'Mo-Sa 10:00-20:00',
              medicalSpecialty: 'Dentistry',
              employee: {
                '@type': 'Physician',
                name: 'Dr. Mohd Sharik',
                description: 'BDS, MIDA (C.I.M.S.T)',
              },
            }),
          }}
        />
      </head>
      <body>
        <header
          role="banner"
          style={{
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
          }}
        >
          <nav aria-label="Site header">
            <a
              href="#hero"
              aria-label="Family Dental Care — Back to top"
              style={{ color: '#fff', textDecoration: 'none' }}
            >
              🦷 Family Dental Care
            </a>
          </nav>
        </header>

        <main id="main-content" role="main" style={{ paddingBottom: '4.5rem' }}>
          {children}
        </main>

        <footer
          role="contentinfo"
          style={{
            padding: '2rem 1.25rem 5.5rem',
            background: '#0f172a',
            color: '#64748b',
            textAlign: 'center',
            fontSize: '0.85rem',
            lineHeight: '2',
          }}
        >
          <address style={{ fontStyle: 'normal' }}>
            <p style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '1rem', marginBottom: '0.15rem' }}>
              Family Dental Care
            </p>
            <p>Dr. Mohd Sharik — BDS, MIDA (C.I.M.S.T)</p>
            <p>Beside Islamia Hospital, Badi Arjenti, Mubarakpur, Azamgarh</p>
            <p style={{ marginTop: '0.25rem' }}>
              <a
                href="tel:+918400005628"
                aria-label="Call Family Dental Care at +91 84000 05628"
                style={{ color: '#38bdf8', fontWeight: 600, textDecoration: 'none' }}
              >
                +91 84000 05628
              </a>
            </p>
          </address>
          <p style={{ marginTop: '1.25rem', fontSize: '0.78rem', color: '#334155' }}>
            © {new Date().getFullYear()} Family Dental Care. All rights reserved.
          </p>
        </footer>

        <StickyCTA />
      </body>
    </html>
  );
}