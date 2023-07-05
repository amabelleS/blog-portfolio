import Hero from './components/home-page/Hero'
import Skills from './components/home-page/Skills'
import About from './components/home-page/About'
import Experience from './components/home-page/Experience'
import Education from './components/home-page/Education'
// import projects from '@/data/projects/projects'
// import FeaturedProject from './projects/components/FeaturedProject'
import Link from 'next/link'
import FeaturedArticles from './blog/components/FeaturedArticles'
import FeaturedProjects from './projects/components/FeaturedProjects'
import Image from 'next/image'
import metaImg from './meta.png'
// import TransitionEffect from './components/TransitionEffect'

export const revalidate = 86400 // revalidate this page every 86400 seconds / 1 day

export default function Home() {
  return (
    <div className="mx-auto">
    {/* <div className="flex min-h-screen flex-col items-center justify-between mx-auto"> */}
      {/* <TransitionEffect /> */}
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Education/>
      <div className='hidden'>
        <Image src={metaImg} height={123} width={123} alt='meta image - hack:(' className='' />
      </div>
      <div className='mx-auto mb-8 px-16'>
        <h4 className="text-4xl md:text-5xl mb-10 text-center font-bold text-lime-200">Featured Projects</h4>
        <FeaturedProjects />
      </div>
      <div className="flex items-center justify-center mx-auto max-w-2xl mb-12 text-center">
        <Link href="/projects" className="text-lime-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2 self-end">To All Projects</Link>
      </div>
      <div className='mx-auto pb-8 px-16'>
        <h4 className="text-4xl md:text-5xl mb-10 text-center font-bold text-lime-200">Featured Articles</h4>
        <FeaturedArticles />
      </div>
      <div className="flex flex-col items-center justify-center mx-auto max-w-2xl mb-12 text-center">
        <Link href="/blog" className="text-lime-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2">To All Articles</Link>
      </div>
    </div>
  )
}
