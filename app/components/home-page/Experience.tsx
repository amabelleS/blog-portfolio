'use client'

import React from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

type Props = {}

const Details = ({position, company, comoanyLink, time, adreaa, work}: any) => {
    const ref = React.useRef(null)

    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[75%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference={ref}/>
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0}}
            transition={{doration: 0.5, type: 'spring', bounce: 0.25}}
        >
            <h3 className='capitalize font-bold text-2xl'>{position} 
                <a href={comoanyLink} target='_blank' className='text-lime-600 capitalize'>
                    @{company}
                </a>
            </h3>
            <span className='capitalize text-lime-100 font-medium'>{time} | {adreaa}</span>
            {/* <span className='capitalize font-medium text-dark/75'>{time} | {adreaa}</span> */}
            <p className='font-medium w-full'>{work}</p>
        </motion.div>
    </li>
}

function Experience({}: Props) {
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
        <h2 className="text-5xl mb-6 text-center font-bold dark:text-white/90">Experience</h2>
      <div ref={ref} className='w-[75%] mx-auto relative'>

        <motion.div
            style={{ scaleY: scrollYProgress }}
            className='absolute left-9 top-0 w-[4px] h-full origin-top bg-lime-200' />

        <ul className='w-full flex flex-col items-start justify-between ml-12'>
            <Details
                position='Software Engineer'
                company='Clevertech'
                comoanyLink='https://clevertech.biz/'
                time='2021 - Present'
                adreaa='Remote'
                work='I am currently working as a Software Engineer at Clevertech. I am working on a project for a client in the US. I am working with React, Next.js, TypeScript, GraphQL, and AWS.'

            />
            <Details
                position='Software Engineer'
                company='Clevertech'
                comoanyLink='https://clevertech.biz/'
                time='2021 - Present'
                adreaa='Remote'
                work='I am currently working as a Software Engineer at Clevertech. I am working on a project for a client in the US. I am working with React, Next.js, TypeScript, GraphQL, and AWS.'

            />
            <Details
                position='Software Engineer'
                company='Clevertech'
                comoanyLink='https://clevertech.biz/'
                time='2021 - Present'
                adreaa='Remote'
                work='I am currently working as a Software Engineer at Clevertech. I am working on a project for a client in the US. I am working with React, Next.js, TypeScript, GraphQL, and AWS.'

            />
        </ul>
      </div>
    </section>
  )
}

export default Experience