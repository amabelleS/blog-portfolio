import Link from 'next/link'
import Image from 'next/image'
import { FiExternalLink } from 'react-icons/fi';
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
      <li className='col-span-2 sm:col-span-1 flex flex-col justify-between w-full h-full overflow-x-wrap p-4 bg-stone-900 border-solid border-lime-100 border-8 border-l-[1px] border-t-[1px] border-e-teal-900 border-s-2 rounded-2xl text-lime-600'>
        <Link className='x-full cursor-pointer overflow-hidden' href={deployed_url}>
          <Image src={image_path} alt={title} width={166} height={166} className="w-full h-auto inline-block rounded-lg hover:motion-safe:animate-pulse" />
        </Link>
        {/* <div className='w-full lg:w-1/2 flex flex-col items-center md:items-start justify-between pt-6 md:pt-0 md:pl-8'> */}
        <Link href={deployed_url} target='_blank' className='hover:underline text-lime-400 underline-offset-3'>
        <h3 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline text-lime-400'>{title}</h3>
        </Link>
        <p className='text-sm mb-2 font-medium text-lime-100'>{summery}</p>
        {/* <div className='mt-2 flex items-center'> */}
        <div className='mt-2 flex justify-between items-center'>
            <Link href={github_url} target='_blank' className='text-lime-400 w-24'>
              <FaGithub size={36}/>
            </Link>
            <Link href={deployed_url} target='_blank' className='text-teal-400'>
            <FiExternalLink size={36}/>
            </Link>
        </div>
            {/* <Link href={deployed_url} target='_blank' className='ml-full rounded bg-lime-600 p-1 px-2 text-lg font-semibold md:p-2 md:px-6 text-md'>
              Visit Project
            </Link> */}
      </li>
    )
  }
  
  export default FeaturedProject;