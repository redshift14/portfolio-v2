import { useRouter } from 'next/router'
import classes from '../styles/Blogs.module.css'

const Blogs = () => {

  const { locale } = useRouter()

  return (
    <div className={locale == 'ar-DZ' ? classes.main_ar : classes.main}>
      <h1>
        { locale == 'ar-DZ' ? 'قريباً' : 'Coming soon' }
      </h1>
    </div>
  )
}

export default Blogs