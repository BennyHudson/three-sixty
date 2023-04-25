import FullPageFeature from '@components/FullPageFeature/FullPageFeature'
import { graphql } from 'gatsby'
import React from 'react'
import type { FC, ReactElement } from 'react'

interface CaseStudyTemplateProps {
  data: {
    allWpCaseStudy: {
      nodes: {
        title: string
      }[]
    }
  }
}

const CaseStudyTemplate: FC<CaseStudyTemplateProps> = ({ data }: CaseStudyTemplateProps): ReactElement => {
  const caseStudy = data.allWpCaseStudy.nodes[0]
  return (
    <>
      <FullPageFeature title={caseStudy.title} />
    </>
  )
}

export default CaseStudyTemplate

export const caseStudyQuery = graphql`
  query($id: String!) {
    allWpCaseStudy(filter: { id: { eq: $id } }) {
      nodes {
        title
      }
    }
  }
`
