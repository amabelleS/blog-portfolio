'use client'

import React from 'react'
import { motion, useScroll, Variants } from 'framer-motion'
import LiIcon from './LiIcon'
import education from '@/data/education'

type EducationDetailsProps = {
    degree: string,
    dates: string,
    school: string,
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

const Details = ({degree, dates, school, description}: EducationDetailsProps) => {
    const ref = React.useRef(null)

    return <motion.li ref={ref} 
        className='my-8 first:mt-0 last:mb-0 w-[75%] mx-auto flex flex-col items-start justify-between'
        initial='offscreen'
        whileInView='onscreen'
    >
        <LiIcon reference={ref}/>
        <motion.div
            variants={variants}
            // initial='offscreen'
            // whileInView='onscreen'
            // initial={{ y: 50 }}
            // whileInView={{ y: 0}}
            // transition={{doration: 0.5, type: 'spring'}}
            // transition={{doration: 0.5, type: 'spring', bounce: 0.25}}
        >
            <h3 className='capitalize font-bold text-2xl text-lime-600'>{degree}</h3>
            <span className='capitalize text-lime-100 font-medium'>{dates} | {school}</span>
            {/* <span className='capitalize font-medium text-dark/75'>{time} | {adreaa}</span> */}
            <p className='font-medium w-full'>{description}</p>
        </motion.div>
    </motion.li>
}

function Education() {
    const ref = React.useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

  return (
    // <section className="mt-24 mb-24 mx-auto max-w-2xl">
    <section className="my-32">
        <h2 className="text-5xl mb-6 text-center font-bold text-lime-200">Education</h2>
        <div ref={ref} className='w-[90%] lg:w-[75%] mx-auto relative'>
      {/* <div ref={ref} className='w-[75%] mx-auto relative'> */}

        <motion.div
            style={{ scaleY: scrollYProgress }}
            className='absolute left-9 top-0 w-[4px] h-full origin-top bg-lime-200' />

        <ul className='w-full flex flex-col items-start justify-between ml-4'>
            {education.map((edu) => {
                return <Details
                    key={edu.degree}
                    degree={edu.degree}
                    dates={edu.dates}
                    school={edu.school}
                    description={edu.description}
                />
            })}
            {/* <Details
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
            /> */}
        </ul>
      </div>
    </section>
  )
}

export default Education