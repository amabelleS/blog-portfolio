'use client'
import PracticlesBG from './PracticlesBG'
import Image from 'next/image'
// import Link from 'next/link'
import { motion } from "framer-motion"
import cyber from './cyber.png'

type Props = {}

function Hero({}: Props) {
  return (
    <section 
      // className='mt-24 mb-24 bg-slate-200'
      className='mt-6 mb-6'>
        <PracticlesBG />
        <div className="content flex flex-col sm:flex-row items-center mx-auto max-w-2xl py-8 px-16 text-center">
        <motion.div 
        // className='mt-24 mb-24 bg-slate-200'
        className='w-1/2'
        initial={{ opacity: 0, scale: 0.5, x: -1000 }}
        animate={{ opacity: 1, scale: 1.2, x: 0}}
        transition={{ duration: 1 }}>
        <Image 
          src={cyber} 
          alt="Amabelle" 
          // width={300} height={300} 
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-full hover:motion-safe:animate-wiggle w-96 h-auto mx-auto " 
          // className="rounded-full w-full h-auto mx-auto hover:motion-safe:animate-wiggle" 
          />
        </motion.div>
        <motion.p 
        className="item-body mt-12 sm:ml-8 sm:mt-0 text-3xl text-center  text-teal-300"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1.2}}
        transition={{ duration: 1 }}>
            Hello and Welcome 👋&nbsp;
            <span className="whitespace-nowrap">
            I'm <span className="font-bold">Amabelle</span>.
            {/* I&apos;m <span className="font-bold">Amabelle</span>. */}
            </span> 
        </motion.p>
        {/* <Link href='/blog' className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-semibold rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2">Red to Yellow</Link> */}
        </div>
    </section>
  )
}

export default Hero