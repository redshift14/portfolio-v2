import { useRouter } from 'next/router'
import PostHead from '../../html-heads/PostHead'
import BlogPost from '../../components/BlogPost'
import { client } from '../../lib/client'

const Post = ({ post }) => {

  const { locale } = useRouter()

  const { title, subtitle, keywords } = post

  const keywordsAr = keywords.map(keyword => (keyword.ar))
  const keywordsEn = keywords.map(keyword => (keyword.en))

  return (
    <>
      <PostHead 
        locale={locale} 
        titleAr={title.ar} 
        titleEn={title.en} 
        subtitleAr={subtitle.ar} 
        subtitleEn={subtitle.en} 
        keywordsAr={keywordsAr.toString()}
        keywordsEn={keywordsEn.toString()}
      />    
      <BlogPost post={post} locale={locale} />
    </>
  )
}

export default Post

export const getStaticProps = async ({ params: { slug } }) => {

  const query = `*[_type == "post" && slug.current == "${slug}" && !(_id in path("drafts.**"))][0]`

  const post = await client.fetch(query)

  return {
    props: { post }
  }
}

export const getStaticPaths = async () => {

  const query = '*[_type == "post" && !(_id in path("drafts.**"))]{ slug { current } }'
  const posts = await client.fetch(query)

  const paths = posts.map(post => ({
    params: {
      slug: post.slug.current
    }
  }))

  return {
    paths, 
    fallback: 'blocking'
  }
}