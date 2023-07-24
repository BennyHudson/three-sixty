import React, { useContext, useEffect, useRef, useState } from 'react'
import type { FC, ReactElement } from 'react'
import { useBreakpoints } from 'src/hooks/useBreakpoints'

import Logo from '@components/Logo'
import NavTrigger from '@components/NavTrigger'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import type { HeaderProps } from './Header.types'
import * as Styled from './styles/Header.style'

const Header: FC<HeaderProps> = ({ inverse }: HeaderProps): ReactElement => {
  const header = useRef<HTMLDivElement>()

  const breakpoints = useBreakpoints()

  const [transparent, setTransparent] = useState(true)
  const [inverseHeader, setInversHeader] = useState(true)

  const { showNavigation, setHeaderHeight } = useContext(PageContext) as PageContextProps

  const onScroll: EventListener = (e: Event) => {
    const scrollTop = e.target ? e.target.documentElement.scrollTop : 0
    if (header.current) {
      setHeaderHeight(header.current?.clientHeight)
    }
    if (scrollTop === 0) {
      setTransparent(true)
    } else {
      setTransparent(false)
      setInversHeader(false)
    }
  }

  useEffect(() => {
    setTransparent(true)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (header.current) {
      setHeaderHeight(header.current?.clientHeight)
    }
  }, [breakpoints, transparent, inverse])

  const inverseHeaderContents = (): boolean => {
    console.log('transparent', transparent)
    console.log('inverse', inverse)
    console.log('showNavigation', showNavigation)
    if (transparent && !showNavigation) {
      if (inverse) {
        return true
      }

      return false
    }

    if (!transparent && !showNavigation) {
      if (inverse) {
        return true
      }

      return false
    }

    if (showNavigation) {
      return true
    }
    
    return false
  }

  console.log('inverseHeader', inverseHeader)

  useEffect(() => {
    setInversHeader(inverseHeaderContents())
  }, [transparent, inverse, showNavigation])

  return (
    <Styled.Header transparent={transparent} inverse={inverse} ref={header} showNavigation={showNavigation}>
      <Styled.Content transparent={transparent} showNavigation={showNavigation}>
        <Logo inverse={inverseHeader} />
        <NavTrigger inverse={inverseHeader} />
      </Styled.Content>
    </Styled.Header>
  )
}

export default Header
