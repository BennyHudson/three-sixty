import dayjs from 'dayjs'
import { graphql, useStaticQuery } from 'gatsby'
import React, { useContext } from 'react'
import type { FC, ReactElement } from 'react'

import Container from '@components/Container/Container'
import Heading from '@components/Heading/Heading'
import Link from '@components/Link/Link'
import Paragraph from '@components/Paragraph/Paragraph'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import * as Styled from './styles/Footer.style'

const Footer: FC = (): ReactElement => {
  const { headerHeight } = useContext(PageContext) as PageContextProps

  const footerData = useStaticQuery(graphql`
    query FooterData {
      allWp {
        nodes {
          globalOptions {
            threeSixtyOptions {
              companyName
              address
              contactEmail
              headerText
              footerText
              formUrl
              legals {
                title
                file {
                  publicUrl
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

  const { companyName, address, contactEmail, legals, socials, headerText, footerText, formUrl } =
    footerData.allWp.nodes[0].globalOptions.threeSixtyOptions
  return (
    <Styled.Footer headerHeight={headerHeight}>
      <Styled.FooterMain>
        <Container>
          <Heading size={1} text={headerText} />
          <Link href={formUrl} showUnderline appearance='secondary'>
            <Heading size={3} text={footerText} appearance='secondary' />
          </Link>
        </Container>
      </Styled.FooterMain>
      <Container>
        <Styled.FooterColumns>
          <div>
            <Heading size={1} text={`${companyName} | ${dayjs().year()}`} noMargin />
            <Paragraph text={address} inverse appearance='secondary' />
          </div>

          <div>
            <Heading size={1} text='Follow' noMargin />
            <Paragraph inverse appearance='secondary'>
              {socials.map((social, index) => {
                return (
                  <>
                    {index !== 0 && ' | '}
                    <Link inverse appearance='secondary' href={social.url} key={index} target='_blank'>
                      {social.title}
                    </Link>
                  </>
                )
              })}
            </Paragraph>
          </div>

          <div>
            <Heading size={1} text='Legal' noMargin />
            <Paragraph inverse appearance='secondary'>
              {legals.map((legal, index) => {
                console.log(legal)
                return (
                  <Link inverse appearance='secondary' href={legal.file.publicUrl} key={index}>
                    {index !== 0 && ' | '}
                    {legal.title}
                  </Link>
                )
              })}
            </Paragraph>
          </div>

          <div>
            <Heading size={1} text='Contact' noMargin />
            <Paragraph>
              <Link href={`mailto:${contactEmail}`} text={contactEmail} inverse appearance='secondary' />
            </Paragraph>
          </div>
        </Styled.FooterColumns>
      </Container>
    </Styled.Footer>
  )
}

export default Footer
