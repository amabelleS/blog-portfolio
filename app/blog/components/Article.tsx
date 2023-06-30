'use client'

import HoverImage from "./HoverImage"
import { motion } from "framer-motion"

type Article = {
    title: string,
    date: string,
    summery?: string,
    link: string,
    image_url?: string,
    isFeatured?: boolean,
    slug?: string,
    id?: string,
}

const Article = ({title, date, link, image_url, id}: Article) => {
  return (
    <motion.li className="flex items-center justify-between relative w-full p-4 py-6 my-4 first:mt-0 bg-stone-900 border-solid border-lime-100 border-8 border-l-[1px] border-t-[1px] border-e-teal-900 border-s-2 rounded-2xl text-lime-600"
    initial={{ y: 50 }}
    whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' }}}
    viewport={{ once: true }}
    >
        <HoverImage title={title} img={image_url} link={link} />
        <span className="text-sm pl-4 font-semibold text-teal-600">{date}</span>
    </motion.li>
  )
}

export default Article