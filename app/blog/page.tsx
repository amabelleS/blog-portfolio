import Article from './components/Article'
import FeaturedArticle from './components/FeaturedArticle'
import { getSortedPostsData } from "@/lib/posts"
// import ListItem from "./ListItem"
import AnimatedText from "../components/uiElements/AnimatedText"
// import books from "@/public/images/books.jpg"
import blogData from '@/data/blog/blog'
import FeaturedArticles from './components/FeaturedArticles'


export default function Blog() {
    const posts = getSortedPostsData()

    return (
        <div className="w-full my-6 px-12 flex flex-col items-center justify-center overflow-hidden">
        {/* <section className="mt-6 mx-auto max-w-2xl"> */}
            <h2 className="text-5xl text-center font-bold text-lime-400">Featured Articles</h2>
            
            {/* Welcome to my blog, a space where I reflect on my coding adventures, share insights, and provide resources to inspire and empower developers in their own coding journeys. */}
            <AnimatedText text="Welcome to my blog, a space dedicated to sharing my experiences and knowledge with fellow developers, inspiring learning and fostering a supportive community." className='!text-3xl my-6 text-lime-200 ' />         
            <FeaturedArticles />
            <h2 className="text-4xl my-16 w-full text-center font-bold dark:text-lime-400">All Articles</h2>
            <ul className="w-full ">
                {blogData.filter((article) => !article.isFeatured).map((article) => {
                    return (
                        <Article
                            key={article.slug}
                            image_url={article.image_url}
                            title={article.title}
                            date={article.date}
                            link={article.link}
                        />
                    )
                })}
            </ul>
        </div>
    )
}