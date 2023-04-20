import Logo from '@components/Logo'
import NavTrigger from '@components/NavTrigger'
import type { FC, ReactElement } from 'react'
import React, { useEffect, useState } from 'react'


import * as Styled from './styles/Header.style'

const Header: FC = (): ReactElement => {
  const [transparent, setTransparent] = useState(true)

  const onScroll: EventListener = (e: Event) => {
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

  return (
    <Styled.Header>
      <Logo inverse={transparent} />
      <NavTrigger />
    </Styled.Header>
  )
}

export default Header
