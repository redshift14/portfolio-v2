import ProjectPage from '../components/ProjectPage'
import { client } from '../lib/client'

const Project = ({ project }) => {

  return (
    <ProjectPage data={project} />
  )
}

export default Project

export const getStaticProps = async ({ params: { slug } }) => {

  const query = `*[_type == "project" && slug.current == "${slug}" && !(_id in path("drafts.**"))][0]`

  const project = await client.fetch(query)

  return {
    props: { project }
  }
}

export const getStaticPaths = async () => {

  const query = '*[_type == "project" && !(_id in path("drafts.**"))]{ slug { current } }'
  const projects = await client.fetch(query)

  const paths = projects.map(project => ({
    params: {
      slug: project.slug.current
    }
  }))

  return {
    paths, 
    fallback: 'blocking'
  }
}