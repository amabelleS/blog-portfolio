'use client'
import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'

const hasadnaLink = 'https://open-bus-map-search.hasadna.org.il/dashboard'
const hamechinaGithub = 'https://github.com/Bootcamp-Projects-Hamechina/hamechina'

const ABOUT_TEXT = "I'm a dedicated full-stack developer with a focus on React, Node.js, and my favorite, Next.js (any questions about it? Just ask!). Currently, I'm fortunate to be deeply involved in several impactful projects: I'm an active contributor to open-source initiatives like open-bus-search and the initiator and maintainer of the Hamechina project, alongside ongoing work on Hasbara projects. In the past year, I honed my skills in a small startup where my passion for problem-solving and knack for debugging were put to the test. From crafting seamless user experiences to implementing clean and efficient code, I consistently strive to deliver exceptional end-to-end solutions. Driven by a genuine love for my work and an insatiable thirst for learning, I'm thrilled about the opportunity to contribute my skills to create meaningful and innovative projects."

function About() {
  return (
    <section className='mb-12'>
        <div className="mx-auto max-w-2xl text-center">
        <p className="font-semibold sm:text-2xl md:text-3xl px-4 lg:px-0 text-teal-100 border-b-2 border-teal-100 pb-4"
        >
            {/* Animate the about text */}
           {ABOUT_TEXT.split('').map((char, index) => {
                return (
                     <motion.span
                     key={char + "-" + index}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 1, delay: index * 0.023 }}
                     >
                          {char}
                     </motion.span>
                )
           })}
        </p>
        <Link 
          href={hasadnaLink}
          className=" font-semibold sm:text-2xl md:text-3xl text-center px-4 lg:px-0 text-teal-300"
            >open-bus website
        </Link>
        <Link 
          href={hamechinaGithub}
          className=" font-semibold sm:text-2xl md:text-3xl text-center px-4 lg:px-0 text-teal-300"
            >Hmechina GitHub repo
        </Link>
        {/* <motion.p className="mt-12 mb-12 text-3xl text-center dark:text-white/90">
           Hello, I'm [Your Name], a dedicated full-stack developer specializing in React, Node.js, Next.js, and various other technologies. Currently, I'm fortunate to be working in a small startup where my passion for problem-solving and knack for debugging are put to the test. From crafting seamless user experiences to implementing clean and efficient code, I strive to deliver exceptional end-to-end solutions. With a genuine love for what I do and a continuous drive for learning, I'm excited to contribute my skills to create meaningful and innovative projects.
        </motion.p> */}
        </div>
    </section>
  )
}

export default About