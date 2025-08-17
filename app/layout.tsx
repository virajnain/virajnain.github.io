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
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}>
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="bg-[#f5b5b8] absolute top-[-1rem] left-[40%] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[50.75rem]" />
          <div className="bg-[#b5b8f5] absolute top-[-1rem] right-[40%] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[50.75rem]" />
          <div className="bg-[#b8f5b5] absolute top-[15rem] left-1/2 -translate-x-1/2 h-[31.25rem] w-[30rem] rounded-full blur-[10rem] sm:w-[50.75rem]" />
        </div>
        {children}
      </body>
    </html>
  )
}
