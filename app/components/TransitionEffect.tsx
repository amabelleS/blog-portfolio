'use client'

import React from 'react'
import { motion } from 'framer-motion'

const TransitionEffect = () => {
  return (
    <>
        <motion.div className='fix top-0 buttom-0 right-full h-screem w-screen bg-teal-400 z-30'
            initial={{ x: '100%', width: '100%' }}
            animate={{ x: '0%', width: '0%', transition: { duration: 0.8, ease: 'easeInOut' }}}
            exit={{ x: ['0%', '100%'], width: ['0%', '100%'], transition: { duration: 0.5, ease: 'easeInOut' }}}
        />      
        <motion.div className='fix top-0 buttom-0 right-full h-screem w-screen bg-rose-400 z-20'
            initial={{ x: '100%', width: '100%' }}
            animate={{ x: '0%', width: '0%', transition: {delay: 0.2, duration: 0.8, ease: 'easeInOut' }}}
            // exit={{ x: '100%', width: '100%', transition: { duration: 0.5, ease: 'easeInOut' }}}
        />      
        <motion.div className='fix top-0 buttom-0 right-full h-screem w-screen bg-lime-400 z-10'
            initial={{ x: '100%', width: '100%' }}
            animate={{ x: '0%', width: '0%', transition: { delay: 0.4, duration: 0.8, ease: 'easeInOut' }}}
            // exit={{ x: '100%', width: '100%', transition: { duration: 0.5, ease: 'easeInOut' }}}
        />      
    </>
  )
}

export default TransitionEffect