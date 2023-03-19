import { useRouter } from 'next/router'
import BlogPosts from '../../components/BlogPosts'
import BlogHead from '../../html-heads/BlogHead'
import { client } from '../../lib/client'

const Blog = ({ blogPosts }) => {

  const { locale } = useRouter()
  
  return (
    <>
      <BlogHead locale={locale} />    
      <BlogPosts posts={blogPosts} locale={locale} />
    </>
  )
}

export default Blog

export const getStaticProps = async () => {
  const query = '*[_type == "post" && !(_id in path("drafts.**"))]{_id, slug, title, subtitle, publishedAt}'
  const blogPosts = await client.fetch(query)

  return {
    props: { blogPosts }
  }
}