import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lionel Sellam | Full Stack Developer',
  description: 'Portfolio de Lionel S., développeur Full Stack spécialisé en React, Angular, Node.js et WordPress',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
