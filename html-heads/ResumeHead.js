import Head from 'next/head'

const ResumeHead = ({ locale }) => {
  return (
    <Head>
      {
        locale == 'ar-DZ' ? 
        <>
          <title>السيرة الذاتية</title>
          <meta name='description' content='سيرتي الذانية كمطور مبتدئ لتطبيقات الويب' />
        </> :
        <>
           <title>Resume</title>
           <meta name='description' content='my resume as junior web developer' />
        </>
      }
    </Head>
  )
}

export default ResumeHead