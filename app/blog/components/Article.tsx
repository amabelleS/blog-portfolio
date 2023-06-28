'use client'

import HoverImage from "./HoverImage"
import { motion } from "framer-motion"

type Article = {
    img: string,
    title: string,
    date: string,
    summery?: string,
    link: string,
}

const Article = ({img, title, date, link}: Article) => {
  return (
    <motion.li className="flex items-center justify-between relative w-full p-4 py-6 my-4 first:mt-0 bg-stone-900 border-solid border-lime-100 border-8 border-l-[1px] border-t-[1px] border-e-teal-900 border-s-2 rounded-2xl text-lime-600"
    initial={{ y: 200 }}
    whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' }}}
    viewport={{ once: true }}
    >
        <HoverImage title={title} img={img} link={link} />
        <span className="text-sm pl-4 font-semibold text-teal-600">{date}</span>
    </motion.li>
  )
}

export default Article