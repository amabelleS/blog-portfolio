---
title: "Two Forms of Pre-rendering"
date: "2023-03-14"
summery: "In this article, we will dive into three exciting features: structuredClone(), array.at(), and the Change Array by Copy Proposal, which is now in the finished stage"
slug: "supercharge_your_javaScript_skills"
image_url: "https://i.imgur.com/kqunkCm.png"
link: "https://medium.com/@amabelletr/supercharge-your-javascript-skills-discover-structuredclone-array-at-2094ba48fdd6"
published_url: "https://medium.com/@amabelletr/supercharge-your-javascript-skills-discover-structuredclone-array-at-2094ba48fdd6"
isFeatured: true
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
