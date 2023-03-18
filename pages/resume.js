import { client } from "../lib/client"
import ResumePage from "../components/ResumePage"

const Resume = ({ resumeData }) => {
  return (
    <ResumePage data={resumeData} />
  )
}

export default Resume

export const getStaticProps = async () => {

  const query = '*[_type == "resume" && !(_id in path("drafts.**"))][0]' 

  const resumeData = await client.fetch(query)

  return {
    props: { resumeData }
  }
}