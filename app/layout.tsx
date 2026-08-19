import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.willowanchorfarm.com'),
  title: 'Willow Anchor Farm',
  description: 'Sustainably raised meats, farm-fresh produce, and non-invasive land clearing with goats and sheep from Willow Anchor Farm.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Willow Anchor Farm',
    title: 'Willow Anchor Farm',
    description: 'Sustainably raised meats, farm-fresh produce, and non-invasive land clearing with goats and sheep.',
    images: [
      {
        url: '/social-preview.png',
        width: 1200,
        height: 630,
        alt: 'Highland cattle at Willow Anchor Farm',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Willow Anchor Farm',
    description: 'Sustainably raised meats, farm-fresh produce, and non-invasive land clearing with goats and sheep.',
    images: ['/social-preview.png'],
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '48x48',
      },
      {
        url: '/icon-512.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var navigation = performance.getEntriesByType('navigation')[0];
                if (navigation && navigation.type === 'reload') {
                  if ('scrollRestoration' in history) {
                    history.scrollRestoration = 'manual';
                  }
                  if (window.location.hash) {
                    history.replaceState(null, '', window.location.pathname + window.location.search);
                  }
                  window.scrollTo(0, 0);
                  window.addEventListener('pageshow', function () {
                    window.scrollTo(0, 0);
                  }, { once: true });
                }
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
