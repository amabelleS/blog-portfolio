'use client'
import React from 'react'
import { motion } from "framer-motion"

type Props = {
    text: string,
    className?: string,
}

const AnimatedText = ({text, className=''}: Props) => {
  return (
    <div className={`w-full mx-auto sm:p-2 flex items-center justify-center text-center overflow-hidden`}>
      <motion.p 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        className={`inline-block w-full font-bold capitalize xs:text-2xl md:test-4xl ${className}`}>
        {text.split('').map((char, index) => {
          return (
            <motion.span
            key={char + "-" + index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.05 }}
            >
                 {char}
            </motion.span>
       )})}
      </motion.p>
    </div>
  )
}

export default AnimatedText