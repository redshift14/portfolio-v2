import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useStateContext } from '../context/stateContext'
import classes from '../styles/Sidebar.module.css'
import { links } from '../lib/data/sidebarLinks'
import codeIcon from '../public/icons/code-32.png'
import closeIcon from '../public/icons/close-24.png'

const Sidebar = ({ locale, asPath }) => {

  const [activeLink, setActiveLink] = useState('')
  const [projectsNames, setProjectsNames] = useState([])

  useEffect(() => {
    if (asPath === '/') setActiveLink('home')
    else setActiveLink(asPath.split('/')[1])
  }, [asPath])

  useEffect(() => {
    const getProjectsNames = async () => {
      const response = await fetch('/api/projectsNames')
      const data = await response.json()
      setProjectsNames(data)
    }
    getProjectsNames()
  }, [])

  const { showSidebar, setShowSidebar, sidebarRef } = useStateContext()

  const handleClose = () => {
    if (showSidebar) setShowSidebar(false)
  }

  const { main, main_open, main_ar, top, main_links, link, active, projects_title, seperator, code_icon, icon_container, close_btn  } = classes

  return (
    <aside ref={sidebarRef} className={locale == 'ar-DZ' ? (showSidebar ? `${main_open} ${main_ar}` : main_ar) : (showSidebar ? `${main} ${main_open}` : main)}>
      <div className={top}>
        <div className={icon_container}>
          <Image src={codeIcon} priority alt='code-logo' className={code_icon} />
        </div>
        <button onClick={handleClose} className={close_btn}>
          <Image src={closeIcon} priority alt='close-button' />
        </button>
      </div>
      <div className={main_links}>
        {
          links.map(item => {
            const { id, name, text, to } = item
            return (
              <Link href={to} key={id} onClick={handleClose}>
                <p className={activeLink === name ? `${link} ${active}` : link}>
                  { locale == 'ar-DZ' ? text.ar : text.en }
                </p>
              </Link>
            )
          })
        }
      </div>
      <hr className={seperator} />
      <h5 className={projects_title}>{locale == 'ar-DZ' ? 'المشاريع' : 'PROJECTS'}</h5>
      <div className={main_links}>
        {
          projectsNames.map(project => {
            const { _id, slug, title } = project
            return (
              <Link href={`/${slug.current}`} key={_id} onClick={handleClose}>
                <p className={activeLink === slug.current ? `${link} ${active}` : link}>
                  {locale == 'ar-DZ' ? title.ar : title.en}
                </p>
              </Link>
            )
          })
        }
      </div>
    </aside>
  )
}

export default Sidebar