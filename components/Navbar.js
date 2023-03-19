import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useStateContext } from '../context/stateContext'
import classes from '../styles/Navbar.module.css'
import menuIcon from '../public/icons/menu-30.png'
import langIcon from '../public/icons/geography-50.png'
import verticalBarIcon from '../public/icons/vertical-line-30.png'

const Navbar = () => {

  const router = useRouter()

  const { pathname, query, asPath, locale } = router

  const { setShowSidebar, sidebarIconRef } = useStateContext()

  const [isArabic, setIsArabic] = useState(false)

  const handleSwitchLang = () => {
    setIsArabic(v => !v)
  }

  useEffect(() => {
    if (isArabic) router.push({ pathname, query }, asPath, { locale: 'ar-DZ' })
    else router.push({ pathname, query }, asPath, { locale: 'en-US' })
  }, [isArabic])

  const handleShowSidebar = () => {
    setShowSidebar(true)
  }

  const { main, main_ar, menu_btn, buttons, lang_btn, lang, active, switcher, blog_btn } = classes

  return (
    <nav className={locale === 'ar-DZ' ? main_ar : main}>
      <button className={menu_btn} onClick={handleShowSidebar}>
        <Image src={menuIcon} priority alt='menu-icon' ref={sidebarIconRef} />
      </button>
      <div className={buttons}>
        <button className={lang_btn} onClick={handleSwitchLang}>
          <Image src={langIcon} priority alt='lang-icon' />
          <div className={switcher}>
            <span className={isArabic ? lang : `${lang} ${active}`}>
              {locale == 'ar-DZ' ? 'الانكليزية' : 'English'}
            </span>
            <Image src={verticalBarIcon} priority alt='seperator' />
            <span className={isArabic ? `${lang} ${active}` : lang}>
              {locale == 'ar-DZ' ? 'العربية' : 'Arabic'}
            </span>
          </div>
        </button>
        <button className={blog_btn} onClick={() => router.push('/blog')}>
          {locale == 'ar-DZ' ? 'المدونة' : 'Blog'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar