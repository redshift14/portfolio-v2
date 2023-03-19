import Head from 'next/head'

const BlogHead = ({ locale }) => {

  return (
    <Head>
      {
        locale == 'ar-DZ' ? 
        <>
          <title>المدونة</title>
          <meta name='description' content='مدونة تتضمن مقالات متنوعة حول البرمجة وتطوير الويب' />
          <meta name='keywords' content='برمجة, تطوير مواقع الويب, مدونة, مقالات' />
        </> :
        <>
          <title>Blog</title>
          <meta name='description' content='Personal blog to share posts about programming and web development' />
          <meta name='keywords' content='programming, web development, personal blog' />
        </>
      }
    </Head>
  )
}

export default BlogHead