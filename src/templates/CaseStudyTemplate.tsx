import { graphql } from 'gatsby'
import React from 'react'
import type { FC, ReactElement } from 'react'

import CaseStudyContent from '@components/CaseStudyContent'
import FullPageFeature from '@components/FullPageFeature'
import MetaBlock from '@components/MetaBlock'
import RawHtmlWrapper from '@components/RawHtmlWrapper'
import Section from '@components/Section'
import WideColumnBlock from '@components/WideColumnBlock'
import Heading from '@components/Heading'
import SimpleGrid from '@components/SimpleGrid'
import SimpleCard from '@components/SimpleCard'
import { CaseStudyProps } from '@typings/CaseStudy.types'
import Title from '@components/Title/Title'

interface CaseStudyTemplateProps {
  data: {
    allWpCaseStudy: {
      nodes: CaseStudyProps[]
    }
    caseStudies: {
      nodes: CaseStudyProps[]
    }
  }
}

const CaseStudyTemplate: FC<CaseStudyTemplateProps> = ({ data }: CaseStudyTemplateProps): ReactElement => {
  const { caseStudies } = data
  const caseStudy = data.allWpCaseStudy.nodes[0]

  const metaContent = [
    {
      title: 'Services',
      content: caseStudy.tags.nodes.map((tag) => tag.name),
    },
  ]

  return (
    <>
      <FullPageFeature
        title={caseStudy.title}
        subtitle={caseStudy.workTypes.nodes[0].name}
        background={caseStudy.featuredImage.node.sourceUrl}
      />
      <Section appearance='secondary'>
        <WideColumnBlock
          reverse
          leftColumn={<MetaBlock metaContent={metaContent} />}
          rightColumn={<RawHtmlWrapper content={caseStudy.caseStudyContent.introContent} />}
        />
        <CaseStudyContent content={caseStudy.caseStudyContent.contentBuilder} />
      </Section>
      <Section appearance='secondary' paddingLevel={1}>
        <Heading text='Results-driven,' size={4} weight={3} noMargin />
        <Heading text='performance obsessed' size={4} weight={3} />
      </Section>
      <Section appearance='secondary'>
        <SimpleGrid columns={{ sm: 2, md: 4 }} spacing={10} rowSpacing={5}>
          {caseStudy.caseStudyContent.results.map((result, index) => {
            return (
              <div key={index}>
                <Heading size={5} weight={3} noMargin text={result.value} />
                <Heading size={1} noMargin text={result.title} />
              </div>
            )
          })}
        </SimpleGrid>
      </Section>
      <Section appearance='tertiary'>
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

export default CaseStudyTemplate

export const caseStudyQuery = graphql`
  query ($id: String!) {
    allWpCaseStudy(filter: { id: { eq: $id } }) {
      nodes {
        title
        workTypes {
          nodes {
            name
          }
        }
        tags {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
        caseStudyContent {
          introContent
          results {
            title
            value
          }
          contentBuilder {
            ... on WpCaseStudy_Casestudycontent_ContentBuilder_ContentImage {
              content
              fieldGroupName
              heading
              title
              mediaType
              videoId
              videoSource
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 850)
                  }
                }
              }
            }
            ... on WpCaseStudy_Casestudycontent_ContentBuilder_ImageBlock {
              fieldGroupName
              mediaType
              videoId
              videoSource
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }
    }
    caseStudies: allWpCaseStudy(limit: 3) {
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
