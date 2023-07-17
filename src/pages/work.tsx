import { type HeadFC, type PageProps, graphql } from 'gatsby'
import React from 'react'
import type { FC, ReactElement } from 'react'

import FullPageFeature from '@components/FullPageFeature'
import Section from '@components/Section/Section'
import SimpleCard from '@components/SimpleCard'
import SimpleGrid from '@components/SimpleGrid'

import type { CaseStudyProps } from '@typings/CaseStudy.types'

interface WorkPageProps {
  data: {
    caseStudies: {
      nodes: CaseStudyProps[]
    }
  }
}

const WorkPage: FC<WorkPageProps> = ({ data }: WorkPageProps): ReactElement => {
  return (
    <>
      <FullPageFeature title='The eCommerce agency for market defining brands' appearance='secondary' showOverlay={false} />
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

export const Head: HeadFC = () => <title>Home Page</title>

export const workQuery = graphql`
  query WorkPage {
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
