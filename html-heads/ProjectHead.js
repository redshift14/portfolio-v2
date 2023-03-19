import Head from 'next/head'

const ProjectHead = ({ locale, titleEn, titleAr }) => {
  return (
    <Head>
      {
        locale == 'ar-DZ' ? 
        <>
          <title>{titleAr}</title>
          <meta name='description' content={`صفحة استعراض مشروع ${titleAr}`} />
          <meta name='keywords' content='برمجة, تطوير مواقع الويب, مشاريع شخصية' />
        </> :
        <>
          <title>{titleEn}</title>
          <meta name='description' content={`Page to showcase the project ${titleEn}`} />
          <meta name='keywords' content='programming, web development, personal projects' />
        </>
      }
    </Head>
  )
}

export default ProjectHead