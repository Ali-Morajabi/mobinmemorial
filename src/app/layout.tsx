import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'یادگاری‌های ماندگار | Memories That Stay',
  description: 'A living digital memory world celebrating our friendship at the University of Tehran',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-navy-950 text-beige-100 antialiased">{children}</body>
    </html>
  )
}
