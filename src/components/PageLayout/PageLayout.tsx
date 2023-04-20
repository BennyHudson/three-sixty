
import Footer from '@components/Footer'
import Header from '@components/Header'
import Navigation from '@components/Navigation'

import PageContext from '@context/PageContext'

import GlobalStyle from '@styles/GlobalStyle'

import { threeSixtyTheme } from '@themes/threeSixtyTheme'
import type { FC, ReactElement } from 'react'
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import type { PageLayoutProps } from './PageLayout.types'
import * as Styled from './styles/PageLayout.style'

const PageLayout: FC<PageLayoutProps> = ({ children }: PageLayoutProps): ReactElement => {
  const [showNavigation, setShowNavigation] = useState(false)

  return (
    <ThemeProvider theme={threeSixtyTheme}>
      <GlobalStyle />
      <Styled.PageLayout>
        <PageContext.Provider
          value={{
            showNavigation,
            setShowNavigation,
          }}
        >
          <Header />
          {showNavigation && <Navigation />}
          <Styled.Page>{children}</Styled.Page>
          <Footer />
        </PageContext.Provider>
      </Styled.PageLayout>
    </ThemeProvider>
  )
}

export default PageLayout
