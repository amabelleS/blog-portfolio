'use client'

import React from 'react'
import AnimatedText from '../components/uiElements/AnimatedText'
import Project from './components/Project'
import FeaturedProject from './components/FeaturedProject'
import FeaturedProjects from './components/FeaturedProjects'
import { motion } from 'framer-motion'
import projects from '@/data/projects/projects'


const Projects = () => {
  return (
    <div className="w-full my-16 px-12 flex flex-col items-center justify-center overflow-hidden">
    {/* <div className="mx-auto px-4"> */}
      <h2 className="text-4xl md:text-5xl mb-6 text-center font-bold text-lime-200">Projects</h2>
      <AnimatedText text="Unlock the power of imagination and innovation to create a world where possibilities are limitless." 
      className='!text-3xl my-6 text-lime-600'
      />
      <FeaturedProjects />
      <div className='grid grid-cols-2 gap-16 mt-16'>
        {projects.filter(project => !project.isFeatured).map(project => {
          return (
            <div className='col-span-1' key={project.id}>
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