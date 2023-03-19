import { useRouter } from 'next/router'
import Head from 'next/head'
import classes from '../styles/404.module.css'

const Error = ({ statusCode }) => {

  const router = useRouter()

  const { locale } = router

  return (
    <>
      <Head>
        <title>{locale === 'ar-DZ' ? `خطأ ${statusCode}` : `Error ${statusCode}`}</title>
      </Head>
      <section className={locale == 'ar-DZ' ? classes.main_ar : classes.main}>
        <h1>{statusCode}</h1>
        <h2>
          {
            locale === 'ar-DZ' ? 'يبدو أن هناك خطأ ما أو أن الصفحة غير موجودة ' : 'Looks like there is an error or the page does not exist'
          }
        </h2>
        <button onClick={() => router.push('/')}>
          {
            locale == 'ar-DZ' ? 'عودة إلى الرئيسة'  : 'Go home'
          }
        </button>
      </section>
    </>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error