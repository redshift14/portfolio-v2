import { useRouter } from 'next/router'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  
  const { locale } = useRouter()

  return (
    <div dir={ locale == 'ar-DZ' ? 'rtl' : 'ltr' }>
      <header>
        <Sidebar locale={locale} />
        <Navbar />
      </header>
      <main>
        { children }
      </main>
    </div>
  )
}

export default Layout