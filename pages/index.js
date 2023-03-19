import { useRouter } from 'next/router'
import HomePage from '../components/HomePage'
import HomeHead from '../html-heads/HomeHead'
import { client } from '../lib/client'

const Home = ({  homeLayout }) => {

  const { locale } = useRouter()

  return (
    <>
      <HomeHead locale={locale} />
      <HomePage data={homeLayout} locale={locale} />
    </>
  )
}

export default Home

export const getStaticProps = async () => {

  const homePageLayoutQuery = '*[_type == "homeLayout" && !(_id in path("drafts.**"))][0]' 

  const homeLayout = await client.fetch(homePageLayoutQuery)

  return {
    props: { homeLayout }
  }
}