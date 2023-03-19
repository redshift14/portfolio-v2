import Head from 'next/head'

const PostHead = ({ locale, titleEn, titleAr, subtitleAr, subtitleEn }) => {
  return (
    <Head>
      {
        locale == 'ar-DZ' ? 
        <>
          <title>{titleAr}</title>
          <meta name='description' content={`مقال يتحدث حول: ${subtitleAr}`} />
          <meta name='keywords' content='برمجة, تطوير مواقع الويب, مدونة, مقالات' />
        </> :
        <>
          <title>{titleEn}</title>
          <meta name='description' content={`Blog post that talks about ${subtitleEn}`} />
          <meta name='keywords' content='programming, web development, personal blog' />
        </>
      }
    </Head>
  )
}

export default PostHead