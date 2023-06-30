import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import markdownToHtml from "@/lib/markdownToHtml"
// import remarkPrism from "remark-prism";

const postsDirectory = path.join(process.cwd(), 'blogposts')

export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        const processedContent = remark()
            // .use(html)
            .use(html, { sanitize: false })
            // .use(remarkPrism)
            .process(matterResult.content);

        const contentHtml = processedContent.toString();

        const blogPostWithHTML: BlogPost & { contentHtml: string } = {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
            summery: matterResult.data.summery,
            slug: matterResult.data.slug,
            image_url: matterResult.data.image_url,
            link: matterResult.data.link,
            // published_url: matterResult.data.published_url,
            isFeatured: matterResult.data.isFeatured,
            contentHtml,
        }
    
        // Combine the data with the id
        return blogPostWithHTML
        // const blogPost: BlogPost = {
        //     id,
        //     title: matterResult.data.title,
        //     date: matterResult.data.date,
        // }

        // // Combine the data with the id
        // return blogPost
    });
    // console.log("🚀 ~ file: posts.ts:59 ~ allPostsData ~ allPostsData:", allPostsData)
    // Sort posts by date
    return allPostsData.sort((a, b) => a.date < b.date ? 1 : -1);
}

export async function getPostData(id: string) {
    const fullPath = path.join( postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    // const contentHtml = await markdownToHtml(matterResult.content || "");

    const processedContent = await remark()
        // .use(html)
        .use(html, { sanitize: false })
        // .use(remarkPrism)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    const blogPostWithHTML: BlogPost & { contentHtml: string } = {
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
        contentHtml,
    }

    // Combine the data with the id
    return blogPostWithHTML
}