import Link from 'next/link'
import { getMonthName } from '../lib/helpers'
import classes from '../styles/BlogPosts.module.css'

const BlogPosts = ({ posts, locale }) => {

  const { main, main_ar, metadata, page_title, post_cards, post_card } = classes

  return (
    <section className={locale == 'ar-DZ' ? main_ar : main}>
      <h1 className={page_title}>{locale == 'ar-DZ' ? 'المدونة' : 'Blog'}</h1>
      <div className={post_cards}>
        {
          posts.map(post => {
            const { _id, publishedAt, slug, subtitle, title, readTime } = post
            const date = new Date(publishedAt)
            return (
              <Link href={`/blog/${slug.current}`} className={post_card} key={_id}>
                <div className={metadata}>
                  <p>
                    { `${getMonthName(date, locale)} ${date.getDate()}, ${date.getFullYear()}` }
                  </p>
                  <p>{ locale == 'ar-DZ' ? readTime.ar : readTime.en }</p>
                </div>
                <h2>{ locale == 'ar-DZ' ? title.ar : title.en }</h2>
                <h5>{ locale == 'ar-DZ' ? subtitle.ar : subtitle.en }</h5>
              </Link>
            )
          })
        }
      </div>
    </section>
  )
}

export default BlogPosts
