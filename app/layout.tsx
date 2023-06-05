import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/layout/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Amabelle's Blog | Protfolio",
  description: 'I post about programming and web development. Created with Next.js and Tailwind CSS by Amabelle Trachtenberg',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
      {/* <body className={inter.className}> */}
        <Navbar />
        {children}
      </body>
    </html>
  )
}
