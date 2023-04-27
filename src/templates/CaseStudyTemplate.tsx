import FullPageFeature from '@components/FullPageFeature/FullPageFeature'
import { graphql } from 'gatsby'
import React from 'react'
import type { FC, ReactElement } from 'react'

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
  return (
    <>
      <FullPageFeature title={caseStudy.title} background={caseStudy.featuredImage.node.sourceUrl} />
    </>
  )
}

export default CaseStudyTemplate

export const caseStudyQuery = graphql`
  query($id: String!) {
    allWpCaseStudy(filter: { id: { eq: $id } }) {
      nodes {
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`
