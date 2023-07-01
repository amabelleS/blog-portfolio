---
title: "When to Use Static Generation vs. Server-side Rendering"
date: "2023-03-17"
summery: "In this article, we will dive into three exciting features: structuredClone(), array.at(), and the Change Array by Copy Proposal, which is now in the finished stage"
slug: "ssg-ssr"
image_url: "https://i.imgur.com/kqunkCm.png"
link: "https://medium.com/@amabelletr/supercharge-your-javascript-skills-discover-structuredclone-array-at-2094ba48fdd6"
isFeatured: true
---

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

<pre class="language-javascript" >
    <code>
        function getFullName (user) {
            const fullName = user.firstName + user.lastName;
            return fullName;
        }
    </code>
</pre>

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.
