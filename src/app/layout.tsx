import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IT Professional Portfolio | Bui Chi Cuong',
  description: 'Modern portfolio for IT professionals showcasing skills, projects, and expertise',
  keywords: 'IT, developer, programming, technology, portfolio, full-stack',
  authors: [{ name: 'Bui Chi Cuong' }],
  openGraph: {
    title: 'IT Professional Portfolio | Bui Chi Cuong',
    description: 'Modern portfolio for IT professionals',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
