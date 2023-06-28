// import Image from 'next/image'
import Posts from './components/posts/Posts'
import Hero from './components/home-page/Hero'
import Skills from './components/home-page/Skills'
import About from './components/home-page/About'
import Experience from './components/home-page/Experience'
import Education from './components/home-page/Education'
// import "prismjs/themes/prism-tomorrow.css";

export const revalidate = 86400 // revalidate this page every 86400 seconds / 1 day

export default function Home() {
  return (
    <div className="mx-auto">
    {/* <div className="flex min-h-screen flex-col items-center justify-between mx-auto"> */}
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Education/>
      <Posts />
    </div>
  )
}
