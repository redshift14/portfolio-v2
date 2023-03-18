import { useRouter } from 'next/router'
import BlockContent from '@sanity/block-content-to-react'
import ContactForm from './ContactForm'
import classes from '../styles/HomePage.module.css'

const HomePage = ({ data }) => {

  const { locale } = useRouter()

  const { main, main_ar, text_container, form_container } = classes

  const { mainTitle, homeText, subtitle } = data
  
  const serializers = {
    types: {
      block: props => {
        if (props.node.style === 'h1') return <h1>{props.children}</h1>
        else return <p>{props.children}</p>
      },
    }
  }

  return (
    <section className={locale === 'ar-DZ' ? main_ar : main}>
      <div className={text_container}>
        <BlockContent 
          blocks={locale === 'ar-DZ' ? mainTitle.ar : mainTitle.en} 
          serializers={serializers} 
        />
        <h4>{locale === 'ar-DZ' ? subtitle.ar : subtitle.en} </h4>
        <BlockContent 
          blocks={locale === 'ar-DZ' ? homeText.ar : homeText.en} 
          serializers={serializers} 
        />
      </div>
      <div className={form_container}>
        <h4>{locale === 'ar-DZ' ? 'استمارة التواصل' : 'Get in touch'} </h4>
        <ContactForm locale={locale} />
      </div>
    </section>
  )
}

export default HomePage