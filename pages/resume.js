import { useRouter } from 'next/router'
import ResumeHead from '../html-heads/ResumeHead'
import { client } from '../lib/client'
import ResumePage from '../components/ResumePage'

const Resume = ({ resumeData }) => {

  const { locale } = useRouter()

  return (
    <>
      <ResumeHead locale={locale} />    
      <ResumePage data={resumeData} locale={locale} />
    </>
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