import Link from "next/link"
import Image from "next/image"

type FeaturedArticleProps = {
    img: string,
    title: string,
    time: string,
    summery: string,
    link: string,
}

const FeaturedArticle = ({img, title, time, summery, link}: FeaturedArticleProps) => {
  return (
    <li className="col-span-1 w-full p-4 bg-stone-900 border-solid border-lime-100 border-8 border-l-[1px] border-t-[1px] border-e-rose-900 border-s-2 rounded-2xl text-lime-600">
            <Link className='x-full cursor-pointer overflow-hidden' href={link}>
                <Image 
                    src={img} 
                    alt={title} 
                    width={123} height={123} 
                    priority={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-auto inline-block rounded-lg hover:motion-safe:animate-pulse" 
                />
            </Link>
            <Link href={link} target="_blank">
                <h3 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">{title}</h3>
            </Link>
            <p className="text-sm mb-2">{summery}</p>
            <span className="text-sm font-semibold text-teal-600">{time}</span>
        </li>
  )
}

export default FeaturedArticle