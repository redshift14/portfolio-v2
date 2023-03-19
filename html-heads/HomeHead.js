import Head from 'next/head'

const HomeHead = ({ locale }) => {
  return (
    <Head>
      {
        locale == 'ar-DZ' ? 
        <>
          <title>أنس عريف - الموقع الشخصي</title>
          <meta name='description' content='موقعي الشخصي كمطور مبتدئ لتطبيقات الويب' />
          <meta name='keywords' content='برمجة, تطوير مواقع الويب, مشاريع شخصية' />
        </> :
        <>
          <title>Anas Arif - Portfolio</title>
          <meta name='description' content='personal portfolio as junior web developer' />
          <meta name='keywords' content='programming, web development' />
        </>
      }
    </Head>
  )
}

export default HomeHead