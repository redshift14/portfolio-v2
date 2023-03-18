import { createContext, useContext, useState, useEffect, useRef } from 'react'

const Context = createContext()

export const StateContext = ({ children }) => {

  const [showSidebar, setShowSidebar] = useState(false)

  const sidebarRef = useRef()
  const sidebarIconRef = useRef()

  useEffect(() => {
    const handleClickOutsideSidebar = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target) &&
      sidebarIconRef.current && !sidebarIconRef.current.contains(e.target)) {
        setShowSidebar(false)
      }
    }
    document.addEventListener('click', handleClickOutsideSidebar)
    return () => {
      document.removeEventListener('click', handleClickOutsideSidebar)
    }
  }, [sidebarRef, sidebarIconRef])

  return (
    <Context.Provider value={{ showSidebar, setShowSidebar, sidebarRef, sidebarIconRef }}>
      { children }
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
