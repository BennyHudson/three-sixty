import type { FC, ReactElement } from 'react'
import React, { useContext, useEffect, useRef, useState } from 'react'

import Logo from '@components/Logo'
import NavTrigger from '@components/NavTrigger'

import PageContext, { PageContextProps } from '@context/PageContext'

import { HeaderProps } from './Header.types'
import * as Styled from './styles/Header.style'
import { useBreakpoints } from 'src/hooks/useBreakpoints'

const Header: FC<HeaderProps> = ({ inverse }: HeaderProps): ReactElement => {
  const header = useRef<HTMLDivElement>()

  const breakpoints = useBreakpoints()

  const [transparent, setTransparent] = useState(true)
  const [inverseHeaderContents, setInverseHeaderContents] = useState(true)

  const { showNavigation, setHeaderHeight } = useContext(PageContext) as PageContextProps

  const onScroll: EventListener = (e: Event) => {
    console.log(e)
    const scrollTop = e.target ? e.target.documentElement.scrollTop : 0
    if (scrollTop === 0) {
      setTransparent(true)
    } else {
      setTransparent(false)
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
      setInverseHeaderContents(true)
    }
  }, [transparent, inverse, showNavigation])

  return (
    <Styled.Header transparent={transparent} inverse={inverse} ref={header}>
      <Styled.Content>
        <Logo inverse={inverseHeaderContents} />
        <NavTrigger inverse={inverseHeaderContents} />
      </Styled.Content>
    </Styled.Header>
  )
}

export default Header
