import { client } from '../../lib/client'

export const config = {
  runtime: 'edge'
}

const handler = async () => {

  const query = '*[_type == "project" && !(_id in path("drafts.**"))] | order(priority asc) { _id, slug, title }'

  const projectsNames = await client.fetch(query)

  return new Response(JSON.stringify(projectsNames), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    }
  })
}

export default handler