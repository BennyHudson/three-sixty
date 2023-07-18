import { graphql, useStaticQuery } from 'gatsby'

import React, { useContext } from 'react'

import type { FC, ReactElement } from 'react'

import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Link from '@components/Link/Link'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import type { NavTriggerProps } from './NavTrigger.types'
import * as Styled from './styles/NavTrigger.style'

const NavTrigger: FC<NavTriggerProps> = ({ inverse }: NavTriggerProps): ReactElement => {
  const { showNavigation, setShowNavigation } = useContext(PageContext) as PageContextProps

  const optionsData = useStaticQuery(graphql`
    query OptionsData {
      allWp {
        nodes {
          globalOptions {
            threeSixtyOptions {
              headerText
              formUrl
            }
          }
        }
      }
    }
  `)

  const { headerText, formUrl } = optionsData.allWp.nodes[0].globalOptions.threeSixtyOptions

  return (
    <Styled.NavWrapper>
      <Link href={formUrl} text={headerText} inverse={inverse} />
      <Styled.NavTrigger onClick={() => setShowNavigation(!showNavigation)} inverse={inverse}>
        <FontAwesomeIcon icon={showNavigation ? (faTimes as IconProp) : (faBars as IconProp)} />
      </Styled.NavTrigger>
    </Styled.NavWrapper>
  )
}

export default NavTrigger
