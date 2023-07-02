// "use client"
// import { useEffect } from "react"
import getFormattedDate from "@/lib/getFormattedDate"
import { getSortedPostsData, getPostData } from "@/lib/posts"
import { notFound } from "next/navigation"
// import Link from "next/link"
import PostContent from "@/app/components/posts/PostContent"
// import markdownToHtml from "@/lib/markdownToHtml"
import "prismjs/themes/prism-tomorrow.css";
// import Prism from "prismjs";
// import dynamic from "next/dynamic";
// import PrismJsx from  "prismjs/components/prism-jsx";
// Load all languages.
// loadLanguages();

// const Prism = dynamic(() => import("prismjs"), { ssr: false });
// dynamic(() => import("prismjs/components/prism-jsx"), { ssr: false });


export function generateStaticParams() {
    const posts = getSortedPostsData()

    return posts.map((post) => ({
        blogId: post.id
    }))
}

export function generateMetadata({ params }: { params: { blogId: string } }) {

    const posts = getSortedPostsData()
    const { blogId } = params

    const post = posts.find(post => {
        return post.id === blogId
    })
    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }
    
    return {
        title: post.title,
    }
}

export default async function Blog({ params }: { params: { blogId: string } }) {

    // const posts = getSortedPostsData()
    const { blogId } = params

    // if (!posts.find(post => post.id === postId)) notFound()

    const { title, date, contentHtml } = await getPostData(blogId)
    

    const pubDate = getFormattedDate(date)

    // useEffect(() => {
    //     const highlight = async () => {
    //     //   const Prism = await import('prismjs'); // Dynamically import Prism.js
    //     //   await import('prismjs/components/prism-jsx'); // Dynamically import the JSX language component
    //       await Prism.highlightAll(); // Trigger code highlighting
    //     };
    //     highlight();
    //   }, [postId]);      

    // useEffect(() => {
    //     const highlight = async () => {
    //       await Prism.highlightAll(); // <--- prepare Prism 
    //     };
    //     highlight(); // <--- call the async function
    //   }, [post]); // <--- run when post updates

    return (
        <main className="px-6 prose prose-xl prose-invert dark:prose-invert text-lime-100 mx-auto">
            <h1 className="text-3xl mt-4 mb-0">{title}</h1>
            <p className="mt-0">
                {pubDate}
            </p>
            <PostContent contentHtml={contentHtml} postId={blogId}/>
        </main>
    )
}