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
    <div className="w-full my-6 px-12 flex flex-col items-center justify-center overflow-hidden">
    {/* <div className="mx-auto px-4"> */}
      <h2 className="text-4xl md:text-5xl text-center font-bold text-lime-400">Projects</h2>
      {/* <AnimatedText text="Building digital experiences that inspire and empower users through innovative solutions."  */}
      <AnimatedText text="Unlock the power of imagination and innovation to create a world where possibilities are limitless." 
      className='!text-3xl my-6 text-lime-200'
      />
      <FeaturedProjects />
      <ul className="grid grid-cols-2 gap-16 mt-6">
        {projects.filter(project => !project.isFeatured).map(project => {
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
        }
        )}
    </ul>
      {/* <div className='grid grid-cols-2 gap-16 mt-16'>
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
      </div> */}
    </div>
  )
}

export default Projects