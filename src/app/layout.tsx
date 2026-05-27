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
  title: {
    default: 'Cinnamon Indian Cuisine - Authentic Indian Restaurant in Peel, Isle of Man',
    template: '%s | Cinnamon Indian Cuisine'
  },
  description: 'Experience authentic Indian cuisine at Cinnamon Indian Restaurant in Peel, Isle of Man. Traditional recipes, aromatic spices, warm hospitality, and unforgettable dining experiences. Book your table today!',
  keywords: [
    'Cinnamon Indian Restaurant',
    'Indian restaurant Peel',
    'Indian cuisine Isle of Man',
    'authentic Indian food',
    'curry restaurant',
    'Indian dining',
    'restaurant reservations',
    'family dining',
    'traditional Indian recipes',
    'aromatic spices',
    'Peel restaurants',
    'Isle of Man dining',
    'Indian takeaway',
    'private dining',
    'catering services',
    'wedding catering',
    'corporate events',
    'birthday parties',
    'Nadeem Younus',
    'East Quay'
  ],
  authors: [{ name: 'Cinnamon Indian Cuisine' }],
  creator: 'Cinnamon Indian Cuisine',
  publisher: 'Cinnamon Indian Cuisine',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cinnamon-indian-cuisine.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://cinnamon-indian-cuisine.vercel.app',
    title: 'Cinnamon Indian Cuisine - Authentic Indian Restaurant in Peel, Isle of Man',
    description: 'Experience authentic Indian cuisine at Cinnamon Indian Restaurant in Peel, Isle of Man. Traditional recipes, aromatic spices, and warm hospitality.',
    siteName: 'Cinnamon Indian Cuisine',
    images: [
      {
        url: '/homepage-slider/cinnamon-1.jpg',
        width: 1200,
        height: 800,
        alt: 'Cinnamon Indian Restaurant - Authentic Indian Dining Experience',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cinnamon Indian Cuisine - Authentic Indian Restaurant in Peel, Isle of Man',
    description: 'Experience authentic Indian cuisine at Cinnamon. Traditional recipes, aromatic spices, and warm hospitality.',
    images: ['/homepage-slider/cinnamon-1.jpg'],
    creator: '@CinnamonIOM',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'restaurant',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Cinnamon Indian Cuisine",
              "description": "Authentic Indian restaurant in Peel, Isle of Man offering traditional recipes, aromatic spices, and warm hospitality.",
              "url": "https://cinnamon-indian-cuisine.vercel.app",
              "telephone": "+441624894180",
              "email": "info@cinnamon.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "East Quay",
                "addressLocality": "Peel",
                "addressRegion": "Isle of Man",
                "postalCode": "IM5 1AR",
                "addressCountry": "IM"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "54.0829",
                "longitude": "-4.6188"
              },
              "openingHours": [
                "Tuesday-Sunday 17:00-21:00",
                "Friday-Saturday 17:00-22:00"
              ],
              "servesCuisine": ["Indian", "Asian", "Curry"],
              "priceRange": "$$",
              "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
              "currenciesAccepted": "GBP",
              "menu": "https://cinnamon-indian-cuisine.vercel.app/menu",
              "reservations": "https://cinnamon-indian-cuisine.vercel.app/reservations",
              "image": [
                "https://cinnamon-indian-cuisine.vercel.app/homepage-slider/cinnamon-1.jpg",
                "https://cinnamon-indian-cuisine.vercel.app/twitter/twitter-image.jpg"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Local Food Critic"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "reviewBody": "Excellent authentic Indian cuisine with warm hospitality and traditional recipes."
                }
              ],
              "sameAs": [
                "https://www.facebook.com/CinnamonIndianRestaurantIOM",
                "https://wa.me/447624253642"
              ]
            }),
          }}
        />
      </head>
      <body className={poppins.className}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
