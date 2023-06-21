import './globals.css'
import { Inter } from 'next/font/google'
import NavbarOne from './components/layout/NavbarOne'
import Navbar from './components/layout/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Amabelle's Blog | Protfolio",
  description: 'I post about programming and web development. Created with Next.js and Tailwind CSS by Amabelle Trachtenberg',
  favicon: '/favicon.ico',
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
        {/* <NavbarOne /> */}
        <Navbar />
        {children}
      </body>
    </html>
  )
}
