import Link from "next/link"
import Image from "next/image"
import { FiExternalLink } from 'react-icons/fi';
import getFormattedDate from "@/lib/getFormattedDate"

export type FeaturedArticleProps = {
    image_url: string,
    title: string,
    date: string,
    summery: string,
    link: string,
    id?: string | undefined,
    slug?: string,
}

const FeaturedArticle = ({image_url, title, date, summery, link, id}: FeaturedArticleProps) => {
    
    const formattedDate = getFormattedDate(date)

  return (
    <li className="col-span-2 sm:col-span-1 flex flex-col justify-between w-full overflow-x-wrap p-4 bg-stone-900 border-solid border-lime-100 border-8 border-l-[1px] border-t-[1px] border-e-teal-900 border-s-2 rounded-2xl text-lime-600">
        <Link className='x-full cursor-pointer overflow-hidden' href={`/blog/${id}`} target="_blank">
            <Image 
                src={image_url} 
                alt={title}
                width={123} height={123} 
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full h-auto inline-block rounded-lg hover:motion-safe:animate-pulse" 
            />
        </Link>
        <Link href={`/blog/${id}`} target="_blank">
            <h3 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">{title}</h3>
        </Link>
        <p className="text-sm mb-2 font-medium">{summery}</p>
        <div className='mt-2 flex justify-between items-center'>
            <span className="text-sm font-semibold text-teal-600">{formattedDate}</span>
            <Link href={link} target='_blank' className='text-lime-600'>
            <FiExternalLink size={36}/>
            </Link>
        </div>
    </li>
  )
}

export default FeaturedArticle