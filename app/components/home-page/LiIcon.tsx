'use client'

// ref: https://codesandbox.io/s/framer-motion-track-element-position-wnzctr?from-embed=&file=/src/App.tsx

import React from 'react'
import { motion, useScroll } from 'framer-motion'

type Props = {
  reference: React.MutableRefObject<HTMLDivElement> | null | any
}

function LiIcon({reference}: Props) {

  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["end end", "start start"]
  })

  return (
    <figure className='absolute left-0 stroke-lime-200'>
      <svg
        width='75' height='75' viewBox='0 0 100 100' className='-rotate-90'>
            <circle cx='75' cy='50' r='20' pathLength="1" className='stroke-lime-600 stroke-1 fill-none'/>
            <motion.circle cx='75' cy='50' r='20' pathLength="1" className='stroke-[5px] fill-none stroke-lime-200' 
              style={{
                pathLength: scrollYProgress
              }}/>
            <circle cx='75' cy='50' r='10' pathLength="1" className='stroke-1 fill-lime-600 animate-pulse'/>
      </svg>
    </figure>
  )
}

export default LiIcon