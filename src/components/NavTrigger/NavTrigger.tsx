import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { FC, ReactElement } from 'react'
import React, { useContext } from 'react'


import * as Styled from './styles/NavTrigger.style'

const NavTrigger: FC = (): ReactElement => {
  const { showNavigation, setShowNavigation } = useContext(PageContext) as PageContextProps
  return (
    <Styled.NavTrigger onClick={() => setShowNavigation(!showNavigation)}>
      <FontAwesomeIcon icon={showNavigation ? (faTimes as IconProp) : (faBars as IconProp)} />
    </Styled.NavTrigger>
  )
}

export default NavTrigger
