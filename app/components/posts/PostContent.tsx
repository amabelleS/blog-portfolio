"use client"
import React, { useEffect } from 'react'
import  Link  from 'next/link'
// import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
// import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "./prism";
import "./prism-tomorrow.css";
// require("prismjs/components/prism-javascript")
// require("prismjs/components/prism-css")
// require("prismjs/components/prism-jsx")

type Props = {
    contentHtml: string,
    postId: string,
}

function PostContent({contentHtml, postId}: Props) {

    // Prism.highlightAll();

    // useEffect(() => {
    //     const highlight = async () => {
    //     //   const Prism = await import('prismjs'); // Dynamically import Prism.js
    //     //   await import('./prism'); // Dynamically import the JSX language component
    //       Prism.highlightAll(); // Trigger code highlighting
    //     };
    //     highlight();
    //   }, [postId]);  

  return (
    <div>
        <article className=''>
            {/* <pre><code className="language-js">console.log("Hello World")</code></pre> */}
            
            <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
            {/* <section>
                {contentHtml}
            </section> */}
            <p>
                <Link href="/">← Back to home</Link>
            </p>
        </article>
    </div>
  )
}

export default PostContent