import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cinnamon Indian Cuisine - Authentic Indian Dining',
  description: 'Experience authentic Indian cuisine at Cinnamon. Traditional recipes, fresh ingredients, and warm hospitality in an elegant setting.',
  keywords: ['Indian restaurant', 'authentic Indian food', 'curry', 'Indian cuisine', 'restaurant', 'dining'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
