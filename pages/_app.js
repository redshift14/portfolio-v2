import Layout from '../components/Layout'
import { StateContext } from '../context/stateContext'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp