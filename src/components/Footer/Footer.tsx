import type { FC, ReactElement } from 'react'
import React, { useContext } from 'react'

import * as Styled from './styles/Footer.style'
import Heading from '@components/Heading/Heading'
import Container from '@components/Container/Container'
import PageContext, { PageContextProps } from '@context/PageContext'
import { graphql, useStaticQuery } from 'gatsby'
import Paragraph from '@components/Paragraph/Paragraph'
import Link from '@components/Link/Link'

const Footer: FC = (): ReactElement => {
  const { headerHeight } = useContext(PageContext) as PageContextProps

  const footerData = useStaticQuery(graphql`
    query FooterData {
      allWp {
        nodes {
          globalOptions {
            threeSixtyOptions {
              address
              contactEmail
              legals {
                title
                file {
                  localFile {
                    publicURL
                  }
                }
              }
              socials {
                title
                url
              }
            }
          }
        }
      }
    }
  `)

  const { address, contactEmail, legals, socials } = footerData.allWp.nodes[0].globalOptions.threeSixtyOptions

  return (
    <Styled.Footer headerHeight={headerHeight}>
      <Styled.FooterMain>
        <Container>
          <Heading size={1} text='Work with us' inverse />
        </Container>
      </Styled.FooterMain>
      <Styled.FooterColumns>
        <div>
          <Paragraph size={1} text='Company Name | 2023' inverse noMargin />
          <Paragraph size={1} text={address} inverse />
        </div>

        <div>
          <Paragraph size={1} text='Follow' inverse noMargin />
          <Paragraph size={1} text={address} inverse />
        </div>

        <div>
          <Paragraph size={1} text='Legal' inverse noMargin />
          <Paragraph size={1} text={address} inverse />
        </div>

        <div>
          <Paragraph size={1} text='Contact' inverse noMargin />
          <Paragraph size={1}>
            <Link href={`mailto:${contactEmail}`} text={contactEmail} inverse />
          </Paragraph>
        </div>
      </Styled.FooterColumns>
    </Styled.Footer>
  )
}

export default Footer
