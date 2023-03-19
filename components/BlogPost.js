import { useState } from 'react'
import Refractor from 'react-refractor'
import Image from 'next/image'
import BlockContent from '@sanity/block-content-to-react'
import SanityImage from './SanityImage'
import { getMonthName } from '../lib/helpers'
import chevronIcon from '../public/icons/chevron-right-50.png'
import classes from '../styles/BlogPost.module.css'

const BlogPost = ({ post, locale }) => {

  const [showTable, setShowTable] = useState(false)

  const { body, title, subtitle, publishedAt } = post

  const date = new Date(publishedAt)

  let titlesElements = []

  body.en.forEach(element => {
    if (element.style === 'h2') titlesElements.push(element)
  })

  let titles = []

  titlesElements.forEach(element => {
    element.children.forEach(child => {
      titles.push(child.text)
    })
  })

  const scrollToTitle = (id) => {
    const target = document.getElementById(id)
    const offest = 100
    const targetPos = target.getBoundingClientRect().top + window.scrollY - offest
    window.scrollTo({ top: targetPos })
  }

  const serializers = {
    types: {
      block: props => {
        switch(props.node.style) {
          case 'h2':
          return <h2 id={props.children[0].replace(' ', '-')}>{props.children}</h2> 
          default: 
          return <p>{props.children}</p>
        }
      },
      code: props => {
        return (
          <Refractor 
            language={props.node.language}
            value={props.node.code}
          />
        )
      },
      image: props => {
        return <SanityImage asset={props.node} alt={`${title.en} blog image`} /> 
      }
    }
  }

  const { main, main_ar, main_info, body_text_container, table_of_content_container, table_title, chevron_icon, chevron_icon_ar, table_title_show, table_content } = classes

  return (
    <section className={locale == 'ar-DZ' ? main_ar : main}>
      <div className={main_info}>
        <p>{`${getMonthName(date, locale)} ${date.getDate()}, ${date.getFullYear()}`}</p>
        <h1>{locale == 'ar-DZ' ? title.ar : title.en}</h1>
        <h3>{locale == 'ar-DZ' ? subtitle.ar : subtitle.en}</h3>
      </div>
      <div className={table_of_content_container}>
        <div 
          className={showTable ? table_title_show : table_title} 
          onClick={() => setShowTable(v => !v)}
        >
          <Image 
            src={chevronIcon} 
            priority 
            alt='chevron' 
            className={locale == 'ar-DZ' ? chevron_icon_ar : chevron_icon} 
          />
          <h4>{locale == 'ar-DZ' ? 'الفهرس' : 'Table of contents'}</h4>
        </div>
        {
          showTable &&
          <div className={table_content}>
            {
              titles.length > 0 &&
              titles.map((element, index) => {
                return (
                  <p key={index} onClick={() => scrollToTitle(element.replace(' ', '-'))}>
                    {element}
                  </p>
                )
              })
            }
          </div>
        }
      </div>
      <div className={body_text_container}>
        <BlockContent blocks={body.en} serializers={serializers} />
      </div>
    </section>
  )
}

export default BlogPost