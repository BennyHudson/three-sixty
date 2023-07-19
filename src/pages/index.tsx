import { graphql } from 'gatsby'
import type { IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'
import type { FC, ReactElement } from 'react'

import FullPageFeature from '@components/FullPageFeature'
import HeadTags from '@components/HeadTags'
import type { HeadTagsProps } from '@components/HeadTags/HeadTags.types'
import LogoGrid from '@components/LogoGrid/LogoGrid'
import Section from '@components/Section'
import SimpleCard from '@components/SimpleCard'
import SimpleContentBlock from '@components/SimpleContentBlock'
import SimpleGrid from '@components/SimpleGrid'
import Title from '@components/Title'

import { useBreakpoints } from '@hooks/useBreakpoints'

import type { CaseStudyProps } from '@typings/CaseStudy.types'

interface HomePageProps {
  data: {
    wpPage: {
      homepageContent: {
        featureTitle: string
        poster?: {
          sourceUrl: string
        }
        mp4: {
          mediaItemUrl: string
        }
        webm: {
          mediaItemUrl: string
        }
        homeClients: {
          clientName: string
          logo: {
            localFile: IGatsbyImageData
          }
        }[]
        services: {
          title: string
          content: string
          linkText?: string
          linkTo?: string
        }[]
      }
      seo: HeadTagsProps['seo']
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

  console.log(homepageContent.poster?.sourceUrl)

  return (
    <>
      <FullPageFeature
        title={homepageContent.featureTitle}
        backgroundVideo={{
          poster: homepageContent.poster?.sourceUrl,
          mp4: homepageContent.mp4?.mediaItemUrl,
          webm: homepageContent.webm?.mediaItemUrl,
        }}
      />
      <LogoGrid logos={homepageContent.homeClients} carousel={sm} extraMarginBottom feature paddingLevel={1} />
      <Section appearance='secondary'>
        <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={10}>
          {homepageContent.services.map((service, index) => {
            return (
              <SimpleContentBlock
                key={index}
                heading={service.title}
                content={service.content}
                linkText={service.linkText}
                linkTo={service.linkTo}
              />
            )
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

export const Head = ({ data }: HomePageProps) => {
  const { seo } = data.wpPage

  return <HeadTags seo={seo} />
}

export const homepageQuery = graphql`
  query Homepage {
    wpPage(databaseId: { eq: 22 }) {
      homepageContent {
        featureTitle
        mp4 {
          mediaItemUrl
        }
        webm {
          mediaItemUrl
        }
        poster {
          sourceUrl
        }
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
      seo {
        metaDesc
        metaKeywords
        canonical
        opengraphType
        opengraphUrl
        opengraphTitle
        opengraphSiteName
        opengraphPublisher
        opengraphPublishedTime
        opengraphModifiedTime
        opengraphImage {
          sourceUrl
        }
        twitterTitle
        twitterDescription
        title
        twitterImage {
          sourceUrl
        }
        schema {
          articleType
          pageType
          raw
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
