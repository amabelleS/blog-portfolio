// import Image from 'next/image'
import Posts from './components/posts/Posts'
import Hero from './components/home-page/Hero'
import Skills from './components/home-page/Skills'
import About from './components/home-page/About'
// import "prismjs/themes/prism-tomorrow.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mx-auto">
    {/* <main className="flex min-h-screen flex-col items-center justify-between px-6 mb-4 mx-auto"> */}
      <Hero/>
      <Skills/>
      <About/>
      <Posts />
    </main>
  )
}
