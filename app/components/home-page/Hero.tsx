'use client'
import PracticlesBG from './PracticlesBG'
import Image from 'next/image'
import { motion } from "framer-motion"
import cyber from './cyber.png'

type Props = {}

function Hero({}: Props) {
  return (
    <section 
      // className='mt-24 mb-24 bg-slate-200'
      className='mt-24 mb-24'>
        <PracticlesBG />
        <div className="content flex mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
        <motion.div 
        // className='mt-24 mb-24 bg-slate-200'
        className=''
        initial={{ opacity: 0, scale: 0.5, x: -1000 }}
        animate={{ opacity: 1, scale: 1.2, x: 0}}
        transition={{ duration: 1 }}>
        <Image src={cyber} alt="Amabelle" width={300} height={300} className="rounded-full mx-auto hover:motion-safe:animate-wiggle" />
        </motion.div>
        <motion.p 
        className="item-body m-16 text-3xl text-center dark:text-white/90"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1.2}}
        transition={{ duration: 1 }}>
            Hello and Welcome 👋&nbsp;
            <span className="whitespace-nowrap">
            I&apos;m <span className="font-bold">Amabelle</span>.
            </span> 
        </motion.p>
        </div>
    </section>
  )
}

export default Hero