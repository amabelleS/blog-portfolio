import React from 'react'
// import { FeaturedArticle  } from '@/types'
import { getSortedPostsData } from "@/lib/posts"
import FeaturedArticle from './FeaturedArticle'

type Props = {}

function FeaturedArticles({}: Props) {

    const posts = getSortedPostsData()

  return (
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
  )
}

export default FeaturedArticles