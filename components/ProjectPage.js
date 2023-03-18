import { useRouter } from 'next/router'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import { client } from '../lib/client'
import BlockContent from '@sanity/block-content-to-react'
import classes from '../styles/ProjectPage.module.css'

const ProjectPage = ({ data }) => {

  const { locale } = useRouter()

  const { main, main_ar, image_container, content_container, text_container, links_container } = classes

  const SanityImage = ({ asset, alt }) => {
    const imageProps = useNextSanityImage(client, asset);
    if (!imageProps) return null
    return (
      <Image 
        {...imageProps} 			
        style={{ width: '100%', height: '100%', objectFit:'cover' }} 
        loader={imageProps.loader}
        sizes='100vw'
        alt={alt}
        priority 
      />
    )
  }

  const serializers = {
    types: {
      block: props => {
        switch(props.node.style) {
          case 'h1': 
          return <h1>{props.children}</h1> 
          case 'blockquote':
          return <h2>{props.children}</h2> 
          case 'h4':
          return <h4>{props.children}</h4> 
          case 'h5':
          return <h5>{props.children}</h5> 
          default: 
          return <p>{props.children}</p>
        }
      },
      list: props => <ul>{props.children}</ul>,
      item: props => <li>{props.children}</li>,
      image: props => {
        return <SanityImage asset={props.node} alt={`project ${title.en} screenshot`} /> 
      }
    }
  }

  const { description, deploymentLink, repositoryLink, title, coverImage } = data

  return (
    <section className={locale == 'ar-DZ' ? main_ar : main}> 
      <div className={image_container}>
        <SanityImage asset={coverImage} alt={`project ${title.en} screenshot`} />
      </div>
      <div className={content_container}>
        <h1>{locale == 'ar-DZ' ? title.ar : title.en}</h1>
        <div className={text_container}>
          <BlockContent 
            blocks={locale == 'ar-DZ' ? description.ar : description.en} 
            serializers={serializers} 
          />
        </div>
        <div className={links_container}>
          <a href={repositoryLink} target='_blank' rel='noreferrer'>
            {locale == 'ar-DZ' ? 'مستودع Github' : 'ٌRepository'}
          </a>
          <p>|</p>
          <a href={deploymentLink} target='_blank' rel='noreferrer'>
            {locale == 'ar-DZ' ? 'رابط مباشر للموقع' : 'Deployment'}
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectPage