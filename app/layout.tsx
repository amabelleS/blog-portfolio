import './globals.css'
import { Inter } from 'next/font/google'
// import NavbarOne from './components/layout/NavbarOne'
import Navbar from './components/layout/Navbar'
import PracticlesBG from './components/home-page/PracticlesBG'
// import TransitionEffect from './components/TransitionEffect'
// import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Amabelle's Portfolio | Blog",
  description: 'I post about programming and web development. Created with Next.js and Tailwind CSS by Amabelle Trachtenberg',
  favicon: './favicon.ico',
  image: './meta.png'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800 bg-black text-slate-100">
      {/* <body className="dark:bg-stone-900"> */}
      {/* <body className={inter.className}> */}
        {/* <NavbarOne /> */}
        {/* <ThemeProvider enableSystem={true} attribute="class"> */}
        <Navbar />
        <main>
        {/* <TransitionEffect /> */}
        {children}
        </main>
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
