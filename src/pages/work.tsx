import { graphql } from 'gatsby'
import React from 'react'
import type { FC, ReactElement } from 'react'

import FullPageFeature from '@components/FullPageFeature'
import HeadTags from '@components/HeadTags'
import type { HeadTagsProps } from '@components/HeadTags/HeadTags.types'
import Section from '@components/Section/Section'
import SimpleCard from '@components/SimpleCard'
import SimpleGrid from '@components/SimpleGrid'

import type { CaseStudyProps } from '@typings/CaseStudy.types'

interface WorkPageProps {
  data: {
    wpPage: {
      pageTitle: {
        title: string
      }
      seo: HeadTagsProps['seo']
    }
    caseStudies: {
      nodes: CaseStudyProps[]
    }
  }
}

const WorkPage: FC<WorkPageProps> = ({ data }: WorkPageProps): ReactElement => {
  const { title } = data.wpPage.pageTitle
  return (
    <>
      <FullPageFeature title={title} appearance='secondary' showOverlay={false} />
      <Section appearance='secondary'>
        <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={1} rowSpacing={1}>
          {data.caseStudies.nodes.map((caseStudy, index) => {
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

export default WorkPage

export const Head = ({ data }: WorkPageProps) => {
  const { seo } = data.wpPage

  return <HeadTags seo={seo} />
}

export const workQuery = graphql`
  query WorkPage {
    wpPage(databaseId: { eq: 16 }) {
      pageTitle {
        title
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
    caseStudies: allWpCaseStudy(limit: 200) {
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
