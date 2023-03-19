import { useRouter } from 'next/router'
import ContactPage from '../components/ContactPage'
import ContectHead from '../html-heads/ContactHead'

const Contact = () => {

  const { locale } = useRouter()

  return (
    <> 
      <ContectHead locale={locale} />    
      <ContactPage locale={locale} />
    </>
  )
}

export default Contact