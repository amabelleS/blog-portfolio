// import Image from 'next/image'
import Posts from './components/posts/Posts'
import Hero from './components/home-page/Hero'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-6 mb-4 mx-auto">
      <Hero/>
      <Posts />
    </main>
  )
}
