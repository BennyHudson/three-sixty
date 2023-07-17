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
  const [inverseHeaderContents, setInverseHeaderContents] = useState(true)

  const { showNavigation, setHeaderHeight } = useContext(PageContext) as PageContextProps

  const onScroll: EventListener = (e: Event) => {
    const scrollTop = e.target ? e.target.documentElement.scrollTop : 0
    if (scrollTop === 0) {
      setTransparent(true)
    } else {
      setTransparent(false)
      setInverseHeaderContents(false)
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
  }, [breakpoints])

  useEffect(() => {
    if (showNavigation) {
      setInverseHeaderContents(true)
      return
    }

    if (transparent && inverse) {
      setInverseHeaderContents(true)
      return
    }

    if (transparent && !inverse) {
      setInverseHeaderContents(false)
      return
    }

    if (inverse) {
      setInverseHeaderContents(true)
      return
    }

    if (!transparent) {
      setInverseHeaderContents(false)
    }
  }, [transparent, inverse, showNavigation])

  return (
    <Styled.Header transparent={transparent} inverse={inverse} ref={header} showNavigation={showNavigation}>
      <Styled.Content transparent={transparent} showNavigation={showNavigation}>
        <Logo inverse={inverseHeaderContents} />
        <NavTrigger inverse={inverseHeaderContents} />
      </Styled.Content>
    </Styled.Header>
  )
}

export default Header
