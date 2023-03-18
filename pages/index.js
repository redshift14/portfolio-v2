import HomePage from '../components/HomePage'
import { client } from '../lib/client'

const Home = ({  homeLayout }) => {

  return (
    <HomePage data={homeLayout} />
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