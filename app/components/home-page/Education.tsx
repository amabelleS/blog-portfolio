'use client'

import React from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

type Props = {}

const Details = ({type, time, place, info}: any) => {
    const ref = React.useRef(null)

    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[75%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference={ref}/>
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0}}
            transition={{doration: 0.5, type: 'spring', bounce: 0.25}}
        >
            <h3 className='capitalize font-bold text-2xl'>{type}</h3>
            <span className='capitalize text-lime-100 font-medium'>{time} | {place}</span>
            {/* <span className='capitalize font-medium text-dark/75'>{time} | {adreaa}</span> */}
            <p className='font-medium w-full'>{info}</p>
        </motion.div>
    </li>
}

function Education({}: Props) {
    const ref = React.useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

  return (
    <section className="mt-24 mb-24 mx-auto max-w-2xl">
    {/* <div className='w-full bg-slate-200'> */}
        <h2 className="text-5xl mb-6 text-center font-bold dark:text-white/90">Education</h2>
      <div ref={ref} className='w-[75%] mx-auto relative'>

        <motion.div
            style={{ scaleY: scrollYProgress }}
            className='absolute left-9 top-0 w-[4px] h-full origin-top bg-lime-200' />

        <ul className='w-full flex flex-col items-start justify-between ml-12'>
            <Details
                type='Bachelor of Science in Computer Science'
                time='2017 - 2021'
                place='University of the Philippines Cebu'
                info='I graduated with a Bachelor of Science in Computer Science from the University of the Philippines Cebu. I was a consistent Dean’s Lister and graduated with honors.'
            />
            <Details
                type='Master of Science in Computer Science'
                time='2019 - 2020'
                place='University of Haifa'
                info='dsdsds'
            />
        </ul>
      </div>
    </section>
  )
}

export default Education