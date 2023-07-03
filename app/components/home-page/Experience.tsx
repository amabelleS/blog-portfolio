'use client'

import React from 'react'
import { motion, useScroll, Variants } from 'framer-motion'
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

const variants: Variants = {
    offscreen: {
      y: 50
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
      }
    }
  };

const Details = ({position, company, company_url, dates, location, description}: ExpirienceDetailsProps) => {
    const ref = React.useRef(null)

    return <motion.li ref={ref} 
        className='my-8 first:mt-0 last:mb-0 w-[75%] mx-auto flex flex-col items-start justify-between'
        initial='offscreen'
        whileInView='onscreen'
        >
        
        <LiIcon reference={ref}/>
        <motion.div
            variants={variants}
            // initial={{ y: 50 }}
            // whileInView={{ y: 0 }}
            // transition={{doration: 0.5, type: 'spring'}}
            // transition={{type: 'spring', bounce: 0.25}}
        >
            {/* <h3 className='capitalize font-bold text-2xl'>{position} 
                <Link href={company_url} target='_blank' className='text-lime-600 capitalize'>
                    @{company}
                </Link>
            </h3> */}
            <h3 className='capitalize font-bold  text-teal-400 text-2xl'>
                {position}
                <span className=' text-lime-600 capitalize'>
                    @{company}
                </span>
            </h3>
            <span className='capitalize text-lime-100 font-medium'>{dates} | {location}</span>
            <p className='font-medium  text-teal-100 w-full'>{description}</p>
        </motion.div>
    </motion.li>
}

function Experience() {
    const ref = React.useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            // offset: ["end end", "center center", "start start"]
            // offset: ["start center", "end end", "start"]
            offset: ["start end", "center start"]
        }
    )

  return (
    <section className="my-32">
        <h2 className="text-5xl mb-6 w-full text-center font-bold text-lime-200">Experience</h2>
        <div ref={ref} className='w-[90%] lg:w-[75%] mx-auto relative'>
        <motion.div
            style={{ scaleY: scrollYProgress }}
            className='absolute left-9 top-0 w-[4px] h-full origin-top bg-lime-200' />

        <ul className='w-full flex flex-col items-start justify-between ml-4'>
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