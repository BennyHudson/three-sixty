import { createContext } from 'react'

export interface PageContextProps {
  showNavigation: boolean
  setShowNavigation: (showNavigation: boolean) => void
}

export default createContext<Partial<PageContextProps>>({})
