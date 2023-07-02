import Link from "next/link"
import Image from "next/image"
import { getSortedPostsData } from "@/lib/posts"
// import ListItem from "./ListItem"
import AnimatedText from "../uiElements/AnimatedText"
import books from "@/public/images/books.jpg"

type FeaturedArticlesProps = {
    img: string,
    title: string,
    time: string,
    summery: string,
    link: string,
}

type Article = {
    img: string,
    title: string,
    date: string,
    summery?: string,
    link: string,
}

const Article = ({img, title, date, link}: Article) => {
    return (
        <li className="col-span-1 w-full p-4 bg-stone-900 border-solid border-lime-100 border-8 border-l-[1px] border-t-[1px] border-e-rose-900 border-s-2 rounded-2xl text-lime-600">
            <Link className='x-full cursor-pointer overflow-hidden' href={link}>
                <Image src={img} alt={title} width={123} height={123} className="w-full h-auto inline-block rounded-lg hover:motion-safe:animate-pulse" />
            </Link>
            <Link href={link} target="_blank">
                <h3 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">{title}</h3>
            </Link>
            <span className="text-sm font-semibold text-teal-600">{date}</span>
        </li>
    )
}

const FeaturedArticles = ({img, title, time, summery, link}: FeaturedArticlesProps) => {
    return (
        <li className="col-span-1 w-full p-4 bg-stone-900 border-solid border-lime-100 border-8 border-l-[1px] border-t-[1px] border-e-rose-900 border-s-2 rounded-2xl text-lime-600">
            <Link className='x-full cursor-pointer overflow-hidden' href={link}>
                <Image src={img} alt={title} width={123} height={123} className="w-full h-auto inline-block rounded-lg hover:motion-safe:animate-pulse" />
            </Link>
            <Link href={link} target="_blank">
                <h3 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">{title}</h3>
            </Link>
            <p className="text-sm mb-2">{summery}</p>
            <span className="text-sm font-semibold text-teal-600">{time}</span>
        </li>
    )
}

export default function Posts() {
    const posts = getSortedPostsData()

    return (
        <section className="w-full my-16 px-12 flex flex-col items-center justify-center overflow-hidden">
        {/* <section className="mt-6 mx-auto max-w-2xl"> */}
            <h2 className="text-5xl mb-6 text-center font-bold dark:text-lime-100">Featured Articles</h2>
            <AnimatedText text="Within the pages of knowledge, we find the power to shape perspectives, challenge boundaries, and inspire change through the timeless gift of words." className='!text-3xl my-6 text-lime-600' />
            {/* <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2> */}
            {/* <ul className="w-full">
                {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
            </ul> */}
            <ul className="grid grid-cols-2 gap-16">
                {/* {posts.map(post => ( */}
                    {/* // <ListItem key={post.id} post={post} /> */}
                    <FeaturedArticles 
                        // key={post.id} 
                        img="https://imgur.com/9BKOkLd.png"
                        title="The 5 Best Books I Read in 2020"
                        time="Jan 1, 2021"
                        summery="I read 30 books in 2020. Here are the 5 best books I read in 2020."
                        link="https://medium.com/@jameshagood/the-5-best-books-i-read-in-2020-1b0b8b2b0b9d"
                        />
                    <FeaturedArticles 
                        // key={post.id} 
                        img="https://imgur.com/9BKOkLd.png"
                        title="The 5 Best Books I Read in 2020"
                        time="Jan 1, 2021"
                        summery="I read 30 books in 2020. Here are the 5 best books I read in 2020."
                        link="https://medium.com/@jameshagood/the-5-best-books-i-read-in-2020-1b0b8b2b0b9d"
                        />
                {/* ))} */}
            </ul>
            <h2 className="text-4xl my-16 w-full mt-32 text-center font-bold dark:text-lime-100">All Articles</h2>
            <ul className="">
                <Article 
                    img="https://imgur.com/9BKOkLd.png"
                    title="The 5 Best Books I Read in 2020"
                    date="Jan 1, 2021"
                    link="https://medium.com/@jameshagood/the-5-best-books-i-read-in-2020-1b0b8b2b0b9d"
                />
                <Article 
                    img="https://imgur.com/9BKOkLd.png"
                    title="The 5 Best Books I Read in 2020"
                    date="Jan 1, 2021"
                    link="https://medium.com/@jameshagood/the-5-best-books-i-read-in-2020-1b0b8b2b0b9d"
                />
                <Article 
                    img="https://imgur.com/9BKOkLd.png"
                    title="The 5 Best Books I Read in 2020"
                    date="Jan 1, 2021"
                    link="https://medium.com/@jameshagood/the-5-best-books-i-read-in-2020-1b0b8b2b0b9d"
                />
            </ul>
        </section>
    )
}