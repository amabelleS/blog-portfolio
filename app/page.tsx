// import Image from 'next/image'
import Posts from './components/posts/Posts'
import Hero from './components/home-page/Hero'
import Skills from './components/home-page/Skills'
import About from './components/home-page/About'
import Experience from './components/home-page/Experience'
import Education from './components/home-page/Education'
import projects from '@/data/projects/projects'
import FeaturedProject from './projects/components/FeaturedProject'
import Link from 'next/link'
// import TransitionEffect from './components/TransitionEffect'
// import "prismjs/themes/prism-tomorrow.css";

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
      <div className="flex flex-col items-center justify-center mx-auto max-w-2xl pb-8 px-16 text-center">
        {projects.filter((project) => project.isFeatured).map((project) => {
          return (
            <FeaturedProject
            key={project.id}
            title={project.title}
            summery={project.summery}
            image_path={project.image_path}
            deployed_url={project.deployed_url}
            github_url={project.github_url}
          />)
        })}
      </div>
      <div className="flex flex-col items-center justify-center mx-auto max-w-2xl pb-8 px-16 text-center">
        <Link href="/projects" className="text-lime-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2">To All Projects</Link>
      </div>
      <Posts />
    </div>
  )
}
