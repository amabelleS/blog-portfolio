'use client'

import React from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'
import expirience from '@/data/expirience'

type ExpirienceDetailsProps = {
    position: string,
    company: string,
    company_url: string,
    dates: string,
    location: string,
    description: string,
}

const Details = ({position, company, company_url, dates, location, description}: ExpirienceDetailsProps) => {
    const ref = React.useRef(null)

    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[75%] mx-auto flex flex-col items-start justify-between'>
        <LiIcon reference={ref}/>
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{doration: 0.5, type: 'spring'}}
            // transition={{doration: 0.5, type: 'spring', bounce: 0.25}}
        >
            <h3 className='capitalize font-bold text-2xl'>{position} 
                <a href={company_url} target='_blank' className='text-lime-600 capitalize'>
                    @{company}
                </a>
            </h3>
            <span className='capitalize text-lime-100 font-medium'>{dates} | {location}</span>
            {/* <span className='capitalize font-medium text-dark/75'>{time} | {adreaa}</span> */}
            <p className='font-medium w-full'>{description}</p>
        </motion.div>
    </li>
}

function Experience() {
    const ref = React.useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

  return (
    <section className="my-32">
    {/* <section className="mt-16 mb-24 mx-auto max-w-2xl"> */}
        <h2 className="text-5xl mb-6 w-full text-center font-bold text-lime-200">Experience</h2>
        <div ref={ref} className='w-[90%] lg:w-[75%] mx-auto relative'>
        <motion.div
            style={{ scaleY: scrollYProgress }}
            className='absolute left-9 top-0 w-[4px] h-full origin-top bg-lime-200' />

        <ul className='w-full flex flex-col items-start justify-between ml-4'>
        {/* <ul className='w-full flex flex-col items-start justify-between ml-12'> */}
            {expirience.map((exp) => {
                return <Details
                    key={exp.id}
                    position={exp.position}
                    company={exp.company}
                    company_url={exp.company_url}
                    dates={exp.dates}
                    location={exp.location}
                    description={exp.description}
                />
            })}
        </ul>
      </div>
    </section>
  )
}

export default Experience