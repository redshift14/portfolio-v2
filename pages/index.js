import { useEffect } from 'react'
import HomePage from '../components/HomePage'
import { client } from '../lib/client'
import { useStateContext } from '../context/stateContext'

const Home = ({  }) => {

  // const { setProjectsNames } = useStateContext()

  useEffect(() => {
    // setProjectsNames(projectsNames)
  }, [])

  return (
    <HomePage />
  )
}

export default Home

// export const getStaticProps = async () => {
//   const query = '*[_type == "project" && !(_id in path("drafts.**"))] | order(priority desc) { _id, slug, title }'

//   const projectsNames = await client.fetch(query)

//   return {
//     props: { projectsNames }
//   }
// }

