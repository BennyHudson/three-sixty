import { createContext } from 'react'

export interface PageContextProps {
  showNavigation: boolean
  setShowNavigation: (showNavigation: boolean) => void
  setInverseHeader: (inverseHeader: boolean) => void
  headerHeight: number
  setHeaderHeight: (headerHeight: number) => void
}

export default createContext<Partial<PageContextProps>>({})
