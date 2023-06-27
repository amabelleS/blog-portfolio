import React from 'react'
import AnimatedText from '../components/uiElements/AnimatedText'
import { type } from 'os'
import Link from 'next/link'
import Image from 'next/image'
import demoPic from './flying-house.png'
import { FaGithub } from 'react-icons/fa';

type Project = {
  title: string,
  type: string,
  summery?: string,
  img: string,
  link: string,
  github: string,
}
type FeaturedProjectsProps = {
  title: string,
  type: string,
  summery: string,
  img: string,
  link: string,
  github: string,
}

const FeaturedProject = ({title, type, summery, img, link, github}: FeaturedProjectsProps) => {
  return (
    <article className='w-full flex items-center justify-between rounded-lg border border-solid border-lime-200 bg-dark shadow-2xl p-12 relative'>
      {/* <div className='absolute top-o -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-lime-400 rounded-br-3xl'/> */}
      <Link className='x-1/2 cursor-pointer overflow-hidden rounded-lg' href={link}>
        <Image src={demoPic} alt={title} width={166} height={166} className="w-full h-auto  hover:motion-safe:animate-wiggle" />
        {/* <Image src={demoPic} alt={title} width={300} height={300} className="rounded-full mx-auto hover:motion-safe:animate-wiggle" /> */}
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-lime-400 font-medium text-xl'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-3'>
          <h3 className='my-2 w-full text-left text-4xl font-bold '>{title}</h3>
        </Link>
        <p className='my-2 font-medium text-dark'>{summery}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='text-lime-600 w-24'>
            <FaGithub size={42}/>
          </Link>
          <Link href={link} target='_blank' className='ml-full rounded bg-lime-600 p-2 px-6 text-lg font-semibold'>
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({title, type, img, link, github}: Project) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-lime-200 p-6 relative'>
      {/* <div className='absolute top-o -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-lime-400'/> */}
      <Link className='x-full cursor-pointer overflow-hidden rounded-lg' href={link}>
        <Image src={demoPic} alt={title} width={166} height={166} className="w-full h-auto  hover:motion-safe:animate-wiggle" />
        {/* <Image src={demoPic} alt={title} width={300} height={300} className="rounded-full mx-auto hover:motion-safe:animate-wiggle" /> */}
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-lime-400 font-medium text-xl'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-3'>
          <h3 className='my-2 w-full text-left text-3xl font-bold '>{title}</h3>
        </Link>
        <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={link} target='_blank' className='text-lg font-semibold underline'>
            Visit
          </Link>
          <Link href={github} target='_blank' className='text-lime-600'>
            <FaGithub size={23}/>
          </Link>
        </div>
      </div>
    </article>
  )
}

const Projects = () => {
  return (
    <div className="mx-auto px-24">
      <h2 className="text-5xl mb-6 text-center font-bold dark:text-white/90">Projects</h2>
      <AnimatedText text="Project 1 Lorem ipsum dolor adipisicing elit." className='!text-2xl mb-12' />
      <div className='grid grid-col-12 gap-24 gap-y-32'>
        <div className='col-span-12'>
          <FeaturedProject
            title='Project 1'
            type='Featured Project'
            summery='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, tempora nisi assumenda natus alias odio fugit molestiae, laudantium quo illum culpa voluptatibus aut libero distinctio incidunt tenetur, temporibus architecto? Non..'
            img='/images/cyber.png'
            link='https://www.google.com'
            github='https://www.google.com'
          />
        </div>
        <div className='col-span-6'>
        <Project
            title='Project 2'
            type='Featured Project'
            summery='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, tempora nisi assumenda natus alias odio fugit molestiae, laudantium quo illum culpa voluptatibus aut libero distinctio incidunt tenetur, temporibus architecto? Non..'
            img='/images/cyber.png'
            link='https://www.google.com'
            github='https://www.google.com'
          />
        </div>
        <div className='col-span-6'>
        <Project
            title='Project 3'
            type='Featured Project'
            summery='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, tempora nisi assumenda natus alias odio fugit molestiae, laudantium quo illum culpa voluptatibus aut libero distinctio incidunt tenetur, temporibus architecto? Non..'
            img='/images/cyber.png'
            link='https://www.google.com'
            github='https://www.google.com'
          />
        </div>
      </div>
    </div>
  )
}

export default Projects