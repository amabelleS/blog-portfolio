'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import NavbarOne from './components/layout/NavbarOne'
import Navbar from './components/layout/Navbar'
import { ThemeProvider } from "next-themes"

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
      {/* <body className="dark:bg-stone-900"> */}
      {/* <body className={inter.className}> */}
        {/* <NavbarOne /> */}
        <ThemeProvider enableSystem={true} attribute="class">
        <Navbar />
        {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
