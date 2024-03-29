import 'animate.css'
import React, { useEffect, useState } from 'react'
import type { FC, ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'

import Footer from '@components/Footer'
import Header from '@components/Header'
import Navigation from '@components/Navigation'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import GlobalStyle from '@styles/GlobalStyle'

import { threeSixtyTheme } from '@themes/threeSixtyTheme'

import type { PageLayoutProps } from './PageLayout.types'
import * as Styled from './styles/PageLayout.style'

const PageLayout: FC<PageLayoutProps> = ({ children, location }: PageLayoutProps): ReactElement => {
  const { pathname } = location

  const [showNavigation, setShowNavigation] = useState(false)
  const [inverseHeader, setInverseHeader] = useState(false)
  const [headerHeight, setHeaderHeight] = useState<PageContextProps['headerHeight']>()

  useEffect(() => {
    setShowNavigation(false)
    setInverseHeader(pathname !== '/capability/' && pathname !== '/work/' && pathname !== '/news/')

    if (location.hash) {
      setTimeout(() => {
        const target = document.getElementById(location.hash!.replace('#', ''))?.offsetTop
        scroll({
          top: target,
          behavior: 'smooth',
        })
      }, 200)
    }
  }, [location])

  return (
    <ThemeProvider theme={threeSixtyTheme}>
      <GlobalStyle />
      <Styled.PageLayout>
        <PageContext.Provider
          value={{
            showNavigation,
            setShowNavigation,
            setInverseHeader,
            headerHeight,
            setHeaderHeight,
          }}
        >
          <Header inverse={inverseHeader} />
          {showNavigation && <Navigation />}
          <Styled.Page>{children}</Styled.Page>
          <Footer />
        </PageContext.Provider>
      </Styled.PageLayout>
    </ThemeProvider>
  )
}

export default PageLayout
