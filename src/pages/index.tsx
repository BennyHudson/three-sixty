import { type HeadFC, type PageProps, graphql } from 'gatsby'
import type { IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'
import type { FC, ReactElement } from 'react'

import FullPageFeature from '@components/FullPageFeature'
import Section from '@components/Section'
import SimpleCard from '@components/SimpleCard'
import SimpleContentBlock from '@components/SimpleContentBlock'
import SimpleGrid from '@components/SimpleGrid'
import Title from '@components/Title'

import type { CaseStudyProps } from '@typings/CaseStudy.types'
import LogoGrid from '@components/LogoGrid/LogoGrid'
import { useBreakpoints } from '@hooks/useBreakpoints'

interface HomePageProps {
  data: {
    wpPage: {
      homepageContent: {
        featureTitle: string
        homeClients: {
          clientName: string
          logo: {
            localFile: IGatsbyImageData
          }
        }[]
        services: {
          title: string
          content: string
        }[]
      }
    }
    caseStudies: {
      nodes: CaseStudyProps[]
    }
  }
}

const HomePage: FC<HomePageProps> = ({ data }: HomePageProps): ReactElement => {
  const { caseStudies } = data
  const { homepageContent } = data.wpPage
  const { sm } = useBreakpoints()

  return (
    <>
      <FullPageFeature title={homepageContent.featureTitle} />
      <LogoGrid logos={homepageContent.homeClients} carousel={sm} extraMarginBottom />
      <Section appearance='secondary'>
        <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={10}>
          {homepageContent.services.map((service, index) => {
            return <SimpleContentBlock key={index} heading={service.title} content={service.content} linkText={service.linkText} linkTo={service.linkTo} />
          })}
        </SimpleGrid>
      </Section>
      <Section appearance='secondary'>
        <Title title='Our Work' link={{ to: '/work', text: 'All Work' }} />
        <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={1} rowSpacing={1}>
          {caseStudies.nodes.map((caseStudy, index) => {
            return (
              <SimpleCard
                key={index}
                title={caseStudy.title}
                uri={caseStudy.uri}
                featuredImage={caseStudy.secondaryFeature.secondaryFeature.localFile}
                secondaryHeading={caseStudy.workTypes.nodes.map((category) => category.name)}
              />
            )
          })}
        </SimpleGrid>
      </Section>
    </>
  )
}

export default HomePage

export const Head: HeadFC = () => <title>Home Page</title>

export const homepageQuery = graphql`
  query Homepage {
    wpPage(databaseId: { eq: 22 }) {
      homepageContent {
        featureTitle
        homeClients {
          clientName
          logo {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 100)
              }
            }
          }
        }
        services {
          content
          title
          linkText
          linkTo
        }
      }
    }
    caseStudies: allWpCaseStudy(limit: 6) {
      nodes {
        title
        uri
        secondaryFeature {
          secondaryFeature {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 810, height: 1170)
              }
            }
          }
        }
        workTypes {
          nodes {
            name
          }
        }
      }
    }
  }
`
