import { useRouter } from 'next/router'
import ContactForm from './ContactForm'
import classes from '../styles/ContactPage.module.css'

const ContactPage = () => {

  const { locale } = useRouter()

  return (
    <section className={locale == 'ar-DZ' ? classes.main_ar : classes.main}>
      <h4>{locale === 'ar-DZ' ? 'تواصل معي' : 'Contact me'} </h4>
      <ContactForm locale={locale} />
    </section>
  )
}

export default ContactPage