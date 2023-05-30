import { graphql } from 'gatsby'
import React from 'react'
import type { FC, ReactElement } from 'react'

import CaseStudyContent from '@components/CaseStudyContent/CaseStudyContent'
import FullPageFeature from '@components/FullPageFeature/FullPageFeature'
import MetaBlock from '@components/MetaBlock/MetaBlock'
import RawHtmlWrapper from '@components/RawHtmlWrapper/RawHtmlWrapper'
import Section from '@components/Section/Section'
import WideColumnBlock from '@components/WideColumnBlock/WideColumnBlock'

interface CaseStudyTemplateProps {
  data: {
    allWpCaseStudy: {
      nodes: {
        title: string
        featuredImage: {
          node: {
            sourceUrl: string
          }
        }
      }[]
    }
  }
}

const CaseStudyTemplate: FC<CaseStudyTemplateProps> = ({ data }: CaseStudyTemplateProps): ReactElement => {
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
          leftColumn={<MetaBlock metaContent={metaContent} />}
          rightColumn={<RawHtmlWrapper content={caseStudy.caseStudyContent.introContent} />}
        />
        <CaseStudyContent content={caseStudy.caseStudyContent.contentBuilder} />
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
  }
`
