'use client'
import React from 'react'
import { motion } from "framer-motion"

const ABOUT_TEXT = " I'm a dedicated full-stack developer specializing in React, Node.js, Next.js, and various other technologies. Currently, I'm fortunate to be working in a small startup where my passion for problem-solving and knack for debugging are put to the test. From crafting seamless user experiences to implementing clean and efficient code, I strive to deliver exceptional end-to-end solutions. With a genuine love for what I do and a continuous drive for learning, I'm excited to contribute my skills to create meaningful and innovative projects."

function About() {
  return (
    <section className='mb-12'>
        <div className="mx-auto max-w-2xl">
        {/* <p className="mt-12 mb-12 text-3xl text-center dark:text-white/90">
            I&apos;m a <span className="font-bold">Software Engineer</span> based in the Philippines. I&apos;m passionate about building software that helps people.  I&apos;m currently working at <a href="https://www.affinityx.com/" target="_blank" rel="noreferrer" className="font-bold">AffinityX</a> as a <span className="font-bold">Senior Software Engineer</span>. I&apos;m also a <span className="font-bold">Google Developer Expert</span> for <span className="font-bold">Web Technologies</span>.
        </p> */}
        <p className="text-3xl text-center dark:text-white/90"
        >
            {/* Animate the about text */}
           {ABOUT_TEXT.split('').map((char, index) => {
                return (
                     <motion.span
                     key={char + "-" + index}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 1, delay: index * 0.05 }}
                     >
                          {char}
                     </motion.span>
                )
           })}
        </p>
        {/* <motion.p className="mt-12 mb-12 text-3xl text-center dark:text-white/90">
           Hello, I'm [Your Name], a dedicated full-stack developer specializing in React, Node.js, Next.js, and various other technologies. Currently, I'm fortunate to be working in a small startup where my passion for problem-solving and knack for debugging are put to the test. From crafting seamless user experiences to implementing clean and efficient code, I strive to deliver exceptional end-to-end solutions. With a genuine love for what I do and a continuous drive for learning, I'm excited to contribute my skills to create meaningful and innovative projects.
        </motion.p> */}
        </div>
    </section>
  )
}

export default About