import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Viraj | Portfolio',
  description: 'Viraj Nain is a CS student @ UChicago',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}
      bg-gray-50`}>{children}</body>
    </html>
  )
}
