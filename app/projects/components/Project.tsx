import Link from 'next/link'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa';

type Project = {
    title: string,
    type?: string,
    summery?: string,
    image_path: string,
    deployed_url: string,
    github_url: string,
  }

const Project = ({title, summery, type, image_path, deployed_url, github_url}: Project) => {
    return (
      <article className='w-full h-full flex flex-col items-center justify-center border-solid border-lime-200 border-8 border-l-[1px] border-t-[1px] border-e-teal-900 border-s-2 rounded-2xl p-6 relative'
      title={summery}>
        {/* <div className='absolute top-o -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-lime-400'/> */}
        <Link className='x-full cursor-pointer overflow-hidden rounded-lg' href={deployed_url}>
          <Image src={image_path} alt={title} width={166} height={166} className="w-full h-auto  hover:motion-safe:animate-pulse" />
        </Link>
        <div className='w-full flex flex-col items-start justify-between mt-4'>
          <span className='text-lime-400 font-medium text-xl'>{type}</span>
          <Link href={deployed_url} target='_blank' className='hover:underline underline-offset-3'>
            <h3 className='my-2 w-full text-left text-3xl font-bold '>{title}</h3>
          </Link>
          <div className='w-full mt-2 flex items-center justify-between'>
            <Link href={deployed_url} target='_blank' className='text-lg font-semibold underline'>
              Visit
            </Link>
            <Link href={github_url} target='_blank' className='text-lime-600'>
              <FaGithub size={23}/>
            </Link>
          </div>
        </div>
      </article>
    )
  }

  export default Project;