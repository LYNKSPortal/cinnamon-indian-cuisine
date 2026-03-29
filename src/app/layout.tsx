import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from '@/components/Header'
import { Analytics } from "@vercel/analytics/next"
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400']
})

export const metadata: Metadata = {
  title: 'Cinnamon Indian Cuisine - Authentic Indian Dining',
  description: 'Experience authentic Indian cuisine at Cinnamon. Traditional recipes, fresh ingredients, and warm hospitality in an elegant setting.',
  keywords: ['Indian restaurant', 'authentic Indian food', 'curry', 'Indian cuisine', 'restaurant', 'dining'],
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'manifest', url: '/favicon/site.webmanifest' },
      { rel: 'apple-touch-icon', url: '/favicon/web-app-manifest-192x192.png', sizes: '192x192' },
      { rel: 'apple-touch-icon', url: '/favicon/web-app-manifest-512x512.png', sizes: '512x512' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  other: {
    'twitter:app:name:googleplay': '',
    'twitter:app:url:googleplay': '',
    'twitter:app:id:googleplay': '',
    'twitter:app:name:iphone': '',
    'twitter:app:url:iphone': '',
    'twitter:app:id:iphone': '',
    'twitter:app:name:ipad': '',
    'twitter:app:url:ipad': '',
    'twitter:app:id:ipad': '',
  },
  twitter: {
    card: 'summary_large_image',
    images: [{
      url: '/twitter/twitter-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Cinnamon Indian Restaurant - Authentic Indian Dining Experience',
    }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
