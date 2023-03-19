import Head from 'next/head'

const PostHead = ({ locale, titleEn, titleAr, subtitleAr, subtitleEn, keywordsEn, keywordsAr }) => {
  return (
    <Head>
      {
        locale == 'ar-DZ' ? 
        <>
          <title>{titleAr}</title>
          <meta name='description' content={`مقال يتحدث حول: ${subtitleAr}`} />
          <meta name='keywords' content={keywordsAr} />
        </> :
        <>
          <title>{titleEn}</title>
          <meta name='description' content={`Blog post that talks about ${subtitleEn}`} />
          <meta name='keywords' content={keywordsEn} />
        </>
      }
    </Head>
  )
}

export default PostHead