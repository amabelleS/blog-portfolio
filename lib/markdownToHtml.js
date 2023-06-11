import { remark } from "remark";
import html from "remark-html";
import remarkPrism from "remark-prism";
// import Prism from "prismjs";
import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
// import remarkPrism from 'remark-prism'
import rehypeRaw from 'rehype-raw'

export default async function markdownToHtml(markdown) {
  const result = await remark()
    // .use(html)
    .use(html, { sanitize: false })
    // .use(remarkPrism)
    // .use(remarkPrism, { plugins: ["line-numbers"] })
    .process(markdown);
    // const processedContent = await unified()
    //     .use(remarkParse)
    //     .use(remarkPrism)
    //     .use(remarkRehype, { allowDangerousHtml: true })
    //     .use(rehypeRaw)
    //     .use(rehypeFormat)
    //     .use(rehypeStringify)
    //     .process(content)

    // return processedContent.toString()

  return result.toString();
}
