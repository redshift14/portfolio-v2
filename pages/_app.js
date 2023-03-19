import Head from 'next/head'
import Layout from '../components/Layout'
import { StateContext } from '../context/stateContext'
import '../styles/prism-dark.css'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta httpEquiv="Content-Language" content='en, ar' />
        <meta charSet="UTF-8" />
      </Head>    
      <StateContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </>
  )
}

export default MyApp