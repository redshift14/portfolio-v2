import Head from 'next/head'

const ContectHead = ({ locale }) => {
  return (
    <Head>
      {
        locale == 'ar-DZ' ? 
        <>
          <title>تواصلوا معي</title>
          <meta name='description' content='تواصلوا معي عبر البريد الالكتروني' />
        </> :
        <>
           <title>Contact me</title>
          <meta name='description' content='Contact me through an email form' />
        </>
      }
    </Head>
  )
}

export default ContectHead