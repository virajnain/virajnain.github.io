import '@/app/globals.css'
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
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 overflow-x-hidden`}>
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="bg-[#fbe2e3] absolute top-[-1rem] left-[40%] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[50.75rem]" />
          <div className="bg-[#e2e3fb] absolute top-[-1rem] right-[40%] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[50.75rem]" />
          <div className="bg-[#e3fbe2] absolute top-[15rem] left-1/2 -translate-x-1/2 h-[31.25rem] w-[30rem] rounded-full blur-[10rem] sm:w-[50.75rem]" />
        </div>
        {children}
      </body>
    </html>
  )
}
