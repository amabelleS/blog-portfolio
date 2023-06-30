import Link from 'next/link'
import Image from 'next/image'
// import demoPic from './flying-house.png'
// import jsSnippets from './my-js-snippets.png'
import { FaGithub } from 'react-icons/fa';

type FeaturedProjectsProps = {
    title: string,
    type?: string,
    summery: string,
    image_path: string,
    deployed_url: string,
    github_url: string,
  }

const FeaturedProject = ({title, type, summery, image_path, deployed_url, github_url}: FeaturedProjectsProps) => {
    return (
      <article className='w-full flex flex-col md:flex-row items-center justify-between border-solid border-lime-200 border-8 border-l-[1px] border-t-[1px] border-e-teal-900 border-s-2 rounded-2xl shadow-2xl p-12 relative'>
        {/* <div className='absolute top-o -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-lime-400 rounded-br-3xl'/> */}
        <Link className='x-1/2 cursor-pointer overflow-hidden rounded-lg' href={deployed_url}>
          <Image src={image_path} alt={title} width={166} height={166} className="w-full h-auto  hover:motion-safe:animate-pulse" />
          {/* <Image src={demoPic} alt={title} width={300} height={300} className="rounded-full mx-auto hover:motion-safe:animate-wiggle" /> */}
        </Link>
        <div className='w-full lg:w-1/2 flex flex-col items-center md:items-start justify-between pt-6 md:pt-0 md:pl-8'>
          {/* <span className='text-lime-400 font-medium text-xl'>{type}</span> */}
          <Link href={deployed_url} target='_blank' className='hover:underline text-lime-400 underline-offset-3'>
            <h3 className='my-2 w-full text-left text-4xl font-bold text-lime-400'>{title}</h3>
          </Link>
          <p className='my-2 font-medium text-dark'>{summery}</p>
          <div className='mt-2 flex items-center'>
            <Link href={github_url} target='_blank' className='text-lime-600 w-24'>
              <FaGithub size={36}/>
            </Link>
            <Link href={deployed_url} target='_blank' className='ml-full rounded bg-lime-600 p-1 px-2 text-lg font-semibold md:p-2 md:px-6 text-md'>
              Visit Project
            </Link>
          </div>
        </div>
      </article>
    )
  }
  
  export default FeaturedProject;