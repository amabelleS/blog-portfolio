import Article from './components/Article'
import FeaturedArticle from './components/FeaturedArticle'
import { getSortedPostsData } from "@/lib/posts"
// import ListItem from "./ListItem"
import AnimatedText from "../components/uiElements/AnimatedText"
// import books from "@/public/images/books.jpg"
import blogData from '@/data/blog/blog'


export default function Blog() {
    const posts = getSortedPostsData()
    // const featuredArticles = blogData.filter((article) => article.isFeatured)

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
                {posts.filter(article => article.isFeatured).map(article => {
                    return (
                        <FeaturedArticle
                            key={article.id}
                            image_url={article.image_url}
                            title={article.title}
                            date={article.date}
                            summery={article.summery}
                            link={article.link}
                            id={article.id}
                        />
                    )
                }
                )}
            </ul>
            <h2 className="text-4xl my-16 w-full mt-32 text-center font-bold dark:text-lime-100">All Articles</h2>
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
                {/* <Article 
                    image_url='https://i.imgur.com/kqunkCm.png'
                    title="lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    date="Jan 1, 2021"
                    link="https://medium.com/@amabelletr/supercharge-your-javascript-skills-discover-structuredclone-array-at-2094ba48fdd6"
                /> */}
            </ul>
        </section>
    )
}