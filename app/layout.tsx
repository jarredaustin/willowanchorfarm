import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.willowanchorfarm.com'),
  title: 'Pasture-Raised Goat Meat & Beef in Upstate NY | Willow Anchor Farm',
  description: 'Pasture-raised goat meat and beef from Willow Anchor Farm in Montgomery County, NY. All customers welcome; convenient to Albany, Saratoga, Fulton, and Schoharie counties.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Willow Anchor Farm',
    title: 'Pasture-Raised Goat Meat & Beef | Willow Anchor Farm',
    description: 'Pasture-raised goat meat and beef from Montgomery County, New York. Customers from any location are welcome to purchase.',
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
    title: 'Pasture-Raised Goat Meat & Beef | Willow Anchor Farm',
    description: 'Pasture-raised goat meat and beef from Montgomery County, New York. Customers from any location are welcome to purchase.',
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
