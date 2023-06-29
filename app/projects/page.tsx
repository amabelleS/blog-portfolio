'use client'

import React from 'react'
import AnimatedText from '../components/uiElements/AnimatedText'
import Project from './components/Project'
import FeaturedProject from './components/FeaturedProject'
import { motion } from 'framer-motion'
import projects from '@/data/projects'


const Projects = () => {
  return (
    <div className="mx-auto px-4">
      <>
        <motion.div className='fix top-0 buttom-0 right-full h-screem w-screen bg-teal-400 z-50'
            initial={{ x: '100%', width: '100%' }}
            animate={{ x: '0%', width: '0%', transition: { duration: 0.8, ease: 'easeInOut' }}}
            // exit={{ x: '100%', width: '100%', transition: { duration: 0.5, ease: 'easeInOut' }}}
        />      
        <motion.div className='fix top-0 buttom-0 right-full h-screem w-screen bg-rose-400 z-40'
            initial={{ x: '100%', width: '100%' }}
            animate={{ x: '0%', width: '0%', transition: {delay: 0.2, duration: 0.8, ease: 'easeInOut' }}}
            // exit={{ x: '100%', width: '100%', transition: { duration: 0.5, ease: 'easeInOut' }}}
        />      
        <motion.div className='fix top-0 buttom-0 right-full h-screem w-screen bg-lime-400 z-30'
            initial={{ x: '100%', width: '100%' }}
            animate={{ x: '0%', width: '0%', transition: { delay: 0.4, duration: 0.8, ease: 'easeInOut' }}}
            // exit={{ x: '100%', width: '100%', transition: { duration: 0.5, ease: 'easeInOut' }}}
        />      
    </>
      <h2 className="text-4xl md:text-5xl mb-6 text-center font-bold text-lime-200">Projects</h2>
      <AnimatedText text="Unlock the power of imagination and innovation to create a world where possibilities are limitless." />
      <div className='grid grid-cols-1 gap-y-24 gap-x-4 md:gap-x-8 xl:gap-24 xl:gap-y-32 p-16'>
        <div className='col-span-12'>
          {projects.filter(project => project.isFeatured).map(project => {
            return (
              <FeaturedProject
                key={project.id}
                title={project.title}
                summery={project.summery}
                image_path={project.image_path}
                deployed_url={project.deployed_url}
                github_url={project.github_url}
              />
            )
          })}
        </div>
        {projects.filter(project => !project.isFeatured).map(project => {
          return (
            <div className='col-span-6' key={project.id}>
              <Project
                title={project.title}
                summery={project.summery}
                image_path={project.image_path}
                deployed_url={project.deployed_url}
                github_url={project.github_url}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects